import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-season-detail-dialog',
  templateUrl: './season-detail-dialog.component.html',
  styleUrls: ['./season-detail-dialog.component.css']
})
export class SeasonDetailDialogComponent {
  ciclo: Student;

  constructor(
    public dialogRef: MatDialogRef<SeasonDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { ciclo: Student }
  ) {
    this.ciclo = data.ciclo;
  }

  get levelText(): string {
    const level = this.ciclo.stud_season.seas_course.cour_level;
    return level === 4 ? 'Básico' : `Nivel ${level}`;
  }

  get teacherName(): string {
    const teacher = this.ciclo.stud_season.seas_teacher;
    return `${teacher.memb_name} ${teacher.memb_surname}`;
  }

  get notaBadgeClass(): string {
    const nota = this.ciclo.seas_final;
    if (nota == null) return 'none';
    return nota >= 13 ? 'aprobado' : 'reprobado';
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
