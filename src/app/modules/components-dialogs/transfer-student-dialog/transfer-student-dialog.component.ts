import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-transfer-student-dialog',
  templateUrl: './transfer-student-dialog.component.html',
  styleUrls: ['./transfer-student-dialog.component.css'],
})
export class TransferStudentDialogComponent implements OnInit {
  selectedSeason: any = null;
  availableSeasons: any[] = [];
  loading: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<TransferStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private studentService: StudentService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.availableSeasons = this.data.allSeasons.filter(
      (season: any) => season.seas_id !== this.data.student.stud_season.seas_id
    );
  }

  formatSeasonDisplay(season: any): string {
    const scheduleMap: { [key: string]: string } = {
      'Primer Turno': '1T',
      'Segundo Turno': '2T',
      'Online': 'O'
    };

    const modeMap: { [key: string]: string } = {
      'Presencial': 'P',
      'Online': 'O',
      'Virtual': 'V'
    };

    const schedule = scheduleMap[season.seas_schedule.sche_description] || season.seas_schedule.sche_description;
    const mode = modeMap[season.seas_mode.mode_name] || season.seas_mode.mode_name;
    const course = season.seas_course.cour_description;

  return `${schedule} - ${mode} - ${course}`;
}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    if (!this.selectedSeason) return;

    this.loading = true;

    const updateData = {
      stud_season: this.selectedSeason.seas_id,
      stud_member: this.data.student.stud_member.memb_id
    };

    this.studentService.updateStudent(this.data.student.stud_id, updateData).subscribe({
      next: () => {
        this.loading = false;
        this.snackBar.open('Estudiante transferido exitosamente', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
        this.dialogRef.close(true);
      },
      error: (error) => {
        this.loading = false;
        console.error('Error al transferir estudiante:', error);
        this.snackBar.open('Error al transferir el estudiante', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    });
  }
}