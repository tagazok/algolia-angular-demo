webpackJsonp([1,4],{

/***/ 438:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 438;


/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(603);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(373);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
        this.sortIndices = [];
        this.sortIndices = [
            { value: 'ikea', label: 'Featured' },
            { value: 'ikea_price_asc', label: 'Price asc.' },
            { value: 'ikea_price_desc', label: 'Price desc.' }
        ];
    }
    AppComponent.prototype.isScreenSmall = function () {
        return window.matchMedia("(max-width: 840px)").matches;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSidenav */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSidenav */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdSidenav */]) === 'function' && _a) || Object)
    ], AppComponent.prototype, "sidenav", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(691),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tagazok_algolia_angular_components__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(601);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__tagazok_algolia_angular_components__["a" /* AlgoliaModule */].forRoot({ appId: 'latency', apiKey: '6be0576ff61c053d5f9a3225e2a90f76' }),
                __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["FlexLayoutModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__tagazok_algolia_angular_components__["b" /* AlgoliaService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 685:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(160)();
// imports


// module
exports.push([module.i, ".my-toolbar {\n  background-color: #222F3F;\n  color: #fff;\n  width: 100%; }\n  .my-toolbar .menu-icon {\n    position: absolute;\n    float: left; }\n  .my-toolbar .toolbar-logo {\n    width: 100%;\n    height: 100%; }\n    .my-toolbar .toolbar-logo img.logo {\n      height: 70%;\n      border-radius: 50%; }\n\nmd-sidenav-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  width: 100%;\n  height: 100%; }\n\n.main-sidenav {\n  width: 250px;\n  background-color: #fff; }\n\napp-algolia-search {\n  padding: .5%; }\n\n.facet-title {\n  font-size: 1.2em;\n  color: #888;\n  margin: 0 0 8px 0; }\n\n.facet-wrapper {\n  padding-bottom: 12px;\n  border-bottom: solid 1px #EEE;\n  margin-bottom: 12px;\n  font-size: .90em; }\n\n.menu-icon {\n  display: none; }\n  @media (max-width: 840px) {\n    .menu-icon {\n      display: block; } }\n\n@media (min-width: 1280px) {\n  .col-width {\n    max-width: 25%; } }\n\n@media (min-width: 960px) and (max-width: 1279px) {\n  .col-width {\n    max-width: 33%; } }\n\n@media (min-width: 600px) and (max-width: 959px) {\n  .col-width {\n    max-width: 50%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"my-toolbar\">\n  <div fxLayoutAlign=\"center center\" class=\"toolbar-logo\">\n    <img class=\"logo\" src=\"/assets/images/logo-is.png\">\n  </div>\n  <div class=\"menu-icon\" (click)=\"sidenav.toggle()\">☰</div>\n</md-toolbar>\n\n<md-sidenav-container>\n  <md-sidenav #sidenav class=\"main-sidenav\" [opened]=\"!isScreenSmall()\" [mode]=\"isScreenSmall() ? 'over' : 'side'\">\n\n    <div fxLayout=\"column\" style=\"padding: 20px;\">\n      <div class=\"facet-wrapper\">\n        <p class=\"facet-title\">Show results for</p>\n        <app-algolia-facets [attribute]=\"'category'\">\n\n          <!--Facet template-->\n          <template let-item=\"item\">\n            ❯ {{item.key}}\n          </template>\n\n        </app-algolia-facets>\n      </div>\n\n      <div class=\"facet-wrapper\">\n        <p class=\"facet-title\">Refine by</p>\n        <!--TODO : Component for sub, ...-->\n        <app-algolia-facets [attribute]=\"'materials'\" [label]=\"'Material'\" [limit]=\"'10'\" [selectedcssclass]=\"'selected-filter'\">\n\n          <!--Search item result template-->\n          <template let-item=\"item\">\n            {{item.key}} <span class=\"facet-val\">({{item.val}})</span>\n          </template>\n\n        </app-algolia-facets>\n        <app-algolia-facets [attribute]=\"'colors'\" [label]=\"'Colors'\" [selectedcssclass]=\"'selected-color-filter'\">\n\n          <!--Search item result template-->\n          <template let-item=\"item\">\n            <div class=\"facet-color\" [attr.data-facet-value]=\"item.key\">&nbsp;</div>\n          </template>\n\n        </app-algolia-facets>\n        <app-algolia-facets [attribute]=\"'rating'\" [label]=\"'Rating'\">\n\n          <!--Search item result template-->\n          <template let-item=\"item\">\n            <app-algolia-stars [value]=\"item.key\" [min]=\"1\" [max]=\"5\" class=\"rating-color\"></app-algolia-stars>\n            <span class=\"facet-val\">({{item.val}})</span>\n          </template>\n          \n        </app-algolia-facets>\n        <!--TODO : Component just for price ?-->\n        <!--<app-algolia-facets [attribute]=\"'price'\" [label]=\"'Prices'\"></app-algolia-facets>-->\n      </div>\n    </div>\n\n  </md-sidenav>\n  <div fxLayout=\"column\">\n    <div fxLayout=\"row\">\n      <app-algolia-search [index]=\"'ikea'\" [hitsPerPage]=\"12\" [placeHolder]=\"'Search a product...'\" fxFlex></app-algolia-search>\n      <!--<app-algolia-sort [indices]=\"sortIndices\" [label]=\"'Sort by'\"></app-algolia-sort>-->\n    </div>\n    <app-algolia-stats class=\"my-stats\"></app-algolia-stats>\n    <div fxFlex>\n      <app-algolia-results fxLayoutAlign=\"space-around\" fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxFlexAlign=\"center\">\n\n        <!--Search item result template-->\n        <template let-item=\"item\">\n          <div class=\"my-item col-width\" fxLayout=\"column\">\n            <div class=\"my-card\">\n              <div>\n                <img class=\"my-card-image\" [src]=\"item.image\">\n              </div>\n              <div class=\"my-card-content\" fxFlex>\n                <div fxFill fxLayout=\"row\">\n                  <div class=\"truncate product-name\">{{item.name}}</div>\n                  <div class=\"product-price\">${{item.price}}</div>\n                </div>\n                <div class=\"truncate product-type\">{{item.type}}</div>\n                <div class=\"product-rating rating-color\">\n                  <app-algolia-stars [value]=\"item.rating\" [min]=\"1\" [max]=\"5\"></app-algolia-stars>\n                </div>\n              </div>\n            </div>\n          </div>\n        </template>\n\n      </app-algolia-results>\n      <app-algolia-pagination [padding]=\"3\" fxLayout=\"row\" fxLayoutAlign=\"center center\"></app-algolia-pagination>\n    </div>\n  </div>\n</md-sidenav-container>"

/***/ }),

/***/ 738:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 739:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(439);


/***/ })

},[739]);
//# sourceMappingURL=main.bundle.js.map