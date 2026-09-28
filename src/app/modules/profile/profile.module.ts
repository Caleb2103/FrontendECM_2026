import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProfileComponent } from './profile.component';

const profileRoutes: Route[] = [
  {
    path: '',
    component: ProfileComponent,
  },
];

@NgModule({
  declarations: [
    ProfileComponent,
  ],
  exports: [
    ProfileComponent,
  ],
  imports: [
    RouterModule.forChild(profileRoutes),
    CommonModule,
    FormsModule,
    MatSnackBarModule,
  ],
})
export class ProfileModule {}
