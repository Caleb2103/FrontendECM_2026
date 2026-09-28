import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

const loginRoutes: Route[] = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
  ],
  exports: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(loginRoutes),
    CommonModule,
    FormsModule
  ]
})
export class LoginModule {}
