import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';
import { FormsModule } from '@angular/forms';

import { ValuesPipe } from './courses.component';

const coursesRoutes: Route[] = [
  {
    path: '',
    component: CoursesComponent,
  },
];

@NgModule({
  declarations: [CoursesComponent, ValuesPipe],
  exports: [CoursesComponent],
  imports: [
    RouterModule.forChild(coursesRoutes),
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    FormsModule,
    MatCheckboxModule,
  ],
})
export class CoursesModule {}
