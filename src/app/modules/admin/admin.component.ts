import { Component } from '@angular/core';
import { Course, Schedule, Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { SeasonService } from 'src/app/services/season.service';
import { CourseStudentsDialogComponent } from '../components-dialogs/course-students-dialog/course-students-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as XLSX from 'xlsx';

export interface GroupedStudents {
  mode_name: string;
  mode_id: number;
  courses: CourseGroup[];
}

export interface CourseGroup {
  key: string;
  schedule: Schedule;
  course: Course;
  seas_id: number;
  seas_status: boolean;
  students: Student[];
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent {
  activeAccordion: string | null = null;
  error: string | null = null;

  students: Student[] = [];
  groupedStudents: GroupedStudents[] = [];

  loading: boolean = false;
  // seas_id de las secciones cuyo estado se está guardando
  updatingStatus = new Set<number>();

  constructor (
    private studentService: StudentService,
    private seasonService: SeasonService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  toggleAccordion(section: string): void {
    this.activeAccordion = this.activeAccordion === section ? null : section;
  }

  getData(): void {
    this.loading = true;
    this.studentService.getStudentActivePeriodList().subscribe({
      next: (data) => {
        this.students = data;
        this.groupStudentsByMode();
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Error al cargar los estudiantes';
        this.loading = false;
        console.error('Error:', error);
      }
    });
  }

  groupStudentsByMode(): void {
    const modeMap = new Map<number, GroupedStudents>();

    this.students.forEach(student => {
      const mode = student.stud_season.seas_mode;
      const schedule = student.stud_season.seas_schedule;
      const course = student.stud_season.seas_course;

      if (!modeMap.has(mode.mode_id)) {
        modeMap.set(mode.mode_id, {
          mode_name: mode.mode_name,
          mode_id: mode.mode_id,
          courses: []
        });
      }

      const modeGroup = modeMap.get(mode.mode_id)!;
      let turno = '';
      let courseKey = `${turno} - ${course.cour_description}`;

      if (schedule.sche_description === 'Primer Turno') {
        turno = '1T';
        courseKey = `${turno} - ${course.cour_description}`;
      } else if (schedule.sche_description === 'Segundo Turno') {
        turno = '2T';
        courseKey = `${turno} - ${course.cour_description}`;
      } else if (schedule.sche_description === 'Online') {
        turno = '';
        courseKey = `${course.cour_description}`;
      }

      let courseGroup = modeGroup.courses.find(c => c.key === courseKey);

      if (!courseGroup) {
        courseGroup = {
          key: courseKey,
          schedule: schedule,
          course: course,
          seas_id: student.stud_season.seas_id,
          seas_status: student.stud_season.seas_status,
          students: []
        };
        modeGroup.courses.push(courseGroup);
      }

      courseGroup.students.push(student);
    });

    this.groupedStudents = Array.from(modeMap.values());
  }

  toggleSeasonStatus(courseGroup: CourseGroup): void {
    const newStatus = !courseGroup.seas_status;
    const action = newStatus ? 'abrir' : 'cerrar';

    const confirmSnackBar = this.snackBar.open(
      `¿Seguro que deseas ${action} ${courseGroup.key}?`,
      'Confirmar',
      {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      }
    );

    confirmSnackBar.onAction().subscribe(() => {
      this.updatingStatus.add(courseGroup.seas_id);
      this.seasonService.updateSeasonStatus(courseGroup.seas_id, newStatus).subscribe({
        next: (res) => {
          courseGroup.seas_status = res.seas_status;
          courseGroup.students.forEach(s => s.stud_season.seas_status = res.seas_status);
          this.updatingStatus.delete(courseGroup.seas_id);
          this.snackBar.open(`Curso ${res.seas_status ? 'abierto' : 'cerrado'} exitosamente`, 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        },
        error: (error) => {
          console.error('Error al actualizar el estado:', error);
          this.updatingStatus.delete(courseGroup.seas_id);
          this.snackBar.open('Error al actualizar el estado del curso', 'Cerrar', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      });
    });
  }

  getAccordionId(modeId: number): string {
    return `mode-${modeId}`;
  }

  openCourseStudentsDialog(courseGroup: any, modeName: string): void {
    const dialogRef = this.dialog.open(CourseStudentsDialogComponent, {
      width: '850px',
      maxWidth: '95vw',
      data: {
        courseGroup: courseGroup,
        mode_name: modeName,
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.getData();
    });
  }

  exportCourseStudents(courseGroup: CourseGroup, modeName: string): void {
    const rows = courseGroup.students.map((student, index) => ({
      'N°': index + 1,
      'Nombres': student.stud_member.memb_name,
      'Apellidos': student.stud_member.memb_surname,
      'Celular': student.stud_member.memb_mobil,
      'Zona': student.stud_member.memb_zone?.zone_name ?? '',
    }));

    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Estudiantes');

    const fileName = `${modeName} - ${courseGroup.key}.xlsx`.replace(/[/\\?%*:|"<>]/g, '-');
    XLSX.writeFile(wb, fileName);
  }

  exportAllStudents(): void {
    const rows = this.students.map((student, index) => ({
      'N°': index + 1,
      'Nombres': student.stud_member.memb_name,
      'Apellidos': student.stud_member.memb_surname,
      'Celular': student.stud_member.memb_mobil,
      'Zona': student.stud_member.memb_zone?.zone_name ?? '',
      'Curso': student.stud_season.seas_course.cour_description,
      'Modalidad': student.stud_season.seas_mode.mode_name,
      'Turno': student.stud_season.seas_schedule.sche_description,
    }));

    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Estudiantes');

    XLSX.writeFile(wb, 'Lista_Estudiantes.xlsx');
  }
}
