(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categories-categories-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/categories/categories.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/categories/categories.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"lightheader\" no-border>\r\n    <ion-toolbar mode=\"ios\">\r\n        <ion-title class=\"ion-text-capitalize\">\r\n          {{strings.ST41}}\r\n        </ion-title>\r\n              <ion-buttons slot=\"start\">\r\n                <app-backbutton color=\"#f7474f\"></app-backbutton>\r\n              </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content fixed>\r\n  \r\n    <app-loading *ngIf=\"isLoading\"></app-loading>\r\n  \r\n    <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"6\" *ngFor=\"let item of categories\" [routerLink]=\"['/cdiets', item.category_id, item.category_title]\" [ngStyle]=\"{'height': height}\">\r\n             <div class=\"cardcategory\" [style.background-image]=\"'url(' + (item.category_image | image) + ')'\">\r\n                 <div class=\"overlay\">\r\n                 <div class=\"texts\">\r\n                 <h1>{{item.category_title}}</h1>\r\n                 </div>\r\n               </div>\r\n               </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n  \r\n  </ion-content>\r\n  "

/***/ }),

/***/ "./src/app/pages/categories/categories-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/categories/categories-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageRoutingModule", function() { return CategoriesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.page */ "./src/app/pages/categories/categories.page.ts");




var routes = [
    {
        path: '',
        component: _categories_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesPage"]
    }
];
var CategoriesPageRoutingModule = /** @class */ (function () {
    function CategoriesPageRoutingModule() {
    }
    CategoriesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CategoriesPageRoutingModule);
    return CategoriesPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/categories/categories.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.module.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories-routing.module */ "./src/app/pages/categories/categories-routing.module.ts");
/* harmony import */ var _categories_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories.page */ "./src/app/pages/categories/categories.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");









var CategoriesPageModule = /** @class */ (function () {
    function CategoriesPageModule() {
    }
    CategoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
                _categories_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesPageRoutingModule"]
            ],
            declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesPage"]]
        })
    ], CategoriesPageModule);
    return CategoriesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/categories/categories.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/categories/categories.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-grid {\n  -webkit-box-flex: 1;\n          flex: 1; }\n\nion-row {\n  -webkit-box-flex: 1;\n          flex: 1; }\n\n.cardcategory {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  border-radius: 8px; }\n\n.cardcategory .overlay {\n  background: -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0)), to(rgba(0, 0, 0, 0.75)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  text-align: left;\n  border-radius: 8px; }\n\n.cardcategory .texts {\n  padding: 15px; }\n\n.cardcategory .texts h1 {\n  color: white;\n  margin: 0;\n  font-weight: bold;\n  font-size: 14px;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9DOlxcVXNlcnNcXEhhcmlzaFxcTG9jYWxfZGV2XFxHeW1tYXRlQXBwL3NyY1xcYXBwXFxwYWdlc1xcY2F0ZWdvcmllc1xcY2F0ZWdvcmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBTztVQUFQLE9BQU8sRUFBQTs7QUFHWDtFQUNJLG1CQUFPO1VBQVAsT0FBTyxFQUFBOztBQUdYO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFHSSw0R0FBK0U7RUFBL0UscUZBQStFO0VBQy9FLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBaUI7RUFBakIsNkJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLFlBQVk7RUFDWixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBRWhCLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZ3JpZHtcclxuICAgIGZsZXg6IDE7XHJcbn1cclxuXHJcbmlvbi1yb3d7XHJcbiAgICBmbGV4OiAxO1xyXG59XHJcblxyXG4uY2FyZGNhdGVnb3J5e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4uY2FyZGNhdGVnb3J5IC5vdmVybGF5e1xyXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgwLDAsMCwwKSAwJSwgcmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMCwwLDAsMCkgMCUscmdiYSgwLDAsMCwwLjc1KSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICByZ2JhKDAsMCwwLDApIDAlLHJnYmEoMCwwLDAsMC43NSkgMTAwJSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi5jYXJkY2F0ZWdvcnkgLnRleHRze1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmNhcmRjYXRlZ29yeSAudGV4dHMgaDF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/categories/categories.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/categories/categories.page.ts ***!
  \*****************************************************/
/*! exports provided: CategoriesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPage", function() { return CategoriesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/strings */ "./src/app/config/strings.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(DataService, plt) {
        this.DataService = DataService;
        this.plt = plt;
        this.strings = _config_strings__WEBPACK_IMPORTED_MODULE_2__["strings"];
        this.categories = [];
        this.isLoading = false;
    }
    CategoriesPage.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.DataService.getDataCategories()
            .subscribe(function (resp) {
            _this.categories = resp;
            if (_this.categories.length === 0) {
                _this.height = '125.03px';
            }
            else if (_this.categories.length === 3 || _this.categories.length === 2) {
                _this.height = 'inherit !important';
            }
            else if (_this.categories.length >= 4) {
                _this.height = _this.plt.height() / 5.45 + 'px';
            }
            _this.isLoading = false;
        });
    };
    CategoriesPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
    ]; };
    CategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! raw-loader!./categories.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/categories/categories.page.html"),
            styles: [__webpack_require__(/*! ./categories.page.scss */ "./src/app/pages/categories/categories.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], CategoriesPage);
    return CategoriesPage;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");




var Url = _config_config__WEBPACK_IMPORTED_MODULE_3__["config"].Url;
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.page = 0;
    }
    DataService.prototype.ejectQuery = function (query) {
        query = Url + query;
        return this.http.get(query);
    };
    DataService.prototype.getDataStrings = function () {
        return this.ejectQuery('/json/data_strings.php');
    };
    DataService.prototype.getDataMotivation = function () {
        return this.ejectQuery('/json/data_quotes.php');
    };
    DataService.prototype.getDataFeaturedDiets = function () {
        return this.ejectQuery('/json/data_diets.php?featured=1');
    };
    DataService.prototype.getDataCategories = function () {
        return this.ejectQuery('/json/data_categories.php');
    };
    DataService.prototype.getDataGoals = function () {
        return this.ejectQuery('/json/data_goals.php');
    };
    DataService.prototype.getDataLevels = function () {
        return this.ejectQuery('/json/data_levels.php');
    };
    DataService.prototype.getDataTags = function () {
        return this.ejectQuery('/json/data_tags.php');
    };
    DataService.prototype.getDataEquipments = function () {
        return this.ejectQuery('/json/data_equipments.php');
    };
    DataService.prototype.getDataBodyparts = function () {
        return this.ejectQuery('/json/data_bodyparts.php');
    };
    DataService.prototype.getDataFeaturedPosts = function () {
        return this.ejectQuery('/json/data_posts.php?featured=1');
    };
    DataService.prototype.getDataRecentPosts = function (limit) {
        return this.ejectQuery("/json/data_posts.php?limit=" + limit);
    };
    DataService.prototype.getDataWorkoutsByGoal = function (id) {
        return this.ejectQuery("/json/data_workouts.php?goal=" + id);
    };
    DataService.prototype.getDataWorkoutsByLevel = function (id) {
        return this.ejectQuery("/json/data_workouts.php?level=" + id);
    };
    DataService.prototype.getDataExercisesByBodypart = function (id) {
        return this.ejectQuery("/json/data_bodypart.php?id=" + id);
    };
    DataService.prototype.getDataExercisesByEquipment = function (id) {
        return this.ejectQuery("/json/data_equipment.php?id=" + id);
    };
    DataService.prototype.getDataDietsByCategory = function (id) {
        return this.ejectQuery("/json/data_diets.php?category=" + id);
    };
    DataService.prototype.getDataPostsByTag = function (id) {
        return this.ejectQuery("/json/data_posts.php?tag=" + id);
    };
    DataService.prototype.getDataExerciseById = function (id) {
        return this.ejectQuery("/json/data_exercises.php?id=" + id + "&limit=1");
    };
    DataService.prototype.getDataWorkoutById = function (id) {
        return this.ejectQuery("/json/data_workouts.php?id=" + id + "&limit=1");
    };
    DataService.prototype.getDataDietById = function (id) {
        return this.ejectQuery("/json/data_diets.php?id=" + id + "&limit=1");
    };
    DataService.prototype.getDataPostById = function (id) {
        return this.ejectQuery("/json/data_posts.php?id=" + id + "&limit=1");
    };
    DataService.prototype.getDataWorkoutExercisesByDay = function (id, day) {
        return this.ejectQuery("/json/data_days.php?id=" + id + "&day=" + day);
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-categories-categories-module-es5.js.map