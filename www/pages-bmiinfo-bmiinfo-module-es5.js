(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bmiinfo-bmiinfo-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/bmiinfo/bmiinfo.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/bmiinfo/bmiinfo.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n    <ion-toolbar mode=\"ios\">\r\n        <ion-title class=\"ion-text-capitalize\">\r\n          {{strings.ST116}}\r\n        </ion-title>\r\n        <ion-buttons slot=\"start\">\r\n            <app-backbutton color=\"dark\"></app-backbutton>\r\n          </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n\r\n<ion-grid fixed>\r\n  <ion-row class=\"ion-align-items-stretch\" *ngFor=\"let item of data\">\r\n    <ion-col size=\"8\">\r\n      <div class=\"bg1\">\r\n          {{item.text}}\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"4\">\r\n        <div class=\"bg2\" [ngStyle]=\"{'background-color': item.color}\">\r\n            {{item.number}}\r\n        </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/bmiinfo/bmiinfo-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/bmiinfo/bmiinfo-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: BmiinfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BmiinfoPageRoutingModule", function() { return BmiinfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bmiinfo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bmiinfo.page */ "./src/app/pages/bmiinfo/bmiinfo.page.ts");




var routes = [
    {
        path: '',
        component: _bmiinfo_page__WEBPACK_IMPORTED_MODULE_3__["BmiinfoPage"]
    }
];
var BmiinfoPageRoutingModule = /** @class */ (function () {
    function BmiinfoPageRoutingModule() {
    }
    BmiinfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BmiinfoPageRoutingModule);
    return BmiinfoPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/bmiinfo/bmiinfo.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/bmiinfo/bmiinfo.module.ts ***!
  \*************************************************/
/*! exports provided: BmiinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BmiinfoPageModule", function() { return BmiinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bmiinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bmiinfo-routing.module */ "./src/app/pages/bmiinfo/bmiinfo-routing.module.ts");
/* harmony import */ var _bmiinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bmiinfo.page */ "./src/app/pages/bmiinfo/bmiinfo.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var BmiinfoPageModule = /** @class */ (function () {
    function BmiinfoPageModule() {
    }
    BmiinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _bmiinfo_routing_module__WEBPACK_IMPORTED_MODULE_5__["BmiinfoPageRoutingModule"]
            ],
            declarations: [_bmiinfo_page__WEBPACK_IMPORTED_MODULE_6__["BmiinfoPage"]]
        })
    ], BmiinfoPageModule);
    return BmiinfoPageModule;
}());



/***/ }),

/***/ "./src/app/pages/bmiinfo/bmiinfo.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/bmiinfo/bmiinfo.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  height: 100%; }\n\nion-row {\n  height: 16%; }\n\nion-col {\n  height: 100%; }\n\n.bg1 {\n  border-radius: 8px;\n  background-color: #f1f2f6;\n  padding: 3px 20px;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  font-weight: bold; }\n\n.bg2 {\n  border-radius: 8px;\n  padding: 3px;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm1paW5mby9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxwYWdlc1xcYm1paW5mb1xcYm1paW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksWUFBWSxFQUFBOztBQUloQjtFQUNJLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHVCQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYm1paW5mby9ibWlpbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1ncmlke1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbmlvbi1yb3d7XHJcbiAgICBoZWlnaHQ6IDE2JTtcclxufVxyXG5cclxuaW9uLWNvbHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbn1cclxuXHJcbi5iZzF7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMmY2O1xyXG4gICAgcGFkZGluZzogM3B4IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYmcye1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/bmiinfo/bmiinfo.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/bmiinfo/bmiinfo.page.ts ***!
  \***********************************************/
/*! exports provided: BmiinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BmiinfoPage", function() { return BmiinfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");



var BmiinfoPage = /** @class */ (function () {
    function BmiinfoPage() {
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.data = [
            {
                text: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST117,
                number: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST123,
                color: '#dff9fb'
            },
            {
                text: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST118,
                number: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST124,
                color: '#badc58'
            },
            {
                text: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST119,
                number: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST125,
                color: '#f6e58d'
            },
            {
                text: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST120,
                number: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST126,
                color: '#ffbe76'
            },
            {
                text: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST121,
                number: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST127,
                color: '#ff7979'
            },
            {
                text: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST122,
                number: _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"].ST128,
                color: '#eb4d4b'
            },
        ];
    }
    BmiinfoPage.prototype.ngOnInit = function () {
    };
    BmiinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bmiinfo',
            template: __webpack_require__(/*! raw-loader!./bmiinfo.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/bmiinfo/bmiinfo.page.html"),
            styles: [__webpack_require__(/*! ./bmiinfo.page.scss */ "./src/app/pages/bmiinfo/bmiinfo.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BmiinfoPage);
    return BmiinfoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-bmiinfo-bmiinfo-module-es5.js.map