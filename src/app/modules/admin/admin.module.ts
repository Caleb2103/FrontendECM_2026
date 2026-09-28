import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';

const adminRoutes: Route[] = [
  {
    path: '',
    component: AdminComponent,
  },
];

@NgModule({
  declarations: [AdminComponent],
  exports: [AdminComponent],
  imports: [
    RouterModule.forChild(adminRoutes),
    CommonModule,
  ],
})
export class AdminModule {}
