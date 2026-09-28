import { ProgresComponent } from './progres.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const progresRoutes: Route[] = [
  {
    path: '',
    component: ProgresComponent
  }
];

@NgModule({
  declarations: [
    ProgresComponent,
  ],
  exports: [
    ProgresComponent
  ],
  imports: [
    RouterModule.forChild(progresRoutes),
    CommonModule,
  ]
})
export class ProgresModule {}
