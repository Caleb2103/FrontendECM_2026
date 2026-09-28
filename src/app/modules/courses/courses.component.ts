import { Component, QueryList, ViewChildren } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/models/student';
import { Pipe, PipeTransform } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { forkJoin, Observable } from 'rxjs';

@Pipe({
  name: 'values',
})
export class ValuesPipe implements PipeTransform {
  transform(value: any): any[] {
    return Object.values(value);
  }
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  @ViewChildren(MatPaginator) paginators!: QueryList<MatPaginator>;
  dataSource = new MatTableDataSource<Student>();
  groupedDataArray: any[] = [];

  isEditing = false;
  loading: boolean = false;

  selectedGroup: any = null;
  selectedSession: number = 1;
  calendarPage: number = 0;
  scheduleGroupsArray: any[] = [];
  activeDetailTab: 'asistencia' | 'promedio' = 'asistencia';

  displayedColumns: string[] = [
    'name',
    'session_1',
    'session_2',
    'session_3',
    'session_4',
    'session_5',
    'session_6',
    'session_7',
    'session_8',
    'session_9',
    'session_10',
    'session_11',
    'session_12',
    'promedio',
  ];

  constructor(
    public dialog: MatDialog,
    private studentService: StudentService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getTeacherData();
  }

  ngAfterViewInit() {
    this.paginators.forEach((paginator, index) => {
      this.groupedDataArray[index].dataSource.paginator = paginator;
    });
  }

  getTeacherData() {
    this.loading = true;
    let teacher = localStorage.getItem('userId');
    teacher = teacher ?? '1';

    this.studentService.getTeacherList(parseInt(teacher)).subscribe({
      next: (data) => {
        this.loading = false;
        const activeData = data.filter(s => s.stud_season.seas_period.peri_status === true);
        this.groupedDataArray = this.groupDataByCourse(activeData).map(group => ({
          course: group.course,
          students: group.students,
          dataSource: new MatTableDataSource(group.students)
        }));
        this.buildScheduleGroups();
        setTimeout(() => {
          this.paginators.forEach((paginator, index) => {
            this.groupedDataArray[index].dataSource.paginator = paginator;
          });
        });
      },
      error: (error) => {
        console.error('Error al obtener los datos:', error);
      }
    });
  }

  groupDataByCourse(data: any[]): any[] {
    const groupedData = data.reduce((acc, student) => {
      const courseId = student.stud_season.seas_course.cour_id;

      if (!acc[courseId]) {
        acc[courseId] = {
          course: student.stud_season.seas_course,
          teacher: student.stud_season.seas_teacher,
          students: [],
        };
      }

      acc[courseId].students.push(student);
      return acc;
    }, {});

    return Object.values(groupedData);
  }

  // ── Mobile list view ─────────────────────────────────────────

  buildScheduleGroups(): void {
    const map = new Map<number, { schedule: any; courses: any[] }>();
    for (const group of this.groupedDataArray) {
      if (!group.students.length) continue;
      const schedule = group.students[0].stud_season.seas_schedule;
      if (!map.has(schedule.sche_id)) {
        map.set(schedule.sche_id, { schedule, courses: [] });
      }
      map.get(schedule.sche_id)!.courses.push(group);
    }
    this.scheduleGroupsArray = Array.from(map.values())
      .sort((a, b) => a.schedule.sche_starttime.localeCompare(b.schedule.sche_starttime));
  }

  getCourseId(group: any): string {
    if (!group.students.length) return '';
    const s = group.students[0].stud_season;
    return `Nivel ${group.course.cour_level} - ${s.seas_id}.${s.seas_period.peri_description}`;
  }

  getBadgeClass(group: any): string {
    return (group.course.cour_type === 'TRONCAL') ? 'troncal' : 'electivo';
  }

  getModeIcon(group: any): string {
    const mode = group.students[0]?.stud_season?.seas_mode?.mode_name ?? '';
    if (mode === 'Virtual') return 'bx-laptop';
    if (mode === 'Presencial') return 'bx-church';
    if (mode === 'Online') return 'bx-video';
    return 'bx-buildings';
  }

  getMode(group: any): string {
    return group.students[0]?.stud_season?.seas_mode?.mode_name ?? '';
  }

  getAttendancePercentage(group: any): number {
    if (!group.students.length) return 0;
    const keys = ['seas_ses01','seas_ses02','seas_ses03','seas_ses04','seas_ses05','seas_ses06',
                   'seas_ses07','seas_ses08','seas_ses09','seas_ses10','seas_ses11','seas_ses12'];
    let total = 0, attended = 0;
    for (const student of group.students) {
      for (const k of keys) { total++; if (student[k]) attended++; }
    }
    return total > 0 ? Math.round((attended / total) * 100) : 0;
  }

  getCurrentSession(group: any): number {
    if (!group.students.length) return 1;
    const now = new Date();
    for (let i = 11; i >= 0; i--) {
      const date = this.getSessionDate(i, group);
      if (date && date <= now) return i + 1;
    }
    return 1;
  }

  // ── Mobile detail view ───────────────────────────────────────

  selectCourse(group: any): void {
    this.selectedGroup = group;
    this.activeDetailTab = 'asistencia';
    this.selectedSession = this.getCurrentSession(group);
    const base = this.getBaseMonth();
    const curDate = this.getSessionDate(this.selectedSession - 1, group);
    if (base && curDate) {
      this.calendarPage = (curDate.getFullYear() - base.year) * 12 + (curDate.getMonth() - base.month);
    } else {
      this.calendarPage = 0;
    }
    this.initSessionDefaults(this.selectedSession);
  }

  onSessionSelect(index: number): void {
    this.selectedSession = index;
    this.initSessionDefaults(index);
  }

  initSessionDefaults(sessionIndex: number): void {
    if (!this.selectedGroup) return;
    const field = this.getSessionField(sessionIndex);
    for (const student of this.selectedGroup.students) {
      if (student[field] === null || student[field] === undefined) {
        student[field] = true;
      }
    }
  }

  backToList(): void {
    this.selectedGroup = null;
    this.activeDetailTab = 'asistencia';
  }

  confirmPromedio(): void {
    if (!this.selectedGroup) return;
    const requests: Observable<any>[] = this.selectedGroup.students.map((student: any) =>
      this.studentService.updateStudent(student.stud_id, {
        stud_member: student.stud_member.memb_id,
        stud_season: student.stud_season.seas_id,
        seas_final: student.seas_final,
      })
    );
    forkJoin(requests).subscribe({
      next: () => this.snackBar.open('Promedio guardado correctamente', 'Cerrar', { duration: 3000 }),
      error: (e) => { console.error('Error al guardar promedio:', e); this.snackBar.open('Error al guardar promedio', 'Cerrar', { duration: 3000 }); },
    });
  }

  getSessionDate(sessionIndex: number, group: any): Date | null {
    if (!group?.students?.length) return null;
    const s = group.students[0].stud_season;
    const periStart = new Date(s.seas_period.peri_start + 'T00:00:00');
    const scheDay = s.seas_schedule.sche_day - 1;
    const daysUntil = (scheDay - periStart.getDay() + 7) % 7;
    const first = new Date(periStart);
    first.setDate(first.getDate() + daysUntil);
    const date = new Date(first);
    date.setDate(date.getDate() + sessionIndex * 7);
    return date;
  }

  private getBaseMonth(): { year: number; month: number } | null {
    const first = this.getSessionDate(0, this.selectedGroup);
    if (!first) return null;
    return { year: first.getFullYear(), month: first.getMonth() };
  }

  private getTargetDate(): Date | null {
    const base = this.getBaseMonth();
    if (!base) return null;
    return new Date(base.year, base.month + this.calendarPage, 1);
  }

  getCalendarSessions(): { index: number; day: number }[] {
    const target = this.getTargetDate();
    if (!target) return [];
    const result: { index: number; day: number }[] = [];
    for (let i = 0; i < 12; i++) {
      const date = this.getSessionDate(i, this.selectedGroup);
      if (date && date.getFullYear() === target.getFullYear() && date.getMonth() === target.getMonth()) {
        result.push({ index: i + 1, day: date.getDate() });
      }
    }
    return result;
  }

  getCalendarMonth(): string {
    const target = this.getTargetDate();
    if (!target) return '';
    return target.toLocaleString('es-ES', { month: 'long', year: 'numeric' });
  }

  prevCalPage(): void { if (this.calendarPage > 0) this.calendarPage--; }
  nextCalPage(): void { if (this.calendarPage < this.maxCalPage()) this.calendarPage++; }
  maxCalPage(): number {
    const base = this.getBaseMonth();
    if (!base) return 0;
    let max = 0;
    for (let i = 11; i >= 0; i--) {
      const date = this.getSessionDate(i, this.selectedGroup);
      if (date) {
        const diff = (date.getFullYear() - base.year) * 12 + (date.getMonth() - base.month);
        if (diff > max) max = diff;
        break;
      }
    }
    return max;
  }

  getSessionField(n: number): string {
    return `seas_ses${n.toString().padStart(2, '0')}`;
  }

  confirmAttendance(): void {
    if (!this.selectedGroup) return;
    const requests: Observable<any>[] = this.selectedGroup.students.map((student: any) =>
      this.studentService.updateStudent(student.stud_id, {
        stud_member: student.stud_member.memb_id,
        stud_season: student.stud_season.seas_id,
        seas_ses01: student.seas_ses01 ?? true,
        seas_ses02: student.seas_ses02 ?? true,
        seas_ses03: student.seas_ses03 ?? true,
        seas_ses04: student.seas_ses04 ?? true,
        seas_ses05: student.seas_ses05 ?? true,
        seas_ses06: student.seas_ses06 ?? true,
        seas_ses07: student.seas_ses07 ?? true,
        seas_ses08: student.seas_ses08 ?? true,
        seas_ses09: student.seas_ses09 ?? true,
        seas_ses10: student.seas_ses10 ?? true,
        seas_ses11: student.seas_ses11 ?? true,
        seas_ses12: student.seas_ses12 ?? true,
      })
    );
    forkJoin(requests).subscribe({
      next: () => this.snackBar.open('Asistencia guardada correctamente', 'Cerrar', { duration: 3000 }),
      error: (e) => { console.error('Error al guardar asistencia:', e); this.snackBar.open('Error al guardar asistencia', 'Cerrar', { duration: 3000 }); },
    });
  }

  save(): void {
    const requests: Observable<any>[] = this.groupedDataArray.flatMap(group =>
      group.students.map((student: any) =>
        this.studentService.updateStudent(student.stud_id, {
          stud_member: student.stud_member.memb_id,
          stud_season: student.stud_season.seas_id,
          seas_final: student.seas_final !== null && student.seas_final !== undefined ? Number(student.seas_final) : null,
          seas_ses01: student.seas_ses01 ?? true,
          seas_ses02: student.seas_ses02 ?? true,
          seas_ses03: student.seas_ses03 ?? true,
          seas_ses04: student.seas_ses04 ?? true,
          seas_ses05: student.seas_ses05 ?? true,
          seas_ses06: student.seas_ses06 ?? true,
          seas_ses07: student.seas_ses07 ?? true,
          seas_ses08: student.seas_ses08 ?? true,
          seas_ses09: student.seas_ses09 ?? true,
          seas_ses10: student.seas_ses10 ?? true,
          seas_ses11: student.seas_ses11 ?? true,
          seas_ses12: student.seas_ses12 ?? true,
        })
      )
    );
    forkJoin(requests).subscribe({
      next: () => this.snackBar.open('Guardado correctamente', 'Cerrar', { duration: 3000 }),
      error: (e) => { console.error('Error al guardar:', e); this.snackBar.open('Error al guardar', 'Cerrar', { duration: 3000 }); },
    });
  }
}
