"use strict";
(self["webpackChunkFrontendEseme"] = self["webpackChunkFrontendEseme"] || []).push([["src_app_modules_progres_progres_module_ts"],{

/***/ 4269:
/*!******************************************************!*\
  !*** ./src/app/modules/progres/progres.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgresComponent": () => (/* binding */ ProgresComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_courses_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/courses.service */ 5549);
/* harmony import */ var src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/student.service */ 4339);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function ProgresComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProgresComponent_ng_container_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "h2", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const level_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](level_r4.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", level_r4.percentage, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", level_r4.percentage, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", level_r4.completedCount, " de ", level_r4.totalCount, " cursos completados");
  }
}
function ProgresComponent_ng_container_7_div_6_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 24)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const course_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](course_r7.cour_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r6.isCourseCompleted(course_r7) ? "bxs-check-circle completed" : "bx-circle");
  }
}
function ProgresComponent_ng_container_7_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProgresComponent_ng_container_7_div_6_li_4_Template, 4, 2, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const level_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](level_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", level_r5.courses);
  }
}
function ProgresComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProgresComponent_ng_container_7_div_2_Template, 10, 6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Detalle de cursos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ProgresComponent_ng_container_7_div_6_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.levelProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.levelProgress);
  }
}
class ProgresComponent {
  constructor(courseService, studentService) {
    this.courseService = courseService;
    this.studentService = studentService;
    this.courses = [];
    this.completedCourses = [];
    this.levelProgress = [];
    this.loading = false;
  }
  ngOnInit() {
    this.getCoursesList();
    this.getCoursesCompleted();
  }
  getCoursesList() {
    this.courseService.getCoursesList().subscribe({
      next: data => {
        this.courses = data;
      },
      error: error => {
        console.error('Error al obtener los datos:', error);
      }
    });
  }
  getCoursesCompleted() {
    this.loading = true;
    let userId = localStorage.getItem('userId');
    userId = userId ?? '1';
    this.studentService.getCoursesCompleted(parseInt(userId)).subscribe({
      next: data => {
        this.completedCourses = data;
        this.updateLevelProgress();
      },
      error: error => {
        console.error('Error al obtener los datos:', error);
      }
    });
  }
  getUniqueLevels() {
    return this.courses.map(course => course.cour_level).filter((value, index, self) => self.indexOf(value) === index);
  }
  getLevelCourses(level, filter) {
    let filteredCourses = filter ? this.courses.filter(filter) : this.courses;
    let levelCourses = filteredCourses.filter(course => course.cour_level === level);
    levelCourses.sort((a, b) => a.cour_description.localeCompare(b.cour_description));
    return levelCourses;
  }
  /** "Nivel 4" y "Nivel 0" son ambos, por convención de datos, el nivel Básico. */
  getLevelLabel(level) {
    return level === 4 || level === 0 ? 'Básico' : `Nivel ${level}`;
  }
  isCourseCompleted(course) {
    return this.completedCourses.some(completedCourse => completedCourse.stud_season.seas_course.cour_id === course.cour_id);
  }
  /** El nivel Básico (0 o 4) siempre va primero; el resto, ascendente. */
  levelSortKey(level) {
    return level === 4 || level === 0 ? -1 : level;
  }
  updateLevelProgress() {
    this.levelProgress = this.getUniqueLevels().map(level => {
      const courses = this.getLevelCourses(level);
      const completedCount = courses.filter(course => this.isCourseCompleted(course)).length;
      const totalCount = courses.length;
      return {
        level,
        label: this.getLevelLabel(level),
        courses,
        completedCount,
        totalCount,
        percentage: totalCount > 0 ? Math.round(completedCount / totalCount * 100) : 0
      };
    }).sort((a, b) => this.levelSortKey(a.level) - this.levelSortKey(b.level));
    this.loading = false;
  }
}
ProgresComponent.ɵfac = function ProgresComponent_Factory(t) {
  return new (t || ProgresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_courses_service__WEBPACK_IMPORTED_MODULE_0__.CourseService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_student_service__WEBPACK_IMPORTED_MODULE_1__.StudentService));
};
ProgresComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProgresComponent,
  selectors: [["app-progres"]],
  decls: 8,
  vars: 2,
  consts: [[1, "content"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], ["class", "spinner-container", 4, "ngIf"], [4, "ngIf"], [1, "spinner-container"], [1, "spinner"], [1, "level-cards"], ["class", "level-card", 4, "ngFor", "ngForOf"], [1, "section-title"], [1, "courses-detail"], ["class", "courses-detail-card", 4, "ngFor", "ngForOf"], [1, "level-card"], [1, "level-card-header"], [1, "level-card-title"], [1, "level-card-pct"], [1, "progress-track"], [1, "progress-fill"], [1, "level-card-detail"], [1, "courses-detail-card"], [1, "courses-detail-title"], [1, "course-list"], ["class", "course-item", 4, "ngFor", "ngForOf"], [1, "course-item"], [1, "course-description"], [1, "bx", "completion-icon", 3, "ngClass"]],
  template: function ProgresComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Progreso");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Avance por cada nivel de la ECM");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ProgresComponent_div_6_Template, 2, 0, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ProgresComponent_ng_container_7_Template, 7, 2, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: ["[_nghost-%COMP%] {\n  font-family: var(--font-family-base);\n}\n\n.section-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-heading);\n  font-size: 1.15rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 1rem;\n}\n\n\n.spinner-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  margin: 0.5rem;\n  border: 4px solid var(--color-border);\n  border-top: 4px solid var(--color-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n\n.level-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n\n.level-card[_ngcontent-%COMP%] {\n  background: var(--color-card-bg);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: 1.25rem;\n}\n\n.level-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.9rem;\n}\n\n.level-card-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-heading);\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0;\n}\n\n.level-card-pct[_ngcontent-%COMP%] {\n  background: var(--color-primary-soft);\n  color: var(--color-primary);\n  font-size: 0.8rem;\n  font-weight: 700;\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n}\n\n.progress-track[_ngcontent-%COMP%] {\n  height: 8px;\n  background: var(--color-page-bg);\n  border-radius: 999px;\n  overflow: hidden;\n  margin-bottom: 0.75rem;\n}\n\n.progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: var(--color-primary);\n  border-radius: 999px;\n  transition: width 0.3s ease;\n}\n\n.level-card-detail[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--color-text-muted);\n  margin: 0;\n}\n\n\n.courses-detail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1.25rem;\n}\n\n.courses-detail-card[_ngcontent-%COMP%] {\n  background: var(--color-card-bg);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: 1.25rem 1.5rem;\n}\n\n.courses-detail-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-heading);\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0 0 0.5rem;\n}\n\n.course-list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  max-height: 280px;\n  overflow-y: auto;\n}\n\n.course-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.course-list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: var(--color-page-bg);\n}\n\n.course-list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--color-border);\n  border-radius: 3px;\n}\n\n.course-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid var(--color-page-bg);\n}\n\n.course-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.course-description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--color-text);\n  flex: 1 1 auto;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.completion-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  font-size: 1.3rem;\n  color: var(--color-border);\n}\n\n.completion-icon.completed[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n\n\n\n\n@media (max-width: 768px) {\n  .courses-detail[_ngcontent-%COMP%] { grid-template-columns: 1fr; }\n}\n\n@media (max-width: 480px) {\n  .level-cards[_ngcontent-%COMP%] { grid-template-columns: 1fr; gap: 0.75rem; }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wcm9ncmVzL3Byb2dyZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixnQkFBZ0I7QUFDbEI7O0FBRUEsa0VBQWtFO0FBQ2xFO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QscUNBQXFDO0VBQ3JDLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsS0FBSyx1QkFBdUIsRUFBRTtFQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ3BDOztBQUVBLGtFQUFrRTtBQUNsRTtFQUNFLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxxQ0FBcUM7RUFDckMsK0JBQStCO0VBQy9CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFNBQVM7QUFDWDs7QUFFQSxrRUFBa0U7QUFDbEU7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxxQ0FBcUM7RUFDckMsK0JBQStCO0VBQy9CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUEsa0VBQWtFO0FBQ2xFO2dFQUNnRTs7QUFFaEU7RUFDRSxrQkFBa0IsMEJBQTBCLEVBQUU7QUFDaEQ7O0FBRUE7RUFDRSxlQUFlLDBCQUEwQixFQUFFLFlBQVksRUFBRTtBQUMzRCIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJhc2UpO1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1oZWFkaW5nKTtcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIG1hcmdpbjogMCAwIDFyZW07XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBTcGlubmVyIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLnNwaW5uZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5zcGlubmVyIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IHNwaW4gMC43cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLyogw6LClMKAw6LClMKAIFRhcmpldGFzIGRlICUgcG9yIG5pdmVsIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLmxldmVsLWNhcmRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNjBweCwgMWZyKSk7XG4gIGdhcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmxldmVsLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1jYXJkLWJnKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgcGFkZGluZzogMS4yNXJlbTtcbn1cblxuLmxldmVsLWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAwLjlyZW07XG59XG5cbi5sZXZlbC1jYXJkLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWhlYWRpbmcpO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubGV2ZWwtY2FyZC1wY3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LXNvZnQpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAwLjJyZW0gMC42cmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ucHJvZ3Jlc3MtdHJhY2sge1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcGFnZS1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xufVxuXG4ucHJvZ3Jlc3MtZmlsbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG59XG5cbi5sZXZlbC1jYXJkLWRldGFpbCB7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICBtYXJnaW46IDA7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBEZXRhbGxlIGRlIGN1cnNvcyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5jb3Vyc2VzLWRldGFpbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdhcDogMS4yNXJlbTtcbn1cblxuLmNvdXJzZXMtZGV0YWlsLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1jYXJkLWJnKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgcGFkZGluZzogMS4yNXJlbSAxLjVyZW07XG59XG5cbi5jb3Vyc2VzLWRldGFpbC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1oZWFkaW5nKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIG1hcmdpbjogMCAwIDAuNXJlbTtcbn1cblxuLmNvdXJzZS1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBtYXgtaGVpZ2h0OiAyODBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNvdXJzZS1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG5cbi5jb3Vyc2UtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wYWdlLWJnKTtcbn1cblxuLmNvdXJzZS1saXN0Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmNvdXJzZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDFyZW07XG4gIHBhZGRpbmc6IDAuNzVyZW0gMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXBhZ2UtYmcpO1xufVxuXG4uY291cnNlLWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5jb3Vyc2UtZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgbWluLXdpZHRoOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmNvbXBsZXRpb24taWNvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJvcmRlcik7XG59XG5cbi5jb21wbGV0aW9uLWljb24uY29tcGxldGVkIHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4vKiDDosKUwoDDosKUwoAgUmVzcG9uc2l2ZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi8qIC5sZXZlbC1jYXJkcyBhaG9yYSBlcyBmbHVpZG8gKGF1dG8tZml0L21pbm1heCksIHBvciBsbyBxdWUgeWEgbm9cbiAgIG5lY2VzaXRhIHVuIGJyZWFrcG9pbnQgcHJvcGlvIHBhcmEgcGFzYXIgZGUgNCBhIDIgY29sdW1uYXMuICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY291cnNlcy1kZXRhaWwgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmxldmVsLWNhcmRzIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IGdhcDogMC43NXJlbTsgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4033:
/*!***************************************************!*\
  !*** ./src/app/modules/progres/progres.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgresModule": () => (/* binding */ ProgresModule)
/* harmony export */ });
/* harmony import */ var _progres_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progres.component */ 4269);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





const progresRoutes = [{
  path: '',
  component: _progres_component__WEBPACK_IMPORTED_MODULE_0__.ProgresComponent
}];
class ProgresModule {}
ProgresModule.ɵfac = function ProgresModule_Factory(t) {
  return new (t || ProgresModule)();
};
ProgresModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ProgresModule
});
ProgresModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(progresRoutes), _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProgresModule, {
    declarations: [_progres_component__WEBPACK_IMPORTED_MODULE_0__.ProgresComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
    exports: [_progres_component__WEBPACK_IMPORTED_MODULE_0__.ProgresComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_progres_progres_module_ts.js.map