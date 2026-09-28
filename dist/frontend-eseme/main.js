"use strict";
(self["webpackChunkFrontendEseme"] = self["webpackChunkFrontendEseme"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appRoutes": () => (/* binding */ appRoutes)
/* harmony export */ });
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 5107);
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/role.guard */ 1735);


const appRoutes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! src/app/modules/login/login.module */ 9758)).then(m => m.LoginModule)
}, {
  path: 'register',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/modules/register/register.module */ 1965)).then(m => m.RegisterModule)
}, {
  path: 'courses',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard, _guards_role_guard__WEBPACK_IMPORTED_MODULE_1__.RoleGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_table_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_paginator_mjs"), __webpack_require__.e("src_app_modules_courses_courses_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/modules/courses/courses.module */ 9373)).then(m => m.CoursesModule)
}, {
  path: 'seasons',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_table_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_paginator_mjs"), __webpack_require__.e("src_app_modules_seasons_seasons_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/modules/seasons/seasons.module */ 3899)).then(m => m.SeasonsModule)
}, {
  path: 'inscriptions',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_table_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_paginator_mjs"), __webpack_require__.e("src_app_modules_inscriptions_inscriptions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/modules/inscriptions/inscriptions.module */ 2203)).then(m => m.InscriptionsModule)
}, {
  path: 'search',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard, _guards_role_guard__WEBPACK_IMPORTED_MODULE_1__.RoleGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_table_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_paginator_mjs"), __webpack_require__.e("src_app_modules_search_search_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/modules/search/search.module */ 9837)).then(m => m.SearchModule)
}, {
  path: 'progress',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard, _guards_role_guard__WEBPACK_IMPORTED_MODULE_1__.RoleGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_progres_progres_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/modules/progres/progres.module */ 4033)).then(m => m.ProgresModule)
}, {
  path: 'menu',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_menu_menu_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! src/app/modules/menu/menu.module */ 3988)).then(m => m.MenuModule)
}, {
  path: 'admin',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard, _guards_role_guard__WEBPACK_IMPORTED_MODULE_1__.RoleGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! src/app/modules/admin/admin.module */ 7442)).then(m => m.AdminModule)
}, {
  path: 'vouchers',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard, _guards_role_guard__WEBPACK_IMPORTED_MODULE_1__.RoleGuard],
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_table_mjs"), __webpack_require__.e("src_app_modules_vouchers_voucher_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! src/app/modules/vouchers/voucher.module */ 4582)).then(m => m.VoucherModule)
}, {
  path: 'dashboard',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard, _guards_role_guard__WEBPACK_IMPORTED_MODULE_1__.RoleGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! src/app/modules/dashboard/dashboard.module */ 8757)).then(m => m.DashboardModule)
}, {
  path: 'profile',
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! src/app/modules/profile/profile.module */ 9267)).then(m => m.ProfileModule)
}];

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _modules_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/layout/layout.component */ 3529);



class AppComponent {
  constructor(authService) {
    this.authService = authService;
    this.isLoggedIn = false;
  }
  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 1,
  vars: 1,
  consts: [[3, "isLoggedIn"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-layout", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("isLoggedIn", ctx.isLoggedIn);
    }
  },
  dependencies: [_modules_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent],
  encapsulation: 2
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interceptors/http-error.interceptor */ 6276);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _modules_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sidebar/sidebar.component */ 3004);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _modules_components_dialogs_register_dialog_register_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/components-dialogs/register-dialog/register-dialog.component */ 9955);
/* harmony import */ var _modules_components_dialogs_inscriptions_dialog_inscriptions_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/components-dialogs/inscriptions-dialog/inscriptions-dialog.component */ 8520);
/* harmony import */ var _modules_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/layout/layout.component */ 3529);
/* harmony import */ var _modules_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/header/header.component */ 4214);
/* harmony import */ var _modules_login_login_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/login/login.module */ 9758);
/* harmony import */ var _modules_components_dialogs_payment_dialog_payment_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/components-dialogs/payment-dialog/payment-dialog.component */ 731);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _modules_components_dialogs_course_students_dialog_course_students_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/components-dialogs/course-students-dialog/course-students-dialog.component */ 3678);
/* harmony import */ var _modules_components_dialogs_transfer_student_dialog_transfer_student_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/components-dialogs/transfer-student-dialog/transfer-student-dialog.component */ 1934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);























class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS,
    useClass: _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_1__.HttpErrorInterceptor,
    multi: true
  }],
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot(_app_routing_module__WEBPACK_IMPORTED_MODULE_0__.appRoutes), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, _modules_login_login_module__WEBPACK_IMPORTED_MODULE_8__.LoginModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _modules_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent, _modules_components_dialogs_register_dialog_register_dialog_component__WEBPACK_IMPORTED_MODULE_4__.RegisterDialogComponent, _modules_components_dialogs_inscriptions_dialog_inscriptions_dialog_component__WEBPACK_IMPORTED_MODULE_5__.InscriptionsDialogComponent, _modules_components_dialogs_payment_dialog_payment_dialog_component__WEBPACK_IMPORTED_MODULE_9__.PaymentDialogComponent, _modules_components_dialogs_course_students_dialog_course_students_dialog_component__WEBPACK_IMPORTED_MODULE_10__.CourseStudentsDialogComponent, _modules_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__.LayoutComponent, _modules_header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent, _modules_components_dialogs_transfer_student_dialog_transfer_student_dialog_component__WEBPACK_IMPORTED_MODULE_11__.TransferStudentDialogComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, _modules_login_login_module__WEBPACK_IMPORTED_MODULE_8__.LoginModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelectModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_21__.MatSnackBarModule]
  });
})();

/***/ }),

/***/ 5107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    if (this.authService.isLoggedIn) {
      return true;
    }
    return this.router.createUrlTree(['/login']);
  }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) {
  return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: AuthGuard,
  factory: AuthGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1735:
/*!**************************************!*\
  !*** ./src/app/guards/role.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleGuard": () => (/* binding */ RoleGuard)
/* harmony export */ });
/* harmony import */ var _modules_sidebar_role_access__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/sidebar/role-access */ 4342);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class RoleGuard {
  constructor(router) {
    this.router = router;
  }
  canActivate(route) {
    const userRole = localStorage.getItem('userRole');
    const allowedLinks = (0,_modules_sidebar_role_access__WEBPACK_IMPORTED_MODULE_0__.getAllowedRouterLinks)(userRole);
    const routerLink = route.routeConfig?.path;
    if (routerLink && allowedLinks.includes(routerLink)) {
      return true;
    }
    return this.router.createUrlTree(['/menu']);
  }
}
RoleGuard.ɵfac = function RoleGuard_Factory(t) {
  return new (t || RoleGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
RoleGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: RoleGuard,
  factory: RoleGuard.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6276:
/*!********************************************************!*\
  !*** ./src/app/interceptors/http-error.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpErrorInterceptor": () => (/* binding */ HttpErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class HttpErrorInterceptor {
  intercept(request, next) {
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(error => {
      if (error.error instanceof ErrorEvent) {
        console.error(`Network error: ${error.error.message}`);
      } else {
        console.error(`Backend returned code ${error.status} for ${request.method} ${request.url}, body was:`, error.error);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => new Error('Something happened with the request, please try again later'));
    }));
  }
}
HttpErrorInterceptor.ɵfac = function HttpErrorInterceptor_Factory(t) {
  return new (t || HttpErrorInterceptor)();
};
HttpErrorInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: HttpErrorInterceptor,
  factory: HttpErrorInterceptor.ɵfac
});

/***/ }),

/***/ 3678:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/components-dialogs/course-students-dialog/course-students-dialog.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseStudentsDialogComponent": () => (/* binding */ CourseStudentsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _transfer_student_dialog_transfer_student_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../transfer-student-dialog/transfer-student-dialog.component */ 1934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/student.service */ 4339);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var src_app_services_season_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/season.service */ 7091);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);








function CourseStudentsDialogComponent_div_16_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const student_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", student_r2.stud_member.memb_zone.zone_name, " ");
  }
}
function CourseStudentsDialogComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 17)(5, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 19)(8, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, CourseStudentsDialogComponent_div_16_span_14_Template, 3, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 24)(16, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourseStudentsDialogComponent_div_16_Template_button_click_16_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const student_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.openTransferDialog(student_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Transferir");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourseStudentsDialogComponent_div_16_Template_button_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const student_r2 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.cancelInscription(student_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Anular");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const student_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", student_r2.stud_member.memb_name, " ", student_r2.stud_member.memb_surname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", student_r2.stud_member.memb_dni, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", student_r2.stud_member.memb_mobil, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", student_r2.stud_member.memb_zone == null ? null : student_r2.stud_member.memb_zone.zone_name);
  }
}
function CourseStudentsDialogComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "No hay estudiantes inscritos en este curso");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class CourseStudentsDialogComponent {
  constructor(dialogRef, data, dialog, studentService, snackBar, seasonService) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.dialog = dialog;
    this.studentService = studentService;
    this.snackBar = snackBar;
    this.seasonService = seasonService;
    this.seasons = [];
  }
  ngOnInit() {
    this.getSeasonData();
  }
  closeDialog() {
    this.dialogRef.close();
  }
  getSeasonData() {
    let student = localStorage.getItem('userId');
    student = student ?? '1';
    this.seasonService.getSeasonList(parseInt(student)).subscribe({
      next: data => {
        this.seasons = data;
      },
      error: error => {
        console.error('Error al obtener los datos:', error);
      }
    });
  }
  openTransferDialog(student) {
    const transferDialogRef = this.dialog.open(_transfer_student_dialog_transfer_student_dialog_component__WEBPACK_IMPORTED_MODULE_0__.TransferStudentDialogComponent, {
      width: '600px',
      maxWidth: '95vw',
      data: {
        student: student,
        currentCourse: this.data.courseGroup,
        allSeasons: this.seasons
      }
    });
    transferDialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialogRef.close(true);
      }
    });
  }
  cancelInscription(student) {
    const confirmSnackBar = this.snackBar.open(`¿Seguro que deseas anular la inscripción de ${student.stud_member.memb_name} ${student.stud_member.memb_surname}?`, 'Confirmar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
    confirmSnackBar.onAction().subscribe(() => {
      this.executeCancel(student);
    });
  }
  executeCancel(student) {
    this.studentService.deleteStudent(student.stud_id).subscribe({
      next: () => {
        this.snackBar.open('Inscripción anulada exitosamente', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        // Remover el estudiante de la lista local
        const index = this.data.courseGroup.students.findIndex(s => s.stud_id === student.stud_id);
        if (index > -1) {
          this.data.courseGroup.students.splice(index, 1);
        }
        // Si ya no hay estudiantes, cerrar el diálogo
        if (this.data.courseGroup.students.length === 0) {
          this.dialogRef.close(true);
        }
      },
      error: error => {
        console.error('Error al anular inscripción:', error);
        this.snackBar.open('Error al anular la inscripción', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    });
  }
}
CourseStudentsDialogComponent.ɵfac = function CourseStudentsDialogComponent_Factory(t) {
  return new (t || CourseStudentsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__.StudentService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_season_service__WEBPACK_IMPORTED_MODULE_2__.SeasonService));
};
CourseStudentsDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CourseStudentsDialogComponent,
  selectors: [["app-course-students-dialog"]],
  decls: 18,
  vars: 6,
  consts: [[1, "students-dialog-container"], [1, "dialog-header"], [1, "header-info"], [1, "bx", "bxs-book-content"], [1, "header-text"], ["mat-dialog-title", "", 1, "dialog-title"], [1, "dialog-subtitle"], ["aria-label", "Cerrar", 1, "close-button", 3, "click"], [1, "bx", "bx-x"], [1, "students-count"], [1, "students-list"], ["class", "student-card", 4, "ngFor", "ngForOf"], ["class", "empty-state", 4, "ngIf"], [1, "student-card"], [1, "student-info"], [1, "student-avatar"], [1, "bx", "bxs-user-circle"], [1, "student-details"], [1, "student-name"], [1, "student-meta"], [1, "meta-item"], [1, "bx", "bx-id-card"], [1, "bx", "bx-phone"], ["class", "meta-item", 4, "ngIf"], [1, "student-actions"], ["matTooltip", "Transferir a otro curso", "aria-label", "Transferir a otro curso", 1, "action-btn", "btn-transfer", 3, "click"], [1, "bx", "bx-transfer"], ["matTooltip", "Anular inscripci\u00F3n", "aria-label", "Anular inscripci\u00F3n", 1, "action-btn", "btn-cancel", 3, "click"], [1, "bx", "bx-x-circle"], [1, "bx", "bx-map"], [1, "empty-state"], [1, "bx", "bx-user-x"]],
  template: function CourseStudentsDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4)(5, "h2", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CourseStudentsDialogComponent_Template_button_click_9_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-dialog-content")(12, "div", 9)(13, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CourseStudentsDialogComponent_div_16_Template, 24, 5, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, CourseStudentsDialogComponent_div_17_Template, 4, 0, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.data.courseGroup.course.cour_description);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.data.courseGroup.schedule.sche_description, " - ", ctx.data.mode_name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.data.courseGroup.students.length, " estudiante(s) inscrito(s)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.data.courseGroup.students);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.courseGroup.students.length === 0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent],
  styles: [".students-dialog-container[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  width: 100%;\n}\n\n\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 1rem 2rem;\n  color: var(--color-text);\n}\n\n.header-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex: 1;\n}\n\n.header-info[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 36px;\n  color: var(--color-text);\n}\n\n.header-text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.dialog-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-heading);\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0 0 0.3rem 0;\n  color: var(--color-text);\n}\n\n.dialog-subtitle[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0;\n  opacity: 0.9;\n  color: var(--color-text);\n}\n\n.close-button[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  cursor: pointer;\n  color: var(--color-text);\n  transition: background-color 0.2s;\n}\n\n.close-button[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n}\n\n\n.students-count[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 2rem;\n  background-color: var(--color-page-bg);\n  border-bottom: 1px solid var(--color-border);\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--color-text-muted);\n}\n\n.students-count[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: var(--color-primary);\n}\n\n\n.students-list[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  padding: 1rem 2rem;\n}\n\n.student-card[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.25rem;\n  margin-bottom: 0.75rem;\n  background: white;\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  transition: all 0.2s;\n}\n\n.student-info[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex: 1;\n}\n\n.student-avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.student-avatar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 32px;\n  color: var(--color-text);\n}\n\n.student-details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.student-name[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 0.5rem 0;\n}\n\n.student-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n\n.meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 13px;\n  color: var(--color-text-muted);\n}\n\n.meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--color-primary);\n}\n\n\n.student-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n\n.action-btn[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.6rem 1rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n\n.action-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.btn-transfer[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-soft);\n  color: var(--color-primary);\n  border: 1px solid var(--color-primary);\n}\n\n.btn-transfer[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary);\n  color: white;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  background-color: var(--color-danger-soft);\n  color: var(--color-danger);\n  border: 1px solid var(--color-danger);\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-danger);\n  color: white;\n}\n\n\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  color: var(--color-text-muted);\n}\n\n.empty-state[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 64px;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0;\n}\n\n\n.students-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.students-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--color-border);\n}\n\n.students-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--color-primary);\n  border-radius: 3px;\n}\n\n.students-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--color-primary);\n}\n\n\n@media (max-width: 768px) {\n  .dialog-header[_ngcontent-%COMP%] {\n    padding: 1rem 1.5rem;\n  }\n\n  .dialog-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .students-count[_ngcontent-%COMP%] {\n    padding: 0.75rem 1.5rem;\n  }\n\n  .students-list[_ngcontent-%COMP%] {\n    padding: 0.75rem 1.5rem;\n  }\n\n  .student-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n\n  .student-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .action-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n\n  .action-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzLWRpYWxvZ3MvY291cnNlLXN0dWRlbnRzLWRpYWxvZy9jb3Vyc2Utc3R1ZGVudHMtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsV0FBVztBQUNiOztBQUVBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsNENBQTRDO0VBQzVDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtBQUM3Qjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULE9BQU87QUFDVDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLDJCQUEyQjtFQUMzQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLDBCQUEwQjtFQUMxQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsWUFBWTtBQUNkOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBLGNBQWM7QUFDZDtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUEsZUFBZTtBQUNmO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxPQUFPO0lBQ1AsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R1ZGVudHMtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIEhlYWRlciAqL1xuLmRpYWxvZy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMXJlbSAycmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG59XG5cbi5oZWFkZXItaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgZmxleDogMTtcbn1cblxuLmhlYWRlci1pbmZvID4gaSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xufVxuXG4uaGVhZGVyLXRleHQge1xuICBmbGV4OiAxO1xufVxuXG4uZGlhbG9nLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWhlYWRpbmcpO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMCAwIDAuM3JlbSAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG59XG5cbi5kaWFsb2ctc3VidGl0bGUge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBvcGFjaXR5OiAwLjk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG59XG5cbi5jbG9zZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbi8qIFN0dWRlbnRzIENvdW50ICovXG4uc3R1ZGVudHMtY291bnQge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXBhZ2UtYmcpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG59XG5cbi5zdHVkZW50cy1jb3VudCBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi8qIFN0dWRlbnRzIExpc3QgKi9cbi5zdHVkZW50cy1saXN0IHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJhc2UpO1xuICBwYWRkaW5nOiAxcmVtIDJyZW07XG59XG5cbi5zdHVkZW50LWNhcmQge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4uc3R1ZGVudC1pbmZvIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJhc2UpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDFyZW07XG4gIGZsZXg6IDE7XG59XG5cbi5zdHVkZW50LWF2YXRhciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uc3R1ZGVudC1hdmF0YXIgaSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xufVxuXG4uc3R1ZGVudC1kZXRhaWxzIHtcbiAgZmxleDogMTtcbn1cblxuLnN0dWRlbnQtbmFtZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xufVxuXG4uc3R1ZGVudC1tZXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDFyZW07XG59XG5cbi5tZXRhLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuM3JlbTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG59XG5cbi5tZXRhLWl0ZW0gaSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4vKiBBY3Rpb25zICovXG4uc3R1ZGVudC1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjVyZW07XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uYWN0aW9uLWJ0biB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjRyZW07XG4gIHBhZGRpbmc6IDAuNnJlbSAxcmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYWN0aW9uLWJ0biBpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYnRuLXRyYW5zZmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1zb2Z0KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmJ0bi10cmFuc2Zlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyLXNvZnQpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItZGFuZ2VyKTtcbn1cblxuLmJ0bi1jYW5jZWw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXIpO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIEVtcHR5IFN0YXRlICovXG4uZW1wdHktc3RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogM3JlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xufVxuXG4uZW1wdHktc3RhdGUgaSB7XG4gIGZvbnQtc2l6ZTogNjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZW1wdHktc3RhdGUgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBTY3JvbGxiYXIgKi9cbi5zdHVkZW50cy1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG5cbi5zdHVkZW50cy1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJvcmRlcik7XG59XG5cbi5zdHVkZW50cy1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5zdHVkZW50cy1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4vKiBSZXNwb25zaXZlICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmRpYWxvZy1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xuICB9XG5cbiAgLmRpYWxvZy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgLnN0dWRlbnRzLWNvdW50IHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgfVxuXG4gIC5zdHVkZW50cy1saXN0IHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgfVxuXG4gIC5zdHVkZW50LWNhcmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG5cbiAgLnN0dWRlbnQtYWN0aW9ucyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuYWN0aW9uLWJ0biB7XG4gICAgZmxleDogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5hY3Rpb24tYnRuIHNwYW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8520:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/components-dialogs/inscriptions-dialog/inscriptions-dialog.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InscriptionsDialogComponent": () => (/* binding */ InscriptionsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _payment_dialog_payment_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../payment-dialog/payment-dialog.component */ 731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




class InscriptionsDialogComponent {
  constructor(dialogRef, data, dialog) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.dialog = dialog;
  }
  onCancel() {
    this.dialogRef.close(false);
  }
  onConfirm() {
    this.dialogRef.close(false);
    this.dialog.open(_payment_dialog_payment_dialog_component__WEBPACK_IMPORTED_MODULE_0__.PaymentDialogComponent, {
      width: '900px',
      maxWidth: '95vw',
      disableClose: true,
      data: {
        season: this.data
      }
    });
  }
}
InscriptionsDialogComponent.ɵfac = function InscriptionsDialogComponent_Factory(t) {
  return new (t || InscriptionsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog));
};
InscriptionsDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: InscriptionsDialogComponent,
  selectors: [["app-inscriptions-dialog"]],
  decls: 10,
  vars: 2,
  consts: [["mat-dialog-content", "", 1, "main-content"], ["mat-dialog-title", "", 1, "title"], [1, "subtitle"], ["mat-button", "", 1, "button-detail", 3, "mat-dialog-close", "click"], ["mat-button", "", "cdkFocusInitial", "", 1, "button-detail", 3, "mat-dialog-close", "click"]],
  template: function InscriptionsDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Confirmaci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-dialog-content", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \u00BFEst\u00E1s seguro de que deseas inscribirte en este curso? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-dialog-actions")(6, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InscriptionsDialogComponent_Template_button_click_6_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Cancelar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InscriptionsDialogComponent_Template_button_click_8_listener() {
        return ctx.onConfirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Aceptar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
    }
  },
  dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions],
  styles: [".title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-heading);\n  font-weight: 600;\n  margin: 0.5rem;\n  padding: 0;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin: 1rem 0.5rem;\n  padding: 0;\n}\n\n.main-content[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, var(--color-primary) 7%, white 7%);\n  width: 350px;\n}\n\n.button-detail[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  background-color: var(--color-primary);\n  border: none;\n  border-radius: 12px;\n  color: white;\n  padding: 0.8rem;\n  cursor: pointer;\n  text-align: center;\n}\n\n.mat-dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.mat-mdc-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzLWRpYWxvZ3MvaW5zY3JpcHRpb25zLWRpYWxvZy9pbnNjcmlwdGlvbnMtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBdUM7RUFDdkMsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHlFQUF5RTtFQUN6RSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWhlYWRpbmcpO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDAuNXJlbTtcbiAgcGFkZGluZzogMDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAxcmVtIDAuNXJlbTtcbiAgcGFkZGluZzogMDtcbn1cblxuLm1haW4tY29udGVudCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHZhcigtLWNvbG9yLXByaW1hcnkpIDclLCB3aGl0ZSA3JSk7XG4gIHdpZHRoOiAzNTBweDtcbn1cblxuLmJ1dHRvbi1kZXRhaWwge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMC44cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hdC1kaWFsb2ctYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tYXQtbWRjLWRpYWxvZy1hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 731:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/components-dialogs/payment-dialog/payment-dialog.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentDialogComponent": () => (/* binding */ PaymentDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_student_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/student.service */ 4339);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);







function PaymentDialogComponent_div_6_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentDialogComponent_div_6_div_20_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r1.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Haz clic para subir imagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "JPG, PNG (M\u00E1x. 5MB)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function PaymentDialogComponent_div_6_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentDialogComponent_div_6_div_21_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](_r1.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Cambiar imagen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r3.voucherPreview, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
  }
}
function PaymentDialogComponent_div_6_p_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.errorMessage);
  }
}
function PaymentDialogComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Realiza el pago de inscripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Escanea el c\u00F3digo QR o realiza la transferencia y adjunta tu comprobante de pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 10)(7, "div", 11)(8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 14)(11, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Monto: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "S/ 5.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 16)(16, "h4", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Sube tu comprobante de pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function PaymentDialogComponent_div_6_Template_input_change_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.onFileSelected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PaymentDialogComponent_div_6_div_20_Template, 6, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, PaymentDialogComponent_div_6_div_21_Template, 5, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 22)(23, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "C\u00F3digo de operaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function PaymentDialogComponent_div_6_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r11.operationCode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, PaymentDialogComponent_div_6_p_26_Template, 2, 1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentDialogComponent_div_6_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.confirmInscription());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeIn", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.voucherPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.voucherPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.operationCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.voucherFile || !ctx_r0.operationCode || ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.loading ? "bx-loader-alt bx-spin" : "bx-check-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.loading ? "Enviando..." : "Enviar comprobante y finalizar", " ");
  }
}
class PaymentDialogComponent {
  constructor(dialogRef, data, studentService) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.studentService = studentService;
    this.currentStep = 1;
    this.voucherFile = null;
    this.voucherPreview = null;
    this.operationCode = '';
    this.loading = false;
    this.errorMessage = '';
  }
  nextStep() {
    this.currentStep = 2;
  }
  closeDialog() {
    this.dialogRef.close(false);
  }
  onFileSelected(event) {
    const file = event.target.files[0];
    if (file) {
      this.errorMessage = '';
      if (file.size > 5 * 1024 * 1024) {
        this.errorMessage = 'La imagen no debe superar los 5MB.';
        return;
      }
      if (!file.type.match(/image\/(jpg|jpeg|png)/)) {
        this.errorMessage = 'El archivo debe ser una imagen JPG o PNG.';
        return;
      }
      this.voucherFile = file;
      // --- Image Preview
      const reader = new FileReader();
      reader.onload = e => {
        this.voucherPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  confirmInscription() {
    if (this.loading) return;
    this.loading = true;
    this.errorMessage = '';
    let student = localStorage.getItem('userId') ?? '1';
    const studId = student;
    const seasId = this.data.season.season.seas_id;
    const inscriptionData = {
      stud_id: studId,
      seas_id: seasId
    };
    this.studentService.inscribirStudent(inscriptionData).subscribe({
      next: () => {
        const memberId = parseInt(studId);
        const periodId = this.data.season.season.seas_period?.peri_id;
        this.uploadVoucher(memberId, periodId);
      },
      error: error => {
        this.loading = false;
        console.error('Error al crear la inscripción:', error);
        this.errorMessage = 'Error al procesar la inscripción. Intenta nuevamente.';
      }
    });
  }
  uploadVoucher(memberId, periodId) {
    if (!this.voucherFile) {
      this.loading = false;
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result;
      const voucherData = {
        vouc_operation_number: this.operationCode,
        vouc_image: base64String,
        vouc_member: memberId,
        vouc_period: periodId
      };
      this.studentService.uploadVoucher(voucherData).subscribe({
        next: () => {
          this.loading = false;
          setTimeout(() => {
            this.dialogRef.close(true);
          }, 1500);
        },
        error: error => {
          this.loading = false;
          console.error('Error al subir el voucher:', error);
          this.errorMessage = 'Se creó la inscripción, pero hubo un error al subir el voucher.';
          setTimeout(() => {
            this.dialogRef.close(true);
          }, 3000);
        }
      });
    };
    reader.onerror = () => {
      this.loading = false;
      this.errorMessage = 'No se pudo leer el archivo del voucher.';
    };
    reader.readAsDataURL(this.voucherFile);
  }
}
PaymentDialogComponent.ɵfac = function PaymentDialogComponent_Factory(t) {
  return new (t || PaymentDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_student_service__WEBPACK_IMPORTED_MODULE_0__.StudentService));
};
PaymentDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PaymentDialogComponent,
  selectors: [["app-payment-dialog"]],
  decls: 7,
  vars: 1,
  consts: [[1, "payment-dialog-container"], [1, "dialog-header"], ["mat-dialog-title", "", 1, "dialog-title"], ["aria-label", "Cerrar", 1, "close-button", 3, "click"], [1, "bx", "bx-x"], ["class", "dialog-content", 4, "ngIf"], [1, "dialog-content"], [1, "payment-section"], [1, "section-title"], [1, "section-subtitle"], [1, "payment-content"], [1, "qr-section"], [1, "qr-container"], ["src", "assets/qr-yape.png", "alt", "QR de Pago", 1, "qr-image"], [1, "payment-info"], [1, "payment-amount"], [1, "voucher-section"], [1, "voucher-title"], ["type", "file", "accept", "image/*", 2, "display", "none", 3, "change"], ["fileInput", ""], ["class", "upload-area", 3, "click", 4, "ngIf"], ["class", "voucher-preview", 4, "ngIf"], [1, "form-group"], [1, "form-label"], ["type", "text", "placeholder", "Ingresa el c\u00F3digo de operaci\u00F3n", "maxlength", "20", 1, "form-input", 3, "ngModel", "ngModelChange"], ["class", "form-error", 4, "ngIf"], [1, "btn-submit", 3, "disabled", "click"], [1, "bx", 3, "ngClass"], [1, "upload-area", 3, "click"], [1, "bx", "bx-cloud-upload", "upload-icon"], [1, "upload-text"], [1, "upload-hint"], [1, "voucher-preview"], ["alt", "Vista previa del voucher", 3, "src"], [1, "change-image-button", 3, "click"], [1, "bx", "bx-refresh"], [1, "form-error"]],
  template: function PaymentDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Confirmaci\u00F3n de Inscripci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PaymentDialogComponent_Template_button_click_4_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PaymentDialogComponent_div_6_Template, 30, 8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentStep === 1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
  styles: [".payment-dialog-container[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  max-width: 900px;\n  width: 100%;\n  padding-bottom: 1.5rem;\n}\n\n\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 2rem;\n  border-bottom: 1px solid var(--color-border);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  background: white;\n}\n\n.dialog-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-heading);\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  width: 44px;\n  height: 44px;\n  font-size: 24px;\n  cursor: pointer;\n  color: var(--color-text-muted);\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: color 0.2s;\n}\n\n.close-button[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n}\n\n\n.dialog-content[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n\n.payment-section[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-heading);\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 0.5rem 0;\n  text-align: center;\n}\n\n.section-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  margin: 0 0 2rem 0;\n  text-align: center;\n}\n\n.payment-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2rem;\n}\n\n\n.qr-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.qr-container[_ngcontent-%COMP%] {\n  background-color: var(--color-page-bg);\n  border-radius: 16px;\n  padding: 1.5rem;\n  margin-bottom: 1rem;\n}\n\n.qr-image[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  display: block;\n  border-radius: 8px;\n}\n\n.payment-info[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.payment-amount[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--color-primary);\n  margin: 0 0 0.5rem 0;\n}\n\n.payment-amount[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n\n.voucher-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.voucher-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-heading);\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 1rem 0;\n}\n\n.upload-area[_ngcontent-%COMP%] {\n  border: 2px dashed var(--color-primary);\n  border-radius: 12px;\n  padding: 2rem 1rem;\n  text-align: center;\n  background-color: var(--color-primary-soft);\n  cursor: pointer;\n  transition: all 0.2s;\n  margin-bottom: 1rem;\n}\n\n.upload-area[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-soft);\n  border-color: var(--color-primary-hover);\n}\n\n.upload-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: var(--color-primary);\n  margin-bottom: 0.5rem;\n}\n\n.upload-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--color-primary);\n  margin: 0 0 0.3rem 0;\n}\n\n.upload-hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--color-text-muted);\n  margin: 0;\n}\n\n.voucher-preview[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1rem;\n}\n\n.voucher-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 250px;\n  object-fit: contain;\n  border-radius: 12px;\n  border: 2px solid var(--color-border);\n}\n\n.change-image-button[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.5rem;\n  padding: 0.7rem;\n  background-color: var(--color-page-bg);\n  color: var(--color-primary);\n  border: 2px solid var(--color-primary);\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: all 0.2s;\n}\n\n.change-image-button[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-soft);\n}\n\n.change-image-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-text);\n  display: block;\n  margin-bottom: 0.5rem;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.9rem;\n  border: 2px solid var(--color-border);\n  border-radius: 8px;\n  font-size: 15px;\n  box-sizing: border-box;\n  transition: border-color 0.2s;\n}\n\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary);\n}\n\n.form-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-muted);\n}\n\n.form-error[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n  font-size: 14px;\n  margin: -0.5rem 0 1rem 0;\n}\n\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.9rem;\n  background-color: var(--color-primary);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  transition: all 0.2s;\n}\n\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: var(--color-primary-hover);\n}\n\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.btn-submit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n\n@media (max-width: 768px) {\n  .payment-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .dialog-header[_ngcontent-%COMP%] {\n    padding: 1rem 1.5rem;\n  }\n\n  .dialog-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n\n  .dialog-content[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzLWRpYWxvZ3MvcGF5bWVudC1kaWFsb2cvcGF5bWVudC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQSxXQUFXO0FBQ1g7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsNENBQTRDO0VBQzVDLGdCQUFnQjtFQUNoQixNQUFNO0VBQ04sVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUEsbUJBQW1CO0FBQ25CO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsU0FBUztBQUNYOztBQUVBLGVBQWU7QUFDZjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsMkNBQTJDO0VBQzNDLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNDQUFzQztFQUN0QywyQkFBMkI7RUFDM0Isc0NBQXNDO0VBQ3RDLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUEsZUFBZTtBQUNmO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBheW1lbnQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgbWF4LXdpZHRoOiA5MDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG59XG5cbi8qIEhlYWRlciAqL1xuLmRpYWxvZy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEuNXJlbSAycmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmRpYWxvZy10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1oZWFkaW5nKTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xufVxuXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xufVxuXG4vKiBEaWFsb2cgQ29udGVudCAqL1xuLmRpYWxvZy1jb250ZW50IHtcbiAgcGFkZGluZzogMnJlbTtcbn1cblxuLnBheW1lbnQtc2VjdGlvbiB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktaGVhZGluZyk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VjdGlvbi1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICBtYXJnaW46IDAgMCAycmVtIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBheW1lbnQtY29udGVudCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAycmVtO1xufVxuXG4vKiBRUiBTZWN0aW9uICovXG4ucXItc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcGFnZS1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnFyLWltYWdlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ucGF5bWVudC1pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGF5bWVudC1hbW91bnQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XG59XG5cbi5wYXltZW50LWFtb3VudCBzdHJvbmcge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi8qIFZvdWNoZXIgU2VjdGlvbiAqL1xuLnZvdWNoZXItc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi52b3VjaGVyLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWhlYWRpbmcpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgbWFyZ2luOiAwIDAgMXJlbSAwO1xufVxuXG4udXBsb2FkLWFyZWEge1xuICBib3JkZXI6IDJweCBkYXNoZWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXNvZnQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4udXBsb2FkLWFyZWE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXNvZnQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktaG92ZXIpO1xufVxuXG4udXBsb2FkLWljb24ge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4udXBsb2FkLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luOiAwIDAgMC4zcmVtIDA7XG59XG5cbi51cGxvYWQtaGludCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICBtYXJnaW46IDA7XG59XG5cbi52b3VjaGVyLXByZXZpZXcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi52b3VjaGVyLXByZXZpZXcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDI1MHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xufVxuXG4uY2hhbmdlLWltYWdlLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gIHBhZGRpbmc6IDAuN3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcGFnZS1iZyk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi5jaGFuZ2UtaW1hZ2UtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1zb2Z0KTtcbn1cblxuLmNoYW5nZS1pbWFnZS1idXR0b24gaSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uZm9ybS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjlyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcbn1cblxuLmZvcm0taW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uZm9ybS1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG59XG5cbi5mb3JtLWVycm9yIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAtMC41cmVtIDAgMXJlbSAwO1xufVxuXG4uYnRuLXN1Ym1pdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjlyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLmJ0bi1zdWJtaXQ6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWhvdmVyKTtcbn1cblxuLmJ0bi1zdWJtaXQ6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5idG4tc3VibWl0IGkge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi8qIFJlc3BvbnNpdmUgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucGF5bWVudC1jb250ZW50IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5kaWFsb2ctaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgfVxuXG4gIC5kaWFsb2ctdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIC5kaWFsb2ctY29udGVudCB7XG4gICAgcGFkZGluZzogMS41cmVtO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('fadeIn', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
      opacity: 0,
      transform: 'translateY(20px)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('300ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
      opacity: 1,
      transform: 'translateY(0)'
    }))])])]
  }
});

/***/ }),

/***/ 9955:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/components-dialogs/register-dialog/register-dialog.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterDialogComponent": () => (/* binding */ RegisterDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/members.service */ 4674);
/* harmony import */ var src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/student.service */ 4339);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






function RegisterDialogComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li")(1, "label")(2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function RegisterDialogComponent_li_9_Template_input_change_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3);
      const curso_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.toggleCurso(curso_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const curso_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](curso_r1.cour_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r0.cursosSeleccionados.includes(curso_r1));
  }
}
class RegisterDialogComponent {
  constructor(data, memberService, studentService, dialogRef) {
    this.data = data;
    this.memberService = memberService;
    this.studentService = studentService;
    this.dialogRef = dialogRef;
    this.cursosSeleccionados = [];
    this.member_id = 0;
    this.cursos = data.cursos;
    this.personalData = data.personalData;
  }
  onClose() {
    this.dialogRef.close();
  }
  toggleCurso(curso) {
    if (this.cursosSeleccionados.includes(curso)) {
      this.cursosSeleccionados = this.cursosSeleccionados.filter(c => c !== curso);
    } else {
      this.cursosSeleccionados.push(curso);
    }
  }
  register() {
    this.memberService.registerMember(this.personalData).subscribe({
      next: response => {
        this.member_id = response.memb_id;
        this.dialogRef.close();
        this.registerCourses();
      },
      error: error => {
        console.error('Error en el registro:', error);
      }
    });
  }
  registerCourses() {
    this.studentService.createDeclarativaStudent(this.cursosSeleccionados, this.member_id).subscribe({
      error: e => console.error('Error al registrar cursos:', e)
    });
  }
}
RegisterDialogComponent.ɵfac = function RegisterDialogComponent_Factory(t) {
  return new (t || RegisterDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_members_service__WEBPACK_IMPORTED_MODULE_0__.MemberService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__.StudentService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef));
};
RegisterDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: RegisterDialogComponent,
  selectors: [["app-register-dialog"]],
  decls: 17,
  vars: 2,
  consts: [[1, "modal-content", "scroll-container"], [1, "dialog-header"], [1, "welcome-heading"], ["aria-label", "Cerrar", 1, "close-button", 3, "click"], [1, "bx", "bx-x"], [1, "course-heading"], [1, "course-list"], [4, "ngFor", "ngForOf"], [1, "checkbox-container"], ["type", "checkbox", 1, "checkbox-input", 3, "value"], [1, "course-description"], [1, "button-div"], [1, "button-detail", 3, "click"], ["type", "checkbox", 1, "checkbox-input", 3, "checked", "change"]],
  template: function RegisterDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Bienvenido");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterDialogComponent_Template_button_click_4_listener() {
        return ctx.onClose();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Selecciona los cursos que has llevado en la ECM: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RegisterDialogComponent_li_9_Template, 5, 2, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "No he llevado cursos");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11)(15, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterDialogComponent_Template_button_click_15_listener() {
        return ctx.register();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Submit");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cursos);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", false);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf],
  styles: [".modal-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.5rem 0.6rem 0;\n}\n\n.close-button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  width: 44px;\n  height: 44px;\n  font-size: 24px;\n  cursor: pointer;\n  color: var(--color-text-muted);\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  transition: color 0.2s;\n}\n\n.close-button[_ngcontent-%COMP%]:hover {\n  color: var(--color-text);\n}\n\n.course-list[_ngcontent-%COMP%] {\n  list-style-type: none;\n  max-height: 350px;\n  padding: 0.5rem;\n}\n\n.welcome-heading[_ngcontent-%COMP%] {\n  font-size: 24px;\n  padding-left: 0.6rem;\n  margin: 0.5rem 0;\n}\n\n.course-heading[_ngcontent-%COMP%] {\n  font-size: 17px;\n  padding-left: 0.6rem;\n}\n\n.course-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.7rem;\n}\n\n.course-description[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  max-width: 200px;\n  box-sizing: border-box;\n  padding-left: 0.2rem;\n}\n\n.checkbox-input[_ngcontent-%COMP%] {\n  transform: scale(1.3);\n  margin-left: 1rem;\n}\n\n.scroll-container[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  max-height: 360px;\n}\n\n.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 11px;\n}\n\n.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: var(--color-text-muted);\n  border-radius: 4px;\n}\n\n.scroll-container[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background-color: var(--color-border);\n}\n\n.checkbox-container[_ngcontent-%COMP%] {\n  margin: 1rem 0.1rem;\n}\n\n.button-div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.button-detail[_ngcontent-%COMP%] {\n  width: 95%;\n  padding: 10px 0;\n  margin-top: 0.7rem;\n  background-color: var(--color-primary);\n  color: white;\n  border: none;\n  cursor: pointer;\n  font-weight: bold;\n  border-radius: 7px;\n  text-align: center;\n}\n\n@media (max-width: 480px) {\n  .dialog-header[_ngcontent-%COMP%] {\n    padding: 0.4rem 0.4rem 0;\n  }\n\n  .welcome-heading[_ngcontent-%COMP%] {\n    font-size: 20px;\n    padding-left: 0.4rem;\n  }\n\n  .course-heading[_ngcontent-%COMP%] {\n    font-size: 15px;\n    padding-left: 0.4rem;\n  }\n\n  .course-list[_ngcontent-%COMP%] {\n    padding: 0.3rem;\n  }\n\n  .course-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n\n  .course-description[_ngcontent-%COMP%] {\n    max-width: 100%;\n    white-space: normal;\n    word-break: break-word;\n  }\n\n  .checkbox-input[_ngcontent-%COMP%] {\n    margin-left: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzLWRpYWxvZ3MvcmVnaXN0ZXItZGlhbG9nL3JlZ2lzdGVyLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZGlhbG9nLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41cmVtIDAuNnJlbSAwO1xufVxuXG4uY2xvc2UtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG59XG5cbi5jbG9zZS1idXR0b246aG92ZXIge1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG59XG5cbi5jb3Vyc2UtbGlzdCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWF4LWhlaWdodDogMzUwcHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLndlbGNvbWUtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZy1sZWZ0OiAwLjZyZW07XG4gIG1hcmdpbjogMC41cmVtIDA7XG59XG5cbi5jb3Vyc2UtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgcGFkZGluZy1sZWZ0OiAwLjZyZW07XG59XG5cbi5jb3Vyc2UtbGlzdCBsaSB7XG4gIHBhZGRpbmc6IDAuN3JlbTtcbn1cblxuLmNvdXJzZS1kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmctbGVmdDogMC4ycmVtO1xufVxuXG4uY2hlY2tib3gtaW5wdXQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4uc2Nyb2xsLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgbWF4LWhlaWdodDogMzYwcHg7XG59XG5cbi5zY3JvbGwtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMXB4O1xufVxuXG4uc2Nyb2xsLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uc2Nyb2xsLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ib3JkZXIpO1xufVxuXG4uY2hlY2tib3gtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxcmVtIDAuMXJlbTtcbn1cblxuLmJ1dHRvbi1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbi1kZXRhaWwge1xuICB3aWR0aDogOTUlO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIG1hcmdpbi10b3A6IDAuN3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5kaWFsb2ctaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwLjRyZW0gMC40cmVtIDA7XG4gIH1cblxuICAud2VsY29tZS1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjRyZW07XG4gIH1cblxuICAuY291cnNlLWhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNHJlbTtcbiAgfVxuXG4gIC5jb3Vyc2UtbGlzdCB7XG4gICAgcGFkZGluZzogMC4zcmVtO1xuICB9XG5cbiAgLmNvdXJzZS1saXN0IGxpIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gIH1cblxuICAuY291cnNlLWRlc2NyaXB0aW9uIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB9XG5cbiAgLmNoZWNrYm94LWlucHV0IHtcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1934:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/components-dialogs/transfer-student-dialog/transfer-student-dialog.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferStudentDialogComponent": () => (/* binding */ TransferStudentDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_student_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/student.service */ 4339);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 9121);









function TransferStudentDialogComponent_mat_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const season_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", season_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.formatSeasonDisplay(season_r3), " ");
  }
}
function TransferStudentDialogComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Transferir");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function TransferStudentDialogComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Transfiriendo...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class TransferStudentDialogComponent {
  constructor(dialogRef, data, studentService, snackBar) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.studentService = studentService;
    this.snackBar = snackBar;
    this.selectedSeason = null;
    this.availableSeasons = [];
    this.loading = false;
  }
  ngOnInit() {
    this.availableSeasons = this.data.allSeasons.filter(season => season.seas_id !== this.data.student.stud_season.seas_id);
  }
  formatSeasonDisplay(season) {
    const scheduleMap = {
      'Primer Turno': '1T',
      'Segundo Turno': '2T',
      'Online': 'O'
    };
    const modeMap = {
      'Presencial': 'P',
      'Online': 'O',
      'Virtual': 'V'
    };
    const schedule = scheduleMap[season.seas_schedule.sche_description] || season.seas_schedule.sche_description;
    const mode = modeMap[season.seas_mode.mode_name] || season.seas_mode.mode_name;
    const course = season.seas_course.cour_description;
    return `${schedule} - ${mode} - ${course}`;
  }
  onCancel() {
    this.dialogRef.close(false);
  }
  onConfirm() {
    if (!this.selectedSeason) return;
    this.loading = true;
    const updateData = {
      stud_season: this.selectedSeason.seas_id,
      stud_member: this.data.student.stud_member.memb_id
    };
    this.studentService.updateStudent(this.data.student.stud_id, updateData).subscribe({
      next: () => {
        this.loading = false;
        this.snackBar.open('Estudiante transferido exitosamente', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
        this.dialogRef.close(true);
      },
      error: error => {
        this.loading = false;
        console.error('Error al transferir estudiante:', error);
        this.snackBar.open('Error al transferir el estudiante', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    });
  }
}
TransferStudentDialogComponent.ɵfac = function TransferStudentDialogComponent_Factory(t) {
  return new (t || TransferStudentDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_student_service__WEBPACK_IMPORTED_MODULE_0__.StudentService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar));
};
TransferStudentDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TransferStudentDialogComponent,
  selectors: [["app-transfer-student-dialog"]],
  decls: 33,
  vars: 11,
  consts: [[1, "transfer-dialog-container"], ["mat-dialog-title", ""], [1, "student-info-box"], [1, "bx", "bxs-user-circle"], [1, "transfer-info"], [1, "current-course"], [1, "course-meta"], [1, "new-course"], ["appearance", "outline", 1, "full-width"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["align", "end", 2, "gap", "1rem", "margin-bottom", "1rem"], ["mat-button", "", 1, "btn-cancel", 3, "click"], ["mat-raised-button", "", 1, "btn-transfer", 3, "disabled", "click"], [4, "ngIf"], [3, "value"]],
  template: function TransferStudentDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Transferir Estudiante");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-dialog-content")(4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4)(12, "div", 5)(13, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Curso actual:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7)(20, "label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Transferir a:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 8)(23, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Selecciona un curso");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function TransferStudentDialogComponent_Template_mat_select_valueChange_25_listener($event) {
        return ctx.selectedSeason = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, TransferStudentDialogComponent_mat_option_26_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-dialog-actions", 11)(28, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TransferStudentDialogComponent_Template_button_click_28_listener() {
        return ctx.onCancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Cancelar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TransferStudentDialogComponent_Template_button_click_30_listener() {
        return ctx.onConfirm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, TransferStudentDialogComponent_span_31_Template, 2, 0, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, TransferStudentDialogComponent_span_32_Template, 2, 0, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.data.student.stud_member.memb_name, " ", ctx.data.student.stud_member.memb_surname, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.student.stud_member.memb_dni);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.currentCourse.course.cour_description.toUpperCase());
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", (ctx.data.currentCourse.schedule.sche_description || "No disponible").toUpperCase(), " - ", (ctx.data.currentCourse.schedule.sche_starttime || "Online").toUpperCase(), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.selectedSeason);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.availableSeasons);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.selectedSeason || ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption],
  styles: [".transfer-dialog-container[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  width: 100%;\n  max-width: 500px;\n}\n\n.student-info-box[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem;\n  background: var(--color-page-bg);\n  border-radius: 8px;\n  color: var(--color-text);\n  margin-bottom: 1.5rem;\n}\n\n.student-info-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n}\n\n.student-info-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  margin: 0;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.student-info-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  margin: 0.25rem 0 0 0;\n  font-size: 14px;\n  opacity: 0.9;\n}\n\n.transfer-info[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.current-course[_ngcontent-%COMP%], .new-course[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  width: 100%;\n}\n\n.current-course[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .new-course[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  display: block;\n  font-size: 16px;\n  font-weight: 600;\n  color: var(--color-text);\n  margin-bottom: 1rem;\n}\n\n.current-course[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--color-text-muted);\n}\n\n.course-meta[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  font-size: 13px;\n  color: var(--color-text-muted);\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.new-course[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\nmat-dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 0.5rem;\n}\n\n.btn-transfer[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 0.6rem 1rem;\n  margin-right: 0.5rem;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  background-color: var(--color-primary-soft);\n  color: var(--color-primary);\n  border: 1px solid var(--color-primary);\n}\n\n.btn-transfer[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary);\n  color: white;\n}\n\n.btn-transfer[_ngcontent-%COMP%]:disabled {\n  background-color: var(--color-border);\n  color: var(--color-text-muted);\n  border-color: var(--color-border);\n  cursor: not-allowed;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 0.6rem 1rem;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  background-color: var(--color-danger-soft);\n  color: var(--color-danger);\n  border: 1px solid var(--color-danger);\n}\n\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-danger);\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzLWRpYWxvZ3MvdHJhbnNmZXItc3R1ZGVudC1kaWFsb2cvdHJhbnNmZXItc3R1ZGVudC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBOztFQUVFLG9DQUFvQztFQUNwQyxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDJDQUEyQztFQUMzQywyQkFBMkI7RUFDM0Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyw4QkFBOEI7RUFDOUIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDBDQUEwQztFQUMxQywwQkFBMEI7RUFDMUIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLFlBQVk7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbIi50cmFuc2Zlci1kaWFsb2ctY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJhc2UpO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLnN0dWRlbnQtaW5mby1ib3gge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcGFnZS1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5zdHVkZW50LWluZm8tYm94IGkge1xuICBmb250LXNpemU6IDQ4cHg7XG59XG5cbi5zdHVkZW50LWluZm8tYm94IGgzIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJhc2UpO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN0dWRlbnQtaW5mby1ib3ggcCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgbWFyZ2luOiAwLjI1cmVtIDAgMCAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLnRyYW5zZmVyLWluZm8ge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjBweDtcbn1cblxuLmN1cnJlbnQtY291cnNlLFxuLm5ldy1jb3Vyc2Uge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3VycmVudC1jb3Vyc2UgbGFiZWwsXG4ubmV3LWNvdXJzZSBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uY3VycmVudC1jb3Vyc2UgcCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbn1cblxuLmNvdXJzZS1tZXRhIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJhc2UpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5ldy1jb3Vyc2UgLm1hdC1tZGMtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbm1hdC1kaWFsb2ctYWN0aW9ucyBidXR0b24gbWF0LXNwaW5uZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4uYnRuLXRyYW5zZmVyIHtcbiAgbWluLWhlaWdodDogNDRweDtcbiAgcGFkZGluZzogMC42cmVtIDFyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXNvZnQpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uYnRuLXRyYW5zZmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi10cmFuc2ZlcjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uYnRuLWNhbmNlbCB7XG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gIHBhZGRpbmc6IDAuNnJlbSAxcmVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXItc29mdCk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXIpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1kYW5nZXIpO1xufVxuXG4uYnRuLWNhbmNlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4214:
/*!****************************************************!*\
  !*** ./src/app/modules/header/header.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





const _c0 = ["avatarBtn"];
function HeaderComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_13_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.closeUserMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Perfil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_13_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Cerrar sesi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.userName || "Usuario");
  }
}
function HeaderComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_div_14_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.closeUserMenu());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
/**
 * Barra superior del shell autenticado: botón de menú (solo mobile),
 * ayuda, notificaciones (placeholder visual, sin backend) y el menú de
 * usuario con cierre de sesión.
 */
class HeaderComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.onMenuClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.isUserMenuOpen = false;
    this.userName = localStorage.getItem('name');
  }
  get userInitials() {
    if (!this.userName) {
      return '?';
    }
    const parts = this.userName.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? '';
    const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
    return (first + last).toUpperCase();
  }
  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }
  closeUserMenu() {
    const wasOpen = this.isUserMenuOpen;
    this.isUserMenuOpen = false;
    if (wasOpen) {
      this.avatarBtn?.nativeElement.focus();
    }
  }
  onEscapeKey() {
    this.closeUserMenu();
  }
  logout() {
    this.closeUserMenu();
    this.authService.setLoggedIn(false);
    this.router.navigate(['/login']);
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  viewQuery: function HeaderComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.avatarBtn = _t.first);
    }
  },
  hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.escape", function HeaderComponent_keydown_escape_HostBindingHandler() {
        return ctx.onEscapeKey();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
    }
  },
  outputs: {
    onMenuClick: "onMenuClick"
  },
  decls: 15,
  vars: 4,
  consts: [[1, "header"], ["type", "button", "aria-label", "Abrir men\u00FA", 1, "header__menu-btn", 3, "click"], [1, "bx", "bx-menu"], [1, "header__spacer"], ["type", "button", "title", "Ayuda", "aria-label", "Ayuda", 1, "header__icon-btn"], [1, "bx", "bx-help-circle"], ["type", "button", "title", "Notificaciones", "aria-label", "Notificaciones", 1, "header__icon-btn", "header__icon-btn--bell"], [1, "bx", "bx-bell"], [1, "header__dot"], [1, "header__user"], ["type", "button", "aria-label", "Men\u00FA de usuario", "aria-haspopup", "true", 1, "header__avatar", 3, "click"], ["avatarBtn", ""], ["class", "header__menu", "role", "menu", 4, "ngIf"], ["class", "header__click-catcher", 3, "click", 4, "ngIf"], ["role", "menu", 1, "header__menu"], [1, "header__menu-name"], ["role", "menuitem", "routerLink", "/profile", 1, "header__menu-link", 3, "click"], [1, "bx", "bx-user"], ["type", "button", "role", "menuitem", 1, "header__logout-btn", 3, "click"], [1, "bx", "bx-log-out"], [1, "header__click-catcher", 3, "click"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_1_listener() {
        return ctx.onMenuClick.emit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 7)(8, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9)(10, "button", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_10_listener() {
        return ctx.toggleUserMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HeaderComponent_div_13_Template, 9, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, HeaderComponent_div_14_Template, 1, 0, "div", 13);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.isUserMenuOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userInitials);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUserMenuOpen);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isUserMenuOpen);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: [".header[_ngcontent-%COMP%] {\n  height: var(--header-height);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0 1.5rem;\n  background: var(--color-header-bg);\n  border-bottom: 1px solid var(--color-border);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}\n\n.header__spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n\n.header__menu-btn[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 2.75rem;\n  height: 2.75rem;\n  border: none;\n  background: transparent;\n  border-radius: 50%;\n  color: var(--color-text);\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.header__icon-btn[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 2.75rem;\n  height: 2.75rem;\n  border: 1px solid var(--color-border);\n  background: var(--color-card-bg);\n  border-radius: 50%;\n  color: var(--color-text-muted);\n  font-size: 1.25rem;\n  cursor: pointer;\n  transition: border-color 0.2s, color 0.2s;\n}\n\n.header__icon-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n}\n\n.header__dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.4rem;\n  right: 0.5rem;\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  background: var(--color-danger);\n  border: 1.5px solid var(--color-card-bg);\n}\n\n.header__user[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: 0.5rem;\n  cursor: pointer;\n}\n\n.header__avatar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  width: 2.75rem;\n  height: 2.75rem;\n  border: none;\n  padding: 0;\n  border-radius: 50%;\n  background: var(--color-primary);\n  color: #fff;\n  font-size: 0.85rem;\n  font-weight: 700;\n  font-family: inherit;\n  cursor: pointer;\n}\n\n.header__menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 0.5rem);\n  right: 0;\n  min-width: 12rem;\n  background: var(--color-card-bg);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);\n  padding: 0.75rem;\n  z-index: 30;\n}\n\n.header__menu-name[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  padding: 0 0.25rem;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--color-text);\n  word-break: break-word;\n}\n\n.header__menu-link[_ngcontent-%COMP%], .header__logout-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.5rem 0.6rem;\n  border: none;\n  border-radius: var(--radius-sm);\n  background: transparent;\n  font-family: var(--font-family-base);\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: none;\n  box-sizing: border-box;\n}\n\n.header__menu-link[_ngcontent-%COMP%] {\n  color: var(--color-text);\n  margin-bottom: 0.15rem;\n}\n\n.header__menu-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-page-bg);\n}\n\n.header__logout-btn[_ngcontent-%COMP%] {\n  color: var(--color-danger);\n}\n\n.header__logout-btn[_ngcontent-%COMP%]:hover {\n  background: var(--color-danger-soft);\n}\n\n.header__logout-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n.header__click-catcher[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 40;\n}\n\n@media (max-width: 768px) {\n  .header__menu-btn[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n\n@media (max-width: 400px) {\n  .header[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n    gap: 0.35rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtDQUFrQztFQUNsQyw0Q0FBNEM7RUFDNUMsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUEsMEVBQTBFO0FBQzFFO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtFQUNmLHFDQUFxQztFQUNyQyxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0Isd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixRQUFRO0VBQ1IsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxxQ0FBcUM7RUFDckMsK0JBQStCO0VBQy9CLDZDQUE2QztFQUM3QyxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osK0JBQStCO0VBQy9CLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7SUFDZixZQUFZO0VBQ2Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBoZWlnaHQ6IHZhcigtLWhlYWRlci1oZWlnaHQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMCAxLjVyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWhlYWRlci1iZyk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDUwO1xufVxuXG4uaGVhZGVyX19zcGFjZXIge1xuICBmbGV4OiAxO1xufVxuXG4vKiBCb3TDg8KzbiBkZSBtZW7Dg8K6OiBzb2xvIHZpc2libGUgZW4gbW9iaWxlLCBkb25kZSByZWVtcGxhemEgYWwgRkFCIGFudGlndW8gKi9cbi5oZWFkZXJfX21lbnUtYnRuIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMi43NXJlbTtcbiAgaGVpZ2h0OiAyLjc1cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlYWRlcl9faWNvbi1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDIuNzVyZW07XG4gIGhlaWdodDogMi43NXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItY2FyZC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMsIGNvbG9yIDAuMnM7XG59XG5cbi5oZWFkZXJfX2ljb24tYnRuOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uaGVhZGVyX19kb3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC40cmVtO1xuICByaWdodDogMC41cmVtO1xuICB3aWR0aDogMC41cmVtO1xuICBoZWlnaHQ6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1kYW5nZXIpO1xuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWNvbG9yLWNhcmQtYmcpO1xufVxuXG4uaGVhZGVyX191c2VyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oZWFkZXJfX2F2YXRhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgd2lkdGg6IDIuNzVyZW07XG4gIGhlaWdodDogMi43NXJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGVhZGVyX19tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoMTAwJSArIDAuNXJlbSk7XG4gIHJpZ2h0OiAwO1xuICBtaW4td2lkdGg6IDEycmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1jYXJkLWJnKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLW1kKTtcbiAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDE1LCAyMywgNDIsIDAuMTIpO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICB6LWluZGV4OiAzMDtcbn1cblxuLmhlYWRlcl9fbWVudS1uYW1lIHtcbiAgbWFyZ2luOiAwIDAgMC41cmVtO1xuICBwYWRkaW5nOiAwIDAuMjVyZW07XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xufVxuXG4uaGVhZGVyX19tZW51LWxpbmssXG4uaGVhZGVyX19sb2dvdXQtYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBwYWRkaW5nOiAwLjVyZW0gMC42cmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5oZWFkZXJfX21lbnUtbGluayB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgbWFyZ2luLWJvdHRvbTogMC4xNXJlbTtcbn1cblxuLmhlYWRlcl9fbWVudS1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcGFnZS1iZyk7XG59XG5cbi5oZWFkZXJfX2xvZ291dC1idG4ge1xuICBjb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcbn1cblxuLmhlYWRlcl9fbG9nb3V0LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWRhbmdlci1zb2Z0KTtcbn1cblxuLmhlYWRlcl9fbG9nb3V0LWJ0biBpIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5oZWFkZXJfX2NsaWNrLWNhdGNoZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICB6LWluZGV4OiA0MDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5oZWFkZXJfX21lbnUtYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgZ2FwOiAwLjM1cmVtO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3529:
/*!****************************************************!*\
  !*** ./src/app/modules/layout/layout.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 3004);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ 4214);





function LayoutComponent_app_sidebar_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-sidebar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onToggleSidenav", function LayoutComponent_app_sidebar_1_Template_app_sidebar_onToggleSidenav_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onToggleSidenav($event));
    })("onCloseMobile", function LayoutComponent_app_sidebar_1_Template_app_sidebar_onCloseMobile_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.closeMobileSidebar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("collapsed", ctx_r0.isCollapsed)("mobileOpen", ctx_r0.isMobileSidebarVisible);
  }
}
function LayoutComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LayoutComponent_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.closeMobileSidebar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LayoutComponent_app_header_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-header", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onMenuClick", function LayoutComponent_app_header_4_Template_app_header_onMenuClick_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.toggleMobileSidebar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
/**
 * Shell de la aplicación autenticada: sidebar + header + contenido enrutado.
 * Es el único lugar que sabe cuánto espacio ocupa el sidebar (var(--sidebar-width)
 * en layout.component.css) — las páginas nunca necesitan compensarlo con margin-left.
 */
class LayoutComponent {
  constructor() {
    this.isLoggedIn = false;
    this.isCollapsed = false;
    this.isMobileSidebarVisible = false;
  }
  onToggleSidenav(data) {
    this.isCollapsed = data.collapse;
  }
  toggleMobileSidebar() {
    this.isMobileSidebarVisible = !this.isMobileSidebarVisible;
  }
  closeMobileSidebar() {
    this.isMobileSidebarVisible = false;
  }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
  return new (t || LayoutComponent)();
};
LayoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: LayoutComponent,
  selectors: [["app-layout"]],
  inputs: {
    isLoggedIn: "isLoggedIn"
  },
  decls: 7,
  vars: 7,
  consts: [[1, "layout"], [3, "collapsed", "mobileOpen", "onToggleSidenav", "onCloseMobile", 4, "ngIf"], ["class", "layout__backdrop", 3, "click", 4, "ngIf"], [1, "layout__main"], [3, "onMenuClick", 4, "ngIf"], [1, "layout__content"], [3, "collapsed", "mobileOpen", "onToggleSidenav", "onCloseMobile"], [1, "layout__backdrop", 3, "click"], [3, "onMenuClick"]],
  template: function LayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LayoutComponent_app_sidebar_1_Template, 1, 2, "app-sidebar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LayoutComponent_div_2_Template, 1, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, LayoutComponent_app_header_4_Template, 1, 0, "app-header", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "main", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("layout--guest", !ctx.isLoggedIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoggedIn && ctx.isMobileSidebarVisible);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("layout__main--collapsed", ctx.isCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
  styles: [".layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: var(--color-page-bg);\n}\n\n\n.layout__main[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-width);\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  transition: margin-left 0.25s ease;\n}\n\n.layout__main--collapsed[_ngcontent-%COMP%] {\n  margin-left: var(--sidebar-width-collapsed);\n}\n\n.layout--guest[_ngcontent-%COMP%]   .layout__main[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n\n.layout__content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.layout__backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.5);\n  z-index: 90;\n}\n\n\n@media (max-width: 768px) {\n  .layout__main[_ngcontent-%COMP%], .layout__main--collapsed[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZ0NBQWdDO0FBQ2xDOztBQUVBO2lFQUNpRTtBQUNqRTtFQUNFLGlDQUFpQztFQUNqQyxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFFBQVE7RUFDUixpQ0FBaUM7RUFDakMsV0FBVztBQUNiOztBQUVBO21FQUNtRTtBQUNuRTtFQUNFOztJQUVFLGNBQWM7RUFDaEI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5sYXlvdXQge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcGFnZS1iZyk7XG59XG5cbi8qIFJlc2VydmEgZWwgZXNwYWNpbyBkZWwgc2lkZWJhciBmaWpvLiDDg8KabmljYSBmdWVudGUgZGUgdmVyZGFkIGRlbCBsYXlvdXQ6XG4gICBuaW5ndW5hIHDDg8KhZ2luYSBkZWJlIHZvbHZlciBhIGRlY2xhcmFyIG1hcmdpbi1sZWZ0IHBhcmEgZXN0by4gKi9cbi5sYXlvdXRfX21haW4ge1xuICBtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci13aWR0aCk7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjI1cyBlYXNlO1xufVxuXG4ubGF5b3V0X19tYWluLS1jb2xsYXBzZWQge1xuICBtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci13aWR0aC1jb2xsYXBzZWQpO1xufVxuXG4ubGF5b3V0LS1ndWVzdCAubGF5b3V0X19tYWluIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5sYXlvdXRfX2NvbnRlbnQge1xuICBmbGV4OiAxO1xufVxuXG4ubGF5b3V0X19iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTUsIDIzLCA0MiwgMC41KTtcbiAgei1pbmRleDogOTA7XG59XG5cbi8qIE1vYmlsZTogZWwgc2lkZWJhciBwYXNhIGEgc2VyIHVuIGRyYXdlciBmbG90YW50ZSwgZWwgY29udGVuaWRvIHNpZW1wcmVcbiAgIG9jdXBhIGVsIGFuY2hvIGNvbXBsZXRvIHNpbiBpbXBvcnRhciBlbCBlc3RhZG8gZGUgaXNDb2xsYXBzZWQuICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmxheW91dF9fbWFpbixcbiAgLmxheW91dF9fbWFpbi0tY29sbGFwc2VkIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 744:
/*!**************************************************!*\
  !*** ./src/app/modules/login/login.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);






function LoginComponent_p_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
class LoginComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.dni = '';
    this.errorMessage = '';
  }
  login() {
    this.errorMessage = '';
    this.authService.login(this.dni).subscribe({
      next: response => {
        if (!response.data) {
          localStorage.setItem('userId', response[0].memb_id);
          localStorage.setItem('name', response[0].memb_name);
          localStorage.setItem('userRole', response[0].memb_role);
          // Se guarda el registro completo para poder precargar la
          // página de Perfil sin necesitar un endpoint aparte.
          localStorage.setItem('member', JSON.stringify(response[0]));
          this.authService.setLoggedIn(true);
          const isMobile = this.isMobileDevice();
          // Redirigir según el dispositivo
          if (isMobile) {
            this.router.navigate(['/menu']);
          } else {
            this.router.navigate(['/seasons']);
          }
        }
      },
      error: () => {
        this.errorMessage = 'DNI no encontrado. Verifica tus datos e intenta nuevamente.';
      }
    });
  }
  isMobileDevice() {
    const isMobileWidth = window.innerWidth <= 768;
    return isMobileWidth;
  }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 31,
  vars: 2,
  consts: [[1, "container"], [1, "left-side"], [1, "welcome-text"], [1, "school-text"], [1, "right-side"], ["src", "./assets/logo.png", "alt", "", 1, "logo-image"], [3, "ngSubmit"], ["loginForm", "ngForm"], [1, "subtitle-text"], [1, "normal-text"], [1, "input-container"], ["for", "dni", 1, "sr-only"], ["type", "text", "id", "dni", "name", "dni", "placeholder", "DNI o CE:", "required", "", "pattern", "[0-9]{8}", "inputmode", "numeric", "autocomplete", "off", "aria-describedby", "dniError", 3, "ngModel", "ngModelChange"], ["class", "error-message", "id", "dniError", "role", "alert", 4, "ngIf"], ["type", "submit", 1, "submit-button"], [1, "line"], [1, "account-container"], [1, "no-account-text"], ["routerLink", "/register", 1, "register-link"], ["id", "dniError", "role", "alert", 1, "error-message"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Bienvenido");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Escuela de");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Capacitaci\u00F3n Ministerial");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 6, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener() {
        return ctx.login();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h2", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "\u00A1Bienvenido!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h6", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Porfavor ingresa tu documento de identidad");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10)(19, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "DNI o CE");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_21_listener($event) {
        return ctx.dni = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, LoginComponent_p_22_Template, 2, 1, "p", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Iniciar sesi\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16)(27, "h3", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " \u00BFAun no tienes una cuenta? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Crea tu cuenta aqu\u00ED");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dni);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  height: 100vh;\n  height: 100dvh;\n}\n\n.left-side[_ngcontent-%COMP%], .right-side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.welcome-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--font-family-heading);\n  font-size: 24px;\n  font-weight: 600;\n  text-align: start;\n  \n  padding-left: clamp(50px, 8vw, 105px);\n  margin-bottom: 1.5rem;\n}\n\n.school-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--font-family-heading);\n  font-size: 55px;\n  font-weight: 600;\n  line-height: 1.3;\n  padding-left: clamp(50px, 8vw, 100px);\n}\n\n.left-side[_ngcontent-%COMP%] {\n  border-top-right-radius: 12px;\n  border-bottom-right-radius: 12px;\n  width: 60%;\n  color: white;\n  opacity: 1;\n  background-image: radial-gradient(var(--color-border) 1px, var(--color-primary) 2px);\n  background-size: 40px 40px;\n  \n}\n\n.left-side[_ngcontent-%COMP%]   .welcome-text[_ngcontent-%COMP%], .left-side[_ngcontent-%COMP%]   .school-text[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n}\n\n.right-side[_ngcontent-%COMP%] {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 40%;\n  padding-left: 1.3rem;\n  padding-right: 1.3rem;\n}\n\n@keyframes _ngcontent-%COMP%_bounceRight {\n\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  25% {\n    transform: translateX(80px);\n    \n  }\n\n  50% {\n    transform: translateX(0);\n  }\n\n  75% {\n    transform: translateX(40px);\n  }\n}\n\n.logo-image[_ngcontent-%COMP%] {\n  width: 12rem;\n  height: 8rem;\n  margin-bottom: 1.5rem;\n}\n\n.normal-text[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 0.5rem;\n}\n\n.subtitle-text[_ngcontent-%COMP%] {\n  font-family: var(--font-family-heading);\n  font-size: 28px;\n  font-weight: 600;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  margin: 1rem 0;\n  max-width: 400px;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.7rem;\n  border-radius: 5px;\n  border: 1px solid var(--color-border);\n  \n  font-size: 16px;\n}\n\n.input-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0.5rem 0 1rem 0;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline-color: var(--color-primary);\n}\n\n.error-message[_ngcontent-%COMP%] {\n  width: 100%;\n  color: var(--color-danger);\n  font-family: var(--font-family-base);\n  font-size: 14px;\n  margin-bottom: 0.5rem;\n}\n\n.submit-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 13px 20px;\n  margin: 0.5rem 0;\n  background-color: var(--color-primary);\n  color: white;\n  border: none;\n  cursor: pointer;\n  font-weight: bold;\n  border-radius: 7px;\n}\n\n.submit-button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 2px;\n}\n\ninput[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.line[_ngcontent-%COMP%] {\n  position: relative;\n  height: 1px;\n  width: 65%;\n  margin: 1rem;\n  background-color: var(--color-border);\n}\n\n.line[_ngcontent-%COMP%]::before {\n  content: \"o\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: var(--color-card-bg);\n  color: var(--color-text);\n  padding: 0.5rem;\n}\n\n.account-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 0.7rem;\n}\n\n.no-account-text[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.register-link[_ngcontent-%COMP%] {\n  text-align: left;\n  color: var(--color-primary);\n  text-decoration: none;\n}\n\n.register-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n\n\n@media screen and (max-width: 1200px) {\n  .left-side[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n\n  .right-side[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n\n@media screen and (max-width: 1023px) {\n  .left-side[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n\n  .right-side[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n\n  .school-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 40px;\n    padding-top: 0.5rem;\n  }\n\n  .welcome-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n    text-align: start;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .left-side[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .right-side[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .school-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 33px;\n  }\n\n  .welcome-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 14px;\n    text-align: center;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 100vh;\n    min-height: 100dvh;\n  }\n\n  .right-side[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    min-height: 100vh;\n    min-height: 100dvh;\n  }\n\n  .logo-image[_ngcontent-%COMP%] {\n    margin: 5rem 0 1rem;\n  }\n}\n\n@media screen and (max-width: 415px) {\n  .right-side[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .right-side[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%] {\n    margin: 0.4rem 0;\n  }\n\n  .normal-text[_ngcontent-%COMP%] {\n    font-size: 15px;\n    font-weight: 400;\n    margin: 1rem 0 0.5rem;\n  }\n\n  .subtitle-text[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin: 0.4rem 0;\n  }\n\n  .no-account-text[_ngcontent-%COMP%] {\n    font-family: var(--font-family-base);\n    font-size: 16px;\n    font-weight: 400;\n  }\n\n  .register-link[_ngcontent-%COMP%] {\n    text-align: left;\n    font-size: 16px;\n    font-weight: 600;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCOzs2QkFFMkI7RUFDM0IscUNBQXFDO0VBQ3JDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixZQUFZO0VBQ1osVUFBVTtFQUNWLG9GQUFvRjtFQUNwRiwwQkFBMEI7RUFDMUIsb0VBQW9FO0FBQ3RFOztBQUVBOztFQUVFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUU7O0lBRUUsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLHFEQUFxRDtFQUN2RDs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQywrREFBK0Q7RUFDL0QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxzQ0FBc0M7RUFDdEMsd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFFQSxvQ0FBb0M7O0FBRXBDO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTs7SUFFRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBoZWlnaHQ6IDEwMGR2aDtcbn1cblxuLmxlZnQtc2lkZSxcbi5yaWdodC1zaWRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi53ZWxjb21lLXRleHQgaDMge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktaGVhZGluZyk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIC8qIHBhZGRpbmcgZmx1aWRvIGVuIHZleiBkZSB0cmFuc2Zvcm06dHJhbnNsYXRlKHB4KSBmaWpvOiBlc2NhbGEgc2luXG4gICAgIGRlc2JvcmRhciBlbCBwYW5lbCBlbiBuaW5nw4PCum4gYW5jaG8sIGVuIHZleiBkZSBzb2xvIGNvcnJlZ2lyc2UgZW5cbiAgICAgYnJlYWtwb2ludHMgcHVudHVhbGVzLiAqL1xuICBwYWRkaW5nLWxlZnQ6IGNsYW1wKDUwcHgsIDh2dywgMTA1cHgpO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5zY2hvb2wtdGV4dCBoMSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1oZWFkaW5nKTtcbiAgZm9udC1zaXplOiA1NXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBwYWRkaW5nLWxlZnQ6IGNsYW1wKDUwcHgsIDh2dywgMTAwcHgpO1xufVxuXG4ubGVmdC1zaWRlIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xuICB3aWR0aDogNjAlO1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudCh2YXIoLS1jb2xvci1ib3JkZXIpIDFweCwgdmFyKC0tY29sb3ItcHJpbWFyeSkgMnB4KTtcbiAgYmFja2dyb3VuZC1zaXplOiA0MHB4IDQwcHg7XG4gIC8qIGFuaW1hdGlvbjogYm91bmNlUmlnaHQgMXMgY3ViaWMtYmV6aWVyKDAuMzYsIDAuMDcsIDAuMTksIDAuOTcpOyAqL1xufVxuXG4ubGVmdC1zaWRlIC53ZWxjb21lLXRleHQsXG4ubGVmdC1zaWRlIC5zY2hvb2wtdGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ucmlnaHQtc2lkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDQwJTtcbiAgcGFkZGluZy1sZWZ0OiAxLjNyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDEuM3JlbTtcbn1cblxuQGtleWZyYW1lcyBib3VuY2VSaWdodCB7XG5cbiAgMCUsXG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuXG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDgwcHgpO1xuICAgIC8qIEFqdXN0YSBsYSBjYW50aWRhZCBkZSByZWJvdGUgc2Vnw4PCum4gc2VhIG5lY2VzYXJpbyAqL1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cblxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MHB4KTtcbiAgfVxufVxuXG4ubG9nby1pbWFnZSB7XG4gIHdpZHRoOiAxMnJlbTtcbiAgaGVpZ2h0OiA4cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5ub3JtYWwtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5zdWJ0aXRsZS10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWhlYWRpbmcpO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDFyZW0gMDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC43cmVtO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIC8qIDE2cHggZXZpdGEgZWwgYXV0by16b29tIGRlIGlPUyBTYWZhcmkgYWwgZW5mb2NhciBlbCBjYW1wby4gKi9cbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaW5wdXQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMC41cmVtIDAgMXJlbSAwO1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmUtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJhc2UpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuLnN1Ym1pdC1idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTNweCAyMHB4O1xuICBtYXJnaW46IDAuNXJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cblxuLnN1Ym1pdC1idXR0b246Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbn1cblxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuLmxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMXB4O1xuICB3aWR0aDogNjUlO1xuICBtYXJnaW46IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJvcmRlcik7XG59XG5cbi5saW5lOjpiZWZvcmUge1xuICBjb250ZW50OiBcIm9cIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FyZC1iZyk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4uYWNjb3VudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAwLjdyZW07XG59XG5cbi5uby1hY2NvdW50LXRleHQge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnJlZ2lzdGVyLWxpbmsge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnJlZ2lzdGVyLWxpbms6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiAtLS0tLS0gTU9CSUxFIFJFU1BPTlNJVkUgLS0tLS0tICovXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAubGVmdC1zaWRlIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgLnJpZ2h0LXNpZGUge1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XG4gIC5sZWZ0LXNpZGUge1xuICAgIHdpZHRoOiA0MCU7XG4gIH1cblxuICAucmlnaHQtc2lkZSB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuXG4gIC5zY2hvb2wtdGV4dCBoMSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XG4gIH1cblxuICAud2VsY29tZS10ZXh0IGgzIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC5sZWZ0LXNpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucmlnaHQtc2lkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc2Nob29sLXRleHQgaDEge1xuICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgfVxuXG4gIC53ZWxjb21lLXRleHQgaDMge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIG1pbi1oZWlnaHQ6IDEwMGR2aDtcbiAgfVxuXG4gIC5yaWdodC1zaWRlIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWluLWhlaWdodDogMTAwZHZoO1xuICB9XG5cbiAgLmxvZ28taW1hZ2Uge1xuICAgIG1hcmdpbjogNXJlbSAwIDFyZW07XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE1cHgpIHtcbiAgLnJpZ2h0LXNpZGUgLmlucHV0LWNvbnRhaW5lciBpbnB1dCxcbiAgLnJpZ2h0LXNpZGUgLnN1Ym1pdC1idXR0b24ge1xuICAgIG1hcmdpbjogMC40cmVtIDA7XG4gIH1cblxuICAubm9ybWFsLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbjogMXJlbSAwIDAuNXJlbTtcbiAgfVxuXG4gIC5zdWJ0aXRsZS10ZXh0IHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luOiAwLjRyZW0gMDtcbiAgfVxuXG4gIC5uby1hY2NvdW50LXRleHQge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgfVxuXG4gIC5yZWdpc3Rlci1saW5rIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"],
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.trigger)('slideRight', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
      transform: 'translateX(-100%)'
    }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.animate)('700ms ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_5__.style)({
      transform: 'translateX(0)'
    }))])])]
  }
});

/***/ }),

/***/ 9758:
/*!***********************************************!*\
  !*** ./src/app/modules/login/login.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);






const loginRoutes = [{
  path: '',
  component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}];
class LoginModule {}
LoginModule.ɵfac = function LoginModule_Factory(t) {
  return new (t || LoginModule)();
};
LoginModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LoginModule
});
LoginModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(loginRoutes), _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginModule, {
    declarations: [_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
    exports: [_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent]
  });
})();

/***/ }),

/***/ 2135:
/*!**********************************************!*\
  !*** ./src/app/modules/sidebar/nav.items.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navbarItems": () => (/* binding */ navbarItems)
/* harmony export */ });
const navbarItems = [{
  routerLink: 'seasons',
  icon: 'bx bx-calendar',
  label: 'Ciclos'
}, {
  routerLink: 'courses',
  icon: 'bx bx-book',
  label: 'Cursos'
}, {
  routerLink: 'inscriptions',
  icon: 'bx bx-pencil',
  label: 'Inscripciones'
}, {
  routerLink: 'search',
  icon: 'bx bx-search',
  label: 'Buscador'
}, {
  routerLink: 'progress',
  icon: 'bx bx-bar-chart-alt-2',
  label: 'Progreso'
}, {
  routerLink: 'dashboard',
  icon: 'bx bx-bar-chart-square',
  label: 'Dashboard'
}, {
  routerLink: 'admin',
  icon: 'bx bx-user',
  label: 'Admin'
}, {
  routerLink: 'vouchers',
  icon: 'bx bx-dollar',
  label: 'Vouchers'
}];

/***/ }),

/***/ 4342:
/*!************************************************!*\
  !*** ./src/app/modules/sidebar/role-access.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAllowedRouterLinks": () => (/* binding */ getAllowedRouterLinks)
/* harmony export */ });
/* harmony import */ var _nav_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.items */ 2135);

const ALL_ROUTER_LINKS = _nav_items__WEBPACK_IMPORTED_MODULE_0__.navbarItems.map(item => item.routerLink);
const RESTRICTED_BY_ROLE = {
  '4': ['search', 'progress', 'admin', 'vouchers'],
  '3': [],
  '2': ['search', 'progress', 'admin', 'vouchers', 'dashboard']
};
const DEFAULT_RESTRICTED = ['courses', 'search', 'progress', 'admin', 'vouchers', 'dashboard'];
function getAllowedRouterLinks(userRole) {
  const restricted = userRole !== null && userRole in RESTRICTED_BY_ROLE ? RESTRICTED_BY_ROLE[userRole] : DEFAULT_RESTRICTED;
  return ALL_ROUTER_LINKS.filter(link => !restricted.includes(link));
}

/***/ }),

/***/ 3004:
/*!******************************************************!*\
  !*** ./src/app/modules/sidebar/sidebar.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _nav_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.items */ 2135);
/* harmony import */ var _role_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./role-access */ 4342);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function SidebarComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "ECM");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SidebarComponent_li_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.label);
  }
}
const _c0 = function (a0) {
  return [a0];
};
function SidebarComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 10)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_li_8_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.onNavItemClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SidebarComponent_li_8_span_3_Template, 2, 1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, data_r2.routerLink));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx_r1.collapsed ? data_r2.label : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](data_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.collapsed);
  }
}
const _c1 = function (a0, a1) {
  return {
    collapsed: a0,
    "mobile-visible": a1
  };
};
const MOBILE_QUERY = '(max-width: 768px)';
class SidebarComponent {
  constructor(breakpointObserver) {
    this.breakpointObserver = breakpointObserver;
    /** Controlado por LayoutComponent (colapsado en escritorio). */
    this.collapsed = false;
    /** Controlado por LayoutComponent (drawer abierto en mobile, disparado desde el header). */
    this.mobileOpen = false;
    this.onToggleSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.onCloseMobile = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.userRole = localStorage.getItem('userRole');
    this.navItems = _nav_items__WEBPACK_IMPORTED_MODULE_0__.navbarItems;
    this.isMobile = this.breakpointObserver.isMatched(MOBILE_QUERY);
    this.filteredNavbarItems = this.getFilteredNavbarItems();
  }
  ngOnInit() {
    this.breakpointSub = this.breakpointObserver.observe(MOBILE_QUERY).subscribe(result => {
      this.isMobile = result.matches;
      this.filteredNavbarItems = this.getFilteredNavbarItems();
    });
  }
  ngOnDestroy() {
    this.breakpointSub?.unsubscribe();
  }
  toggleSidebar() {
    const collapse = !this.collapsed;
    this.onToggleSidenav.emit({
      screenWidth: window.innerWidth,
      collapse,
      smallScreen: this.isMobile
    });
  }
  onNavItemClick() {
    if (this.isMobile) {
      this.onCloseMobile.emit();
    }
  }
  getFilteredNavbarItems() {
    const allowedLinks = (0,_role_access__WEBPACK_IMPORTED_MODULE_1__.getAllowedRouterLinks)(this.userRole);
    if (this.isMobile) {
      // En mobile solo se exponen las rutas que ya tienen una pantalla
      // pensada para ese ancho (Ciclos, Cursos, Inscripciones). El resto
      // (buscador, progreso, dashboard, admin, vouchers) sigue sin cubrirse
      // a propósito: se deja así intencionalmente.
      const mobileEnabled = ['seasons', 'courses', 'inscriptions'];
      return _nav_items__WEBPACK_IMPORTED_MODULE_0__.navbarItems.filter(item => allowedLinks.includes(item.routerLink) && mobileEnabled.includes(item.routerLink));
    }
    // Desktop / Tablet: filtrado por rol de usuario
    return _nav_items__WEBPACK_IMPORTED_MODULE_0__.navbarItems.filter(item => allowedLinks.includes(item.routerLink));
  }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
  return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__.BreakpointObserver));
};
SidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SidebarComponent,
  selectors: [["app-sidebar"]],
  inputs: {
    collapsed: "collapsed",
    mobileOpen: "mobileOpen"
  },
  outputs: {
    onToggleSidenav: "onToggleSidenav",
    onCloseMobile: "onCloseMobile"
  },
  decls: 9,
  vars: 9,
  consts: [["aria-label", "Navegaci\u00F3n principal", 1, "sidebar", 3, "ngClass"], [1, "sidebar__logo"], [1, "sidebar__logo-mark"], [1, "bx", "bxs-book-bookmark"], ["class", "sidebar__logo-text", 4, "ngIf"], ["type", "button", 1, "sidebar__collapse-btn", 3, "click"], [1, "bx", 3, "ngClass"], [1, "sidenav-nav"], ["class", "sidenav-nav-item", 4, "ngFor", "ngForOf"], [1, "sidebar__logo-text"], [1, "sidenav-nav-item"], ["routerLinkActive", "active", 1, "sidenav-nav-link", 3, "routerLink", "click"], [1, "sidenav-link-icon"], ["class", "sidenav-link-text", 4, "ngIf"], [1, "sidenav-link-text"]],
  template: function SidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, SidebarComponent_span_4_Template, 2, 0, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_5_listener() {
        return ctx.toggleSidebar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SidebarComponent_li_8_Template, 4, 7, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](6, _c1, ctx.collapsed, ctx.mobileOpen));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.collapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-label", ctx.collapsed ? "Expandir men\u00FA" : "Colapsar men\u00FA")("aria-expanded", !ctx.collapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.collapsed ? "bx-chevron-right" : "bx-chevron-left");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filteredNavbarItems);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
  styles: [".sidebar[_ngcontent-%COMP%] {\n  width: var(--sidebar-width);\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding: 1.25rem 0.75rem;\n  background-color: var(--color-sidebar-bg);\n  \n  transition: width 0.25s ease;\n  z-index: 100;\n  box-sizing: border-box;\n}\n\n.collapsed[_ngcontent-%COMP%] {\n  width: var(--sidebar-width-collapsed);\n}\n\n\n.sidebar__logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0 0.5rem;\n  margin-bottom: 2rem;\n}\n\n.collapsed[_ngcontent-%COMP%]   .sidebar__logo[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 0;\n}\n\n.sidebar__logo-mark[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: var(--radius-sm);\n  background: var(--color-primary);\n  color: #fff;\n  font-size: 1.2rem;\n}\n\n.sidebar__logo-text[_ngcontent-%COMP%] {\n  font-family: var(--font-family-heading);\n  color: var(--color-sidebar-text);\n  font-size: 1.15rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n\n\n.sidebar__collapse-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: min(20rem, 50%);\n  right: -0.85rem;\n  width: 2.75rem;\n  height: 2.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid var(--color-border);\n  border-radius: 50%;\n  background: var(--color-card-bg);\n  color: var(--color-text-muted);\n  cursor: pointer;\n  font-size: 1rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);\n}\n\n\n.sidenav-nav[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n  overflow-y: auto;\n  \n  min-height: 0;\n}\n\n.sidenav-nav-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.sidenav-nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  height: 2.75rem;\n  padding: 0 0.75rem;\n  border-radius: var(--radius-md);\n  color: var(--color-sidebar-text-muted);\n  text-decoration: none;\n  font-size: 1rem;\n  font-weight: 500;\n  white-space: nowrap;\n  overflow: hidden;\n  transition: background-color 0.15s ease, color 0.15s ease;\n}\n\n.collapsed[_ngcontent-%COMP%]   .sidenav-nav-link[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 0;\n}\n\n.sidenav-nav-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.06);\n  color: var(--color-sidebar-text);\n}\n\n.sidenav-nav-link.active[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: var(--color-sidebar-text);\n}\n\n.sidenav-link-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 1.5rem;\n  font-size: 1.3rem;\n  text-align: center;\n  transition: font-size 0.3s ease;\n}\n\n\n.collapsed[_ngcontent-%COMP%]   .sidenav-link-icon[_ngcontent-%COMP%] {\n  width: auto;\n  font-size: 1.4rem;\n}\n\n.sidenav-link-text[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    width: 80%;\n    max-width: 18rem;\n    transform: translateX(-100%);\n    transition: transform 0.25s ease;\n  }\n\n  .sidebar.mobile-visible[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n\n  .sidebar.collapsed[_ngcontent-%COMP%] {\n    width: 80%;\n    max-width: 18rem;\n  }\n\n  .sidebar__collapse-btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCx3QkFBd0I7RUFDeEIseUNBQXlDO0VBQ3pDOztzRUFFb0U7RUFDcEUsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUEsZUFBZTtBQUNmO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO3lFQUN5RTtBQUN6RTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLGVBQWU7RUFDZixlQUFlO0VBQ2YseUNBQXlDO0FBQzNDOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQjswRUFDd0U7RUFDeEUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0Isc0NBQXNDO0VBQ3RDLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIseURBQXlEO0FBQzNEOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLCtCQUErQjtBQUNqQzs7QUFFQTs4QkFDOEI7QUFDOUI7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQSxxRUFBcUU7QUFDckU7RUFDRTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLGdDQUFnQztFQUNsQzs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFyIHtcbiAgd2lkdGg6IHZhcigtLXNpZGViYXItd2lkdGgpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMS4yNXJlbSAwLjc1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zaWRlYmFyLWJnKTtcbiAgLyogVHJhbnNpY2lvbmEgd2lkdGggKG5vIHRyYW5zZm9ybSkgYSBwcm9ww4PCs3NpdG86IGxheW91dC5jb21wb25lbnQuY3NzIHVzYVxuICAgICBtYXJnaW4tbGVmdCBwYXJhIHJlc2VydmFyIGVzdGUgbWlzbW8gYW5jaG8sIGFzw4PCrSBxdWUgZWwgY29udGVuaWRvXG4gICAgIG5lY2VzaXRhIGFuaW1hcnNlIGVuIHNpbmNyb27Dg8KtYSBjb24gZWwgcHJvcGlvIGFuY2hvIGRlbCBzaWRlYmFyLiAqL1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cyBlYXNlO1xuICB6LWluZGV4OiAxMDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jb2xsYXBzZWQge1xuICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aC1jb2xsYXBzZWQpO1xufVxuXG4vKiDDosKUwoDDosKUwoAgTG9nbyDDosKUwoDDosKUwoAgKi9cbi5zaWRlYmFyX19sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjZyZW07XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uY29sbGFwc2VkIC5zaWRlYmFyX19sb2dvIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5zaWRlYmFyX19sb2dvLW1hcmsge1xuICBmbGV4LXNocmluazogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAyLjI1cmVtO1xuICBoZWlnaHQ6IDIuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5zaWRlYmFyX19sb2dvLXRleHQge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktaGVhZGluZyk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zaWRlYmFyLXRleHQpO1xuICBmb250LXNpemU6IDEuMTVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBCb3TDg8KzbiBjb2xhcHNhciAoc29sbyBlc2NyaXRvcmlvKSDDosKUwoDDosKUwoBcbiAgIHRvcCBjbGFtcHMgYSA1MCUgcGFyYSBubyBzYWxpcnNlIGRlbCBzaWRlYmFyIGVuIHBhbnRhbGxhcyBtdXkgYmFqYXMuICovXG4uc2lkZWJhcl9fY29sbGFwc2UtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IG1pbigyMHJlbSwgNTAlKTtcbiAgcmlnaHQ6IC0wLjg1cmVtO1xuICB3aWR0aDogMi43NXJlbTtcbiAgaGVpZ2h0OiAyLjc1cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1jYXJkLWJnKTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBOYXZlZ2FjacODwrNuIMOiwpTCgMOiwpTCgCAqL1xuLnNpZGVuYXYtbmF2IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuN3JlbTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgLyogU2luIGVzdG8sIHVuIGZsZXggaXRlbSBjb24gb3ZlcmZsb3cgbm8gc2Nyb2xsZWEgeSBlbiBzdSBsdWdhclxuICAgICBkZXNib3JkYSBlbCBjb250ZW5lZG9yIChtaW4taGVpZ2h0OmF1dG8gcG9yIGRlZmVjdG8gZW4gZmxleCBpdGVtcykuICovXG4gIG1pbi1oZWlnaHQ6IDA7XG59XG5cbi5zaWRlbmF2LW5hdi1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zaWRlbmF2LW5hdi1saW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjlyZW07XG4gIGhlaWdodDogMi43NXJlbTtcbiAgcGFkZGluZzogMCAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2lkZWJhci10ZXh0LW11dGVkKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZSwgY29sb3IgMC4xNXMgZWFzZTtcbn1cblxuLmNvbGxhcHNlZCAuc2lkZW5hdi1uYXYtbGluayB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uc2lkZW5hdi1uYXYtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zaWRlYmFyLXRleHQpO1xufVxuXG4uc2lkZW5hdi1uYXYtbGluay5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNpZGViYXItdGV4dCk7XG59XG5cbi5zaWRlbmF2LWxpbmstaWNvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMS41cmVtO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlO1xufVxuXG4vKiBTaW4gZWwgbGFiZWwgYWwgbGFkbywgZWwgw4PCrWNvbm8gcHVlZGUgY3JlY2VyIHBhcmEgc2VndWlyIHNpZW5kb1xuICAgZsODwqFjaWwgZGUgcmVjb25vY2VyL3RvY2FyLiAqL1xuLmNvbGxhcHNlZCAuc2lkZW5hdi1saW5rLWljb24ge1xuICB3aWR0aDogYXV0bztcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5zaWRlbmF2LWxpbmstdGV4dCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vKiDDosKUwoDDosKUwoAgTW9iaWxlOiBkcmF3ZXIgb2ZmLWNhbnZhcywgYWJpZXJ0by9jZXJyYWRvIGRlc2RlIGVsIGhlYWRlciDDosKUwoDDosKUwoAgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc2lkZWJhciB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXgtd2lkdGg6IDE4cmVtO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2U7XG4gIH1cblxuICAuc2lkZWJhci5tb2JpbGUtdmlzaWJsZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG5cbiAgLnNpZGViYXIuY29sbGFwc2VkIHtcbiAgICB3aWR0aDogODAlO1xuICAgIG1heC13aWR0aDogMThyZW07XG4gIH1cblxuICAuc2lkZWJhcl9fY29sbGFwc2UtYnRuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);





class AuthService {
  constructor(http) {
    this.http = http;
    this.isLoggedInSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.getInitialLoggedInState());
    this.isLoggedIn$ = this.isLoggedInSubject.asObservable();
    this.basePath = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  get isLoggedIn() {
    return this.isLoggedInSubject.value;
  }
  getInitialLoggedInState() {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
  login(dni) {
    const url = `${this.basePath}/login/${dni}`;
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(response => {
      if (response) {
        localStorage.setItem('isLoggedIn', 'true');
        this.isLoggedInSubject.next(true);
      }
    }));
  }
  setLoggedIn(value) {
    this.isLoggedInSubject.next(value);
    localStorage.setItem('isLoggedIn', value.toString());
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4674:
/*!*********************************************!*\
  !*** ./src/app/services/members.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberService": () => (/* binding */ MemberService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8504);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class MemberService {
  constructor(http) {
    this.http = http;
    this.basePath = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/members`;
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  getMembersByName(name) {
    const trimmedName = name.trim();
    const url = trimmedName === '' ? `${this.basePath}/list` : `${this.basePath}/list?name=${trimmedName}`;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(2));
  }
  registerMember(personalData) {
    return this.http.post(`${this.basePath}/create`, personalData).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(2));
  }
  /**
   * Actualiza los datos personales de un miembro.
   * NOTA: este endpoint sigue la misma convención REST que
   * StudentService.updateStudent (`/student/update/{id}`), pero no hay
   * hoy un endpoint de "actualizar miembro" ya en uso en el resto del
   * código — falta confirmar con backend que `PUT /members/update/{id}`
   * exista con esa forma antes de dar el flujo de Perfil por probado.
   */
  updateMember(memberId, personalData) {
    return this.http.put(`${this.basePath}/update/${memberId}`, personalData);
  }
}
MemberService.ɵfac = function MemberService_Factory(t) {
  return new (t || MemberService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
MemberService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: MemberService,
  factory: MemberService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7091:
/*!********************************************!*\
  !*** ./src/app/services/season.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeasonService": () => (/* binding */ SeasonService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8504);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class SeasonService {
  constructor(http) {
    this.http = http;
    this.basePath = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/season`;
  }
  getSeasonList(user_id) {
    const url = `${this.basePath}/list/${user_id}`;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.retry)(2));
  }
}
SeasonService.ɵfac = function SeasonService_Factory(t) {
  return new (t || SeasonService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
SeasonService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: SeasonService,
  factory: SeasonService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4339:
/*!*********************************************!*\
  !*** ./src/app/services/student.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentService": () => (/* binding */ StudentService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 8504);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class StudentService {
  constructor(http) {
    this.http = http;
    this.basePath = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  getStudentSeasons(user_id) {
    const url = `${this.basePath}/season/${user_id}`;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(2));
  }
  getCoursesCompleted(user_id) {
    const url = `${this.basePath}/season/course/${user_id}`;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(2));
  }
  getStudentList() {
    const url = `${this.basePath}/student/list`;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(2));
  }
  getStudentCount(periodo_id) {
    const url = `${this.basePath}/student/count?periodo=${periodo_id}`;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(2));
  }
  getStudentActivePeriodList() {
    const url = `${this.basePath}/student/period`;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(2));
  }
  getTeacherList(teacher_id) {
    const url = `${this.basePath}/teacher/list/${teacher_id}`;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(2));
  }
  inscribirStudent(data) {
    const url = `${this.basePath}/student/create`;
    return this.http.post(url, data, this.httpOptions);
  }
  createDeclarativaStudent(cursoslist, member_id) {
    const url = `${this.basePath}/student/declarativa`;
    return this.http.post(url, {
      cursos: cursoslist,
      member_id: member_id
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.retry)(2));
  }
  updateStudent(studentId, updatedData) {
    const url = `${this.basePath}/student/update/${studentId}`;
    return this.http.put(url, updatedData);
  }
  uploadVoucher(voucherData) {
    const url = `${this.basePath}/vouchers/create`;
    return this.http.post(url, voucherData);
  }
  deleteStudent(studentId) {
    const url = `${this.basePath}/student/delete/${studentId}`;
    return this.http.delete(url);
  }
}
StudentService.ɵfac = function StudentService_Factory(t) {
  return new (t || StudentService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
StudentService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: StudentService,
  factory: StudentService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  apiUrl: 'https://ecmvirtual.alianzacnc.org/backend/ecm'
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map