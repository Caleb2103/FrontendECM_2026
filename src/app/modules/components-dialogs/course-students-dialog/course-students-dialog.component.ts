import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentService } from 'src/app/services/student.service';
import { TransferStudentDialogComponent } from '../transfer-student-dialog/transfer-student-dialog.component';
import { SeasonService } from 'src/app/services/season.service';
import { Season } from 'src/app/models/student';

@Component({
  selector: 'app-course-students-dialog',
  templateUrl: './course-students-dialog.component.html',
  styleUrls: ['./course-students-dialog.component.css']
})
export class CourseStudentsDialogComponent {

  seasons: Season[] = [];
  
  constructor(
    public dialogRef: MatDialogRef<CourseStudentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private studentService: StudentService,
    private snackBar: MatSnackBar,
    private seasonService: SeasonService
  ) {
  }

  ngOnInit(): void {
    this.getSeasonData();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  getSeasonData() {
    let student = localStorage.getItem('userId');
    student = student ?? '1';
    this.seasonService.getSeasonList(parseInt(student)).subscribe({
      next: (data) => {
        this.seasons = data;
      },
      error: (error) => {
        console.error('Error al obtener los datos:', error);
      }
    });
  }

  openTransferDialog(student: any): void {
    const transferDialogRef = this.dialog.open(TransferStudentDialogComponent, {
      width: '600px',
      maxWidth: '95vw',
      data: {
        student: student,
        currentCourse: this.data.courseGroup,
        allSeasons: this.seasons
      }
    });

    transferDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialogRef.close(true);
      }
    });
  }

  cancelInscription(student: any): void {
    const confirmSnackBar = this.snackBar.open(
      `¿Seguro que deseas anular la inscripción de ${student.stud_member.memb_name} ${student.stud_member.memb_surname}?`,
      'Confirmar',
      {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      }
    );

    confirmSnackBar.onAction().subscribe(() => {
      this.executeCancel(student);
    });
  }

  executeCancel(student: any): void {
    this.studentService.deleteStudent(student.stud_id).subscribe({
      next: () => {
        this.snackBar.open('Inscripción anulada exitosamente', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });

        // Remover el estudiante de la lista local
        const index = this.data.courseGroup.students.findIndex(
          (s: any) => s.stud_id === student.stud_id
        );
        if (index > -1) {
          this.data.courseGroup.students.splice(index, 1);
        }

        // Si ya no hay estudiantes, cerrar el diálogo
        if (this.data.courseGroup.students.length === 0) {
          this.dialogRef.close(true);
        }
      },
      error: (error) => {
        console.error('Error al anular inscripción:', error);
        this.snackBar.open('Error al anular la inscripción', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    });
  }
}
