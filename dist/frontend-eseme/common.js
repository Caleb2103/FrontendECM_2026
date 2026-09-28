"use strict";
(self["webpackChunkFrontendEseme"] = self["webpackChunkFrontendEseme"] || []).push([["common"],{

/***/ 5549:
/*!*********************************************!*\
  !*** ./src/app/services/courses.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseService": () => (/* binding */ CourseService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 8504);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class CourseService {
  constructor(http) {
    this.http = http;
    this.basePath = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/courses`;
  }
  getCoursesList() {
    const url = `${this.basePath}/list`;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.retry)(2));
  }
}
CourseService.ɵfac = function CourseService_Factory(t) {
  return new (t || CourseService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
CourseService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CourseService,
  factory: CourseService.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=common.js.map