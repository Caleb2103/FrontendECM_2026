import { Component } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  userName = localStorage.getItem('name');
  studentSeasons: Student[] = [];

  constructor(private studentService: StudentService) {
    if (this.userName) {
      this.userName = this.capitalizeFirstLetter(this.userName);
    }
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    let userId = localStorage.getItem('userId');
    userId = userId ?? '1';

    this.studentService.getStudentSeasons(parseInt(userId)).subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.studentSeasons = data.filter(season =>
            season.stud_season.seas_period.peri_status === true
          );
        } else {
          this.studentSeasons = [];
        }
      },
      error: (error) => {
        console.error('Error al obtener los datos:', error);
      }
    });
  }

  getLevelText(level: number): string {
    if (level === 0) return 'Básico';
    return `Nivel ${level}`;
  }

  getStatusText(season: Student): string {
    const level = season.stud_season.seas_course.cour_type;
    return level;
  }

  getStatusClass(season: Student): string {
    const level = season.stud_season.seas_course.cour_level;
    if (level === 0 || level === 1) {
      return 'troncal';
    }
    return 'electivo';
  }

  getTeacherDisplayName(teacher: any): string {
    const fullName = `${teacher.memb_name} ${teacher.memb_surname}`;
    return fullName === "PROFESOR NO CONOCIDO" ? "PROFESOR ZONAL" : fullName;
  }

  capitalizeFirstLetter(name: string): string {
    return name.toUpperCase();
  }
}
