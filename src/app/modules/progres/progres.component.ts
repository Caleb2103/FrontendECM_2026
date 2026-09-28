import { Component, OnInit } from '@angular/core';
import { Course, Student } from 'src/app/models/student';
import { CourseService } from 'src/app/services/courses.service';
import { StudentService } from 'src/app/services/student.service';

/** Avance de un nivel de formación: cursos totales/completados y su % */
export interface LevelProgress {
  level: number;
  label: string;
  courses: Course[];
  completedCount: number;
  totalCount: number;
  percentage: number;
}

@Component({
  selector: 'app-progres',
  templateUrl: './progres.component.html',
  styleUrls: ['./progres.component.css']
})

export class ProgresComponent implements OnInit {
  courses: Course[] = [];
  completedCourses: Student[] = [];
  levelProgress: LevelProgress[] = [];
  loading: boolean = false;

  constructor(private courseService: CourseService, private studentService: StudentService) {}

  ngOnInit(): void {
    this.getCoursesList();
    this.getCoursesCompleted();
  }

  getCoursesList() {
    this.courseService.getCoursesList().subscribe({
      next: (data) => {
        this.courses = data;
      },
      error: (error) => {
        console.error('Error al obtener los datos:', error);
      }
    });
  }

  getCoursesCompleted() {
    this.loading = true;
    let userId = localStorage.getItem('userId');
    userId = userId ?? '1';
    this.studentService.getCoursesCompleted(parseInt(userId)).subscribe({
      next: (data) => {
        this.completedCourses = data;
        this.updateLevelProgress();
      },
      error: (error) => {
        console.error('Error al obtener los datos:', error);
      }
    });
  }

  getUniqueLevels(): number[] {
    return this.courses
      .map((course) => course.cour_level)
      .filter((value, index, self) => self.indexOf(value) === index);
  }

  getLevelCourses(
    level: number,
    filter?: (course: Course) => boolean
  ): Course[] {
    let filteredCourses = filter ? this.courses.filter(filter) : this.courses;
    let levelCourses = filteredCourses.filter(
      (course) => course.cour_level === level
    );
    levelCourses.sort((a, b) =>
      a.cour_description.localeCompare(b.cour_description)
    );
    return levelCourses;
  }

  /** "Nivel 4" y "Nivel 0" son ambos, por convención de datos, el nivel Básico. */
  getLevelLabel(level: number): string {
    return level === 4 || level === 0 ? 'Básico' : `Nivel ${level}`;
  }

  isCourseCompleted(course: Course): boolean {
    return this.completedCourses.some(completedCourse => completedCourse.stud_season.seas_course.cour_id === course.cour_id);
  }

  /** El nivel Básico (0 o 4) siempre va primero; el resto, ascendente. */
  private levelSortKey(level: number): number {
    return level === 4 || level === 0 ? -1 : level;
  }

  private updateLevelProgress(): void {
    this.levelProgress = this.getUniqueLevels()
      .map(level => {
        const courses = this.getLevelCourses(level);
        const completedCount = courses.filter(course => this.isCourseCompleted(course)).length;
        const totalCount = courses.length;
        return {
          level,
          label: this.getLevelLabel(level),
          courses,
          completedCount,
          totalCount,
          percentage: totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0,
        };
      })
      .sort((a, b) => this.levelSortKey(a.level) - this.levelSortKey(b.level));
    this.loading = false;
  }
}
