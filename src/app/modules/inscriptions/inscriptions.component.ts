import { Component } from '@angular/core';
import { Course, VoucherCreate } from '../../models/student';
import { Season } from '../../models/student';
import { SeasonService } from '../../services/season.service';
import { MatPaginator } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from 'src/app/services/student.service';
import { MatDialog } from '@angular/material/dialog';
import { InscriptionsDialogComponent } from '../components-dialogs/inscriptions-dialog/inscriptions-dialog.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

interface CartItem {
  course: any;
  modality: string;
  shift: any;
  teacher: any;
  season: any;
}

@Component({
  selector: 'app-inscription',
  templateUrl: './inscriptions.component.html',
  styleUrls: ['./inscriptions.component.css'],
  animations: [
    trigger('stepTransition', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateX(-50px)' })),
      ]),
    ]),
  ],
})

export class InscriptionsComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  courses: Course[] = [];
  seasons: Season[] = [];
  seasonsFilter: Season[] = [];

  displayedColumns: string[] = ['course', 'mode', 'level', 'teacher', 'shift', 'actions'];

  // Desktop/Mobile filter
  searchTerm: string = '';
  categorias: string[] = ['All', 'Nivel 1', 'Nivel 2', 'Nivel 3'];
  selectedCategory: string = 'All';

  selectedCategories: Set<string> = new Set<string>(['All']);

  // Mobile stepper state
  currentStep: number = 1;

  // Selection state
  selectedCourse: any = null;
  selectedModality: string = '';
  selectedShift: any = null;
  selectedTeacher: any = null;

  loading: boolean = false;
  loadingButton: boolean = false;

  // Available teachers (will be filtered based on course/shift)
  availableTeachers: any[] = [];

  // Cart state
  cart: CartItem[] = [];

  // Voucher upload state (Step 6)
  voucherFile: File | null = null;
  voucherPreview: string | null = null;
  operationCode: string = '';

  dataSource = new MatTableDataSource<Season>();

  constructor(
    private seasonService: SeasonService,
    private studentService: StudentService,
    private dialog: MatDialog,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getSeasonData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getUniqueCourses(seasons: any[]): any[] {
    const uniqueCoursesMap = new Map();

    seasons.forEach(season => {
      const courseName = season.seas_course.cour_description;

      if (!uniqueCoursesMap.has(courseName)) {
        uniqueCoursesMap.set(courseName, {
          ...season,
          availableOptions: [season]
        });
      } else {
        const existingCourse = uniqueCoursesMap.get(courseName);
        existingCourse.availableOptions.push(season);
      }
    });

    return Array.from(uniqueCoursesMap.values());
  }

  getSeasonData() {
    let student = localStorage.getItem('userId');
    student = student ?? '1';
    this.loading = true;
    this.seasonService.getSeasonList(parseInt(student)).subscribe({
      next: (data) => {
        this.loading = false;
        const activeSeasons = data.filter((season: Season) => season.seas_status === true);

        this.seasons = activeSeasons;
        this.seasonsFilter = this.getUniqueCourses(data);
        this.filterSeasons();
      },
      error: (error) => {
        this.loading = false;
        console.error('Error al obtener los datos:', error);
      }
    });
  }

  filterSeasons(): void {
    let filteredPC = [...this.seasons];

    // Filtrar por categoría
    if (this.selectedCategory && this.selectedCategory !== 'All') {
      filteredPC = filteredPC.filter(season => {
        const level = this.getLevelText(season.seas_course.cour_level);
        return level === this.selectedCategory;
      });
    }

    // Filtrar por búsqueda
    if (this.searchTerm.trim()) {
      const searchLower = this.searchTerm.toLowerCase();
      filteredPC = filteredPC.filter(season => {
        const courseName = season.seas_course.cour_description.toLowerCase();
        const teacherName = (
          season.seas_teacher.memb_name + ' ' +
          season.seas_teacher.memb_surname
        ).toLowerCase();

        return courseName.includes(searchLower) || teacherName.includes(searchLower);
      });
    }

    this.dataSource.data = filteredPC;

    this.updateMobileFilter();
  }

  updateMobileFilter(): void {
    let filteredMobile = this.getUniqueCourses(this.seasons);

    // Filtrar por categoría
    if (this.selectedCategory && this.selectedCategory !== 'All') {
      filteredMobile = filteredMobile.filter(season => {
        const level = this.getLevelText(season.seas_course.cour_level);
        return level === this.selectedCategory;
      });
    }

    // Filtrar por búsqueda
    if (this.searchTerm.trim()) {
      const searchLower = this.searchTerm.toLowerCase();
      filteredMobile = filteredMobile.filter(season => {
        const courseName = season.seas_course.cour_description.toLowerCase();
        const teacherName = (
          season.seas_teacher.memb_name + ' ' +
          season.seas_teacher.memb_surname
        ).toLowerCase();

        return courseName.includes(searchLower) || teacherName.includes(searchLower);
      });
    }

    this.seasonsFilter = filteredMobile;
  }

  filtrarPorCategoria(categoria: string) {
    this.selectedCategory = categoria;
    this.filterSeasons();
  }

  getBadgeClass(element: any): string {
    return element?.seas_course?.cour_type === 'TRONCAL' ? 'status-truncal' : 'status-electivo';
  }

  getBadgeText(element: any): string {
    return element?.seas_course?.cour_type === 'TRONCAL' ? 'Troncal' : 'Electivo';
  }

  getAvailableModalities(): string[] {
    if (!this.selectedCourse?.availableOptions) return [];

    const modalities = this.selectedCourse.availableOptions.map(
      (option: any) => option.seas_mode.mode_name
    ) as string[];

    return [...new Set(modalities)];
  }

  getModalityIcon(modality: string): string {
    switch (modality) {
      case 'Presencial':
        return 'assets/inscripciones-presencial.png';
      case 'Virtual':
        return 'assets/inscripciones-virtual.png';
      case 'Online':
        return 'assets/inscripciones-online.png';
      default:
        return 'assets/inscripciones-presencial.png';
    }
  }

  getModalityDescription(modality: string): string {
    switch (modality) {
      case 'Presencial':
        return 'Llevar clases en la Iglesia Alianza Cristiana y Misionera CNC';
      case 'Virtual':
        return 'Conectarse a las clases mediante Zoom.';
      case 'Online':
        return 'Clases en línea a tu propio ritmo.';
      default:
        return '';
    }
  }

  getAvailableShifts(): any[] {
    if (!this.selectedCourse?.availableOptions || !this.selectedModality) return [];

    const filteredOptions = this.selectedCourse.availableOptions.filter(
      (option: any) => option.seas_mode.mode_name === this.selectedModality
    );

    const uniqueShiftsMap = new Map();

    filteredOptions.forEach((option: any) => {
      const shiftTime = option.seas_schedule.sche_starttime;

      if (!uniqueShiftsMap.has(shiftTime)) {
        uniqueShiftsMap.set(shiftTime, {
          ...option,
          teacherOptions: [option]
        });
      } else {
        const existingShift = uniqueShiftsMap.get(shiftTime);
        existingShift.teacherOptions.push(option);
      }
    });

    // Convertir a array y ORDENAR por hora de inicio
    const shiftsArray = Array.from(uniqueShiftsMap.values());

    return shiftsArray.sort((a, b) => {
      const timeA = a.seas_schedule.sche_starttime;
      const timeB = b.seas_schedule.sche_starttime;
      return timeA.localeCompare(timeB);
    });
  }

  getShiftLabel(index: number): string {
    const labels = ['Primer turno', 'Segundo turno', 'Online'];
    return labels[index];
  }

  inscribirme(element: Season) {
    const dialogRef = this.dialog.open(InscriptionsDialogComponent, {
      width: '400px',
      maxWidth: '95vw',
      data: { season: element }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getSeasonData();
      }
    });
  }

  // ========== STEPPER NAVIGATION ==========

  nextStep(): void {
    if (this.currentStep < 6) {
      this.currentStep++;
      if (this.currentStep === 4) {
        this.loadAvailableTeachers();
      }
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      if (this.currentStep === 1) {
        this.selectedCourse = null;
        this.selectedModality = '';
        this.selectedShift = null;
        this.selectedTeacher = null;
        this.availableTeachers = [];
      }
    }
  }

  handleBackButton(): void {
    if (this.currentStep === 1) {
      this.router.navigate(['/menu']);
    } else if (this.currentStep === 5) {
      this.currentStep = 1;
    } else {
      this.previousStep();
    }
  }

  getStepTitle(): string {
    switch (this.currentStep) {
      case 1:
        return 'Inscripciones';
      case 2:
        return 'Modalidad';
      case 3:
        return 'Turno';
      case 4:
        return 'Profesor';
      case 5:
        return 'Resumen';
      case 6:
        return 'Pago';
      default:
        return 'Inscripciones';
    }
  }

  // ========== CART METHODS ==========

  isInCart(course: any): boolean {
    return this.cart.some(
      item => item.course.seas_course.cour_description === course.seas_course.cour_description
    );
  }

  addToCart(): void {
    const selectedSeason = this.selectedShift.teacherOptions?.find(
      (option: any) => option.seas_teacher.memb_id === this.selectedTeacher.memb_id
    );

    if (selectedSeason) {
      this.cart.push({
        course: this.selectedCourse,
        modality: this.selectedModality,
        shift: this.selectedShift,
        teacher: this.selectedTeacher,
        season: selectedSeason
      });

      this.snackBar.open(
        `"${this.selectedCourse.seas_course.cour_description}" agregado a tu lista`,
        'OK',
        { duration: 2000, horizontalPosition: 'center', verticalPosition: 'top' }
      );
    }

    this.selectedCourse = null;
    this.selectedModality = '';
    this.selectedShift = null;
    this.selectedTeacher = null;
    this.availableTeachers = [];
    this.currentStep = 1;
  }

  removeFromCart(index: number): void {
    this.cart.splice(index, 1);
    if (this.cart.length === 0) {
      this.currentStep = 1;
    }
  }

  confirmRemoveFromCart(index: number): void {
    const item = this.cart[index];
    const courseName = item?.course?.seas_course?.cour_description ?? 'este curso';
    if (window.confirm(`¿Eliminar "${courseName}" de tu lista?`)) {
      this.removeFromCart(index);
    }
  }

  goToCheckout(): void {
    this.currentStep = 5;
  }

  // ========== FILE UPLOAD METHODS ==========

  onFileSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        this.snackBar.open('El archivo es muy grande. Máximo 5MB.', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        return;
      }

      // Validate file type
      if (!file.type.match(/image\/(jpg|jpeg|png)/)) {
        this.snackBar.open('Solo se permiten imágenes JPG o PNG.', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        return;
      }

      this.voucherFile = file;

      // Generate preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.voucherPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  selectCourse(course: any): void {
    this.selectedCourse = course;
    this.nextStep();
  }

  selectModality(modality: string): void {
    this.selectedModality = modality;
  }

  selectShift(shift: any): void {
    this.selectedShift = shift;
  }

  selectTeacher(teacher: any): void {
    this.selectedTeacher = teacher;
  }

  isShiftSelected(shift: any): boolean {
    if (!this.selectedShift) return false;
    return this.selectedShift.seas_schedule.sche_starttime === shift.seas_schedule.sche_starttime;
  }

  // ========== HELPER METHODS ==========

  getLevelText(level: number): string {
    if (level === 0 || level === 4) return 'Básico';
    return `Nivel ${level}`;
  }

  getShiftTime(): string {
    if (!this.selectedShift?.seas_schedule) return 'Online';

    if (this.selectedShift.seas_schedule.sche_description === 'Primer Turno') {
      return '19:00';
    } else if (this.selectedShift.seas_schedule.sche_description === 'Segundo Turno') {
      return '20:30';
    } else {
      return 'Online';
    }
  }

  loadAvailableTeachers(): void {
    if (!this.selectedShift?.teacherOptions) {
      this.availableTeachers = [];
      return;
    }

    // Extraer profesores únicos del turno seleccionado
    const teachersMap = new Map();

    this.selectedShift.teacherOptions.forEach((option: any) => {
      const teacherId = option.seas_teacher.memb_id;
      if (!teachersMap.has(teacherId)) {
        teachersMap.set(teacherId, option.seas_teacher);
      }
    });

    this.availableTeachers = Array.from(teachersMap.values());
  }

  confirmInscription(): void {
    if (this.loadingButton || this.cart.length === 0) return;

    this.loadingButton = true;

    const studId = localStorage.getItem('userId') ?? '1';

    const inscriptionRequests = this.cart.map(item =>
      this.studentService.inscribirStudent({ stud_id: studId, seas_id: item.season.seas_id })
    );

    forkJoin(inscriptionRequests).subscribe({
      next: () => {
        const memberId = parseInt(studId);
        const periodId = this.cart[0].season.seas_period?.peri_id;
        this.uploadVoucher(memberId, periodId);
      },
      error: (error) => {
        this.loadingButton = false;
        const errorMessage = error.error?.message || 'Error al procesar las inscripciones. Intenta de nuevo.';
        this.snackBar.open(errorMessage, 'Cerrar', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    });
  }

  uploadVoucher(memberId: number, periodId: number): void {
    if (!this.voucherFile) {
      this.loadingButton = false;
      this.snackBar.open('No se ha seleccionado ningún voucher', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return;
    }

    // Convertir imagen a base64
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result as string;

      const voucherData: VoucherCreate = {
        vouc_operation_number: this.operationCode,
        vouc_image: base64String,
        vouc_member: memberId,
        vouc_period: periodId
      };

      // Subir voucher
      this.studentService.uploadVoucher(voucherData).subscribe({
        next: () => {
          this.loadingButton = false;

          this.snackBar.open('¡Inscripción y pago registrados exitosamente!', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });

          // Resetear el stepper y redirigir
          setTimeout(() => {
            this.resetStepper();
            this.router.navigate(['/menu']);
          }, 1500);
        },
        error: (error) => {
          this.loadingButton = false;
          console.error('Error al subir el voucher:', error);

          this.snackBar.open(
            'Inscripción creada, pero hubo un error al subir el voucher. Contacta al administrador.',
            'Cerrar',
            {
              duration: 5000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            }
          );

          setTimeout(() => {
            this.resetStepper();
            this.router.navigate(['/menu']);
          }, 3000);
        }
      });
    };

    reader.onerror = () => {
      this.loadingButton = false;
      this.snackBar.open('Error al leer el archivo', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    };

    reader.readAsDataURL(this.voucherFile);
  }

  cancelInscription(): void {
    this.resetStepper();
  }

  resetStepper(): void {
    this.currentStep = 1;
    this.selectedCourse = null;
    this.selectedModality = '';
    this.selectedShift = null;
    this.selectedTeacher = null;
    this.availableTeachers = [];
    this.cart = [];
    this.voucherFile = null;
    this.voucherPreview = null;
    this.operationCode = '';
  }
}