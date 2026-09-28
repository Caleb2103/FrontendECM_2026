import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { SeasonsComponent } from './seasons.component';
import { SeasonDetailDialogComponent } from '../components-dialogs/season-detail-dialog/season-detail-dialog.component';
import { FormsModule } from '@angular/forms';

const seasonRoutes: Route[] = [
  {
    path: '',
    component: SeasonsComponent
  }
];

@NgModule({
  declarations: [
    SeasonsComponent,
    SeasonDetailDialogComponent,
  ],
  exports: [
    SeasonsComponent
  ],
  imports: [
    RouterModule.forChild(seasonRoutes),
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    CommonModule,
    FormsModule
  ]
})
export class SeasonsModule {}
