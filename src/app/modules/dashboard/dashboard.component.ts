import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { Subscription } from 'rxjs';
import { Period, Student } from 'src/app/models/student';
import { PeriodService } from 'src/app/services/period.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  loading = true;
  chartLoading = false;

  availablePeriods: { id: number; description: string; status: boolean }[] = [];
  selectedPeriodId = 0;

  availableModalidades: string[] = [];
  availableTurnos: string[] = [];
  availableZonas: string[] = [];
  selectedModalidad = '';
  selectedTurno = '';
  selectedZona = '';

  totalAlumnos = 0;
  totalZonas = 0;
  totalCursos = 0;

  allStudents: Student[] = [];

  // Raw (untruncated) labels for drill-down click
  zonaLabelsRaw: string[] = [];
  cursoLabelsRaw: string[] = [];
  modalidadLabelsRaw: string[] = [];
  seasonIdsRaw: number[] = [];

  // Student modal
  showStudentModal = false;
  modalTitle = '';
  modalStudents: Student[] = [];

  zonaChart: ChartData<'bar'> = { labels: [], datasets: [] };
  cursoChart: ChartData<'bar'> = { labels: [], datasets: [] };
  modalidadChart: ChartData<'bar'> = { labels: [], datasets: [] };
  seasonApprovalChart: ChartData<'bar'> = { labels: [], datasets: [] };
  baseOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    // Sin animación: con 4 charts renderizando a la vez, la animación por
    // defecto de Chart.js dispara change detection de Angular en cada
    // frame (ng2-charts corre dentro de la zone), lo que hace que la
    // pantalla tarde varios segundos en "asentarse" aunque los datos ya
    // llegaron. Sin animación, el pintado es prácticamente instantáneo.
    animation: false,
    onHover: (event: any, elements: any[]) => {
      if (event.native?.target) {
        (event.native.target as HTMLElement).style.cursor = elements.length ? 'pointer' : 'default';
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: (ctx) => ` ${ctx.parsed.y} alumnos` } },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1, precision: 0 },
        grid: { color: 'rgba(0,0,0,0.05)' },
      },
      x: { grid: { display: false }, ticks: { maxRotation: 35, minRotation: 0 } },
    },
  };

  cursoOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    indexAxis: 'y',
    onHover: (event: any, elements: any[]) => {
      if (event.native?.target) {
        (event.native.target as HTMLElement).style.cursor = elements.length ? 'pointer' : 'default';
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: (ctx) => ` ${ctx.parsed.x} alumnos` } },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: { stepSize: 1, precision: 0 },
        grid: { color: 'rgba(0,0,0,0.05)' },
      },
      y: { grid: { display: false }, ticks: { font: { size: 11 } } },
    },
  };

  seasonApprovalOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    // Sin animación: con 4 charts renderizando a la vez, la animación por
    // defecto de Chart.js dispara change detection de Angular en cada
    // frame (ng2-charts corre dentro de la zone), lo que hace que la
    // pantalla tarde varios segundos en "asentarse" aunque los datos ya
    // llegaron. Sin animación, el pintado es prácticamente instantáneo.
    animation: false,
    onHover: (event: any, elements: any[]) => {
      if (event.native?.target) {
        (event.native.target as HTMLElement).style.cursor = elements.length ? 'pointer' : 'default';
      }
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: { font: { size: 12 }, padding: 16, boxWidth: 14 },
      },
      tooltip: { callbacks: { label: (ctx) => ` ${ctx.parsed.y} alumnos` } },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1, precision: 0 },
        grid: { color: 'rgba(0,0,0,0.05)' },
      },
      x: { grid: { display: false }, ticks: { maxRotation: 40, minRotation: 0, font: { size: 11 } } },
    },
  };

  private studentsSub?: Subscription;

  constructor(
    private studentService: StudentService,
    private periodService: PeriodService,
  ) {}

  ngOnInit(): void {
    this.periodService.getPeriodList().subscribe({
      next: (periods: Period[]) => {
        this.availablePeriods = periods
          // El periodo "Declarativa" no es un ciclo real, no tiene estadísticas
          .filter(p => !p.peri_description?.toLowerCase().includes('declarativa'))
          .map(p => ({ id: p.peri_id, description: p.peri_description, status: p.peri_status }))
          .sort((a, b) => b.description.localeCompare(a.description));
        const active = this.availablePeriods.find(p => p.status);
        this.selectedPeriodId = active?.id ?? (this.availablePeriods[0]?.id ?? 0);
        if (this.selectedPeriodId) {
          this.loadStudents(true);
        } else {
          this.loading = false;
        }
      },
      error: () => { this.loading = false; },
    });
  }

  ngOnDestroy(): void {
    this.studentsSub?.unsubscribe();
  }

  private loadStudents(isInitial = false): void {
    if (!isInitial) this.chartLoading = true;
    // Cancela una carga previa si el usuario cambia de ciclo rápido
    this.studentsSub?.unsubscribe();
    this.studentsSub = this.studentService.getStudentActivePeriodList(this.selectedPeriodId).subscribe({
      next: (students: Student[]) => {
        this.allStudents = students;
        this.extractFilterOptions(students);
        this.applyFilters(isInitial);
      },
      error: () => {
        this.allStudents = [];
        this.applyFilters(isInitial);
      },
    });
  }

  private extractFilterOptions(students: Student[]): void {
    const mods = new Set<string>();
    const turnos = new Set<string>();
    const zonas = new Set<string>();
    students.forEach(s => {
      const mod = s.stud_season?.seas_mode?.mode_name;
      const turno = s.stud_season?.seas_schedule?.sche_description;
      const zona = s.stud_member?.memb_zone?.zone_name;
      if (mod) mods.add(mod);
      if (turno) turnos.add(turno);
      if (zona) zonas.add(zona);
    });
    this.availableModalidades = [...mods].sort();
    this.availableTurnos = [...turnos].sort();
    this.availableZonas = [...zonas].sort();
  }

  private getFilteredStudents(): Student[] {
    return this.allStudents.filter(s => {
      const modOk = !this.selectedModalidad || s.stud_season?.seas_mode?.mode_name === this.selectedModalidad;
      const turnoOk = !this.selectedTurno || s.stud_season?.seas_schedule?.sche_description === this.selectedTurno;
      const zonaOk = !this.selectedZona || s.stud_member?.memb_zone?.zone_name === this.selectedZona;
      return modOk && turnoOk && zonaOk;
    });
  }

  onPeriodChange(): void {
    this.selectedModalidad = '';
    this.selectedTurno = '';
    this.selectedZona = '';
    this.loadStudents();
  }

  onModalidadChange(): void {
    this.selectedTurno = '';
  }

  get filteredTurnos(): string[] {
    return this.availableTurnos.filter(t => t.toLowerCase() !== 'online');
  }

  get selectedPeriodDescription(): string {
    return this.availablePeriods.find(p => p.id === this.selectedPeriodId)?.description ?? '';
  }

  applyFilters(isInitial = false): void {
    if (!isInitial) this.chartLoading = true;
    this.computeAllCharts(this.getFilteredStudents());
    this.loading = false;
    this.chartLoading = false;
  }

  onChartClick(event: { event?: any; active?: any[] }, chartType: 'zona' | 'curso' | 'modalidad' | 'season'): void {
    if (!event.active?.length) return;
    const index: number = event.active[0].index;
    const datasetIndex: number = event.active[0].datasetIndex ?? 0;
    const filtered = this.getFilteredStudents();

    switch (chartType) {
      case 'zona': {
        const zona = this.zonaLabelsRaw[index];
        this.modalTitle = zona;
        this.modalStudents = filtered.filter(s => (s.stud_member?.memb_zone?.zone_name ?? 'Sin zona') === zona);
        break;
      }
      case 'curso': {
        const curso = this.cursoLabelsRaw[index];
        this.modalTitle = curso;
        this.modalStudents = filtered.filter(s => (s.stud_season?.seas_course?.cour_description ?? 'Sin curso') === curso);
        break;
      }
      case 'modalidad': {
        const mod = this.modalidadLabelsRaw[index];
        this.modalTitle = mod;
        this.modalStudents = filtered.filter(s => (s.stud_season?.seas_mode?.mode_name ?? 'Sin modalidad') === mod);
        break;
      }
      case 'season': {
        const seasonId = this.seasonIdsRaw[index];
        const seasonLabel = (this.seasonApprovalChart.labels as string[])[index] ?? '';
        const datasetLabel = (this.seasonApprovalChart.datasets[datasetIndex] as any).label as string;
        this.modalTitle = `${seasonLabel} — ${datasetLabel}`;
        let result = filtered.filter(s => s.stud_season?.seas_id === seasonId);
        if (datasetIndex === 0) {
          result = result.filter(s => (s.seas_final as any) != null && (s.seas_final as number) > 13);
        } else if (datasetIndex === 1) {
          result = result.filter(s => (s.seas_final as any) != null && (s.seas_final as number) <= 13);
        } else {
          result = result.filter(s => (s.seas_final as any) == null);
        }
        this.modalStudents = result;
        break;
      }
    }

    this.showStudentModal = true;
  }

  closeStudentModal(): void {
    this.showStudentModal = false;
  }

  getNotaBadgeClass(nota: number | null): string {
    if (nota == null) return 'badge-nc';
    return nota > 13 ? 'badge-aprobado' : 'badge-desaprobado';
  }

  private computeAllCharts(students: Student[]): void {
    this.totalAlumnos = students.length;

    // Zona — orden ascendente por nombre
    const zonaMap = new Map<string, number>();
    students.forEach(s => {
      const zona = s.stud_member?.memb_zone?.zone_name ?? 'Sin zona';
      zonaMap.set(zona, (zonaMap.get(zona) ?? 0) + 1);
    });
    const sortedZonas = [...zonaMap.entries()].sort((a, b) => a[0].localeCompare(b[0]));
    this.totalZonas = zonaMap.size;
    this.zonaLabelsRaw = sortedZonas.map(([zona]) => zona);
    this.zonaChart = {
      labels: this.zonaLabelsRaw,
      datasets: [{
        label: 'Alumnos',
        data: sortedZonas.map(([, count]) => count),
        backgroundColor: 'rgba(37, 99, 235, 0.8)',
        borderRadius: 6,
        borderSkipped: false,
      }],
    };

    // Curso — orden por nivel: 4, 1, 2, 3
    const LEVEL_ORDER = [4, 1, 2, 3];
    const cursoMap = new Map<string, { count: number; level: number }>();
    students.forEach(s => {
      const curso = s.stud_season?.seas_course?.cour_description ?? 'Sin curso';
      const level = s.stud_season?.seas_course?.cour_level ?? 0;
      if (!cursoMap.has(curso)) cursoMap.set(curso, { count: 0, level });
      cursoMap.get(curso)!.count++;
    });
    const sortedCursos = [...cursoMap.entries()].sort((a, b) => {
      const ai = LEVEL_ORDER.indexOf(a[1].level);
      const bi = LEVEL_ORDER.indexOf(b[1].level);
      return (ai === -1 ? LEVEL_ORDER.length : ai) - (bi === -1 ? LEVEL_ORDER.length : bi);
    });
    this.totalCursos = cursoMap.size;
    this.cursoLabelsRaw = sortedCursos.map(([curso]) => curso);
    this.cursoChart = {
      labels: sortedCursos.map(([curso]) => this.truncate(curso)),
      datasets: [{
        label: 'Alumnos',
        data: sortedCursos.map(([, { count }]) => count),
        backgroundColor: 'rgba(124, 58, 237, 0.8)',
        borderRadius: 6,
        borderSkipped: false,
      }],
    };

    // Modalidad
    const modalMap = new Map<string, number>();
    students.forEach(s => {
      const mod = s.stud_season?.seas_mode?.mode_name ?? 'Sin modalidad';
      modalMap.set(mod, (modalMap.get(mod) ?? 0) + 1);
    });
    const modalColors = ['rgba(37, 99, 235, 0.8)', 'rgba(5, 150, 105, 0.8)', 'rgba(245, 158, 11, 0.8)'];
    this.modalidadLabelsRaw = [...modalMap.keys()];
    this.modalidadChart = {
      labels: this.modalidadLabelsRaw,
      datasets: [{
        label: 'Alumnos',
        data: [...modalMap.values()],
        backgroundColor: this.modalidadLabelsRaw.map((_, i) => modalColors[i] ?? 'rgba(156, 163, 175, 0.8)'),
        borderRadius: 6,
        borderSkipped: false,
      }],
    };

    // Season approval
    this.buildSeasonApprovalChart(students);
  }

  private buildSeasonApprovalChart(students: Student[]): void {
    const map = new Map<number, { label: string; aprobados: number; desaprobados: number; noCalificados: number }>();
    students.forEach(s => {
      const seasonId = s.stud_season?.seas_id;
      if (seasonId == null) return;
      if (!map.has(seasonId)) {
        const curso = this.truncate(s.stud_season?.seas_course?.cour_description ?? `Season ${seasonId}`, 22);
        map.set(seasonId, { label: curso, aprobados: 0, desaprobados: 0, noCalificados: 0 });
      }
      const entry = map.get(seasonId)!;
      const final = (s.seas_final as number | null);
      if (final == null) entry.noCalificados++;
      else if (final > 13) entry.aprobados++;
      else entry.desaprobados++;
    });

    this.seasonIdsRaw = [...map.keys()];
    const seasons = [...map.values()];
    this.seasonApprovalChart = {
      labels: seasons.map(s => s.label),
      datasets: [
        {
          label: 'Aprobados',
          data: seasons.map(s => s.aprobados),
          backgroundColor: 'rgba(5, 150, 105, 0.8)',
          borderRadius: 5,
          borderSkipped: false,
        },
        {
          label: 'Desaprobados',
          data: seasons.map(s => s.desaprobados),
          backgroundColor: 'rgba(220, 38, 38, 0.8)',
          borderRadius: 5,
          borderSkipped: false,
        },
        {
          label: 'No calificados',
          data: seasons.map(s => s.noCalificados),
          backgroundColor: 'rgba(156, 163, 175, 0.8)',
          borderRadius: 5,
          borderSkipped: false,
        },
      ],
    };
  }

  private truncate(s: string, max = 22): string {
    return s.length > max ? s.slice(0, max) + '…' : s;
  }
}
