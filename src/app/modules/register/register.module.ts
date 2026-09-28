import { RegisterComponent } from './register.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const registerRoutes: Route[] = [
  {
    path: '',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    RegisterComponent,
  ],
  exports: [
    RegisterComponent
  ],
  imports: [
    RouterModule.forChild(registerRoutes),
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule
  ]
})
export class RegisterModule {}
