import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';

const menuRoutes: Route[] = [
  {
    path: '',
    component: MenuComponent
  }
];

@NgModule({
  declarations: [
    MenuComponent,
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    RouterModule.forChild(menuRoutes),
    CommonModule,
  ]
})
export class MenuModule {}
