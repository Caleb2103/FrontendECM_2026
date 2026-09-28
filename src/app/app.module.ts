import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {appRoutes} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './modules/sidebar/sidebar.component';

import { MatDialogModule } from '@angular/material/dialog';
import { RegisterDialogComponent } from './modules/components-dialogs/register-dialog/register-dialog.component';
import { InscriptionsDialogComponent } from './modules/components-dialogs/inscriptions-dialog/inscriptions-dialog.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { HeaderComponent } from './modules/header/header.component';
import { LoginModule } from './modules/login/login.module';
import { PaymentDialogComponent } from './modules/components-dialogs/payment-dialog/payment-dialog.component';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { CourseStudentsDialogComponent } from './modules/components-dialogs/course-students-dialog/course-students-dialog.component';
import { TransferStudentDialogComponent } from './modules/components-dialogs/transfer-student-dialog/transfer-student-dialog.component';
import { VouchersComponent } from './modules/vouchers/vouchers.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    RegisterDialogComponent,
    InscriptionsDialogComponent,
    PaymentDialogComponent,
    CourseStudentsDialogComponent,
    LayoutComponent,
    HeaderComponent,
    TransferStudentDialogComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    MatDialogModule,
    LoginModule,
    FormsModule,
    CommonModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
