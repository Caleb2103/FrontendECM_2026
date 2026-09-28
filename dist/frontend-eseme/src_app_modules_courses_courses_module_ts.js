"use strict";
(self["webpackChunkFrontendEseme"] = self["webpackChunkFrontendEseme"] || []).push([["src_app_modules_courses_courses_module_ts"],{

/***/ 3913:
/*!******************************************************!*\
  !*** ./src/app/modules/courses/courses.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesComponent": () => (/* binding */ CoursesComponent),
/* harmony export */   "ValuesPipe": () => (/* binding */ ValuesPipe)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_services_student_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/student.service */ 4339);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);













function CoursesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Editar Notas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_div_15_div_4_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_div_15_div_4_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r41.stud_member.memb_name + " " + element_r41.stud_member.memb_surname, " ");
  }
}
function CoursesComponent_div_15_div_4_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "S1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_div_15_div_4_td_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44)(1, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CoursesComponent_div_15_div_4_td_7_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44);
      const element_r42 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r42.seas_ses01 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", element_r42.seas_ses01);
  }
}
function CoursesComponent_div_15_div_4_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "S2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_div_15_div_4_td_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44)(1, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CoursesComponent_div_15_div_4_td_10_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);
      const element_r45 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r45.seas_ses02 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", element_r45.seas_ses02);
  }
}
function CoursesComponent_div_15_div_4_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "S3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_div_15_div_4_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44)(1, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CoursesComponent_div_15_div_4_td_13_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50);
      const element_r48 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r48.seas_ses03 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", element_r48.seas_ses03);
  }
}
function CoursesComponent_div_15_div_4_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "S4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_div_15_div_4_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44)(1, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CoursesComponent_div_15_div_4_td_16_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r53);
      const element_r51 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r51.seas_ses04 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", element_r51.seas_ses04);
  }
}
function CoursesComponent_div_15_div_4_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "S5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_div_15_div_4_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44)(1, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CoursesComponent_div_15_div_4_td_19_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r56);
      const element_r54 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r54.seas_ses05 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", element_r54.seas_ses05);
  }
}
function CoursesComponent_div_15_div_4_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "S6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_div_15_div_4_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44)(1, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CoursesComponent_div_15_div_4_td_22_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r59);
      const element_r57 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r57.seas_ses06 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", element_r57.seas_ses06);
  }
}
function CoursesComponent_div_15_div_4_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "S7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_div_15_div_4_td_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44)(1, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CoursesComponent_div_15_div_4_td_25_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r62);
      const element_r60 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r60.seas_ses07 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", element_r60.seas_ses07);
  }
}
function CoursesComponent_div_15_div_4_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "S8");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_div_15_div_4_td_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44)(1, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CoursesComponent_div_15_div_4_td_28_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r65);
      const element_r63 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r63.seas_ses08 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", element_r63.seas_ses08);
  }
}
function CoursesComponent_div_15_div_4_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "S9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_div_15_div_4_td_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44)(1, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CoursesComponent_div_15_div_4_td_31_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68);
      const element_r66 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r66.seas_ses09 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", element_r66.seas_ses09);
  }
}
function CoursesComponent_div_15_div_4_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "S10");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_div_15_div_4_td_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44)(1, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CoursesComponent_div_15_div_4_td_34_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r71);
      const element_r69 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r69.seas_ses10 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", element_r69.seas_ses10);
  }
}
function CoursesComponent_div_15_div_4_th_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "S11");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_div_15_div_4_td_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44)(1, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CoursesComponent_div_15_div_4_td_37_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r74);
      const element_r72 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r72.seas_ses11 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", element_r72.seas_ses11);
  }
}
function CoursesComponent_div_15_div_4_th_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "S12");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_div_15_div_4_td_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44)(1, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CoursesComponent_div_15_div_4_td_40_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r77);
      const element_r75 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r75.seas_ses12 = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r75 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", element_r75.seas_ses12);
  }
}
function CoursesComponent_div_15_div_4_th_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Promedio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0, a1, a2) {
  return {
    aprobado: a0,
    reprobado: a1,
    none: a2
  };
};
function CoursesComponent_div_15_div_4_td_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](2, _c0, element_r78.seas_final >= 13, element_r78.seas_final < 13 && element_r78.seas_final !== null, element_r78.seas_final === null));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r78.seas_final !== null ? element_r78.seas_final : "0", " ");
  }
}
function CoursesComponent_div_15_div_4_td_43_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CoursesComponent_div_15_div_4_td_43_div_2_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r84);
      const element_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](element_r78.seas_final = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const element_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", element_r78.seas_final);
  }
}
function CoursesComponent_div_15_div_4_td_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CoursesComponent_div_15_div_4_td_43_div_1_Template, 2, 6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, CoursesComponent_div_15_div_4_td_43_div_2_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r38.isEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r38.isEditing);
  }
}
function CoursesComponent_div_15_div_4_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 49);
  }
}
function CoursesComponent_div_15_div_4_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 50);
  }
}
const _c1 = function () {
  return [5, 10, 15, 20];
};
function CoursesComponent_div_15_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22)(1, "table", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, CoursesComponent_div_15_div_4_th_3_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CoursesComponent_div_15_div_4_td_4_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CoursesComponent_div_15_div_4_th_6_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CoursesComponent_div_15_div_4_td_7_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CoursesComponent_div_15_div_4_th_9_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CoursesComponent_div_15_div_4_td_10_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CoursesComponent_div_15_div_4_th_12_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CoursesComponent_div_15_div_4_td_13_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CoursesComponent_div_15_div_4_th_15_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CoursesComponent_div_15_div_4_td_16_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](17, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CoursesComponent_div_15_div_4_th_18_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CoursesComponent_div_15_div_4_td_19_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](20, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CoursesComponent_div_15_div_4_th_21_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CoursesComponent_div_15_div_4_td_22_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](23, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, CoursesComponent_div_15_div_4_th_24_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, CoursesComponent_div_15_div_4_td_25_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](26, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, CoursesComponent_div_15_div_4_th_27_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, CoursesComponent_div_15_div_4_td_28_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](29, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, CoursesComponent_div_15_div_4_th_30_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, CoursesComponent_div_15_div_4_td_31_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](32, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, CoursesComponent_div_15_div_4_th_33_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, CoursesComponent_div_15_div_4_td_34_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](35, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, CoursesComponent_div_15_div_4_th_36_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, CoursesComponent_div_15_div_4_td_37_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](38, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, CoursesComponent_div_15_div_4_th_39_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, CoursesComponent_div_15_div_4_td_40_Template, 2, 1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](41, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, CoursesComponent_div_15_div_4_th_42_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, CoursesComponent_div_15_div_4_td_43_Template, 3, 2, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, CoursesComponent_div_15_div_4_tr_44_Template, 1, 0, "tr", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, CoursesComponent_div_15_div_4_tr_45_Template, 1, 0, "tr", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "mat-paginator", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", group_r8.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r10.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r10.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", 5)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c1))("length", group_r8.students.length);
  }
}
function CoursesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CoursesComponent_div_15_div_4_Template, 47, 7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", group_r8.course.cour_description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", group_r8.students.length)("ngIfElse", _r6);
  }
}
function CoursesComponent_ng_container_17_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_ng_container_17_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No est\u00E1s ense\u00F1ando cursos en este ciclo. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_ng_container_17_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Receso");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_ng_container_17_div_8_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sg_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", sg_r91.schedule.sche_starttime, " a ", sg_r91.schedule.sche_endtime, "");
  }
}
function CoursesComponent_ng_container_17_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CoursesComponent_ng_container_17_div_8_div_6_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r99);
      const group_r97 = restoredCtx.$implicit;
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r98.selectCourse(group_r97));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 66)(2, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 70)(9, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const group_r97 = ctx.$implicit;
    const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r95.getCourseId(group_r97));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r95.getBadgeClass(group_r97));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](group_r97.course.cour_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](group_r97.course.cour_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r95.getModeIcon(group_r97));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r95.getMode(group_r97));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](group_r97.students.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Semana ", ctx_r95.getCurrentSession(group_r97), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r95.getAttendancePercentage(group_r97), "%");
  }
}
function CoursesComponent_ng_container_17_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CoursesComponent_ng_container_17_div_8_div_1_Template, 5, 0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 58)(3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CoursesComponent_ng_container_17_div_8_span_5_Template, 2, 2, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CoursesComponent_ng_container_17_div_8_div_6_Template, 25, 9, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sg_r91 = ctx.$implicit;
    const gi_r92 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", gi_r92 > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sg_r91.schedule.sche_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", sg_r91.schedule.sche_starttime && sg_r91.schedule.sche_endtime);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", sg_r91.courses);
  }
}
function CoursesComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 51)(2, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Mis Clases");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CoursesComponent_ng_container_17_div_6_Template, 2, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CoursesComponent_ng_container_17_p_7_Template, 2, 0, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CoursesComponent_ng_container_17_div_8_Template, 7, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.scheduleGroupsArray.length === 0 && !ctx_r4.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.scheduleGroupsArray);
  }
}
function CoursesComponent_ng_container_18_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Asistencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_ng_container_18_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Promedio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CoursesComponent_ng_container_18_ng_container_13_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CoursesComponent_ng_container_18_ng_container_13_div_11_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r108);
      const s_r106 = restoredCtx.$implicit;
      const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r107.onSessionSelect(s_r106.index));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 103)(4, "span", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const s_r106 = ctx.$implicit;
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r104.selectedSession === s_r106.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("S", s_r106.index, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r104.selectedSession === s_r106.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](s_r106.day);
  }
}
function CoursesComponent_ng_container_18_ng_container_13_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 105)(1, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 97)(6, "label", 106)(7, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CoursesComponent_ng_container_18_ng_container_13_div_25_Template_input_ngModelChange_7_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r112);
      const student_r109 = restoredCtx.$implicit;
      const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](student_r109[ctx_r111.getSessionField(ctx_r111.selectedSession)] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const student_r109 = ctx.$implicit;
    const i_r110 = ctx.index;
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", i_r110 + 1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", student_r109.stud_member.memb_name, " ", student_r109.stud_member.memb_surname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", student_r109[ctx_r105.getSessionField(ctx_r105.selectedSession)]);
  }
}
function CoursesComponent_ng_container_18_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 83)(2, "div", 84)(3, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 86)(6, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CoursesComponent_ng_container_18_ng_container_13_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r114);
      const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r113.prevCalPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CoursesComponent_ng_container_18_ng_container_13_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r114);
      const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r115.nextCalPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CoursesComponent_ng_container_18_ng_container_13_div_11_Template, 6, 6, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 91)(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Lista de estudiantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 93)(18, "div", 94)(19, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "N\u00BA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Asistencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, CoursesComponent_ng_container_18_ng_container_13_div_25_Template, 9, 4, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 99)(27, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CoursesComponent_ng_container_18_ng_container_13_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r114);
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r116.confirmAttendance());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Confirmar asistencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r102.getCalendarMonth());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r102.calendarPage === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r102.calendarPage >= ctx_r102.maxCalPage());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r102.getCalendarSessions());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx_r102.selectedGroup.students.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r102.selectedGroup.students);
  }
}
function CoursesComponent_ng_container_18_ng_container_14_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 111)(1, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 109)(6, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CoursesComponent_ng_container_18_ng_container_14_div_14_Template_input_ngModelChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r121);
      const student_r118 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](student_r118.seas_final = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const student_r118 = ctx.$implicit;
    const i_r119 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", i_r119 + 1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", student_r118.stud_member.memb_name, " ", student_r118.stud_member.memb_surname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", student_r118.seas_final);
  }
}
function CoursesComponent_ng_container_18_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 91)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Lista de estudiantes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 93)(7, "div", 94)(8, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "N\u00BA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Promedio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CoursesComponent_ng_container_18_ng_container_14_div_14_Template, 7, 4, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 99)(16, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CoursesComponent_ng_container_18_ng_container_14_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r123);
      const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r122.confirmPromedio());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Confirmar promedio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx_r103.selectedGroup.students.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r103.selectedGroup.students);
  }
}
function CoursesComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 76)(2, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CoursesComponent_ng_container_18_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125);
      const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r124.backToList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 79)(7, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CoursesComponent_ng_container_18_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125);
      const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r126.activeDetailTab = "asistencia");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CoursesComponent_ng_container_18_span_9_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CoursesComponent_ng_container_18_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r125);
      const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r127.activeDetailTab = "promedio");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CoursesComponent_ng_container_18_span_12_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CoursesComponent_ng_container_18_ng_container_13_Template, 29, 6, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CoursesComponent_ng_container_18_ng_container_14_Template, 18, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.selectedGroup.course.cour_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r5.activeDetailTab === "asistencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.activeDetailTab === "asistencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r5.activeDetailTab === "promedio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.activeDetailTab === "promedio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.activeDetailTab === "asistencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.activeDetailTab === "promedio");
  }
}
function CoursesComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "No estas ense\u00F1ando un curso en este ciclo.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class ValuesPipe {
  transform(value) {
    return Object.values(value);
  }
}
ValuesPipe.ɵfac = function ValuesPipe_Factory(t) {
  return new (t || ValuesPipe)();
};
ValuesPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "values",
  type: ValuesPipe,
  pure: true
});
class CoursesComponent {
  constructor(dialog, studentService, snackBar) {
    this.dialog = dialog;
    this.studentService = studentService;
    this.snackBar = snackBar;
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource();
    this.groupedDataArray = [];
    this.isEditing = false;
    this.loading = false;
    this.selectedGroup = null;
    this.selectedSession = 1;
    this.calendarPage = 0;
    this.scheduleGroupsArray = [];
    this.activeDetailTab = 'asistencia';
    this.displayedColumns = ['name', 'session_1', 'session_2', 'session_3', 'session_4', 'session_5', 'session_6', 'session_7', 'session_8', 'session_9', 'session_10', 'session_11', 'session_12', 'promedio'];
  }
  ngOnInit() {
    this.getTeacherData();
  }
  ngAfterViewInit() {
    this.paginators.forEach((paginator, index) => {
      this.groupedDataArray[index].dataSource.paginator = paginator;
    });
  }
  getTeacherData() {
    this.loading = true;
    let teacher = localStorage.getItem('userId');
    teacher = teacher ?? '1';
    this.studentService.getTeacherList(parseInt(teacher)).subscribe({
      next: data => {
        this.loading = false;
        const activeData = data.filter(s => s.stud_season.seas_period.peri_status === true);
        this.groupedDataArray = this.groupDataByCourse(activeData).map(group => ({
          course: group.course,
          students: group.students,
          dataSource: new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(group.students)
        }));
        this.buildScheduleGroups();
        setTimeout(() => {
          this.paginators.forEach((paginator, index) => {
            this.groupedDataArray[index].dataSource.paginator = paginator;
          });
        });
      },
      error: error => {
        console.error('Error al obtener los datos:', error);
      }
    });
  }
  groupDataByCourse(data) {
    const groupedData = data.reduce((acc, student) => {
      const courseId = student.stud_season.seas_course.cour_id;
      if (!acc[courseId]) {
        acc[courseId] = {
          course: student.stud_season.seas_course,
          teacher: student.stud_season.seas_teacher,
          students: []
        };
      }
      acc[courseId].students.push(student);
      return acc;
    }, {});
    return Object.values(groupedData);
  }
  // ── Mobile list view ─────────────────────────────────────────
  buildScheduleGroups() {
    const map = new Map();
    for (const group of this.groupedDataArray) {
      if (!group.students.length) continue;
      const schedule = group.students[0].stud_season.seas_schedule;
      if (!map.has(schedule.sche_id)) {
        map.set(schedule.sche_id, {
          schedule,
          courses: []
        });
      }
      map.get(schedule.sche_id).courses.push(group);
    }
    this.scheduleGroupsArray = Array.from(map.values()).sort((a, b) => a.schedule.sche_starttime.localeCompare(b.schedule.sche_starttime));
  }
  getCourseId(group) {
    if (!group.students.length) return '';
    const s = group.students[0].stud_season;
    return `Nivel ${group.course.cour_level} - ${s.seas_id}.${s.seas_period.peri_description}`;
  }
  getBadgeClass(group) {
    return group.course.cour_type === 'TRONCAL' ? 'troncal' : 'electivo';
  }
  getModeIcon(group) {
    const mode = group.students[0]?.stud_season?.seas_mode?.mode_name ?? '';
    if (mode === 'Virtual') return 'bx-laptop';
    if (mode === 'Presencial') return 'bx-church';
    if (mode === 'Online') return 'bx-video';
    return 'bx-buildings';
  }
  getMode(group) {
    return group.students[0]?.stud_season?.seas_mode?.mode_name ?? '';
  }
  getAttendancePercentage(group) {
    if (!group.students.length) return 0;
    const keys = ['seas_ses01', 'seas_ses02', 'seas_ses03', 'seas_ses04', 'seas_ses05', 'seas_ses06', 'seas_ses07', 'seas_ses08', 'seas_ses09', 'seas_ses10', 'seas_ses11', 'seas_ses12'];
    let total = 0,
      attended = 0;
    for (const student of group.students) {
      for (const k of keys) {
        total++;
        if (student[k]) attended++;
      }
    }
    return total > 0 ? Math.round(attended / total * 100) : 0;
  }
  getCurrentSession(group) {
    if (!group.students.length) return 1;
    const now = new Date();
    for (let i = 11; i >= 0; i--) {
      const date = this.getSessionDate(i, group);
      if (date && date <= now) return i + 1;
    }
    return 1;
  }
  // ── Mobile detail view ───────────────────────────────────────
  selectCourse(group) {
    this.selectedGroup = group;
    this.activeDetailTab = 'asistencia';
    this.selectedSession = this.getCurrentSession(group);
    const base = this.getBaseMonth();
    const curDate = this.getSessionDate(this.selectedSession - 1, group);
    if (base && curDate) {
      this.calendarPage = (curDate.getFullYear() - base.year) * 12 + (curDate.getMonth() - base.month);
    } else {
      this.calendarPage = 0;
    }
    this.initSessionDefaults(this.selectedSession);
  }
  onSessionSelect(index) {
    this.selectedSession = index;
    this.initSessionDefaults(index);
  }
  initSessionDefaults(sessionIndex) {
    if (!this.selectedGroup) return;
    const field = this.getSessionField(sessionIndex);
    for (const student of this.selectedGroup.students) {
      if (student[field] === null || student[field] === undefined) {
        student[field] = true;
      }
    }
  }
  backToList() {
    this.selectedGroup = null;
    this.activeDetailTab = 'asistencia';
  }
  confirmPromedio() {
    if (!this.selectedGroup) return;
    const requests = this.selectedGroup.students.map(student => this.studentService.updateStudent(student.stud_id, {
      stud_member: student.stud_member.memb_id,
      stud_season: student.stud_season.seas_id,
      seas_final: student.seas_final
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)(requests).subscribe({
      next: () => this.snackBar.open('Promedio guardado correctamente', 'Cerrar', {
        duration: 3000
      }),
      error: e => {
        console.error('Error al guardar promedio:', e);
        this.snackBar.open('Error al guardar promedio', 'Cerrar', {
          duration: 3000
        });
      }
    });
  }
  getSessionDate(sessionIndex, group) {
    if (!group?.students?.length) return null;
    const s = group.students[0].stud_season;
    const periStart = new Date(s.seas_period.peri_start + 'T00:00:00');
    const scheDay = s.seas_schedule.sche_day - 1;
    const daysUntil = (scheDay - periStart.getDay() + 7) % 7;
    const first = new Date(periStart);
    first.setDate(first.getDate() + daysUntil);
    const date = new Date(first);
    date.setDate(date.getDate() + sessionIndex * 7);
    return date;
  }
  getBaseMonth() {
    const first = this.getSessionDate(0, this.selectedGroup);
    if (!first) return null;
    return {
      year: first.getFullYear(),
      month: first.getMonth()
    };
  }
  getTargetDate() {
    const base = this.getBaseMonth();
    if (!base) return null;
    return new Date(base.year, base.month + this.calendarPage, 1);
  }
  getCalendarSessions() {
    const target = this.getTargetDate();
    if (!target) return [];
    const result = [];
    for (let i = 0; i < 12; i++) {
      const date = this.getSessionDate(i, this.selectedGroup);
      if (date && date.getFullYear() === target.getFullYear() && date.getMonth() === target.getMonth()) {
        result.push({
          index: i + 1,
          day: date.getDate()
        });
      }
    }
    return result;
  }
  getCalendarMonth() {
    const target = this.getTargetDate();
    if (!target) return '';
    return target.toLocaleString('es-ES', {
      month: 'long',
      year: 'numeric'
    });
  }
  prevCalPage() {
    if (this.calendarPage > 0) this.calendarPage--;
  }
  nextCalPage() {
    if (this.calendarPage < this.maxCalPage()) this.calendarPage++;
  }
  maxCalPage() {
    const base = this.getBaseMonth();
    if (!base) return 0;
    let max = 0;
    for (let i = 11; i >= 0; i--) {
      const date = this.getSessionDate(i, this.selectedGroup);
      if (date) {
        const diff = (date.getFullYear() - base.year) * 12 + (date.getMonth() - base.month);
        if (diff > max) max = diff;
        break;
      }
    }
    return max;
  }
  getSessionField(n) {
    return `seas_ses${n.toString().padStart(2, '0')}`;
  }
  confirmAttendance() {
    if (!this.selectedGroup) return;
    const requests = this.selectedGroup.students.map(student => this.studentService.updateStudent(student.stud_id, {
      stud_member: student.stud_member.memb_id,
      stud_season: student.stud_season.seas_id,
      seas_ses01: student.seas_ses01 ?? true,
      seas_ses02: student.seas_ses02 ?? true,
      seas_ses03: student.seas_ses03 ?? true,
      seas_ses04: student.seas_ses04 ?? true,
      seas_ses05: student.seas_ses05 ?? true,
      seas_ses06: student.seas_ses06 ?? true,
      seas_ses07: student.seas_ses07 ?? true,
      seas_ses08: student.seas_ses08 ?? true,
      seas_ses09: student.seas_ses09 ?? true,
      seas_ses10: student.seas_ses10 ?? true,
      seas_ses11: student.seas_ses11 ?? true,
      seas_ses12: student.seas_ses12 ?? true
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)(requests).subscribe({
      next: () => this.snackBar.open('Asistencia guardada correctamente', 'Cerrar', {
        duration: 3000
      }),
      error: e => {
        console.error('Error al guardar asistencia:', e);
        this.snackBar.open('Error al guardar asistencia', 'Cerrar', {
          duration: 3000
        });
      }
    });
  }
  save() {
    const requests = this.groupedDataArray.flatMap(group => group.students.map(student => this.studentService.updateStudent(student.stud_id, {
      stud_member: student.stud_member.memb_id,
      stud_season: student.stud_season.seas_id,
      seas_final: student.seas_final !== null && student.seas_final !== undefined ? Number(student.seas_final) : null,
      seas_ses01: student.seas_ses01 ?? true,
      seas_ses02: student.seas_ses02 ?? true,
      seas_ses03: student.seas_ses03 ?? true,
      seas_ses04: student.seas_ses04 ?? true,
      seas_ses05: student.seas_ses05 ?? true,
      seas_ses06: student.seas_ses06 ?? true,
      seas_ses07: student.seas_ses07 ?? true,
      seas_ses08: student.seas_ses08 ?? true,
      seas_ses09: student.seas_ses09 ?? true,
      seas_ses10: student.seas_ses10 ?? true,
      seas_ses11: student.seas_ses11 ?? true,
      seas_ses12: student.seas_ses12 ?? true
    })));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)(requests).subscribe({
      next: () => this.snackBar.open('Guardado correctamente', 'Cerrar', {
        duration: 3000
      }),
      error: e => {
        console.error('Error al guardar:', e);
        this.snackBar.open('Error al guardar', 'Cerrar', {
          duration: 3000
        });
      }
    });
  }
}
CoursesComponent.ɵfac = function CoursesComponent_Factory(t) {
  return new (t || CoursesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_student_service__WEBPACK_IMPORTED_MODULE_0__.StudentService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBar));
};
CoursesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CoursesComponent,
  selectors: [["app-courses"]],
  viewQuery: function CoursesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginators = _t);
    }
  },
  decls: 21,
  vars: 6,
  consts: [[1, "content"], [1, "page-header", "desktop-view"], [1, "page-title"], [1, "page-subtitle"], [1, "buttons", "desktop-view"], [3, "click"], [1, "bx", "bxs-save", 2, "margin-right", "5px", "margin-top", "2px"], ["class", "edit-input", 4, "ngIf"], [1, "desktop-view"], ["class", "spinner-container", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "mobile-view"], [4, "ngIf"], ["noDataMessage", ""], [1, "edit-input"], [1, "bx", "bx-x", 2, "margin-right", "5px", "margin-top", "2px"], [1, "bx", "bx-pencil", 2, "margin-right", "5px", "margin-top", "2px"], [1, "spinner-container"], [1, "spinner"], [1, "course-subtitle", 2, "font-size", "20px"], [1, "bx", "bxs-book-alt"], ["class", "table-responsive", 4, "ngIf", "ngIfElse"], [1, "table-responsive"], ["mat-table", "", 1, "custom-mat-table", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", "class", "th-column", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "td-column", 4, "matCellDef"], ["matColumnDef", "session_1"], ["matColumnDef", "session_2"], ["matColumnDef", "session_3"], ["matColumnDef", "session_4"], ["matColumnDef", "session_5"], ["matColumnDef", "session_6"], ["matColumnDef", "session_7"], ["matColumnDef", "session_8"], ["matColumnDef", "session_9"], ["matColumnDef", "session_10"], ["matColumnDef", "session_11"], ["matColumnDef", "session_12"], ["matColumnDef", "promedio"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSize", "pageSizeOptions", "length"], ["mat-header-cell", "", 1, "th-column"], ["mat-cell", "", 1, "td-column"], [3, "ngModel", "ngModelChange"], ["class", "nota-circle", 3, "ngClass", 4, "ngIf"], [1, "nota-circle", 3, "ngClass"], ["type", "number", "min", "0", "max", "20", 1, "input-field", 3, "ngModel", "ngModelChange"], ["mat-header-row", ""], ["mat-row", ""], [1, "mob-header"], ["routerLink", "/menu", 1, "mob-back-btn"], [1, "bx", "bx-chevron-left"], [1, "mob-title"], ["class", "no-data-message", 4, "ngIf"], [1, "no-data-message"], ["class", "mob-receso", 4, "ngIf"], [1, "mob-turno-header"], [1, "mob-turno-label"], ["class", "mob-turno-time", 4, "ngIf"], ["class", "mob-course-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "mob-receso"], [1, "mob-receso-line"], [1, "mob-turno-time"], [1, "mob-course-card", 3, "click"], [1, "mob-course-top"], [1, "mob-course-id"], [1, "mob-course-badge", 3, "ngClass"], [1, "mob-course-name"], [1, "mob-course-meta"], [1, "mob-meta-item"], [1, "bx", 3, "ngClass"], [1, "bx", "bxs-group"], [1, "bx", "bx-calendar"], [1, "bx", "bx-bar-chart-alt-2"], [1, "mob-detail-header"], [1, "mob-back-btn", 3, "click"], [1, "mob-detail-title"], [1, "mob-tab-toggle"], [1, "mob-tab-btn", 3, "click"], [1, "bx", "bx-filter-alt"], [1, "bx", "bx-clipboard"], [1, "mob-calendar-card"], [1, "mob-cal-header"], [1, "mob-cal-month"], [1, "mob-cal-nav"], [1, "mob-cal-nav-btn", 3, "disabled", "click"], [1, "bx", "bx-chevron-right"], [1, "mob-cal-sessions"], ["class", "mob-cal-col", 3, "click", 4, "ngFor", "ngForOf"], [1, "mob-list-header"], [1, "mob-list-count"], [1, "mob-student-table"], [1, "mob-table-head"], [1, "col-num"], [1, "col-name"], [1, "col-toggle"], ["class", "mob-table-row", 4, "ngFor", "ngForOf"], [1, "mob-confirm-bar"], [1, "mob-confirm-btn", 3, "click"], [1, "mob-cal-col", 3, "click"], [1, "mob-cal-label"], [1, "mob-cal-date-wrap"], [1, "mob-cal-date"], [1, "mob-table-row"], [1, "mob-toggle"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "mob-toggle-slider"], [1, "col-grade"], ["class", "mob-table-row mob-table-row--grade", 4, "ngFor", "ngForOf"], [1, "mob-table-row", "mob-table-row--grade"], ["type", "number", "min", "0", "max", "20", "placeholder", "\u2014", 1, "mob-grade-field", 3, "ngModel", "ngModelChange"]],
  template: function CoursesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Mis Cursos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Asistencia y notas de tus cursos");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CoursesComponent_Template_button_click_7_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Grabar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CoursesComponent_Template_button_click_10_listener() {
        return ctx.isEditing = !ctx.isEditing;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CoursesComponent_div_11_Template, 3, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CoursesComponent_div_12_Template, 3, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CoursesComponent_div_14_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CoursesComponent_div_15_Template, 5, 3, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CoursesComponent_ng_container_17_Template, 9, 3, "ng-container", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, CoursesComponent_ng_container_18_Template, 15, 9, "ng-container", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, CoursesComponent_ng_template_19_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isEditing);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isEditing);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.groupedDataArray);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.selectedGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedGroup);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckbox],
  styles: ["[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n}\n\n[_nghost-%COMP%] {\n  font-family: var(--font-family-base);\n}\n\n\n.course-subtitle[_ngcontent-%COMP%] {\n  margin-left: 1.5rem;\n  margin-top: 1.5rem;\n  font-size: 17px;\n  font-family: var(--font-family-base);\n}\n\n.mat-mdc-table[_ngcontent-%COMP%]   .mdc-data-table__header-row[_ngcontent-%COMP%] {\n  background-color: var(--color-card-bg);\n  border-bottom: 1px solid var(--color-border);\n}\n\n.mdc-data-table__table[_ngcontent-%COMP%] {\n  min-width: 97%;\n}\n\n.custom-mat-table[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n  margin-bottom: 1rem;\n  border-radius: 20px;\n  box-shadow: 0 0 10px rgba(6, 6, 6, 0.2);\n}\n\n.th-column[_ngcontent-%COMP%], .td-column[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n  border-collapse: collapse;\n}\n\n.th-column[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n\n\n.mat-column-name[_ngcontent-%COMP%] {\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-page-bg);\n}\n\n.nota-circle[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  border-radius: 50%;\n  font-weight: bold;\n}\n\n.aprobado[_ngcontent-%COMP%] {\n  background-color: var(--color-success);\n  color: white;\n}\n\n.reprobado[_ngcontent-%COMP%] {\n  background-color: var(--color-danger);\n  color: white;\n}\n\n.none[_ngcontent-%COMP%] {\n  background-color: var(--color-border);\n  color: var(--color-text-muted);\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 0.3rem;\n  width: 100%;\n}\n\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  font-size: 0.9rem;\n  border: none;\n  border-radius: 12px;\n  cursor: pointer;\n  padding: 0.5rem 1rem;\n  margin-left: 1rem;\n}\n\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:enabled {\n  background-color: var(--color-primary);\n  color: white;\n}\n\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  background-color: var(--color-page-bg);\n  color: black;\n}\n\n.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:enabled:hover {\n  background-color: var(--color-primary-hover);\n}\n\n.input-field[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 20px;\n  -webkit-appearance: none;\n          appearance: none;\n  -moz-appearance: textfield;\n  border-radius: 10px;\n  padding: 0.3rem;\n}\n\n.mat-mdc-checkbox.mat-accent[_ngcontent-%COMP%] {\n  --mdc-checkbox-selected-icon-color: var(--color-primary);\n  --mdc-checkbox-selected-checkmark-color: #fff;\n  --mdc-checkbox-selected-focus-icon-color: var(--color-primary);\n  --mdc-checkbox-selected-hover-icon-color: var(--color-primary);\n  --mdc-checkbox-selected-pressed-icon-color: var(--color-primary);\n  --mdc-checkbox-unselected-focus-icon-color: var(--color-primary);\n  --mdc-checkbox-unselected-hover-icon-color: var(--color-primary);\n}\n\n.no-data-message[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  margin-left: 1.5rem;\n  font-style: italic;\n}\n\n\n\n\n.desktop-view[_ngcontent-%COMP%] { display: block; }\n.mobile-view[_ngcontent-%COMP%]  { display: none;  }\n\n\n@media (max-width: 1124px) {\n  .td-column[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n\n@media (max-width: 1050px) {\n  .table-responsive[_ngcontent-%COMP%] {\n    margin-left: 0.6rem;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n  .custom-mat-table[_ngcontent-%COMP%] {\n    margin-top: 16px;\n    margin-bottom: 16px;\n    margin-left: 1rem;\n    width: 100%;\n    display: block;\n  }\n}\n\n\n@media (max-width: 766px) {\n  .buttons[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-bottom: 1rem;\n  }\n\n  .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-left: 0.5rem;\n  }\n\n  \n  .desktop-view[_ngcontent-%COMP%] { display: none; }\n  .mobile-view[_ngcontent-%COMP%]  { display: block; }\n}\n\n\n\n\n.mob-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0rem 0 1.25rem;\n  font-size: 1.25rem;\n}\n\n.mob-back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  border-radius: 50%;\n  color: var(--color-text);\n  font-size: 1.7rem;\n  flex-shrink: 0;\n  padding: 0;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.mob-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-heading);\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0;\n}\n\n\n.mob-turno-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.75rem;\n}\n\n.mob-turno-label[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--color-text-muted);\n  font-weight: 500;\n  margin-left: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.mob-turno-time[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--color-text);\n  font-weight: 600;\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n\n.mob-receso[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin: 1.25rem 0 1rem;\n  color: var(--color-text-muted);\n  font-size: 0.78rem;\n}\n\n.mob-receso-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background: var(--color-border);\n}\n\n\n.mob-course-card[_ngcontent-%COMP%] {\n  background: var(--color-card-bg);\n  border: 1px solid var(--color-border);\n  border-radius: 14px;\n  padding: 1rem 1.1rem;\n  margin-bottom: 0.875rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  transition: box-shadow 0.15s ease;\n}\n\n.mob-course-card[_ngcontent-%COMP%]:active {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);\n}\n\n.mob-course-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.4rem;\n}\n\n.mob-course-id[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--color-text-muted);\n}\n\n.mob-course-badge[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  padding: 0.18rem 0.65rem;\n  border-radius: 20px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n\n.mob-course-badge.troncal[_ngcontent-%COMP%] {\n  background: var(--color-warning-soft);\n  color: var(--color-warning);\n}\n\n.mob-course-badge.electivo[_ngcontent-%COMP%] {\n  background: var(--color-primary-soft);\n  color: var(--color-primary);\n}\n\n.mob-course-name[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--color-text);\n  margin: 0 0 0.75rem;\n  font-family: var(--font-family-base);\n}\n\n.mob-course-meta[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.35rem 0.5rem;\n}\n\n.mob-meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.79rem;\n  color: #4b5563;\n}\n\n.mob-meta-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--color-text-muted);\n}\n\n\n.mob-detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 1rem 0 1rem;\n}\n\n.mob-detail-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-heading);\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mob-detail-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n\n\n.mob-tab-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  background: var(--color-page-bg);\n  border-radius: 20px;\n  padding: 0.3rem;\n  gap: 2px;\n  flex-shrink: 0;\n}\n\n.mob-tab-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  background: transparent;\n  color: var(--color-text-muted);\n  border: none;\n  border-radius: 18px;\n  padding: 0.7rem 1rem;\n  font-size: 0.76rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  font-family: var(--font-family-base);\n  transition: background 0.18s ease, color 0.18s ease;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.mob-tab-btn.active[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: white;\n}\n\n\n.col-grade[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.mob-table-head[_ngcontent-%COMP%]   .col-grade[_ngcontent-%COMP%] {\n  font-size: 0.77rem;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n\n.mob-table-row--grade[_ngcontent-%COMP%] {\n  grid-template-columns: 36px 1fr 72px;\n}\n\n.mob-grade-field[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 36px;\n  text-align: center;\n  border: 1.5px solid var(--color-border);\n  border-radius: 10px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: var(--color-text);\n  background: var(--color-page-bg);\n  outline: none;\n  -webkit-appearance: textfield;\n          appearance: textfield;\n  font-family: var(--font-family-base);\n  transition: border-color 0.15s ease;\n}\n\n.mob-grade-field[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-primary);\n  background: var(--color-card-bg);\n}\n\n.mob-grade-field[_ngcontent-%COMP%]::-webkit-outer-spin-button, .mob-grade-field[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n.mob-calendar-card[_ngcontent-%COMP%] {\n  background: var(--color-card-bg);\n  border: 1px solid var(--color-border);\n  border-radius: 14px;\n  padding: 1rem 1.1rem;\n  margin-bottom: 1rem;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);\n}\n\n.mob-cal-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.mob-cal-month[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 600;\n  color: var(--color-text);\n  text-transform: capitalize;\n}\n\n.mob-cal-nav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n\n.mob-cal-nav-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 44px;\n  height: 44px;\n  border: 1px solid var(--color-border);\n  background: var(--color-card-bg);\n  border-radius: 8px;\n  color: var(--color-text-muted);\n  font-size: 1rem;\n  cursor: pointer;\n  padding: 0;\n}\n\n.mob-cal-nav-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: default;\n}\n\n.mob-cal-sessions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 0.2rem;\n}\n\n.mob-cal-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.45rem;\n  flex: 1;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.mob-cal-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 600;\n  color: var(--color-text-muted);\n}\n\n.mob-cal-label.active[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n}\n\n.mob-cal-date-wrap[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n\n.mob-cal-date-wrap.active[_ngcontent-%COMP%] {\n  background: var(--color-text);\n}\n\n.mob-cal-date[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--color-text);\n}\n\n.mob-cal-date-wrap.active[_ngcontent-%COMP%]   .mob-cal-date[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 700;\n}\n\n\n.mob-list-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 0.25rem;\n  margin-top: 1.5rem;\n  margin-bottom: 1rem;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n\n.mob-list-count[_ngcontent-%COMP%] {\n  color: var(--color-primary);\n  font-weight: 600;\n}\n\n.mob-student-table[_ngcontent-%COMP%] {\n  background: var(--color-card-bg);\n  border: 1px solid var(--color-border);\n  border-radius: 14px;\n  overflow: hidden;\n  margin-bottom: 100px;\n}\n\n.mob-table-head[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 36px 1fr 80px;\n  padding: 0.6rem 1rem;\n  border-bottom: 1px solid var(--color-border);\n  background: var(--color-page-bg);\n}\n\n.mob-table-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.77rem;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n\n.mob-table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 36px 1fr 80px;\n  align-items: center;\n  padding: 0.7rem 1rem;\n  border-bottom: 1px solid var(--color-page-bg);\n}\n\n.mob-table-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n\n.col-num[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--color-text-muted);\n}\n\n.col-name[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--color-text);\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding-right: 0.5rem;\n}\n\n.col-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n\n.mob-toggle[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  width: 48px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.mob-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.mob-toggle-slider[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--color-danger);\n  border-radius: 26px;\n  transition: background 0.2s ease;\n}\n\n.mob-toggle-slider[_ngcontent-%COMP%]::before {\n  content: '';\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  left: 3px;\n  top: 3px;\n  background: var(--color-card-bg);\n  border-radius: 50%;\n  transition: transform 0.2s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n}\n\n.mob-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .mob-toggle-slider[_ngcontent-%COMP%] {\n  background: var(--color-success);\n}\n\n.mob-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .mob-toggle-slider[_ngcontent-%COMP%]::before {\n  transform: translateX(22px);\n}\n\n\n.mob-confirm-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 0.875rem 1rem;\n  background: var(--color-card-bg);\n  border-top: 1px solid var(--color-border);\n  z-index: 10;\n}\n\n.mob-confirm-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.875rem;\n  background: var(--color-primary);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: var(--font-family-base);\n  -webkit-tap-highlight-color: transparent;\n}\n\n.mob-confirm-btn[_ngcontent-%COMP%]:active {\n  background: var(--color-primary-hover);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9jb3Vyc2VzL2NvdXJzZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7O0FBR0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVDQUF1QztBQUN6Qzs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7O0FBRUE7eUVBQ3lFO0FBQ3pFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQWdCO1VBQWhCLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3REFBd0Q7RUFDeEQsNkNBQTZDO0VBQzdDLDhEQUE4RDtFQUM5RCw4REFBOEQ7RUFDOUQsZ0VBQWdFO0VBQ2hFLGdFQUFnRTtFQUNoRSxnRUFBZ0U7QUFDbEU7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTs7c0RBRXNEOztBQUV0RCxrRUFBa0U7QUFDbEUsZ0JBQWdCLGNBQWMsRUFBRTtBQUNoQyxnQkFBZ0IsYUFBYSxHQUFHOztBQUVoQyxrRUFBa0U7QUFDbEU7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixpQ0FBaUM7RUFDbkM7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUEsa0VBQWtFO0FBQ2xFO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBLHVDQUF1QztFQUN2QyxnQkFBZ0IsYUFBYSxFQUFFO0VBQy9CLGdCQUFnQixjQUFjLEVBQUU7QUFDbEM7O0FBRUE7O29FQUVvRTs7QUFFcEUsa0VBQWtFO0FBQ2xFO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsVUFBVTtFQUNWLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUEsa0VBQWtFO0FBQ2xFO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7O0FBRUEsa0VBQWtFO0FBQ2xFO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsV0FBVztFQUNYLCtCQUErQjtBQUNqQzs7QUFFQSxrRUFBa0U7QUFDbEU7RUFDRSxnQ0FBZ0M7RUFDaEMscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2Ysd0NBQXdDO0VBQ3hDLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQywyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsOEJBQThCO0FBQ2hDOztBQUVBLGtFQUFrRTtBQUNsRTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHVDQUF1QztFQUN2QyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixTQUFTO0VBQ1QsT0FBTztFQUNQLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsY0FBYztBQUNoQjs7QUFFQSxrRUFBa0U7QUFDbEU7RUFDRSxhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsUUFBUTtFQUNSLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsbURBQW1EO0VBQ25ELHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0FBQ2Q7O0FBRUEsa0VBQWtFO0FBQ2xFO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUNBQXVDO0VBQ3ZDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixnQ0FBZ0M7RUFDaEMsYUFBYTtFQUViLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLFNBQVM7QUFDWDs7QUFFQSxrRUFBa0U7QUFDbEU7RUFDRSxnQ0FBZ0M7RUFDaEMscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLHFDQUFxQztFQUNyQyxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osT0FBTztFQUNQLGVBQWU7RUFDZix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUEsa0VBQWtFO0FBQ2xFO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsb0JBQW9CO0VBQ3BCLDRDQUE0QztFQUM1QyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQSxrRUFBa0U7QUFDbEU7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUiwrQkFBK0I7RUFDL0IsbUJBQW1CO0VBQ25CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsUUFBUTtFQUNSLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQSxrRUFBa0U7QUFDbEU7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLGdDQUFnQztFQUNoQyx5Q0FBeUM7RUFDekMsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHNDQUFzQztBQUN4QyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cblxuOmhvc3Qge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG59XG5cblxuLmNvdXJzZS1zdWJ0aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG59XG5cbi5tYXQtbWRjLXRhYmxlIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNhcmQtYmcpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbn1cblxuLm1kYy1kYXRhLXRhYmxlX190YWJsZSB7XG4gIG1pbi13aWR0aDogOTclO1xufVxuXG4uY3VzdG9tLW1hdC10YWJsZSB7XG4gIG1hcmdpbjogMCAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDYsIDYsIDYsIDAuMik7XG59XG5cbi50aC1jb2x1bW4sXG4udGQtY29sdW1uIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxuLnRoLWNvbHVtbiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xufVxuXG4vKiBDb2x1bW5hIGRlIG5vbWJyZTogZXZpdGEgcXVlIGVsIHRleHRvIGVudnVlbHZhIGEgMiBsw4PCrW5lYXMgY3VhbmRvIHNlXG4gICBjb21wcmltZSBsYSB0YWJsYSwgdHJ1bmNhbmRvIGNvbiBlbGlwc2lzIGVuIHZleiBkZSByb21wZXIgZWwgbGF5b3V0LiAqL1xuLm1hdC1jb2x1bW4tbmFtZSB7XG4gIG1heC13aWR0aDogMjIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udGFibGUtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcGFnZS1iZyk7XG59XG5cbi5ub3RhLWNpcmNsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmFwcm9iYWRvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc3VjY2Vzcyk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJlcHJvYmFkbyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5vbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b25zIGJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5idXR0b25zIGJ1dHRvbjplbmFibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbnMgYnV0dG9uOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcGFnZS1iZyk7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmJ1dHRvbnMgYnV0dG9uOmVuYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWhvdmVyKTtcbn1cblxuLmlucHV0LWZpZWxkIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbn1cblxuLm1hdC1tZGMtY2hlY2tib3gubWF0LWFjY2VudCB7XG4gIC0tbWRjLWNoZWNrYm94LXNlbGVjdGVkLWljb24tY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAtLW1kYy1jaGVja2JveC1zZWxlY3RlZC1jaGVja21hcmstY29sb3I6ICNmZmY7XG4gIC0tbWRjLWNoZWNrYm94LXNlbGVjdGVkLWZvY3VzLWljb24tY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAtLW1kYy1jaGVja2JveC1zZWxlY3RlZC1ob3Zlci1pY29uLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgLS1tZGMtY2hlY2tib3gtc2VsZWN0ZWQtcHJlc3NlZC1pY29uLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgLS1tZGMtY2hlY2tib3gtdW5zZWxlY3RlZC1mb2N1cy1pY29uLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgLS1tZGMtY2hlY2tib3gtdW5zZWxlY3RlZC1ob3Zlci1pY29uLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxuLm5vLWRhdGEtbWVzc2FnZSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAxLjVyZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLyogLnNwaW5uZXItY29udGFpbmVyIC8gLnNwaW5uZXIgLyBAa2V5ZnJhbWVzIHNwaW4gdml2ZW4gYWhvcmEgZW5cbiAgIHNyYy9zdHlsZXMuY3NzIGNvbW8gdXRpbGlkYWQgZ2xvYmFsIChhbnRlcyBkdXBsaWNhZG9zIGJ5dGUgYSBieXRlXG4gICBlbnRyZSBlc3RlIGFyY2hpdm8gZSBpbnNjcmlwdGlvbnMuY29tcG9uZW50LmNzcykuICovXG5cbi8qIMOiwpTCgMOiwpTCgCBWaXNpYmlsaWRhZCBlc2NyaXRvcmlvIC8gbcODwrN2aWwgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uZGVza3RvcC12aWV3IHsgZGlzcGxheTogYmxvY2s7IH1cbi5tb2JpbGUtdmlldyAgeyBkaXNwbGF5OiBub25lOyAgfVxuXG4vKiDDosKUwoDDosKUwoAgQnJlYWtwb2ludHMgZXNjcml0b3JpbyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTI0cHgpIHtcbiAgLnRkLWNvbHVtbiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDUwcHgpIHtcbiAgLnRhYmxlLXJlc3BvbnNpdmUge1xuICAgIG1hcmdpbi1sZWZ0OiAwLjZyZW07XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIH1cbiAgLmN1c3RvbS1tYXQtdGFibGUge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG4vKiDDosKUwoDDosKUwoAgUHVudG8gZGUgcXVpZWJyZSBtw4PCs3ZpbCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjZweCkge1xuICAuYnV0dG9ucyB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5idXR0b25zIGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgfVxuXG4gIC8qIE9jdWx0YXIgdGFibGEsIG1vc3RyYXIgdmlzdGEgbcODwrN2aWwgKi9cbiAgLmRlc2t0b3AtdmlldyB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgLm1vYmlsZS12aWV3ICB7IGRpc3BsYXk6IGJsb2NrOyB9XG59XG5cbi8qIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxuICAgTlVFVkEgVklTVEEgTcODwpNWSUwgw6LCgMKUIExpc3RhIHkgRGV0YWxsZVxuICAgw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQICovXG5cbi8qIMOiwpTCgMOiwpTCgCBIZWFkZXIgbGlzdGEgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ubW9iLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMHJlbSAwIDEuMjVyZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLm1vYi1iYWNrLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5tb2ItdGl0bGUge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktaGVhZGluZyk7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICBtYXJnaW46IDA7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBUdXJubyBoZWFkZXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ubW9iLXR1cm5vLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbn1cblxuLm1vYi10dXJuby1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5tb2ItdHVybm8tdGltZSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBSZWNlc28gw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ubW9iLXJlY2VzbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC43NXJlbTtcbiAgbWFyZ2luOiAxLjI1cmVtIDAgMXJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICBmb250LXNpemU6IDAuNzhyZW07XG59XG5cbi5tb2ItcmVjZXNvLWxpbmUge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYm9yZGVyKTtcbn1cblxuLyogw6LClMKAw6LClMKAIENvdXJzZSBjYXJkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLm1vYi1jb3Vyc2UtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWNhcmQtYmcpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICBwYWRkaW5nOiAxcmVtIDEuMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC44NzVyZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMgZWFzZTtcbn1cblxuLm1vYi1jb3Vyc2UtY2FyZDphY3RpdmUge1xuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5tb2ItY291cnNlLXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xufVxuXG4ubW9iLWNvdXJzZS1pZCB7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xufVxuXG4ubW9iLWNvdXJzZS1iYWRnZSB7XG4gIGZvbnQtc2l6ZTogMC42OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogMC4xOHJlbSAwLjY1cmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG59XG5cbi5tb2ItY291cnNlLWJhZGdlLnRyb25jYWwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci13YXJuaW5nLXNvZnQpO1xuICBjb2xvcjogdmFyKC0tY29sb3Itd2FybmluZyk7XG59XG5cbi5tb2ItY291cnNlLWJhZGdlLmVsZWN0aXZvIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeS1zb2Z0KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ubW9iLWNvdXJzZS1uYW1lIHtcbiAgZm9udC1zaXplOiAxLjA1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIG1hcmdpbjogMCAwIDAuNzVyZW07XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbn1cblxuLm1vYi1jb3Vyc2UtbWV0YSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAwLjM1cmVtIDAuNXJlbTtcbn1cblxuLm1vYi1tZXRhLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMzVyZW07XG4gIGZvbnQtc2l6ZTogMC43OXJlbTtcbiAgY29sb3I6ICM0YjU1NjM7XG59XG5cbi5tb2ItbWV0YS1pdGVtIGkge1xuICBmb250LXNpemU6IDFyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbn1cblxuLyogw6LClMKAw6LClMKAIERldGFpbCBoZWFkZXIgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ubW9iLWRldGFpbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgcGFkZGluZzogMXJlbSAwIDFyZW07XG59XG5cbi5tb2ItZGV0YWlsLXRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWhlYWRpbmcpO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgbWFyZ2luOiAwO1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm1vYi1kZXRhaWwtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLyogw6LClMKAw6LClMKAIFNlZ21lbnRlZCB0YWIgdG9nZ2xlIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLm1vYi10YWItdG9nZ2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcGFnZS1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDAuM3JlbTtcbiAgZ2FwOiAycHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4ubW9iLXRhYi1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuM3JlbTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcbiAgZm9udC1zaXplOiAwLjc2cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE4cyBlYXNlLCBjb2xvciAwLjE4cyBlYXNlO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubW9iLXRhYi1idG4uYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogw6LClMKAw6LClMKAIEdyYWRlIGNvbHVtbiDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5jb2wtZ3JhZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ubW9iLXRhYmxlLWhlYWQgLmNvbC1ncmFkZSB7XG4gIGZvbnQtc2l6ZTogMC43N3JlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4ubW9iLXRhYmxlLXJvdy0tZ3JhZGUge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM2cHggMWZyIDcycHg7XG59XG5cbi5tb2ItZ3JhZGUtZmllbGQge1xuICB3aWR0aDogNTZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXBhZ2UtYmcpO1xuICBvdXRsaW5lOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xufVxuXG4ubW9iLWdyYWRlLWZpZWxkOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItY2FyZC1iZyk7XG59XG5cbi5tb2ItZ3JhZGUtZmllbGQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG4ubW9iLWdyYWRlLWZpZWxkOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbi8qIMOiwpTCgMOiwpTCgCBDYWxlbmRhciBjYXJkIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuLm1vYi1jYWxlbmRhci1jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItY2FyZC1iZyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gIHBhZGRpbmc6IDFyZW0gMS4xcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbn1cblxuLm1vYi1jYWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4ubW9iLWNhbC1tb250aCB7XG4gIGZvbnQtc2l6ZTogMC45MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm1vYi1jYWwtbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAwLjI1cmVtO1xufVxuXG4ubW9iLWNhbC1uYXYtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWNhcmQtYmcpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tb2ItY2FsLW5hdi1idG46ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjM1O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5tb2ItY2FsLXNlc3Npb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDAuMnJlbTtcbn1cblxuLm1vYi1jYWwtY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjQ1cmVtO1xuICBmbGV4OiAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5tb2ItY2FsLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjcycmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG59XG5cbi5tb2ItY2FsLWxhYmVsLmFjdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxuLm1vYi1jYWwtZGF0ZS13cmFwIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLm1vYi1jYWwtZGF0ZS13cmFwLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXRleHQpO1xufVxuXG4ubW9iLWNhbC1kYXRlIHtcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG59XG5cbi5tb2ItY2FsLWRhdGUtd3JhcC5hY3RpdmUgLm1vYi1jYWwtZGF0ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLyogw6LClMKAw6LClMKAIFN0dWRlbnQgbGlzdCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5tb2ItbGlzdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDAgMC4yNXJlbTtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDAuODVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbn1cblxuLm1vYi1saXN0LWNvdW50IHtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubW9iLXN0dWRlbnQtdGFibGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1jYXJkLWJnKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5tb2ItdGFibGUtaGVhZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzZweCAxZnIgODBweDtcbiAgcGFkZGluZzogMC42cmVtIDFyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wYWdlLWJnKTtcbn1cblxuLm1vYi10YWJsZS1oZWFkIHNwYW4ge1xuICBmb250LXNpemU6IDAuNzdyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxuLm1vYi10YWJsZS1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM2cHggMWZyIDgwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItcGFnZS1iZyk7XG59XG5cbi5tb2ItdGFibGUtcm93Omxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uY29sLW51bSB7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xufVxuXG4uY29sLW5hbWUge1xuICBmb250LXNpemU6IDAuODJyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcbn1cblxuLmNvbC10b2dnbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4vKiDDosKUwoDDosKUwoAgVG9nZ2xlIHN3aXRjaCDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5tb2ItdG9nZ2xlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDI2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vYi10b2dnbGUgaW5wdXQge1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuXG4ubW9iLXRvZ2dsZS1zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1kYW5nZXIpO1xuICBib3JkZXItcmFkaXVzOiAyNnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZTtcbn1cblxuLm1vYi10b2dnbGUtc2xpZGVyOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsZWZ0OiAzcHg7XG4gIHRvcDogM3B4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1jYXJkLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubW9iLXRvZ2dsZSBpbnB1dDpjaGVja2VkICsgLm1vYi10b2dnbGUtc2xpZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc3VjY2Vzcyk7XG59XG5cbi5tb2ItdG9nZ2xlIGlucHV0OmNoZWNrZWQgKyAubW9iLXRvZ2dsZS1zbGlkZXI6OmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMnB4KTtcbn1cblxuLyogw6LClMKAw6LClMKAIENvbmZpcm0gYmFyIChmaWpvKSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5tb2ItY29uZmlybS1iYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDAuODc1cmVtIDFyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWNhcmQtYmcpO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5tb2ItY29uZmlybS1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC44NzVyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm1vYi1jb25maXJtLWJ0bjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LWhvdmVyKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9373:
/*!***************************************************!*\
  !*** ./src/app/modules/courses/courses.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoursesModule": () => (/* binding */ CoursesModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _courses_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./courses.component */ 3913);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);










const coursesRoutes = [{
  path: '',
  component: _courses_component__WEBPACK_IMPORTED_MODULE_0__.CoursesComponent
}];
class CoursesModule {}
CoursesModule.ɵfac = function CoursesModule_Factory(t) {
  return new (t || CoursesModule)();
};
CoursesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: CoursesModule
});
CoursesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(coursesRoutes), _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckboxModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoursesModule, {
    declarations: [_courses_component__WEBPACK_IMPORTED_MODULE_0__.CoursesComponent, _courses_component__WEBPACK_IMPORTED_MODULE_0__.ValuesPipe],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckboxModule],
    exports: [_courses_component__WEBPACK_IMPORTED_MODULE_0__.CoursesComponent]
  });
})();

/***/ }),

/***/ 4792:
/*!**************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2020/checkbox.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR": () => (/* binding */ MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR),
/* harmony export */   "MAT_CHECKBOX_DEFAULT_OPTIONS": () => (/* binding */ MAT_CHECKBOX_DEFAULT_OPTIONS),
/* harmony export */   "MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY": () => (/* binding */ MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   "MAT_CHECKBOX_REQUIRED_VALIDATOR": () => (/* binding */ MAT_CHECKBOX_REQUIRED_VALIDATOR),
/* harmony export */   "MatCheckbox": () => (/* binding */ MatCheckbox),
/* harmony export */   "MatCheckboxChange": () => (/* binding */ MatCheckboxChange),
/* harmony export */   "MatCheckboxModule": () => (/* binding */ MatCheckboxModule),
/* harmony export */   "MatCheckboxRequiredValidator": () => (/* binding */ MatCheckboxRequiredValidator),
/* harmony export */   "_MatCheckboxBase": () => (/* binding */ _MatCheckboxBase),
/* harmony export */   "_MatCheckboxRequiredValidatorModule": () => (/* binding */ _MatCheckboxRequiredValidatorModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 8971);








/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Injection token to be used to override the default options for `mat-checkbox`. */
const _c0 = ["input"];
const _c1 = ["label"];
const _c2 = ["*"];
const MAT_CHECKBOX_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-checkbox-default-options', {
  providedIn: 'root',
  factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: 'accent',
    clickAction: 'check-indeterminate'
  };
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCheckbox),
  multi: true
};
/** Change event object emitted by checkbox. */
class MatCheckboxChange {}
// Increasing integer for generating unique ids for checkbox components.
let nextUniqueId = 0;
// Default checkbox configuration.
const defaults = MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
// Boilerplate for applying mixins to MatCheckbox.
/** @docs-private */
const _MatCheckboxMixinBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinTabIndex)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinColor)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisableRipple)((0,_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisabled)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
}))));
class _MatCheckboxBase extends _MatCheckboxMixinBase {
  /** Returns the unique id for the visual hidden input. */
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  /** Whether the checkbox is required. */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  constructor(idPrefix, elementRef, _changeDetectorRef, _ngZone, tabIndex, _animationMode, _options) {
    super(elementRef);
    this._changeDetectorRef = _changeDetectorRef;
    this._ngZone = _ngZone;
    this._animationMode = _animationMode;
    this._options = _options;
    /**
     * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
     * take precedence so this may be omitted.
     */
    this.ariaLabel = '';
    /**
     * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
     */
    this.ariaLabelledby = null;
    /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
    this.labelPosition = 'after';
    /** Name value will be applied to the input element if present */
    this.name = null;
    /** Event emitted when the checkbox's `checked` value changes. */
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Event emitted when the checkbox's `indeterminate` value changes. */
    this.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /**
     * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
     * @docs-private
     */
    this._onTouched = () => {};
    this._currentAnimationClass = '';
    this._currentCheckState = 0 /* TransitionCheckState.Init */;
    this._controlValueAccessorChangeFn = () => {};
    this._checked = false;
    this._disabled = false;
    this._indeterminate = false;
    this._options = this._options || defaults;
    this.color = this.defaultColor = this._options.color || defaults.color;
    this.tabIndex = parseInt(tabIndex) || 0;
    this.id = this._uniqueId = `${idPrefix}${++nextUniqueId}`;
  }
  ngAfterViewInit() {
    this._syncIndeterminate(this._indeterminate);
  }
  /** Whether the checkbox is checked. */
  get checked() {
    return this._checked;
  }
  set checked(value) {
    const checked = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    if (checked != this.checked) {
      this._checked = checked;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Whether the checkbox is disabled. This fully overrides the implementation provided by
   * mixinDisabled, but the mixin is still required because mixinTabIndex requires it.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    if (newValue !== this.disabled) {
      this._disabled = newValue;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
   * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
   * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
   * set to false.
   */
  get indeterminate() {
    return this._indeterminate;
  }
  set indeterminate(value) {
    const changed = value != this._indeterminate;
    this._indeterminate = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    if (changed) {
      if (this._indeterminate) {
        this._transitionCheckState(3 /* TransitionCheckState.Indeterminate */);
      } else {
        this._transitionCheckState(this.checked ? 1 /* TransitionCheckState.Checked */ : 2 /* TransitionCheckState.Unchecked */);
      }

      this.indeterminateChange.emit(this._indeterminate);
    }
    this._syncIndeterminate(this._indeterminate);
  }
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  /** Method being called whenever the label text changes. */
  _onLabelTextChange() {
    // Since the event of the `cdkObserveContent` directive runs outside of the zone, the checkbox
    // component will be only marked for check, but no actual change detection runs automatically.
    // Instead of going back into the zone in order to trigger a change detection which causes
    // *all* components to be checked (if explicitly marked or not using OnPush), we only trigger
    // an explicit change detection for the checkbox view and its children.
    this._changeDetectorRef.detectChanges();
  }
  // Implemented as part of ControlValueAccessor.
  writeValue(value) {
    this.checked = !!value;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  _transitionCheckState(newState) {
    let oldState = this._currentCheckState;
    let element = this._getAnimationTargetElement();
    if (oldState === newState || !element) {
      return;
    }
    if (this._currentAnimationClass) {
      element.classList.remove(this._currentAnimationClass);
    }
    this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
    this._currentCheckState = newState;
    if (this._currentAnimationClass.length > 0) {
      element.classList.add(this._currentAnimationClass);
      // Remove the animation class to avoid animation when the checkbox is moved between containers
      const animationClass = this._currentAnimationClass;
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          element.classList.remove(animationClass);
        }, 1000);
      });
    }
  }
  _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
    // Assigning the value again here is redundant, but we have to do it in case it was
    // changed inside the `change` listener which will cause the input to be out of sync.
    if (this._inputElement) {
      this._inputElement.nativeElement.checked = this.checked;
    }
  }
  /** Toggles the `checked` state of the checkbox. */
  toggle() {
    this.checked = !this.checked;
    this._controlValueAccessorChangeFn(this.checked);
  }
  _handleInputClick() {
    const clickAction = this._options?.clickAction;
    // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click
    if (!this.disabled && clickAction !== 'noop') {
      // When user manually click on the checkbox, `indeterminate` is set to false.
      if (this.indeterminate && clickAction !== 'check') {
        Promise.resolve().then(() => {
          this._indeterminate = false;
          this.indeterminateChange.emit(this._indeterminate);
        });
      }
      this._checked = !this._checked;
      this._transitionCheckState(this._checked ? 1 /* TransitionCheckState.Checked */ : 2 /* TransitionCheckState.Unchecked */);
      // Emit our custom change event if the native input emitted one.
      // It is important to only emit it, if the native input triggered one, because
      // we don't want to trigger a change event, when the `checked` variable changes for example.
      this._emitChangeEvent();
    } else if (!this.disabled && clickAction === 'noop') {
      // Reset native input when clicked with noop. The native checkbox becomes checked after
      // click, reset it to be align with `checked` value of `mat-checkbox`.
      this._inputElement.nativeElement.checked = this.checked;
      this._inputElement.nativeElement.indeterminate = this.indeterminate;
    }
  }
  _onInteractionEvent(event) {
    // We always have to stop propagation on the change event.
    // Otherwise the change event, from the input element, will bubble up and
    // emit its event object to the `change` output.
    event.stopPropagation();
  }
  _onBlur() {
    // When a focused element becomes disabled, the browser *immediately* fires a blur event.
    // Angular does not expect events to be raised during change detection, so any state change
    // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
    // See https://github.com/angular/angular/issues/17793. To work around this, we defer
    // telling the form control it has been touched until the next tick.
    Promise.resolve().then(() => {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
    });
  }
  _getAnimationClassForCheckStateTransition(oldState, newState) {
    // Don't transition if animations are disabled.
    if (this._animationMode === 'NoopAnimations') {
      return '';
    }
    switch (oldState) {
      case 0 /* TransitionCheckState.Init */:
        // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
        // [checked] bound to it.
        if (newState === 1 /* TransitionCheckState.Checked */) {
          return this._animationClasses.uncheckedToChecked;
        } else if (newState == 3 /* TransitionCheckState.Indeterminate */) {
          return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
        }
        break;
      case 2 /* TransitionCheckState.Unchecked */:
        return newState === 1 /* TransitionCheckState.Checked */ ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
      case 1 /* TransitionCheckState.Checked */:
        return newState === 2 /* TransitionCheckState.Unchecked */ ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
      case 3 /* TransitionCheckState.Indeterminate */:
        return newState === 1 /* TransitionCheckState.Checked */ ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
    }
    return '';
  }
  /**
   * Syncs the indeterminate value with the checkbox DOM node.
   *
   * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
   * property is supported on an element boils down to `if (propName in element)`. Domino's
   * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
   * server-side rendering.
   */
  _syncIndeterminate(value) {
    const nativeCheckbox = this._inputElement;
    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
    }
  }
}
_MatCheckboxBase.ɵfac = function _MatCheckboxBase_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
};
_MatCheckboxBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatCheckboxBase,
  viewQuery: function _MatCheckboxBase_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._labelElement = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
    }
  },
  inputs: {
    ariaLabel: ["aria-label", "ariaLabel"],
    ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
    ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
    id: "id",
    required: "required",
    labelPosition: "labelPosition",
    name: "name",
    value: "value",
    checked: "checked",
    disabled: "disabled",
    indeterminate: "indeterminate"
  },
  outputs: {
    change: "change",
    indeterminateChange: "indeterminateChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatCheckboxBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: undefined
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined
    }, {
      type: undefined
    }, {
      type: undefined
    }];
  }, {
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-label']
    }],
    ariaLabelledby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-labelledby']
    }],
    ariaDescribedby: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['aria-describedby']
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    required: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    indeterminateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    _inputElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['input']
    }],
    _labelElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['label']
    }],
    ripple: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple]
    }],
    checked: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    indeterminate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class MatCheckbox extends _MatCheckboxBase {
  constructor(elementRef, changeDetectorRef, ngZone, tabIndex, animationMode, options) {
    super('mat-mdc-checkbox-', elementRef, changeDetectorRef, ngZone, tabIndex, animationMode, options);
    this._animationClasses = {
      uncheckedToChecked: 'mdc-checkbox--anim-unchecked-checked',
      uncheckedToIndeterminate: 'mdc-checkbox--anim-unchecked-indeterminate',
      checkedToUnchecked: 'mdc-checkbox--anim-checked-unchecked',
      checkedToIndeterminate: 'mdc-checkbox--anim-checked-indeterminate',
      indeterminateToChecked: 'mdc-checkbox--anim-indeterminate-checked',
      indeterminateToUnchecked: 'mdc-checkbox--anim-indeterminate-unchecked'
    };
  }
  /** Focuses the checkbox. */
  focus() {
    this._inputElement.nativeElement.focus();
  }
  _createChangeEvent(isChecked) {
    const event = new MatCheckboxChange();
    event.source = this;
    event.checked = isChecked;
    return event;
  }
  _getAnimationTargetElement() {
    return this._inputElement?.nativeElement;
  }
  _onInputClick() {
    super._handleInputClick();
  }
  _onTouchTargetClick() {
    super._handleInputClick();
    if (!this.disabled) {
      // Normally the input should be focused already, but if the click
      // comes from the touch target, then we might have to focus it ourselves.
      this._inputElement.nativeElement.focus();
    }
  }
  /**
   *  Prevent click events that come from the `<label/>` element from bubbling. This prevents the
   *  click handler on the host from triggering twice when clicking on the `<label/>` element. After
   *  the click event on the `<label/>` propagates, the browsers dispatches click on the associated
   *  `<input/>`. By preventing clicks on the label by bubbling, we ensure only one click event
   *  bubbles when the label is clicked.
   */
  _preventBubblingFromLabel(event) {
    if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
      event.stopPropagation();
    }
  }
}
MatCheckbox.ɵfac = function MatCheckbox_Factory(t) {
  return new (t || MatCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_CHECKBOX_DEFAULT_OPTIONS, 8));
};
MatCheckbox.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatCheckbox,
  selectors: [["mat-checkbox"]],
  hostAttrs: [1, "mat-mdc-checkbox"],
  hostVars: 12,
  hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("aria-label", null)("aria-labelledby", null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mdc-checkbox--disabled", ctx.disabled)("mat-mdc-checkbox-disabled", ctx.disabled)("mat-mdc-checkbox-checked", ctx.checked);
    }
  },
  inputs: {
    disableRipple: "disableRipple",
    color: "color",
    tabIndex: "tabIndex"
  },
  exportAs: ["matCheckbox"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c2,
  decls: 15,
  vars: 19,
  consts: [[1, "mdc-form-field", 3, "click"], [1, "mdc-checkbox"], ["checkbox", ""], [1, "mat-mdc-checkbox-touch-target", 3, "click"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "checked", "indeterminate", "disabled", "id", "required", "tabIndex", "blur", "click", "change"], ["input", ""], [1, "mdc-checkbox__ripple"], [1, "mdc-checkbox__background"], ["focusable", "false", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], ["mat-ripple", "", 1, "mat-mdc-checkbox-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [3, "for"], ["label", ""]],
  template: function MatCheckbox_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCheckbox_Template_div_click_0_listener($event) {
        return ctx._preventBubblingFromLabel($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCheckbox_Template_div_click_3_listener() {
        return ctx._onTouchTargetClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function MatCheckbox_Template_input_blur_4_listener() {
        return ctx._onBlur();
      })("click", function MatCheckbox_Template_input_click_4_listener() {
        return ctx._onInputClick();
      })("change", function MatCheckbox_Template_input_change_4_listener($event) {
        return ctx._onInteractionEvent($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-form-field--align-end", ctx.labelPosition == "before");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-checkbox--selected", ctx.checked);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked)("indeterminate", ctx.indeterminate)("disabled", ctx.disabled)("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.tabIndex);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("name", ctx.name)("value", ctx.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.inputId);
    }
  },
  dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple],
  styles: [".mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox[hidden]{display:none}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{border-color:CanvasText}}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{border-color:CanvasText}}@media all and (-ms-high-contrast: none){.mdc-checkbox .mdc-checkbox__focus-ring{display:none}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:var(--mdc-checkbox-state-layer-size, 48px);height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}.mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox .mdc-checkbox{padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:var(--mdc-checkbox-disabled-selected-icon-color, rgba(0, 0, 0, 0.38))}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-selected-checkmark-color, #fff)}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-selected-checkmark-color, #fff)}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, #fff)}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, #fff)}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-icon-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-icon-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:var(--mdc-checkbox-unselected-icon-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-icon-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:var(--mdc-checkbox-selected-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-icon-color, var(--mdc-theme-secondary, #018786))}100%{border-color:var(--mdc-checkbox-unselected-icon-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mat-mdc-checkbox .mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mat-mdc-checkbox .mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mat-mdc-checkbox .mdc-checkbox:hover .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mdc-theme-secondary, #018786));background-color:transparent}.mat-mdc-checkbox .mdc-checkbox:hover .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:hover .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:hover .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-FF018786FF01878600000000FF018786{0%{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mdc-theme-secondary, #018786));background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-FF018786FF01878600000000FF018786{0%,80%{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mdc-theme-secondary, #018786))}100%{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mdc-theme-secondary, #018786));background-color:transparent}}.mat-mdc-checkbox .mdc-checkbox:hover.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:hover.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-FF018786FF01878600000000FF018786}.mat-mdc-checkbox .mdc-checkbox:hover.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:hover.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-FF018786FF01878600000000FF018786}.mat-mdc-checkbox .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mdc-theme-secondary, #018786));background-color:transparent}.mat-mdc-checkbox .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-FF018786FF01878600000000FF018786{0%{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mdc-theme-secondary, #018786));background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-FF018786FF01878600000000FF018786{0%,80%{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mdc-theme-secondary, #018786))}100%{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mdc-theme-secondary, #018786));background-color:transparent}}.mat-mdc-checkbox .mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(.mdc-ripple-upgraded):focus.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(.mdc-ripple-upgraded):focus.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-FF018786FF01878600000000FF018786}.mat-mdc-checkbox .mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(.mdc-ripple-upgraded):focus.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(.mdc-ripple-upgraded):focus.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-FF018786FF01878600000000FF018786}.mat-mdc-checkbox .mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-pressed-icon-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mat-mdc-checkbox .mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-pressed-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-pressed-icon-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:var(--mdc-checkbox-unselected-pressed-icon-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-pressed-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-pressed-icon-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:var(--mdc-checkbox-selected-pressed-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-pressed-icon-color, var(--mdc-theme-secondary, #018786))}100%{border-color:var(--mdc-checkbox-unselected-pressed-icon-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mat-mdc-checkbox .mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mat-mdc-checkbox .mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__background{top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px) / 2)}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control{top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2);width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px)}.mat-mdc-checkbox .mdc-checkbox:hover .mdc-checkbox__native-control:not([disabled])~.mdc-checkbox__ripple{opacity:.04;transform:scale(1);transition:opacity 80ms 0 cubic-bezier(0, 0, 0.2, 1),transform 80ms 0 cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control:not([disabled]):focus~.mdc-checkbox__ripple{opacity:.16}.mat-mdc-checkbox .mdc-checkbox__background{-webkit-print-color-adjust:exact;color-adjust:exact}.mat-mdc-checkbox._mat-animation-noopable *,.mat-mdc-checkbox._mat-animation-noopable *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__native-control:focus:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, black)}.cdk-high-contrast-active .mat-mdc-checkbox.mat-mdc-checkbox-disabled{opacity:.5}.cdk-high-contrast-active .mat-mdc-checkbox .mdc-checkbox__checkmark{--mdc-checkbox-selected-checkmark-color: CanvasText;--mdc-checkbox-disabled-selected-checkmark-color: CanvasText}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-mdc-focus-indicator::before{content:\"\"}"],
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-checkbox',
      host: {
        'class': 'mat-mdc-checkbox',
        '[attr.tabindex]': 'null',
        '[attr.aria-label]': 'null',
        '[attr.aria-labelledby]': 'null',
        '[class._mat-animation-noopable]': `_animationMode === 'NoopAnimations'`,
        '[class.mdc-checkbox--disabled]': 'disabled',
        '[id]': 'id',
        // Add classes that users can use to more easily target disabled or checked checkboxes.
        '[class.mat-mdc-checkbox-disabled]': 'disabled',
        '[class.mat-mdc-checkbox-checked]': 'checked'
      },
      providers: [MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR],
      inputs: ['disableRipple', 'color', 'tabIndex'],
      exportAs: 'matCheckbox',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<div class=\"mdc-form-field\"\n     [class.mdc-form-field--align-end]=\"labelPosition == 'before'\"\n     (click)=\"_preventBubblingFromLabel($event)\">\n  <div #checkbox class=\"mdc-checkbox\">\n    <!-- Render this element first so the input is on top. -->\n    <div class=\"mat-mdc-checkbox-touch-target\" (click)=\"_onTouchTargetClick()\"></div>\n    <input #input\n           type=\"checkbox\"\n           class=\"mdc-checkbox__native-control\"\n           [class.mdc-checkbox--selected]=\"checked\"\n           [attr.aria-label]=\"ariaLabel || null\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-describedby]=\"ariaDescribedby\"\n           [attr.name]=\"name\"\n           [attr.value]=\"value\"\n           [checked]=\"checked\"\n           [indeterminate]=\"indeterminate\"\n           [disabled]=\"disabled\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [tabIndex]=\"tabIndex\"\n           (blur)=\"_onBlur()\"\n           (click)=\"_onInputClick()\"\n           (change)=\"_onInteractionEvent($event)\"/>\n    <div class=\"mdc-checkbox__ripple\"></div>\n    <div class=\"mdc-checkbox__background\">\n      <svg class=\"mdc-checkbox__checkmark\"\n           focusable=\"false\"\n           viewBox=\"0 0 24 24\"\n           aria-hidden=\"true\">\n        <path class=\"mdc-checkbox__checkmark-path\"\n              fill=\"none\"\n              d=\"M1.73,12.91 8.1,19.28 22.79,4.59\"/>\n      </svg>\n      <div class=\"mdc-checkbox__mixedmark\"></div>\n    </div>\n    <div class=\"mat-mdc-checkbox-ripple mat-mdc-focus-indicator\" mat-ripple\n      [matRippleTrigger]=\"checkbox\"\n      [matRippleDisabled]=\"disableRipple || disabled\"\n      [matRippleCentered]=\"true\"></div>\n  </div>\n  <!--\n    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back\n    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced\n    an unnecessary accessibility tree node.\n  -->\n  <label #label\n         [for]=\"inputId\">\n    <ng-content></ng-content>\n  </label>\n</div>\n",
      styles: [".mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox[hidden]{display:none}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{border-color:CanvasText}}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{content:\"\";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{border-color:CanvasText}}@media all and (-ms-high-contrast: none){.mdc-checkbox .mdc-checkbox__focus-ring{display:none}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:var(--mdc-checkbox-state-layer-size, 48px);height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}.mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox .mdc-checkbox{padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:var(--mdc-checkbox-disabled-selected-icon-color, rgba(0, 0, 0, 0.38))}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-selected-checkmark-color, #fff)}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-selected-checkmark-color, #fff)}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, #fff)}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, #fff)}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-icon-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-icon-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:var(--mdc-checkbox-unselected-icon-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-icon-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:var(--mdc-checkbox-selected-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-icon-color, var(--mdc-theme-secondary, #018786))}100%{border-color:var(--mdc-checkbox-unselected-icon-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mat-mdc-checkbox .mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mat-mdc-checkbox .mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mat-mdc-checkbox .mdc-checkbox:hover .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mdc-theme-secondary, #018786));background-color:transparent}.mat-mdc-checkbox .mdc-checkbox:hover .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:hover .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:hover .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-FF018786FF01878600000000FF018786{0%{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mdc-theme-secondary, #018786));background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-FF018786FF01878600000000FF018786{0%,80%{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mdc-theme-secondary, #018786))}100%{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mdc-theme-secondary, #018786));background-color:transparent}}.mat-mdc-checkbox .mdc-checkbox:hover.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:hover.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-FF018786FF01878600000000FF018786}.mat-mdc-checkbox .mdc-checkbox:hover.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:hover.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-FF018786FF01878600000000FF018786}.mat-mdc-checkbox .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mdc-theme-secondary, #018786));background-color:transparent}.mat-mdc-checkbox .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-FF018786FF01878600000000FF018786{0%{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mdc-theme-secondary, #018786));background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-FF018786FF01878600000000FF018786{0%,80%{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mdc-theme-secondary, #018786))}100%{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mdc-theme-secondary, #018786));background-color:transparent}}.mat-mdc-checkbox .mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(.mdc-ripple-upgraded):focus.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(.mdc-ripple-upgraded):focus.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-FF018786FF01878600000000FF018786}.mat-mdc-checkbox .mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(.mdc-ripple-upgraded):focus.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(.mdc-ripple-upgraded):focus.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-FF018786FF01878600000000FF018786}.mat-mdc-checkbox .mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-pressed-icon-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mat-mdc-checkbox .mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(:disabled):active .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-pressed-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-pressed-icon-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:var(--mdc-checkbox-unselected-pressed-icon-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:var(--mdc-checkbox-selected-pressed-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-pressed-icon-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:var(--mdc-checkbox-selected-pressed-icon-color, var(--mdc-theme-secondary, #018786));background-color:var(--mdc-checkbox-selected-pressed-icon-color, var(--mdc-theme-secondary, #018786))}100%{border-color:var(--mdc-checkbox-unselected-pressed-icon-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mat-mdc-checkbox .mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mat-mdc-checkbox .mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mat-mdc-checkbox .mdc-checkbox:not(:disabled):active.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__background{top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px) / 2)}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control{top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2);width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px)}.mat-mdc-checkbox .mdc-checkbox:hover .mdc-checkbox__native-control:not([disabled])~.mdc-checkbox__ripple{opacity:.04;transform:scale(1);transition:opacity 80ms 0 cubic-bezier(0, 0, 0.2, 1),transform 80ms 0 cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-checkbox .mdc-checkbox .mdc-checkbox__native-control:not([disabled]):focus~.mdc-checkbox__ripple{opacity:.16}.mat-mdc-checkbox .mdc-checkbox__background{-webkit-print-color-adjust:exact;color-adjust:exact}.mat-mdc-checkbox._mat-animation-noopable *,.mat-mdc-checkbox._mat-animation-noopable *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__native-control:focus:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, black)}.cdk-high-contrast-active .mat-mdc-checkbox.mat-mdc-checkbox-disabled{opacity:.5}.cdk-high-contrast-active .mat-mdc-checkbox .mdc-checkbox__checkmark{--mdc-checkbox-selected-checkmark-color: CanvasText;--mdc-checkbox-disabled-selected-checkmark-color: CanvasText}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-mdc-focus-indicator::before{content:\"\"}"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['tabindex']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_CHECKBOX_DEFAULT_OPTIONS]
      }]
    }];
  }, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAT_CHECKBOX_REQUIRED_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCheckboxRequiredValidator),
  multi: true
};
/**
 * Validator for Material checkbox's required attribute in template-driven checkbox.
 * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
 * work with `mat-checkbox`.
 */
class MatCheckboxRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxRequiredValidator {}
MatCheckboxRequiredValidator.ɵfac = /* @__PURE__ */function () {
  let ɵMatCheckboxRequiredValidator_BaseFactory;
  return function MatCheckboxRequiredValidator_Factory(t) {
    return (ɵMatCheckboxRequiredValidator_BaseFactory || (ɵMatCheckboxRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCheckboxRequiredValidator)))(t || MatCheckboxRequiredValidator);
  };
}();
MatCheckboxRequiredValidator.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCheckboxRequiredValidator,
  selectors: [["mat-checkbox", "required", "", "formControlName", ""], ["mat-checkbox", "required", "", "formControl", ""], ["mat-checkbox", "required", "", "ngModel", ""]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCheckboxRequiredValidator, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-checkbox[required][formControlName],
             mat-checkbox[required][formControl], mat-checkbox[required][ngModel]`,
      providers: [MAT_CHECKBOX_REQUIRED_VALIDATOR]
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** This module is used by both original and MDC-based checkbox implementations. */
class _MatCheckboxRequiredValidatorModule {}
_MatCheckboxRequiredValidatorModule.ɵfac = function _MatCheckboxRequiredValidatorModule_Factory(t) {
  return new (t || _MatCheckboxRequiredValidatorModule)();
};
_MatCheckboxRequiredValidatorModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _MatCheckboxRequiredValidatorModule
});
_MatCheckboxRequiredValidatorModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatCheckboxRequiredValidatorModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [MatCheckboxRequiredValidator],
      declarations: [MatCheckboxRequiredValidator]
    }]
  }], null, null);
})();
class MatCheckboxModule {}
MatCheckboxModule.ɵfac = function MatCheckboxModule_Factory(t) {
  return new (t || MatCheckboxModule)();
};
MatCheckboxModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatCheckboxModule
});
MatCheckboxModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _MatCheckboxRequiredValidatorModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _MatCheckboxRequiredValidatorModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCheckboxModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _MatCheckboxRequiredValidatorModule],
      exports: [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _MatCheckboxRequiredValidatorModule],
      declarations: [MatCheckbox]
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_modules_courses_courses_module_ts.js.map