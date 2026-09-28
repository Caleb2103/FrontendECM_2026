import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Route[] = [
  { path: '', component: DashboardComponent },
];

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [
    RouterModule.forChild(dashboardRoutes),
    CommonModule,
    FormsModule,
    NgChartsModule,
  ],
})
export class DashboardModule {}
