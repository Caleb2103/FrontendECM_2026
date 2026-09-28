"use strict";
(self["webpackChunkFrontendEseme"] = self["webpackChunkFrontendEseme"] || []).push([["src_app_modules_profile_profile_module_ts"],{

/***/ 9852:
/*!******************************************************!*\
  !*** ./src/app/modules/profile/profile.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent),
/* harmony export */   "ZONAS": () => (/* binding */ ZONAS)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_members_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/members.service */ 4674);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






function ProfileComponent_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const z_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", z_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](z_r1);
  }
}
/** Zonas/congregaciones disponibles (mismo catálogo que el formulario de registro). */
const ZONAS = ['Zona 1', 'Zona 2', 'Zona 3', 'Zona 4', 'Zona 5', 'Zona 6', 'Zona 7', 'Zona 8', 'Zona 9', 'Zona 10', 'Zona 11', 'Zona 12', 'Zona 13', 'Zona 14', 'CDL', 'Oquendo', 'Polo', 'Rosaluz', 'Cochabamba'];
class ProfileComponent {
  constructor(memberService, snackBar, router) {
    this.memberService = memberService;
    this.snackBar = snackBar;
    this.router = router;
    this.zonas = ZONAS;
    this.saving = false;
    this.memberId = null;
    this.dni = '';
    this.nombres = '';
    this.apellidos = '';
    this.celular = '';
    this.fechaNacimiento = '';
    this.zona = '';
  }
  ngOnInit() {
    this.loadFromCache();
  }
  /**
   * No existe un endpoint para obtener el perfil por id, así que se
   * precarga con la respuesta de login que quedó cacheada en localStorage.
   * Si el usuario inició sesión antes de este cambio, el caché no existirá
   * y el formulario simplemente arranca vacío (salvo nombre/id).
   */
  loadFromCache() {
    const raw = localStorage.getItem('member');
    if (!raw) {
      this.nombres = localStorage.getItem('name') ?? '';
      const idRaw = localStorage.getItem('userId');
      this.memberId = idRaw ? parseInt(idRaw, 10) : null;
      return;
    }
    try {
      const member = JSON.parse(raw);
      this.memberId = member.memb_id;
      this.dni = member.memb_dni ?? '';
      this.nombres = member.memb_name ?? '';
      this.apellidos = member.memb_surname ?? '';
      this.celular = member.memb_mobil ?? '';
      this.fechaNacimiento = member.birthdate ?? '';
      this.zona = member.memb_zone?.zone_name ?? '';
    } catch {
      // Caché corrupto: se ignora y el formulario arranca vacío.
    }
  }
  isValid() {
    return !!(this.nombres && this.apellidos && this.celular && this.celular.length === 9 && this.zona);
  }
  guardar() {
    if (!this.memberId || this.saving || !this.isValid()) {
      return;
    }
    this.saving = true;
    const payload = {
      memb_name: this.nombres.toUpperCase(),
      memb_surname: this.apellidos.toUpperCase(),
      memb_mobil: this.celular,
      birthdate: this.fechaNacimiento,
      memb_zone: this.zona
    };
    this.memberService.updateMember(this.memberId, payload).subscribe({
      next: () => {
        this.saving = false;
        // Refresca el caché local para que header/sidebar reflejen el cambio.
        localStorage.setItem('name', payload.memb_name);
        const raw = localStorage.getItem('member');
        if (raw) {
          try {
            const member = JSON.parse(raw);
            localStorage.setItem('member', JSON.stringify({
              ...member,
              ...payload
            }));
          } catch {
            // Ignorado: el caché seguirá desactualizado hasta el próximo login.
          }
        }
        this.snackBar.open('Perfil actualizado correctamente', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      },
      error: () => {
        this.saving = false;
        this.snackBar.open('No se pudo guardar el perfil. Intenta de nuevo.', 'Cerrar', {
          duration: 4000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    });
  }
  volver() {
    this.router.navigate(['/menu']);
  }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
  return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_members_service__WEBPACK_IMPORTED_MODULE_0__.MemberService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ProfileComponent,
  selectors: [["app-profile"]],
  decls: 42,
  vars: 9,
  consts: [[1, "content"], [1, "page-header"], [1, "page-title"], [1, "page-subtitle"], [1, "profile-card"], [1, "form-row"], [1, "form-group"], ["for", "nombres", 1, "form-label"], ["id", "nombres", "type", "text", "name", "nombres", "required", "", "autocomplete", "off", 1, "form-input", 3, "ngModel", "ngModelChange"], ["for", "apellidos", 1, "form-label"], ["id", "apellidos", "type", "text", "name", "apellidos", "required", "", "autocomplete", "off", 1, "form-input", 3, "ngModel", "ngModelChange"], ["for", "dni", 1, "form-label"], ["id", "dni", "type", "text", "disabled", "", 1, "form-input", 3, "value"], ["for", "celular", 1, "form-label"], ["id", "celular", "type", "tel", "name", "celular", "maxlength", "9", "inputmode", "numeric", "required", "", "autocomplete", "off", 1, "form-input", 3, "ngModel", "ngModelChange"], ["for", "fechaNacimiento", 1, "form-label"], ["id", "fechaNacimiento", "type", "date", "name", "fechaNacimiento", 1, "form-input", 3, "ngModel", "ngModelChange"], ["for", "zona", 1, "form-label"], ["id", "zona", "name", "zona", "required", "", 1, "form-input", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "form-actions"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "button", 1, "btn-primary", 3, "disabled", "click"], [3, "value"]],
  template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Mi perfil");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Actualiza tu informaci\u00F3n personal");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Nombres *");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.nombres = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6)(13, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Apellidos *");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.apellidos = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 5)(17, "div", 6)(18, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "DNI");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 6)(22, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Celular *");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_24_listener($event) {
        return ctx.celular = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 5)(26, "div", 6)(27, "label", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Fecha de nacimiento");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_29_listener($event) {
        return ctx.fechaNacimiento = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 6)(31, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Zona / Congregaci\u00F3n *");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_select_ngModelChange_33_listener($event) {
        return ctx.zona = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "option", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Selecciona tu zona");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ProfileComponent_option_36_Template, 2, 2, "option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 21)(38, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_38_listener() {
        return ctx.volver();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Cancelar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_40_listener() {
        return ctx.guardar();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.nombres);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.apellidos);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.dni);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.celular);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.fechaNacimiento);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.zona);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.zonas);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.isValid() || ctx.saving);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.saving ? "Guardando..." : "Guardar cambios", " ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
  styles: ["[_nghost-%COMP%] {\n  font-family: var(--font-family-base);\n}\n\n.profile-card[_ngcontent-%COMP%] {\n  max-width: 640px;\n  background: var(--color-card-bg);\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-lg);\n  padding: 1.75rem;\n}\n\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--color-text);\n  margin-bottom: 0.4rem;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.7rem 0.9rem;\n  border: 1px solid var(--color-border);\n  border-radius: var(--radius-sm);\n  font-family: var(--font-family-base);\n  font-size: 0.95rem;\n  color: var(--color-text);\n  background: var(--color-card-bg);\n  box-sizing: border-box;\n}\n\n.form-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-primary);\n}\n\n.form-input[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--color-primary);\n  outline-offset: 1px;\n}\n\n.form-input[_ngcontent-%COMP%]:disabled {\n  background: var(--color-page-bg);\n  color: var(--color-text-muted);\n  cursor: not-allowed;\n}\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  margin-top: 0.5rem;\n}\n\n.btn-primary[_ngcontent-%COMP%], .btn-secondary[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 0.7rem 1.5rem;\n  border-radius: var(--radius-sm);\n  font-family: var(--font-family-base);\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  border: 1px solid transparent;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n  color: white;\n  border-color: var(--color-primary);\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-primary-hover);\n}\n\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--color-card-bg);\n  color: var(--color-text-muted);\n  border-color: var(--color-border);\n}\n\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--color-page-bg);\n}\n\n@media (max-width: 600px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1rem;\n  }\n\n  .profile-card[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMscUNBQXFDO0VBQ3JDLCtCQUErQjtFQUMvQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMsK0JBQStCO0VBQy9CLG9DQUFvQztFQUNwQyxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGdDQUFnQztFQUNoQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSx1Q0FBdUM7RUFDdkMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QiwrQkFBK0I7RUFDL0Isb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7SUFDMUIsU0FBUztFQUNYOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbn1cblxuLnByb2ZpbGUtY2FyZCB7XG4gIG1heC13aWR0aDogNjQwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWNhcmQtYmcpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICBwYWRkaW5nOiAxLjc1cmVtO1xufVxuXG4uZm9ybS1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMS4yNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XG59XG5cbi5mb3JtLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuN3JlbSAwLjlyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWNhcmQtYmcpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uZm9ybS1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5mb3JtLWlucHV0OmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIG91dGxpbmUtb2Zmc2V0OiAxcHg7XG59XG5cbi5mb3JtLWlucHV0OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcGFnZS1iZyk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmZvcm0tYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMXJlbTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xufVxuXG4uYnRuLXByaW1hcnksXG4uYnRuLXNlY29uZGFyeSB7XG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gIHBhZGRpbmc6IDAuN3JlbSAxLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1iYXNlKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5idG4tcHJpbWFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnktaG92ZXIpO1xufVxuXG4uYnRuLXByaW1hcnk6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItY2FyZC1iZyk7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW11dGVkKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ib3JkZXIpO1xufVxuXG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXBhZ2UtYmcpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmZvcm0tcm93IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBnYXA6IDFyZW07XG4gIH1cblxuICAucHJvZmlsZS1jYXJkIHtcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9267:
/*!***************************************************!*\
  !*** ./src/app/modules/profile/profile.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileModule": () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component */ 9852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);







const profileRoutes = [{
  path: '',
  component: _profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent
}];
class ProfileModule {}
ProfileModule.ɵfac = function ProfileModule_Factory(t) {
  return new (t || ProfileModule)();
};
ProfileModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ProfileModule
});
ProfileModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(profileRoutes), _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBarModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProfileModule, {
    declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent],
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__.MatSnackBarModule],
    exports: [_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_modules_profile_profile_module_ts.js.map