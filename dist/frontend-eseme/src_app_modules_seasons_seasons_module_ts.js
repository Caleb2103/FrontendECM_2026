"use strict";
(self["webpackChunkFrontendEseme"] = self["webpackChunkFrontendEseme"] || []).push([["src_app_modules_seasons_seasons_module_ts"],{

/***/ 1143:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/components-dialogs/season-detail-dialog/season-detail-dialog.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeasonDetailDialogComponent": () => (/* binding */ SeasonDetailDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




class SeasonDetailDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.ciclo = data.ciclo;
  }
  get levelText() {
    const level = this.ciclo.stud_season.seas_course.cour_level;
    return level === 4 ? 'Básico' : `Nivel ${level}`;
  }
  get teacherName() {
    const teacher = this.ciclo.stud_season.seas_teacher;
    return `${teacher.memb_name} ${teacher.memb_surname}`;
  }
  get notaBadgeClass() {
    const nota = this.ciclo.seas_final;
    if (nota == null) return 'none';
    return nota >= 13 ? 'aprobado' : 'reprobado';
  }
  onClose() {
    this.dialogRef.close();
  }
}
SeasonDetailDialogComponent.ɵfac = function SeasonDetailDialogComponent_Factory(t) {
  return new (t || SeasonDetailDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
};
SeasonDetailDialogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SeasonDetailDialogComponent,
  selectors: [["app-season-detail-dialog"]],
  decls: 53,
  vars: 9,
  consts: [[1, "detail-dialog"], [1, "dialog-header"], ["mat-dialog-title", "", 1, "dialog-title"], ["mat-dialog-content", "", 1, "dialog-body"], [1, "course-summary"], [1, "course-summary-icon"], [1, "bx", "bxs-book-content"], [1, "course-summary-text"], [1, "course-name"], [1, "level-badge"], [1, "detail-grid"], [1, "detail-row"], [1, "detail-label"], [1, "bx", "bx-calendar"], [1, "detail-value"], [1, "bx", "bx-calendar-check"], [1, "bx", "bx-calendar-x"], [1, "bx", "bx-time"], [1, "bx", "bx-user"], [1, "bx", "bx-check-circle"], [1, "nota-badge", 3, "ngClass"], ["mat-dialog-actions", "", 1, "dialog-actions"], ["type", "button", 1, "btn-primary", 3, "click"]],
  template: function SeasonDetailDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Detalle del curso");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "h3", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Ciclo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11)(21, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Fecha de inicio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11)(27, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Fecha de finalizaci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11)(33, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Turno");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11)(39, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Profesor");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11)(45, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Nota final");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 21)(51, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SeasonDetailDialogComponent_Template_button_click_51_listener() {
        return ctx.onClose();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Cerrar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ciclo.stud_season.seas_course.cour_description);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.levelText);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ciclo.stud_season.seas_period.peri_description);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ciclo.stud_season.seas_period.peri_start);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ciclo.stud_season.seas_period.peri_end);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.ciclo.stud_season.seas_schedule.sche_description);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.teacherName);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.notaBadgeClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ciclo.seas_final != null ? ctx.ciclo.seas_final : "\u2014", " ");
    }
  },
  dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass],
  styles: [".detail-dialog[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  width: 100%;\n  max-width: 560px;\n}\n\n\n.dialog-header[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-border);\n}\n\n.dialog-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-heading);\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0;\n  padding: 0 0 1rem 1rem;\n}\n\n\n.dialog-body[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem;\n}\n\n.course-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 0.5rem;\n}\n\n.course-summary-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 3rem;\n  height: 3rem;\n  border-radius: var(--radius-md);\n  background: var(--color-primary-soft);\n  color: var(--color-primary);\n  font-size: 1.5rem;\n}\n\n.course-name[_ngcontent-%COMP%] {\n  font-family: var(--font-family-heading);\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 0.35rem;\n  line-height: 1.3;\n}\n\n.level-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n  background: var(--color-page-bg);\n  color: var(--color-text-muted);\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n\n.detail-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.5rem 0;\n  border-bottom: 1px solid var(--color-page-bg);\n}\n\n.detail-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.detail-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: var(--color-text-muted);\n  white-space: nowrap;\n}\n\n.detail-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--color-primary);\n}\n\n.detail-value[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--color-text);\n  text-align: right;\n}\n\n.nota-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 2.25rem;\n  padding: 0.25rem 0.6rem;\n  border-radius: 20px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 0.85rem;\n}\n\n.nota-badge.aprobado[_ngcontent-%COMP%]  { background: var(--color-success-soft); color: var(--color-success); }\n.nota-badge.reprobado[_ngcontent-%COMP%] { background: var(--color-danger-soft); color: var(--color-danger); }\n.nota-badge.none[_ngcontent-%COMP%]      { background: var(--color-page-bg); color: var(--color-text-muted); }\n\n\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 1rem 1.5rem 1.5rem;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  padding: 0.6rem 1.5rem;\n  background: var(--color-primary);\n  color: white;\n  border: none;\n  border-radius: var(--radius-sm);\n  font-family: var(--font-family-base);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-hover);\n}\n\n@media (max-width: 480px) {\n  .detail-dialog[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb21wb25lbnRzLWRpYWxvZ3Mvc2Vhc29uLWRldGFpbC1kaWFsb2cvc2Vhc29uLWRldGFpbC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztFQUNwQyxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBLGtFQUFrRTtBQUNsRTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBLGtFQUFrRTtBQUNsRTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztFQUNULHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixxQ0FBcUM7RUFDckMsMkJBQTJCO0VBQzNCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQSx3QkFBd0IscUNBQXFDLEVBQUUsMkJBQTJCLEVBQUU7QUFDNUYsd0JBQXdCLG9DQUFvQyxFQUFFLDBCQUEwQixFQUFFO0FBQzFGLHdCQUF3QixnQ0FBZ0MsRUFBRSw4QkFBOEIsRUFBRTs7QUFFMUYsa0VBQWtFO0FBQ2xFO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixZQUFZO0VBQ1osK0JBQStCO0VBQy9CLG9DQUFvQztFQUNwQyxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWwtZGlhbG9nIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJhc2UpO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1NjBweDtcbn1cblxuLyogw6LClMKAw6LClMKAIEhlYWRlciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5kaWFsb2ctaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG59XG5cbi5kaWFsb2ctdGl0bGUge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktaGVhZGluZyk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwIDFyZW0gMXJlbTtcbn1cblxuLyogw6LClMKAw6LClMKAIEJvZHkgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uZGlhbG9nLWJvZHkge1xuICBwYWRkaW5nOiAxLjI1cmVtIDEuNXJlbTtcbn1cblxuLmNvdXJzZS1zdW1tYXJ5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5jb3Vyc2Utc3VtbWFyeS1pY29uIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogM3JlbTtcbiAgaGVpZ2h0OiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LXNvZnQpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uY291cnNlLW5hbWUge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktaGVhZGluZyk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICBtYXJnaW46IDAgMCAwLjM1cmVtO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuXG4ubGV2ZWwtYmFkZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuMnJlbSAwLjZyZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXBhZ2UtYmcpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmRldGFpbC1ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmRldGFpbC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wYWdlLWJnKTtcbn1cblxuLmRldGFpbC1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5kZXRhaWwtbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5kZXRhaWwtbGFiZWwgaSB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5kZXRhaWwtdmFsdWUge1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5ub3RhLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDIuMjVyZW07XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC42cmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cblxuLm5vdGEtYmFkZ2UuYXByb2JhZG8gIHsgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VjY2Vzcy1zb2Z0KTsgY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3MpOyB9XG4ubm90YS1iYWRnZS5yZXByb2JhZG8geyBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1kYW5nZXItc29mdCk7IGNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXIpOyB9XG4ubm90YS1iYWRnZS5ub25lICAgICAgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wYWdlLWJnKTsgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpOyB9XG5cbi8qIMOiwpTCgMOiwpTCgCBBY3Rpb25zIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmRpYWxvZy1hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW0gMS41cmVtO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBwYWRkaW5nOiAwLjZyZW0gMS41cmVtO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeS1ob3Zlcik7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuZGV0YWlsLWRpYWxvZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1087:
/*!******************************************************!*\
  !*** ./src/app/modules/seasons/seasons.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeasonsComponent": () => (/* binding */ SeasonsComponent)
/* harmony export */ });
/* harmony import */ var _components_dialogs_season_detail_dialog_season_detail_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components-dialogs/season-detail-dialog/season-detail-dialog.component */ 1143);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/student.service */ 4339);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);











function SeasonsComponent_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Periodo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SeasonsComponent_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r17.stud_season.seas_period.peri_description, " ");
  }
}
function SeasonsComponent_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Curso");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SeasonsComponent_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r18.stud_season.seas_course.cour_description, " ");
  }
}
function SeasonsComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Profesor");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SeasonsComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r19.stud_season.seas_teacher.memb_name + " " + element_r19.stud_season.seas_teacher.memb_surname, " ");
  }
}
function SeasonsComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Modo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SeasonsComponent_td_20_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Virtual ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function SeasonsComponent_td_20_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Online ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function SeasonsComponent_td_20_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Presencial ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function SeasonsComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, SeasonsComponent_td_20_ng_container_1_Template, 4, 0, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, SeasonsComponent_td_20_ng_container_2_Template, 4, 0, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, SeasonsComponent_td_20_ng_container_3_Template, 4, 0, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", element_r20.stud_season.seas_mode.mode_name === "Virtual");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", element_r20.stud_season.seas_mode.mode_name === "Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", element_r20.stud_season.seas_mode.mode_name === "Presencial");
  }
}
function SeasonsComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Nota");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    aprobado: a0,
    reprobado: a1,
    none: a2
  };
};
function SeasonsComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 33)(1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](2, _c0, element_r24.seas_final >= 13, element_r24.seas_final < 13 && element_r24.seas_final !== null, element_r24.seas_final === null));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r24.seas_final !== null ? element_r24.seas_final : "\u2014", " ");
  }
}
function SeasonsComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SeasonsComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 33)(1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SeasonsComponent_td_26_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27);
      const element_r25 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r26.verDetalles(element_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ver detalles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function SeasonsComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 42);
  }
}
function SeasonsComponent_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 43);
  }
}
function SeasonsComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function SeasonsComponent_div_50_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Virtual");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function SeasonsComponent_div_50_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
function SeasonsComponent_div_50_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Presencial");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
}
const _c1 = function (a0, a1) {
  return {
    "status-truncal": a0,
    "status-electivo": a1
  };
};
function SeasonsComponent_div_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46)(1, "div", 47)(2, "div", 48)(3, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h3", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 54)(14, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, SeasonsComponent_div_50_ng_container_15_Template, 4, 0, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, SeasonsComponent_div_50_ng_container_16_Template, 4, 0, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, SeasonsComponent_div_50_ng_container_17_Template, 4, 0, "ng-container", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const element_r29 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r15.getLevelText(element_r29.stud_season.seas_course.cour_level));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r29.stud_season.seas_period.peri_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](12, _c1, ctx_r15.getStatusText(element_r29) === "TRONCAL", ctx_r15.getStatusText(element_r29) === "ELECTIVO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r15.getStatusText(element_r29), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r29.stud_season.seas_course.cour_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r29.stud_season.seas_teacher.memb_name + " " + element_r29.stud_season.seas_teacher.memb_surname === "PROFESOR NO CONOCIDO" ? "PROFESOR ZONAL" : element_r29.stud_season.seas_teacher.memb_name + " " + element_r29.stud_season.seas_teacher.memb_surname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", element_r29.stud_season.seas_mode.mode_name === "Virtual");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", element_r29.stud_season.seas_mode.mode_name === "Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", element_r29.stud_season.seas_mode.mode_name === "Presencial");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r29.stud_season.seas_schedule.sche_starttime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r29.stud_season.seas_period.peri_start);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r29.seas_final !== null ? element_r29.seas_final : "-");
  }
}
function SeasonsComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c2 = function () {
  return [5, 10, 15, 20];
};
class SeasonsComponent {
  constructor(dialog, studentService) {
    this.dialog = dialog;
    this.studentService = studentService;
    this.studentSeasons = [];
    this.filteredStudentSeasons = []; // Para la vista móvil
    this.displayedColumns = ['period', 'course', 'teacher', 'mode', 'note', 'actions'];
    this.selectedCategories = new Set(['All']);
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource();
    this.loading = false;
    // Mobile filter properties
    this.searchTerm = '';
    this.selectedFilter = 'all';
  }
  ngOnInit() {
    this.getData();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getData() {
    this.loading = true;
    let userId = localStorage.getItem('userId');
    userId = userId ?? '1';
    this.studentService.getStudentSeasons(parseInt(userId)).subscribe({
      next: data => {
        this.studentSeasons = data.sort((a, b) => {
          const periodIdA = a.stud_season.seas_period.peri_id;
          const periodIdB = b.stud_season.seas_period.peri_id;
          return periodIdB - periodIdA; // Mayor a menor
        });

        this.filteredStudentSeasons = [...data];
        this.dataSource.data = this.studentSeasons;
        this.dataSource.paginator = this.paginator;
        this.loading = false;
      },
      error: error => {
        console.error('Error al obtener los datos:', error);
        this.loading = false;
      }
    });
  }
  verDetalles(ciclo) {
    this.dialog.open(_components_dialogs_season_detail_dialog_season_detail_dialog_component__WEBPACK_IMPORTED_MODULE_0__.SeasonDetailDialogComponent, {
      maxWidth: '95vw',
      data: {
        ciclo: ciclo
      }
    });
  }
  // ========== MOBILE FILTER METHODS ==========
  filterByLevel(level) {
    this.selectedFilter = level;
    this.applyFilters();
  }
  filterCourses() {
    this.applyFilters();
  }
  applyFilters() {
    let filtered = [...this.studentSeasons];
    // Filter by level
    if (this.selectedFilter !== 'all') {
      filtered = filtered.filter(season => season.stud_season.seas_course.cour_level === this.selectedFilter);
    }
    // Filter by search term
    if (this.searchTerm.trim()) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(season => {
        const courseName = season.stud_season.seas_course.cour_description.toLowerCase();
        const teacherName = (season.stud_season.seas_teacher.memb_name + ' ' + season.stud_season.seas_teacher.memb_surname).toLowerCase();
        return courseName.includes(searchLower) || teacherName.includes(searchLower);
      });
    }
    this.filteredStudentSeasons = filtered;
  }
  // ========== HELPER METHODS FOR MOBILE VIEW ==========
  getLevelText(level) {
    if (level === 4) return 'Básico';
    return `Nivel ${level}`;
  }
  getStatusText(element) {
    const course_type = element.stud_season.seas_course.cour_type;
    return course_type.toUpperCase();
  }
  getCourseSchedule(element) {
    return element.stud_season.seas_schedule.sche_starttime;
  }
  getCourseStartDate(element) {
    return element.stud_season.seas_period.peri_description || '-';
  }
}
SeasonsComponent.ɵfac = function SeasonsComponent_Factory(t) {
  return new (t || SeasonsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__.StudentService));
};
SeasonsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: SeasonsComponent,
  selectors: [["app-seasons"]],
  viewQuery: function SeasonsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    }
  },
  decls: 52,
  vars: 18,
  consts: [[1, "content"], [1, "desktop-view"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "table-card"], ["mat-table", "", 1, "custom-mat-table", 3, "dataSource"], ["matColumnDef", "period"], ["mat-header-cell", "", "class", "th-column", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "td-column", 4, "matCellDef"], ["matColumnDef", "course"], ["mat-cell", "", "class", "td-column td-course", 4, "matCellDef"], ["matColumnDef", "teacher"], ["matColumnDef", "mode"], ["matColumnDef", "note"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "spinner-container", 4, "ngIf"], [3, "pageSize", "pageSizeOptions"], [1, "mobile-view"], [1, "mobile-header"], ["routerLink", "/menu", "aria-label", "Volver", 1, "back-button"], ["aria-hidden", "true", 1, "bx", "bx-chevron-left"], [1, "mobile-title"], [1, "search-container"], ["type", "text", "placeholder", "Buscar", 1, "search-input", 3, "ngModel", "ngModelChange", "input"], [1, "bx", "bx-search", "search-icon"], [1, "filter-chips"], [1, "chip", 3, "click"], [1, "courses-list"], ["class", "course-card", 4, "ngFor", "ngForOf"], ["mat-header-cell", "", 1, "th-column"], ["mat-cell", "", 1, "td-column"], ["mat-cell", "", 1, "td-column", "td-course"], [4, "ngIf"], [1, "icon-with-text"], [1, "bx", "bxl-zoom", "icon"], [1, "bx", "bx-desktop", "icon"], [1, "bx", "bx-user", "icon"], [1, "nota-badge", 3, "ngClass"], [1, "link-detail", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "spinner-container"], [1, "spinner"], [1, "course-card"], [1, "card-header"], [1, "card-level-info"], [1, "level-badge"], [1, "course-code"], [1, "status-badge", 3, "ngClass"], [1, "course-title"], [1, "teacher-name"], [1, "course-info-grid"], [1, "info-item"], [1, "bx", "bx-time"], [1, "bx", "bx-calendar"], [1, "bx", "bx-check-circle"], [1, "bx", "bxl-zoom"], [1, "bx", "bx-desktop"], [1, "bx", "bx-building"]],
  template: function SeasonsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Ciclos");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Historial de cursos matriculados");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "table", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SeasonsComponent_th_10_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SeasonsComponent_td_11_Template, 2, 1, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, SeasonsComponent_th_13_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, SeasonsComponent_td_14_Template, 2, 1, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](15, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, SeasonsComponent_th_16_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, SeasonsComponent_td_17_Template, 2, 1, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](18, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, SeasonsComponent_th_19_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, SeasonsComponent_td_20_Template, 4, 3, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](21, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, SeasonsComponent_th_22_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, SeasonsComponent_td_23_Template, 3, 6, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](24, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, SeasonsComponent_th_25_Template, 2, 0, "th", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, SeasonsComponent_td_26_Template, 3, 0, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, SeasonsComponent_tr_27_Template, 1, 0, "tr", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, SeasonsComponent_tr_28_Template, 1, 0, "tr", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, SeasonsComponent_div_29_Template, 2, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "mat-paginator", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 20)(32, "div", 21)(33, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "h1", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Mis Notas");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 25)(38, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SeasonsComponent_Template_input_ngModelChange_38_listener($event) {
        return ctx.searchTerm = $event;
      })("input", function SeasonsComponent_Template_input_input_38_listener() {
        return ctx.filterCourses();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 28)(41, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SeasonsComponent_Template_button_click_41_listener() {
        return ctx.filterByLevel("all");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, " Todos ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SeasonsComponent_Template_button_click_43_listener() {
        return ctx.filterByLevel(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, " Nivel 1 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SeasonsComponent_Template_button_click_45_listener() {
        return ctx.filterByLevel(2);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Nivel 2 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SeasonsComponent_Template_button_click_47_listener() {
        return ctx.filterByLevel(3);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, " Nivel 3 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, SeasonsComponent_div_50_Template, 30, 15, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, SeasonsComponent_div_51_Template, 2, 0, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSize", 5)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.searchTerm);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selectedFilter === "all");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selectedFilter === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selectedFilter === 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.selectedFilter === 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filteredStudentSeasons);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel],
  styles: ["[_nghost-%COMP%] {\n  font-family: var(--font-family-base);\n}\n\n\n.table-card[_ngcontent-%COMP%] {\n  background: var(--color-card-bg);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  overflow-x: auto;\n}\n\n.custom-mat-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-mdc-table[_ngcontent-%COMP%]   .mdc-data-table__header-row[_ngcontent-%COMP%] {\n  background-color: var(--color-card-bg);\n  border-bottom: 1px solid var(--color-border);\n}\n\n.th-column[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n  font-weight: 700;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n\n.td-column[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n  color: var(--color-text);\n}\n\n.td-course[_ngcontent-%COMP%] {\n  font-weight: 700;\n  max-width: 260px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.icon-with-text[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n\n.icon-with-text[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 1.1rem;\n}\n\n.nota-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 2.25rem;\n  padding: 0.25rem 0.6rem;\n  border-radius: 20px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 0.85rem;\n}\n\n.nota-badge.aprobado[_ngcontent-%COMP%]  { background: var(--color-success-soft); color: var(--color-success); }\n.nota-badge.reprobado[_ngcontent-%COMP%] { background: var(--color-danger-soft); color: var(--color-danger); }\n.nota-badge.none[_ngcontent-%COMP%]      { background: var(--color-page-bg); color: var(--color-text-muted); }\n\n.link-detail[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--color-primary);\n  font-weight: 700;\n  font-size: 0.9rem;\n  cursor: pointer;\n  padding: 0;\n  font-family: var(--font-family-base);\n}\n\n.link-detail[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n\n.spinner-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: 0.5rem;\n  border: 4px solid var(--color-border);\n  border-top: 4px solid var(--color-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n\n.mobile-view[_ngcontent-%COMP%] { display: none; }\n\n@media (max-width: 768px) {\n  .desktop-view[_ngcontent-%COMP%] { display: none; }\n  .mobile-view[_ngcontent-%COMP%]  { display: block; }\n}\n\n\n\n.mobile-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.7rem;\n}\n\n.back-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  border-radius: 50%;\n  color: var(--color-text);\n  font-size: 1.7rem;\n  flex-shrink: 0;\n  padding: 0;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.mobile-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-heading);\n  font-size: 1.25rem;\n  font-weight: 600;\n  margin: 0;\n  color: var(--color-text);\n}\n\n.search-container[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1.5rem;\n}\n\n.search-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.9rem 3rem 0.9rem 1rem;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-md);\n  font-family: var(--font-family-base);\n  font-size: 15px;\n  background-color: var(--color-card-bg);\n  box-sizing: border-box;\n}\n\n.search-input[_ngcontent-%COMP%]::placeholder { color: var(--color-text-muted); }\n\n.search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary);\n}\n\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 22px;\n  color: var(--color-text-muted);\n  pointer-events: none;\n}\n\n.filter-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  overflow-x: auto;\n  padding-bottom: 0.75rem;\n  margin-bottom: 0.25rem;\n}\n\n.chip[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 0.5rem 1rem;\n  border: 1px solid var(--color-border);\n  border-radius: 20px;\n  background-color: var(--color-card-bg);\n  font-family: var(--font-family-base);\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-text-muted);\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.chip.active[_ngcontent-%COMP%] {\n  background-color: var(--color-primary);\n  border-color: var(--color-primary);\n  color: white;\n}\n\n.courses-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n\n.course-card[_ngcontent-%COMP%] {\n  background-color: var(--color-card-bg);\n  border-radius: var(--radius-lg);\n  padding: 1.1rem;\n  border: 1px solid var(--color-border);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.75rem;\n}\n\n.card-level-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n\n.level-badge[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-text-muted);\n}\n\n.course-code[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--color-text-muted);\n}\n\n.status-badge[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.8rem;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.status-truncal[_ngcontent-%COMP%]  { background-color: var(--color-warning-soft); color: var(--color-warning); }\n.status-electivo[_ngcontent-%COMP%] { background-color: var(--color-success-soft); color: var(--color-success); }\n\n.course-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-heading);\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 0.4rem;\n  line-height: 1.3;\n}\n\n.teacher-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--color-text-muted);\n  margin: 0 0 0.9rem;\n}\n\n.course-info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.7rem;\n}\n\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 13px;\n  color: var(--color-text-muted);\n}\n\n.info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: var(--color-primary);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9zZWFzb25zL3NlYXNvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQSxrRUFBa0U7QUFDbEU7RUFDRSxnQ0FBZ0M7RUFDaEMscUNBQXFDO0VBQ3JDLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBLHdCQUF3QixxQ0FBcUMsRUFBRSwyQkFBMkIsRUFBRTtBQUM1Rix3QkFBd0Isb0NBQW9DLEVBQUUsMEJBQTBCLEVBQUU7QUFDMUYsd0JBQXdCLGdDQUFnQyxFQUFFLDhCQUE4QixFQUFFOztBQUUxRjtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFVBQVU7RUFDVixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUEsa0VBQWtFO0FBQ2xFO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QscUNBQXFDO0VBQ3JDLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsS0FBSyx1QkFBdUIsRUFBRTtFQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ3BDOztBQUVBLGtFQUFrRTtBQUNsRSxlQUFlLGFBQWEsRUFBRTs7QUFFOUI7RUFDRSxnQkFBZ0IsYUFBYSxFQUFFO0VBQy9CLGdCQUFnQixjQUFjLEVBQUU7QUFDbEM7O0FBRUE7O29FQUVvRTs7QUFFcEU7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFVBQVU7RUFDVix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1Qsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMscUNBQXFDO0VBQ3JDLCtCQUErQjtFQUMvQixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxzQkFBc0I7QUFDeEI7O0FBRUEsNkJBQTZCLDhCQUE4QixFQUFFOztBQUU3RDtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUiwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixxQ0FBcUM7RUFDckMsbUJBQW1CO0VBQ25CLHNDQUFzQztFQUN0QyxvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxrQ0FBa0M7RUFDbEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUEsbUJBQW1CLDJDQUEyQyxFQUFFLDJCQUEyQixFQUFFO0FBQzdGLG1CQUFtQiwyQ0FBMkMsRUFBRSwyQkFBMkIsRUFBRTs7QUFFN0Y7RUFDRSx1Q0FBdUM7RUFDdkMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDJCQUEyQjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJhc2UpO1xufVxuXG4vKiDDosKUwoDDosKUwoAgVGFibGEgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4udGFibGUtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWNhcmQtYmcpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4uY3VzdG9tLW1hdC10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LW1kYy10YWJsZSAubWRjLWRhdGEtdGFibGVfX2hlYWRlci1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXJkLWJnKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG59XG5cbi50aC1jb2x1bW4ge1xuICBwYWRkaW5nOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbn1cblxuLnRkLWNvbHVtbiB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbn1cblxuLnRkLWNvdXJzZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1heC13aWR0aDogMjYwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uaWNvbi13aXRoLXRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjRyZW07XG59XG5cbi5pY29uLXdpdGgtdGV4dCAuaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5ub3RhLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDIuMjVyZW07XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC42cmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cblxuLm5vdGEtYmFkZ2UuYXByb2JhZG8gIHsgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VjY2Vzcy1zb2Z0KTsgY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3MpOyB9XG4ubm90YS1iYWRnZS5yZXByb2JhZG8geyBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1kYW5nZXItc29mdCk7IGNvbG9yOiB2YXIoLS1jb2xvci1kYW5nZXIpOyB9XG4ubm90YS1iYWRnZS5ub25lICAgICAgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wYWdlLWJnKTsgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpOyB9XG5cbi5saW5rLWRldGFpbCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG59XG5cbi5saW5rLWRldGFpbDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4vKiDDosKUwoDDosKUwoAgU3Bpbm5lciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5zcGlubmVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uc3Bpbm5lciB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMC41cmVtO1xuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDAuN3MgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBWaXNpYmlsaWRhZCBlc2NyaXRvcmlvIC8gbcODwrN2aWwgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ubW9iaWxlLXZpZXcgeyBkaXNwbGF5OiBub25lOyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZGVza3RvcC12aWV3IHsgZGlzcGxheTogbm9uZTsgfVxuICAubW9iaWxlLXZpZXcgIHsgZGlzcGxheTogYmxvY2s7IH1cbn1cblxuLyogw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXG4gICBWSVNUQSBNw4PCk1ZJTFxuICAgw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQICovXG5cbi5tb2JpbGUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xufVxuXG4uYmFjay1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiAwO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubW9iaWxlLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWhlYWRpbmcpO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xufVxuXG4uc2VhcmNoLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4uc2VhcmNoLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuOXJlbSAzcmVtIDAuOXJlbSAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FyZC1iZyk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHsgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpOyB9XG5cbi5zZWFyY2gtaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc2VhcmNoLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxcmVtO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5maWx0ZXItY2hpcHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNXJlbTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG59XG5cbi5jaGlwIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXJkLWJnKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJhc2UpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY2hpcC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY291cnNlcy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjg3NXJlbTtcbn1cblxuLmNvdXJzZS1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FyZC1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIHBhZGRpbmc6IDEuMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbn1cblxuLmNhcmQtbGV2ZWwtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC4yNXJlbTtcbn1cblxuLmxldmVsLWJhZGdlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG59XG5cbi5jb3Vyc2UtY29kZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xufVxuXG4uc3RhdHVzLWJhZGdlIHtcbiAgcGFkZGluZzogMC4zNXJlbSAwLjhyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnN0YXR1cy10cnVuY2FsICB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXdhcm5pbmctc29mdCk7IGNvbG9yOiB2YXIoLS1jb2xvci13YXJuaW5nKTsgfVxuLnN0YXR1cy1lbGVjdGl2byB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3Mtc29mdCk7IGNvbG9yOiB2YXIoLS1jb2xvci1zdWNjZXNzKTsgfVxuXG4uY291cnNlLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWhlYWRpbmcpO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgbWFyZ2luOiAwIDAgMC40cmVtO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuXG4udGVhY2hlci1uYW1lIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG4gIG1hcmdpbjogMCAwIDAuOXJlbTtcbn1cblxuLmNvdXJzZS1pbmZvLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBnYXA6IDAuN3JlbTtcbn1cblxuLmluZm8taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC40cmVtO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbn1cblxuLmluZm8taXRlbSBpIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3899:
/*!***************************************************!*\
  !*** ./src/app/modules/seasons/seasons.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeasonsModule": () => (/* binding */ SeasonsModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _seasons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seasons.component */ 1087);
/* harmony import */ var _components_dialogs_season_detail_dialog_season_detail_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components-dialogs/season-detail-dialog/season-detail-dialog.component */ 1143);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);










const seasonRoutes = [{
  path: '',
  component: _seasons_component__WEBPACK_IMPORTED_MODULE_0__.SeasonsComponent
}];
class SeasonsModule {}
SeasonsModule.ɵfac = function SeasonsModule_Factory(t) {
  return new (t || SeasonsModule)();
};
SeasonsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: SeasonsModule
});
SeasonsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(seasonRoutes), _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginatorModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SeasonsModule, {
    declarations: [_seasons_component__WEBPACK_IMPORTED_MODULE_0__.SeasonsComponent, _components_dialogs_season_detail_dialog_season_detail_dialog_component__WEBPACK_IMPORTED_MODULE_1__.SeasonDetailDialogComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginatorModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule],
    exports: [_seasons_component__WEBPACK_IMPORTED_MODULE_0__.SeasonsComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_seasons_seasons_module_ts.js.map