"use strict";
(self["webpackChunkFrontendEseme"] = self["webpackChunkFrontendEseme"] || []).push([["src_app_modules_vouchers_voucher_module_ts"],{

/***/ 4582:
/*!****************************************************!*\
  !*** ./src/app/modules/vouchers/voucher.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherModule": () => (/* binding */ VoucherModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _vouchers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vouchers.component */ 4879);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);







const voucherRoutes = [{
  path: '',
  component: _vouchers_component__WEBPACK_IMPORTED_MODULE_0__.VouchersComponent
}];
class VoucherModule {}
VoucherModule.ɵfac = function VoucherModule_Factory(t) {
  return new (t || VoucherModule)();
};
VoucherModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: VoucherModule
});
VoucherModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(voucherRoutes), _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VoucherModule, {
    declarations: [_vouchers_component__WEBPACK_IMPORTED_MODULE_0__.VouchersComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule],
    exports: [_vouchers_component__WEBPACK_IMPORTED_MODULE_0__.VouchersComponent]
  });
})();

/***/ }),

/***/ 4879:
/*!********************************************************!*\
  !*** ./src/app/modules/vouchers/vouchers.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VouchersComponent": () => (/* binding */ VouchersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_voucher_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/voucher.service */ 7117);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function VouchersComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function VouchersComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No se encontraron vouchers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function VouchersComponent_div_15_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function VouchersComponent_div_15_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r26 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r26 + 1);
  }
}
function VouchersComponent_div_15_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function VouchersComponent_div_15_td_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const voucher_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](voucher_r27.vouc_member.memb_zone.zone_name);
  }
}
function VouchersComponent_div_15_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 46)(1, "div", 47)(2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, VouchersComponent_div_15_td_7_div_7_Template, 2, 1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const voucher_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", voucher_r27.vouc_member.memb_name[0], "", voucher_r27.vouc_member.memb_surname[0], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", voucher_r27.vouc_member.memb_name, " ", voucher_r27.vouc_member.memb_surname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", voucher_r27.vouc_member.memb_zone);
  }
}
function VouchersComponent_div_15_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "DNI");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function VouchersComponent_div_15_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const voucher_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](voucher_r30.vouc_member.memb_dni);
  }
}
function VouchersComponent_div_15_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Per\u00EDodo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function VouchersComponent_div_15_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const voucher_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((voucher_r31.vouc_period == null ? null : voucher_r31.vouc_period.peri_description) || "\u2014");
  }
}
function VouchersComponent_div_15_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "N\u00B0 Operaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function VouchersComponent_div_15_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const voucher_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](voucher_r32.vouc_operation_number);
  }
}
function VouchersComponent_div_15_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function VouchersComponent_div_15_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 46)(1, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const voucher_r33 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r18.getStatusClass(voucher_r33.vouc_status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r18.getStatusLabel(voucher_r33.vouc_status), " ");
  }
}
function VouchersComponent_div_15_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function VouchersComponent_div_15_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const voucher_r34 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r20.formatDate(voucher_r34.vouc_created_at));
  }
}
function VouchersComponent_div_15_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Voucher");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function VouchersComponent_div_15_td_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 46)(1, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VouchersComponent_div_15_td_25_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37);
      const voucher_r35 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r36.viewImage(voucher_r35));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Imagen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function VouchersComponent_div_15_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 57);
  }
}
function VouchersComponent_div_15_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 58);
  }
}
function VouchersComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29)(1, "table", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, VouchersComponent_div_15_th_3_Template, 2, 0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, VouchersComponent_div_15_td_4_Template, 2, 1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, VouchersComponent_div_15_th_6_Template, 2, 0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, VouchersComponent_div_15_td_7_Template, 8, 5, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, VouchersComponent_div_15_th_9_Template, 2, 0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, VouchersComponent_div_15_td_10_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, VouchersComponent_div_15_th_12_Template, 2, 0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, VouchersComponent_div_15_td_13_Template, 2, 1, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, VouchersComponent_div_15_th_15_Template, 2, 0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, VouchersComponent_div_15_td_16_Template, 2, 1, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](17, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, VouchersComponent_div_15_th_18_Template, 2, 0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, VouchersComponent_div_15_td_19_Template, 3, 2, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](20, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, VouchersComponent_div_15_th_21_Template, 2, 0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, VouchersComponent_div_15_td_22_Template, 2, 1, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](23, 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, VouchersComponent_div_15_th_24_Template, 2, 0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, VouchersComponent_div_15_td_25_Template, 4, 0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, VouchersComponent_div_15_tr_26_Template, 1, 0, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, VouchersComponent_div_15_tr_27_Template, 1, 0, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r2.filteredVouchers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
  }
}
function VouchersComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function VouchersComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No se encontraron vouchers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function VouchersComponent_div_36_div_1_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VouchersComponent_div_36_div_1_button_34_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r44);
      const voucher_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r42.approveVoucher(voucher_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const voucher_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r41.approvingId === voucher_r40.vouc_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r41.approvingId === voucher_r40.vouc_id ? "bx-loader-alt bx-spin" : "bx-check");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r41.approvingId === voucher_r40.vouc_id ? "Aprobando..." : "Aprobar", " ");
  }
}
function VouchersComponent_div_36_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 61)(1, "div", 62)(2, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 64)(5, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 67)(12, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Per\u00EDodo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "N\u00B0 Operaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 75)(31, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VouchersComponent_div_36_div_1_Template_button_click_31_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r47);
      const voucher_r40 = restoredCtx.$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r46.viewImage(voucher_r40));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Ver voucher ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, VouchersComponent_div_36_div_1_button_34_Template, 3, 3, "button", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const voucher_r40 = ctx.$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", voucher_r40.vouc_member.memb_name[0], "", voucher_r40.vouc_member.memb_surname[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", voucher_r40.vouc_member.memb_name, " ", voucher_r40.vouc_member.memb_surname, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("DNI: ", voucher_r40.vouc_member.memb_dni, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r39.getStatusClass(voucher_r40.vouc_status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r39.getStatusLabel(voucher_r40.vouc_status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](voucher_r40.vouc_period.peri_description || "\u2014");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](voucher_r40.vouc_operation_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r39.formatDate(voucher_r40.vouc_created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", voucher_r40.vouc_status.toUpperCase() !== "APROBADO");
  }
}
function VouchersComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VouchersComponent_div_36_div_1_Template, 35, 11, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.filteredVouchers);
  }
}
function VouchersComponent_div_37_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "No se pudo cargar la imagen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function VouchersComponent_div_37_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r49.selectedVoucher.vouc_comment);
  }
}
function VouchersComponent_div_37_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101)(1, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VouchersComponent_div_37_div_26_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r51.approveVoucher(ctx_r51.selectedVoucher));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r50.approvingId === ctx_r50.selectedVoucher.vouc_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r50.approvingId === ctx_r50.selectedVoucher.vouc_id ? "bx-loader-alt bx-spin" : "bx-check-circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r50.approvingId === ctx_r50.selectedVoucher.vouc_id ? "Aprobando..." : "Aprobar voucher", " ");
  }
}
function VouchersComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VouchersComponent_div_37_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r53.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VouchersComponent_div_37_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 82)(3, "div", 83)(4, "h3", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Voucher de pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VouchersComponent_div_37_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r56.closeModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 87)(11, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div")(14, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " N\u00B0 Op: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 93)(23, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("error", function VouchersComponent_div_37_Template_img_error_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r54);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r57.selectedImageUrl = "");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, VouchersComponent_div_37_div_24_Template, 4, 0, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, VouchersComponent_div_37_div_25_Template, 4, 1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, VouchersComponent_div_37_div_26_Template, 4, 3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r6.getStatusClass(ctx_r6.selectedVoucher.vouc_status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.getStatusLabel(ctx_r6.selectedVoucher.vouc_status), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r6.selectedVoucher.vouc_member.memb_name[0], "", ctx_r6.selectedVoucher.vouc_member.memb_surname[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r6.selectedVoucher.vouc_member.memb_name, " ", ctx_r6.selectedVoucher.vouc_member.memb_surname, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" DNI: ", ctx_r6.selectedVoucher.vouc_member.memb_dni, " \u00A0\u00B7\u00A0 ", ctx_r6.selectedVoucher.vouc_period.peri_description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.selectedVoucher.vouc_operation_number);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r6.selectedImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.selectedImageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.selectedVoucher.vouc_comment);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.selectedVoucher.vouc_status.toUpperCase() !== "APROBADO");
  }
}
class VouchersComponent {
  constructor(voucherService) {
    this.voucherService = voucherService;
    this.vouchers = [];
    this.filteredVouchers = [];
    this.selectedVoucher = null;
    this.selectedImageUrl = null;
    this.isLoading = true;
    this.approvingId = null;
    this.searchQuery = '';
    this.activeFilter = 'ALL';
    this.displayedColumns = ['index', 'member', 'dni', 'period', 'operation', 'status', 'date', 'action'];
  }
  ngOnInit() {
    this.loadVouchers();
  }
  loadVouchers(forceRefresh = false) {
    this.isLoading = true;
    this.voucherService.getVoucherList(forceRefresh).subscribe({
      next: data => {
        this.vouchers = data;
        this.applyFilters();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }
  applyFilters() {
    let result = [...this.vouchers];
    if (this.activeFilter !== 'ALL') {
      result = result.filter(v => v.vouc_status === this.activeFilter);
    }
    const q = this.searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter(v => v.vouc_member.memb_name.toLowerCase().includes(q) || v.vouc_member.memb_surname.toLowerCase().includes(q) || v.vouc_member.memb_dni.toLowerCase().includes(q) || v.vouc_operation_number.toLowerCase().includes(q));
    }
    this.filteredVouchers = result;
  }
  setFilter(filter) {
    this.activeFilter = filter;
    this.applyFilters();
  }
  onSearch() {
    this.applyFilters();
  }
  viewImage(voucher) {
    this.selectedVoucher = voucher;
    this.selectedImageUrl = `${this.voucherService.basePath}/vouchers/image/${voucher.vouc_id}`;
  }
  closeModal() {
    this.selectedVoucher = null;
    this.selectedImageUrl = null;
  }
  getStatusClass(status) {
    const s = status?.toUpperCase();
    if (s === 'APROBADO' || s === 'APPROVED') return 'status-approved';
    if (s === 'RECHAZADO' || s === 'REJECTED') return 'status-rejected';
    return 'status-pending';
  }
  getStatusLabel(status) {
    const s = status?.toUpperCase();
    if (s === 'APROBADO' || s === 'APPROVED') return 'Aprobado';
    if (s === 'RECHAZADO' || s === 'REJECTED') return 'Rechazado';
    return 'Pendiente';
  }
  countByStatus(status) {
    if (status === 'ALL') return this.vouchers.length;
    return this.vouchers.filter(v => v.vouc_status === status).length;
  }
  approveVoucher(voucher) {
    this.approvingId = voucher.vouc_id;
    this.voucherService.approveVoucher(voucher.vouc_id).subscribe({
      next: () => {
        voucher.vouc_status = 'Aprobado';
        this.approvingId = null;
      },
      error: () => {
        this.approvingId = null;
      }
    });
  }
  formatDate(dateStr) {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    return d.toLocaleDateString('es-PE', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }
}
VouchersComponent.ɵfac = function VouchersComponent_Factory(t) {
  return new (t || VouchersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_voucher_service__WEBPACK_IMPORTED_MODULE_0__.VoucherService));
};
VouchersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: VouchersComponent,
  selectors: [["app-vouchers"]],
  decls: 38,
  vars: 21,
  consts: [[1, "content"], [1, "desktop-view"], [1, "page-header"], [1, "page-header-text"], [1, "page-title"], [1, "page-subtitle"], ["title", "Actualizar", "aria-label", "Actualizar vouchers", 1, "refresh-btn", 3, "click"], [1, "bx", "bx-refresh"], [1, "search-bar-wrapper"], [1, "bx", "bx-search", "search-icon-bar"], ["type", "text", "placeholder", "Buscar por nombre, DNI u operaci\u00F3n...", 1, "search-bar", 3, "ngModel", "ngModelChange", "input"], ["class", "spinner-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "custom-mat-table", 4, "ngIf"], [1, "mobile-view"], [1, "mobile-header"], [1, "mobile-title"], ["aria-label", "Actualizar vouchers", 1, "refresh-btn-mobile", 3, "click"], [1, "search-container-mobile"], ["type", "text", "placeholder", "Buscar por nombre o DNI...", 1, "search-input-mobile", 3, "ngModel", "ngModelChange", "input"], [1, "bx", "bx-search", "search-icon-mobile"], [1, "filter-chips-mobile"], [1, "chip-mobile", 3, "click"], ["class", "voucher-cards-mobile", 4, "ngIf"], ["class", "modal-overlay", 3, "click", 4, "ngIf"], [1, "spinner-container"], [1, "spinner"], [1, "empty-state"], [1, "bx", "bx-folder-open", "empty-icon"], [1, "custom-mat-table"], ["mat-table", "", 1, "w-full", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", "class", "th-column", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "td-column", 4, "matCellDef"], ["matColumnDef", "member"], ["matColumnDef", "dni"], ["mat-cell", "", "class", "td-column mono", 4, "matCellDef"], ["matColumnDef", "period"], ["matColumnDef", "operation"], ["matColumnDef", "status"], ["matColumnDef", "date"], ["mat-cell", "", "class", "td-column date-cell", 4, "matCellDef"], ["matColumnDef", "action"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "table-row", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 1, "th-column"], ["mat-cell", "", 1, "td-column"], [1, "member-cell"], [1, "member-avatar"], [1, "member-name"], ["class", "member-zone", 4, "ngIf"], [1, "member-zone"], ["mat-cell", "", 1, "td-column", "mono"], [1, "status-badge", 3, "ngClass"], ["mat-cell", "", 1, "td-column", "date-cell"], ["aria-label", "Ver imagen del voucher", 1, "btn-view", 3, "click"], [1, "bx", "bx-image-alt"], ["mat-header-row", ""], ["mat-row", "", 1, "table-row"], [1, "voucher-cards-mobile"], ["class", "voucher-card-mobile", 4, "ngFor", "ngForOf"], [1, "voucher-card-mobile"], [1, "card-top"], [1, "member-avatar-mobile"], [1, "card-member-info"], [1, "card-member-name"], [1, "card-member-dni"], [1, "card-details"], [1, "card-detail-row"], [1, "bx", "bx-calendar"], [1, "card-detail-label"], [1, "card-detail-value"], [1, "bx", "bx-hash"], [1, "card-detail-value", "mono"], [1, "bx", "bx-time"], [1, "card-buttons-mobile"], [1, "btn-view-mobile", 3, "click"], ["class", "btn-approve-mobile", 3, "disabled", "click", 4, "ngIf"], [1, "btn-approve-mobile", 3, "disabled", "click"], [1, "bx", 3, "ngClass"], [1, "modal-overlay", 3, "click"], [1, "modal-container", 3, "click"], [1, "modal-header"], [1, "modal-title-group"], [1, "modal-title"], ["aria-label", "Cerrar", 1, "modal-close-btn", 3, "click"], [1, "bx", "bx-x"], [1, "modal-member-info"], [1, "modal-avatar"], [1, "modal-member-name"], [1, "modal-member-meta"], [1, "modal-operation"], [1, "mono"], [1, "modal-image-wrapper"], ["alt", "Voucher de pago", 1, "modal-image", 3, "src", "error"], ["class", "modal-image-error", 4, "ngIf"], ["class", "modal-comment", 4, "ngIf"], ["class", "modal-actions", 4, "ngIf"], [1, "modal-image-error"], [1, "modal-comment"], [1, "bx", "bx-comment-detail"], [1, "modal-actions"], [1, "btn-approve-modal", 3, "disabled", "click"]],
  template: function VouchersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Vouchers");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Gesti\u00F3n de comprobantes de pago");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VouchersComponent_Template_button_click_8_listener() {
        return ctx.loadVouchers(true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VouchersComponent_Template_input_ngModelChange_12_listener($event) {
        return ctx.searchQuery = $event;
      })("input", function VouchersComponent_Template_input_input_12_listener() {
        return ctx.onSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, VouchersComponent_div_13_Template, 2, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, VouchersComponent_div_14_Template, 4, 0, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, VouchersComponent_div_15_Template, 28, 3, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14)(17, "div", 15)(18, "h2", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Vouchers de Pago");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VouchersComponent_Template_button_click_20_listener() {
        return ctx.loadVouchers(true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 18)(23, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VouchersComponent_Template_input_ngModelChange_23_listener($event) {
        return ctx.searchQuery = $event;
      })("input", function VouchersComponent_Template_input_input_23_listener() {
        return ctx.onSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 21)(26, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VouchersComponent_Template_button_click_26_listener() {
        return ctx.setFilter("ALL");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VouchersComponent_Template_button_click_28_listener() {
        return ctx.setFilter("PENDIENTE");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VouchersComponent_Template_button_click_30_listener() {
        return ctx.setFilter("APROBADO");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VouchersComponent_Template_button_click_32_listener() {
        return ctx.setFilter("RECHAZADO");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, VouchersComponent_div_34_Template, 2, 0, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, VouchersComponent_div_35_Template, 4, 0, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, VouchersComponent_div_36_Template, 2, 1, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, VouchersComponent_div_37_Template, 27, 13, "div", 24);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchQuery);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.filteredVouchers.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.filteredVouchers.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchQuery);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeFilter === "ALL");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Todos (", ctx.countByStatus("ALL"), ") ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeFilter === "PENDIENTE");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Pendientes (", ctx.countByStatus("PENDIENTE"), ") ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeFilter === "APROBADO");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Aprobados (", ctx.countByStatus("APROBADO"), ") ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.activeFilter === "RECHAZADO");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Rechazados (", ctx.countByStatus("RECHAZADO"), ") ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.filteredVouchers.length === 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedVoucher);
    }
  },
  dependencies: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
  styles: ["[_nghost-%COMP%] {\n  font-family: var(--font-family-base);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar { width: 0; }\n\n\n\n.mobile-view[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.page-header-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.refresh-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 2px solid var(--color-border);\n  border-radius: 10px;\n  padding: 0.4rem 0.7rem;\n  cursor: pointer;\n  color: var(--color-text-muted);\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  transition: border-color 0.2s, color 0.2s;\n}\n\n.refresh-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--color-primary);\n  color: var(--color-primary);\n}\n\n\n\n.summary-cards[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  padding: 1rem 1.2rem;\n  border-radius: 14px;\n  border: 2px solid transparent;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  background-color: var(--color-page-bg);\n}\n\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n\n.summary-card.active[_ngcontent-%COMP%] {\n  border-color: var(--color-primary);\n  background-color: var(--color-primary-soft);\n}\n\n.summary-card.total[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] { color: var(--color-text-muted); }\n.summary-card.pending[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] { color: var(--color-warning); }\n.summary-card.approved[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] { color: var(--color-success); }\n.summary-card.rejected[_ngcontent-%COMP%]   .summary-icon[_ngcontent-%COMP%] { color: var(--color-danger); }\n\n.summary-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  flex-shrink: 0;\n}\n\n.summary-number[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-family-base);\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-text);\n  line-height: 1.1;\n}\n\n.summary-label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--font-family-base);\n  font-size: 12px;\n  color: var(--color-text-muted);\n  font-weight: 500;\n}\n\n\n\n.search-bar-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 1rem;\n  width: clamp(240px, 40vw, 420px);\n}\n\n.search-icon-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.9rem;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 20px;\n  color: var(--color-text-muted);\n  pointer-events: none;\n}\n\n.search-bar[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.7rem 1rem 0.7rem 2.6rem;\n  border: 1px solid var(--color-border);\n  border-radius: 10px;\n  font-family: var(--font-family-base);\n  font-size: 14px;\n  background-color: var(--color-page-bg);\n  box-sizing: border-box;\n  transition: border-color 0.2s, background-color 0.2s;\n}\n\n.search-bar[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--color-primary);\n  background-color: var(--color-card-bg);\n}\n\n\n\n.custom-mat-table[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  overflow: hidden;\n  overflow-x: auto;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);\n}\n\n.mat-mdc-table[_ngcontent-%COMP%]   .mdc-data-table__header-row[_ngcontent-%COMP%] {\n  background-color: var(--color-card-bg);\n  border-bottom: 1px solid var(--color-border);\n}\n\n.mdc-data-table__table[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n\n.th-column[_ngcontent-%COMP%] {\n  padding: 1rem;\n  font-family: var(--font-family-base);\n  font-weight: 700;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--color-text-muted);\n}\n\n.td-column[_ngcontent-%COMP%] {\n  padding: 0.85rem 1rem;\n  font-family: var(--font-family-base);\n  font-size: 14px;\n  color: var(--color-text);\n}\n\n.table-row[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-soft);\n}\n\n\n\n.member-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n}\n\n.member-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: var(--color-primary);\n  color: white;\n  font-family: var(--font-family-base);\n  font-size: 13px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n\n.member-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text);\n  font-size: 14px;\n}\n\n.member-zone[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--color-text-muted);\n  margin-top: 1px;\n}\n\n.mono[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  font-size: 13px;\n}\n\n.date-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  color: var(--color-text-muted);\n}\n\n\n\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.3rem 0.85rem;\n  border-radius: 20px;\n  font-family: var(--font-family-base);\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n\n.status-pending[_ngcontent-%COMP%] {\n  background-color: var(--color-warning-soft);\n  color: var(--color-warning);\n}\n\n.status-approved[_ngcontent-%COMP%] {\n  background-color: var(--color-success-soft);\n  color: var(--color-success);\n}\n\n.status-rejected[_ngcontent-%COMP%] {\n  background-color: var(--color-danger-soft);\n  color: var(--color-danger);\n}\n\n\n\n.btn-view[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  background-color: var(--color-primary);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  padding: 0.5rem 0.9rem;\n  font-family: var(--font-family-base);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  white-space: nowrap;\n}\n\n.btn-view[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-primary-hover);\n}\n\n.btn-view[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n\n\n.btn-approve[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  background-color: var(--color-success);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  padding: 0.5rem 0.9rem;\n  font-family: var(--font-family-base);\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background-color 0.2s;\n  white-space: nowrap;\n}\n\n.btn-approve[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1e7e34;\n}\n\n.btn-approve[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n\n.btn-approve[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.approved-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  color: var(--color-success);\n  font-family: var(--font-family-base);\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.approved-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n\n\n.modal-actions[_ngcontent-%COMP%] {\n  padding: 0.8rem 1.5rem 1.5rem;\n  border-top: 1px solid var(--color-border);\n}\n\n.btn-approve-modal[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  background-color: var(--color-success);\n  color: white;\n  border: none;\n  border-radius: 12px;\n  padding: 0.85rem;\n  font-family: var(--font-family-base);\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n\n.btn-approve-modal[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1e7e34;\n}\n\n.btn-approve-modal[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n\n.btn-approve-modal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n\n\n.spinner-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 120px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid var(--color-border);\n  border-top: 4px solid var(--color-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0%   { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n\n\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem 1rem;\n  color: var(--color-text-muted);\n}\n\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  font-size: 15px;\n}\n\n\n\n.modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background-color: rgba(0, 0, 0, 0.65);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n  padding: 1.5rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.15s ease;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from { opacity: 0; }\n  to   { opacity: 1; }\n}\n\n.modal-container[_ngcontent-%COMP%] {\n  background-color: var(--color-card-bg);\n  border-radius: 20px;\n  width: 100%;\n  max-width: 520px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n  animation: _ngcontent-%COMP%_slideUp 0.2s ease;\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from { transform: translateY(20px); opacity: 0; }\n  to   { transform: translateY(0);    opacity: 1; }\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.2rem 1.5rem;\n  border-bottom: 1px solid var(--color-border);\n}\n\n.modal-title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  font-family: var(--font-family-heading);\n  font-size: 17px;\n  font-weight: 600;\n  color: var(--color-text);\n  margin: 0;\n}\n\n.modal-close-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 26px;\n  cursor: pointer;\n  color: var(--color-text-muted);\n  display: flex;\n  align-items: center;\n  padding: 0.2rem;\n  border-radius: 6px;\n  transition: background-color 0.15s;\n}\n\n.modal-close-btn[_ngcontent-%COMP%]:hover {\n  background-color: var(--color-border);\n  color: var(--color-text);\n}\n\n.modal-member-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 1rem 1.5rem;\n  background-color: var(--color-page-bg);\n}\n\n.modal-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background-color: var(--color-primary);\n  color: white;\n  font-family: var(--font-family-base);\n  font-size: 15px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n\n.modal-member-name[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  font-size: 15px;\n  font-weight: 700;\n  color: var(--color-text);\n}\n\n.modal-member-meta[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  font-size: 13px;\n  color: var(--color-text-muted);\n  margin-top: 2px;\n}\n\n.modal-operation[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  font-size: 13px;\n  color: var(--color-text-muted);\n  margin-top: 2px;\n}\n\n.modal-image-wrapper[_ngcontent-%COMP%] {\n  padding: 1.2rem 1.5rem;\n  display: flex;\n  justify-content: center;\n  background-color: var(--color-page-bg);\n}\n\n.modal-image[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 420px;\n  object-fit: contain;\n  border-radius: 12px;\n  border: 1px solid var(--color-border);\n}\n\n.modal-image-error[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: var(--color-text-muted);\n}\n\n.modal-image-error[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 52px;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n\n.modal-image-error[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: var(--font-family-base);\n  font-size: 14px;\n}\n\n.modal-comment[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  padding: 0.8rem 1.5rem 1.2rem;\n  font-family: var(--font-family-base);\n  font-size: 14px;\n  color: var(--color-text-muted);\n  border-top: 1px solid var(--color-border);\n}\n\n.modal-comment[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n  flex-shrink: 0;\n  margin-top: 1px;\n  color: var(--color-text-muted);\n}\n\n\n\n@media (max-width: 900px) {\n  .summary-cards[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n\n  .summary-card[_ngcontent-%COMP%] {\n    flex: 1 1 calc(50% - 0.5rem);\n  }\n\n  .search-bar-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media (max-width: 480px) {\n  [_nghost-%COMP%]   .content[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n\n  [_nghost-%COMP%]   .desktop-view[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-view[_ngcontent-%COMP%] {\n    display: block;\n    min-height: 100vh;\n    background-color: var(--color-page-bg);\n  }\n\n  .mobile-header[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 1rem 1.5rem;\n    background-color: var(--color-card-bg);\n    position: sticky;\n    top: 0;\n    z-index: 10;\n    border-bottom: 1px solid var(--color-border);\n  }\n\n  .mobile-title[_ngcontent-%COMP%] {\n    font-family: var(--font-family-heading);\n    font-size: 20px;\n    font-weight: 600;\n    margin: 0;\n    color: var(--color-text);\n  }\n\n  .refresh-btn-mobile[_ngcontent-%COMP%] {\n    background: none;\n    border: none;\n    font-size: 24px;\n    color: var(--color-text-muted);\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n  }\n\n  .search-container-mobile[_ngcontent-%COMP%] {\n    position: relative;\n    padding: 1rem 1.5rem 0.5rem;\n    background-color: var(--color-card-bg);\n  }\n\n  .search-input-mobile[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0.85rem 3rem 0.85rem 1rem;\n    border: 1px solid var(--color-border);\n    border-radius: 12px;\n    font-family: var(--font-family-base);\n    font-size: 15px;\n    background-color: var(--color-page-bg);\n    box-sizing: border-box;\n  }\n\n  .search-input-mobile[_ngcontent-%COMP%]:focus {\n    outline: none;\n    border-color: var(--color-primary);\n    background-color: var(--color-card-bg);\n  }\n\n  .search-icon-mobile[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 2.5rem;\n    top: 50%;\n    transform: translateY(-50%);\n    font-size: 22px;\n    color: var(--color-text-muted);\n    pointer-events: none;\n  }\n\n  .filter-chips-mobile[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 0.4rem;\n    padding: 0.8rem 1.5rem;\n    background-color: var(--color-card-bg);\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    scrollbar-width: none;\n    border-bottom: 1px solid var(--color-border);\n    margin-bottom: 0.5rem;\n  }\n\n  .filter-chips-mobile[_ngcontent-%COMP%]::-webkit-scrollbar { display: none; }\n\n  .chip-mobile[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    min-height: 44px;\n    padding: 0.9rem 0.9rem;\n    border: 2px solid var(--color-border);\n    border-radius: 20px;\n    background-color: var(--color-card-bg);\n    font-family: var(--font-family-base);\n    font-size: 13px;\n    font-weight: 500;\n    color: var(--color-text-muted);\n    cursor: pointer;\n    transition: all 0.2s ease;\n    white-space: nowrap;\n    box-sizing: border-box;\n  }\n\n  .chip-mobile.active[_ngcontent-%COMP%] {\n    background-color: var(--color-primary);\n    border-color: var(--color-primary);\n    color: white;\n  }\n\n  .voucher-cards-mobile[_ngcontent-%COMP%] {\n    padding: 0.5rem 1.5rem 2rem;\n  }\n\n  .voucher-card-mobile[_ngcontent-%COMP%] {\n    background-color: var(--color-card-bg);\n    border-radius: 16px;\n    padding: 1.2rem;\n    margin-bottom: 1rem;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);\n    border: 1px solid var(--color-border);\n  }\n\n  .card-top[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.8rem;\n    margin-bottom: 1rem;\n  }\n\n  .member-avatar-mobile[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background-color: var(--color-primary);\n    color: white;\n    font-family: var(--font-family-base);\n    font-size: 14px;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    text-transform: uppercase;\n  }\n\n  .card-member-info[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n\n  .card-member-name[_ngcontent-%COMP%] {\n    font-family: var(--font-family-base);\n    font-size: 15px;\n    font-weight: 700;\n    color: var(--color-text);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  .card-member-dni[_ngcontent-%COMP%] {\n    font-family: var(--font-family-base);\n    font-size: 13px;\n    color: var(--color-text-muted);\n    margin-top: 2px;\n  }\n\n  .card-details[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n\n  .card-detail-row[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: 0.5rem 0;\n    border-bottom: 1px solid var(--color-border);\n  }\n\n  .card-detail-row[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n\n  .card-detail-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 18px;\n    color: var(--color-text-muted);\n    width: 20px;\n    flex-shrink: 0;\n  }\n\n  .card-detail-label[_ngcontent-%COMP%] {\n    font-family: var(--font-family-base);\n    font-size: 13px;\n    color: var(--color-text-muted);\n    flex: 1;\n  }\n\n  .card-detail-value[_ngcontent-%COMP%] {\n    font-family: var(--font-family-base);\n    font-size: 13px;\n    color: var(--color-text);\n    font-weight: 500;\n    text-align: right;\n  }\n\n  .card-buttons-mobile[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 0.6rem;\n  }\n\n  .btn-view-mobile[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 0.8rem;\n    background-color: var(--color-primary);\n    color: white;\n    border: none;\n    border-radius: 10px;\n    font-family: var(--font-family-base);\n    font-size: 15px;\n    font-weight: 500;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.4rem;\n  }\n\n  .btn-view-mobile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .btn-approve-mobile[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 0.8rem;\n    background-color: var(--color-success);\n    color: white;\n    border: none;\n    border-radius: 10px;\n    font-family: var(--font-family-base);\n    font-size: 15px;\n    font-weight: 500;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.4rem;\n    transition: background-color 0.2s;\n  }\n\n  .btn-approve-mobile[_ngcontent-%COMP%]:hover:not(:disabled) {\n    background-color: #1e7e34;\n  }\n\n  .btn-approve-mobile[_ngcontent-%COMP%]:disabled {\n    opacity: 0.65;\n    cursor: not-allowed;\n  }\n\n  .btn-approve-mobile[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n\n  .modal-overlay[_ngcontent-%COMP%] {\n    padding: 0;\n    align-items: flex-end;\n  }\n\n  .modal-container[_ngcontent-%COMP%] {\n    border-radius: 20px 20px 0 0;\n    max-height: 92vh;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy92b3VjaGVycy92b3VjaGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBLHNCQUFzQixRQUFRLEVBQUU7O0FBRWhDLGlDQUFpQzs7QUFFakM7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7Ozs4REFHOEQ7O0FBRTlEO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDJCQUEyQjtBQUM3Qjs7QUFFQSx3Q0FBd0M7O0FBRXhDO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDJDQUEyQztBQUM3Qzs7QUFFQSxzQ0FBc0MsOEJBQThCLEVBQUU7QUFDdEUsdUNBQXVDLDJCQUEyQixFQUFFO0FBQ3BFLHVDQUF1QywyQkFBMkIsRUFBRTtBQUNwRSx1Q0FBdUMsMEJBQTBCLEVBQUU7O0FBRW5FO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixnQkFBZ0I7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WTtJQUNaLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztFQUNiOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLE9BQU87SUFDUCxlQUFlO0lBQ2Ysc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7IHdpZHRoOiAwOyB9XG5cbi8qID09PT09PT09PT0gTEFZT1VUID09PT09PT09PT0gKi9cblxuLm1vYmlsZS12aWV3IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogPT09PT09PT09PSBQQUdFIEhFQURFUiA9PT09PT09PT09XG4gICBTb2xvIGVsIGV4dHJhIHByb3BpbyBkZSBlc3RlIG3Dg8KzZHVsbzogdMODwq10dWxvICsgYm90w4PCs24gZGUgcmVmcmVzY2FyIGVuXG4gICBsYSBtaXNtYSBmaWxhLiBUYW1hw4PCsW8gZGUgdMODwq10dWxvL3N1YnTDg8KtdHVsbyB5IG1hcmdpbi1ib3R0b20geWEgdmllbmVuXG4gICBkZSAucGFnZS1oZWFkZXIvLnBhZ2UtdGl0bGUvLnBhZ2Utc3VidGl0bGUgZW4gc3R5bGVzLmNzcy4gKi9cblxuLnBhZ2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucGFnZS1oZWFkZXItdGV4dCB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuLnJlZnJlc2gtYnRuIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMC40cmVtIDAuN3JlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMsIGNvbG9yIDAuMnM7XG59XG5cbi5yZWZyZXNoLWJ0bjpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cblxuLyogPT09PT09PT09PSBTVU1NQVJZIENBUkRTID09PT09PT09PT0gKi9cblxuLnN1bW1hcnktY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLnN1bW1hcnktY2FyZCB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC44cmVtO1xuICBwYWRkaW5nOiAxcmVtIDEuMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcGFnZS1iZyk7XG59XG5cbi5zdW1tYXJ5LWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uc3VtbWFyeS1jYXJkLmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktc29mdCk7XG59XG5cbi5zdW1tYXJ5LWNhcmQudG90YWwgICAuc3VtbWFyeS1pY29uIHsgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpOyB9XG4uc3VtbWFyeS1jYXJkLnBlbmRpbmcgIC5zdW1tYXJ5LWljb24geyBjb2xvcjogdmFyKC0tY29sb3Itd2FybmluZyk7IH1cbi5zdW1tYXJ5LWNhcmQuYXBwcm92ZWQgLnN1bW1hcnktaWNvbiB7IGNvbG9yOiB2YXIoLS1jb2xvci1zdWNjZXNzKTsgfVxuLnN1bW1hcnktY2FyZC5yZWplY3RlZCAuc3VtbWFyeS1pY29uIHsgY29sb3I6IHZhcigtLWNvbG9yLWRhbmdlcik7IH1cblxuLnN1bW1hcnktaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5zdW1tYXJ5LW51bWJlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuXG4uc3VtbWFyeS1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4vKiA9PT09PT09PT09IFNFQVJDSCBCQVIgPT09PT09PT09PSAqL1xuXG4uc2VhcmNoLWJhci13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB3aWR0aDogY2xhbXAoMjQwcHgsIDQwdncsIDQyMHB4KTtcbn1cblxuLnNlYXJjaC1pY29uLWJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMC45cmVtO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zZWFyY2gtYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuN3JlbSAxcmVtIDAuN3JlbSAyLjZyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wYWdlLWJnKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMsIGJhY2tncm91bmQtY29sb3IgMC4ycztcbn1cblxuLnNlYXJjaC1iYXI6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXJkLWJnKTtcbn1cblxuLyogPT09PT09PT09PSBUQUJMRSA9PT09PT09PT09ICovXG5cbi5jdXN0b20tbWF0LXRhYmxlIHtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5tYXQtbWRjLXRhYmxlIC5tZGMtZGF0YS10YWJsZV9faGVhZGVyLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNhcmQtYmcpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbn1cblxuLm1kYy1kYXRhLXRhYmxlX190YWJsZSB7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cblxuLnRoLWNvbHVtbiB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG59XG5cbi50ZC1jb2x1bW4ge1xuICBwYWRkaW5nOiAwLjg1cmVtIDFyZW07XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG59XG5cbi50YWJsZS1yb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXNvZnQpO1xufVxuXG4vKiA9PT09PT09PT09IE1FTUJFUiBDRUxMID09PT09PT09PT0gKi9cblxuLm1lbWJlci1jZWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjdyZW07XG59XG5cbi5tZW1iZXItYXZhdGFyIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubWVtYmVyLW5hbWUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1lbWJlci16b25lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cblxuLm1vbm8ge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmRhdGUtY2VsbCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbn1cblxuLyogPT09PT09PT09PSBTVEFUVVMgQkFER0UgPT09PT09PT09PSAqL1xuXG4uc3RhdHVzLWJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuM3JlbSAwLjg1cmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnN0YXR1cy1wZW5kaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itd2FybmluZy1zb2Z0KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXdhcm5pbmcpO1xufVxuXG4uc3RhdHVzLWFwcHJvdmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc3VjY2Vzcy1zb2Z0KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXN1Y2Nlc3MpO1xufVxuXG4uc3RhdHVzLXJlamVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyLXNvZnQpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZGFuZ2VyKTtcbn1cblxuLyogPT09PT09PT09PSBBQ1RJT04gQlVUVE9OID09PT09PT09PT0gKi9cblxuLmJ0bi12aWV3IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4zNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwLjVyZW0gMC45cmVtO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5idG4tdmlldzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktaG92ZXIpO1xufVxuXG4uYnRuLXZpZXcgaSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLyogPT09PT09PT09PSBBUFBST1ZFIEJVVFRPTiAoVEFCTEUpID09PT09PT09PT0gKi9cblxuLmJ0bi1hcHByb3ZlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4zNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc3VjY2Vzcyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwLjVyZW0gMC45cmVtO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5idG4tYXBwcm92ZTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTdlMzQ7XG59XG5cbi5idG4tYXBwcm92ZTpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5idG4tYXBwcm92ZSBpIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYXBwcm92ZWQtbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjNyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zdWNjZXNzKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJhc2UpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5hcHByb3ZlZC1sYWJlbCBpIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4vKiA9PT09PT09PT09IEFQUFJPVkUgQlVUVE9OIChNT0RBTCkgPT09PT09PT09PSAqL1xuXG4ubW9kYWwtYWN0aW9ucyB7XG4gIHBhZGRpbmc6IDAuOHJlbSAxLjVyZW0gMS41cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbn1cblxuLmJ0bi1hcHByb3ZlLW1vZGFsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc3VjY2Vzcyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAwLjg1cmVtO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG59XG5cbi5idG4tYXBwcm92ZS1tb2RhbDpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTdlMzQ7XG59XG5cbi5idG4tYXBwcm92ZS1tb2RhbDpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5idG4tYXBwcm92ZS1tb2RhbCBpIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4vKiA9PT09PT09PT09IFNQSU5ORVIgPT09PT09PT09PSAqL1xuXG4uc3Bpbm5lci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMjBweDtcbn1cblxuLnNwaW5uZXIge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBib3JkZXItdG9wOiA0cHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDAuN3MgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSAgIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLyogPT09PT09PT09PSBFTVBUWSBTVEFURSA9PT09PT09PT09ICovXG5cbi5lbXB0eS1zdGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogM3JlbSAxcmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG59XG5cbi5lbXB0eS1pY29uIHtcbiAgZm9udC1zaXplOiA1NnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uZW1wdHktc3RhdGUgcCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4vKiA9PT09PT09PT09IElNQUdFIE1PREFMID09PT09PT09PT0gKi9cblxuLm1vZGFsLW92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMDtcbiAgcGFkZGluZzogMS41cmVtO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjE1cyBlYXNlO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gIHRvICAgeyBvcGFjaXR5OiAxOyB9XG59XG5cbi5tb2RhbC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXJkLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTIwcHg7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuMnMgZWFzZTtcbn1cblxuQGtleWZyYW1lcyBzbGlkZVVwIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTsgb3BhY2l0eTogMDsgfVxuICB0byAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyAgICBvcGFjaXR5OiAxOyB9XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEuMnJlbSAxLjVyZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xufVxuXG4ubW9kYWwtdGl0bGUtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNzVyZW07XG59XG5cbi5tb2RhbC10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1oZWFkaW5nKTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1vZGFsLWNsb3NlLWJ0biB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC4ycmVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXM7XG59XG5cbi5tb2RhbC1jbG9zZS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG59XG5cbi5tb2RhbC1tZW1iZXItaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC44NXJlbTtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXBhZ2UtYmcpO1xufVxuXG4ubW9kYWwtYXZhdGFyIHtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubW9kYWwtbWVtYmVyLW5hbWUge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xufVxuXG4ubW9kYWwtbWVtYmVyLW1ldGEge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5tb2RhbC1vcGVyYXRpb24ge1xuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5tb2RhbC1pbWFnZS13cmFwcGVyIHtcbiAgcGFkZGluZzogMS4ycmVtIDEuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXBhZ2UtYmcpO1xufVxuXG4ubW9kYWwtaW1hZ2Uge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDQyMHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xufVxuXG4ubW9kYWwtaW1hZ2UtZXJyb3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbn1cblxuLm1vZGFsLWltYWdlLWVycm9yIGkge1xuICBmb250LXNpemU6IDUycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5cbi5tb2RhbC1pbWFnZS1lcnJvciBwIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJhc2UpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tb2RhbC1jb21tZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGdhcDogMC41cmVtO1xuICBwYWRkaW5nOiAwLjhyZW0gMS41cmVtIDEuMnJlbTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJhc2UpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG59XG5cbi5tb2RhbC1jb21tZW50IGkge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbn1cblxuLyogPT09PT09PT09PSBSRVNQT05TSVZFID09PT09PT09PT0gKi9cblxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5zdW1tYXJ5LWNhcmRzIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAuc3VtbWFyeS1jYXJkIHtcbiAgICBmbGV4OiAxIDEgY2FsYyg1MCUgLSAwLjVyZW0pO1xuICB9XG5cbiAgLnNlYXJjaC1iYXItd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIDpob3N0IC5jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgOmhvc3QgLmRlc2t0b3AtdmlldyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tb2JpbGUtdmlldyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcGFnZS1iZyk7XG4gIH1cblxuICAubW9iaWxlLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXJkLWJnKTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgfVxuXG4gIC5tb2JpbGUtdGl0bGUge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1oZWFkaW5nKTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICB9XG5cbiAgLnJlZnJlc2gtYnRuLW1vYmlsZSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLnNlYXJjaC1jb250YWluZXItbW9iaWxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMXJlbSAxLjVyZW0gMC41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWNhcmQtYmcpO1xuICB9XG5cbiAgLnNlYXJjaC1pbnB1dC1tb2JpbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuODVyZW0gM3JlbSAwLjg1cmVtIDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcGFnZS1iZyk7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIC5zZWFyY2gtaW5wdXQtbW9iaWxlOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FyZC1iZyk7XG4gIH1cblxuICAuc2VhcmNoLWljb24tbW9iaWxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDIuNXJlbTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC5maWx0ZXItY2hpcHMtbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC40cmVtO1xuICAgIHBhZGRpbmc6IDAuOHJlbSAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FyZC1iZyk7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgfVxuXG4gIC5maWx0ZXItY2hpcHMtbW9iaWxlOjotd2Via2l0LXNjcm9sbGJhciB7IGRpc3BsYXk6IG5vbmU7IH1cblxuICAuY2hpcC1tb2JpbGUge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogNDRweDtcbiAgICBwYWRkaW5nOiAwLjlyZW0gMC45cmVtO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1jYXJkLWJnKTtcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHktYmFzZSk7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbXV0ZWQpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIC5jaGlwLW1vYmlsZS5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLnZvdWNoZXItY2FyZHMtbW9iaWxlIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtIDJyZW07XG4gIH1cblxuICAudm91Y2hlci1jYXJkLW1vYmlsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItY2FyZC1iZyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBwYWRkaW5nOiAxLjJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA3KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICB9XG5cbiAgLmNhcmQtdG9wIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjhyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5tZW1iZXItYXZhdGFyLW1vYmlsZSB7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJhc2UpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgLmNhcmQtbWVtYmVyLWluZm8ge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAwO1xuICB9XG5cbiAgLmNhcmQtbWVtYmVyLW5hbWUge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG5cbiAgLmNhcmQtbWVtYmVyLWRuaSB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJhc2UpO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICB9XG5cbiAgLmNhcmQtZGV0YWlscyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuXG4gIC5jYXJkLWRldGFpbC1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyKTtcbiAgfVxuXG4gIC5jYXJkLWRldGFpbC1yb3c6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgfVxuXG4gIC5jYXJkLWRldGFpbC1yb3cgaSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgICB3aWR0aDogMjBweDtcbiAgICBmbGV4LXNocmluazogMDtcbiAgfVxuXG4gIC5jYXJkLWRldGFpbC1sYWJlbCB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJhc2UpO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tdXRlZCk7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC5jYXJkLWRldGFpbC12YWx1ZSB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJhc2UpO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gIC5jYXJkLWJ1dHRvbnMtbW9iaWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMC42cmVtO1xuICB9XG5cbiAgLmJ0bi12aWV3LW1vYmlsZSB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMC40cmVtO1xuICB9XG5cbiAgLmJ0bi12aWV3LW1vYmlsZSBpIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICAuYnRuLWFwcHJvdmUtbW9iaWxlIHtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDAuOHJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zdWNjZXNzKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWJhc2UpO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAwLjRyZW07XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xuICB9XG5cbiAgLmJ0bi1hcHByb3ZlLW1vYmlsZTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlN2UzNDtcbiAgfVxuXG4gIC5idG4tYXBwcm92ZS1tb2JpbGU6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNjU7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxuXG4gIC5idG4tYXBwcm92ZS1tb2JpbGUgaSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG5cbiAgLm1vZGFsLW92ZXJsYXkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICB9XG5cbiAgLm1vZGFsLWNvbnRhaW5lciB7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcbiAgICBtYXgtaGVpZ2h0OiA5MnZoO1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7117:
/*!*********************************************!*\
  !*** ./src/app/services/voucher.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoucherService": () => (/* binding */ VoucherService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





class VoucherService {
  constructor(http) {
    this.http = http;
    this.basePath = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.vouchersCache = null;
  }
  getVoucherList(forceRefresh = false) {
    if (!forceRefresh && this.vouchersCache) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.vouchersCache);
    }
    const url = `${this.basePath}/vouchers/list`;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(data => this.vouchersCache = data));
  }
  getVoucherImage(voucherId) {
    const url = `${this.basePath}/vouchers/image/${voucherId}`;
    return this.http.get(url);
  }
  approveVoucher(voucherId) {
    const url = `${this.basePath}/vouchers/update/${voucherId}`;
    return this.http.patch(url, {
      vouc_status: 'Aprobado'
    }, this.httpOptions).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
      this.vouchersCache = null;
    }));
  }
}
VoucherService.ɵfac = function VoucherService_Factory(t) {
  return new (t || VoucherService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
VoucherService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: VoucherService,
  factory: VoucherService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_modules_vouchers_voucher_module_ts.js.map