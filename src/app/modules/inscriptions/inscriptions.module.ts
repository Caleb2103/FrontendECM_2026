import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CommonModule } from '@angular/common';

import { InscriptionsComponent } from './inscriptions.component';
import { FormsModule } from '@angular/forms';

const inscriptionsRoutes: Route[] = [
  {
    path: '',
    component: InscriptionsComponent
  }
];

@NgModule({
  declarations: [
    InscriptionsComponent,
  ],
  exports: [
    InscriptionsComponent
  ],
  imports: [
    RouterModule.forChild(inscriptionsRoutes),
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    FormsModule,
    MatSnackBarModule
  ]
})
export class InscriptionsModule {}
