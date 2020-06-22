function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_translator_translator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/translator/translator.component */
    "./src/app/components/translator/translator.component.ts");
    /* harmony import */


    var _components_game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/game/game.component */
    "./src/app/components/game/game.component.ts");
    /* harmony import */


    var _components_dictionary_dictionary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/dictionary/dictionary.component */
    "./src/app/components/dictionary/dictionary.component.ts");
    /* harmony import */


    var _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/about-me/about-me.component */
    "./src/app/components/about-me/about-me.component.ts");
    /* harmony import */


    var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/not-found/not-found.component */
    "./src/app/components/not-found/not-found.component.ts");

    var routes = [{
      path: '',
      component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'translate',
      component: _components_translator_translator_component__WEBPACK_IMPORTED_MODULE_3__["TranslatorComponent"]
    }, {
      path: 'game',
      component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"]
    }, {
      path: 'dictionary',
      component: _components_dictionary_dictionary_component__WEBPACK_IMPORTED_MODULE_5__["DictionaryComponent"]
    }, {
      path: 'about-me',
      component: _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__["AboutMeComponent"]
    }, {
      path: '**',
      component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      consts: [[1, "app"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_game_game_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/game/game.component */
    "./src/app/components/game/game.component.ts");
    /* harmony import */


    var _components_translator_service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/translator/service/data.service */
    "./src/app/components/translator/service/data.service.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngrx/router-store */
    "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./store */
    "./src/app/store/index.ts");
    /* harmony import */


    var _store_effect_app_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./store/effect/app.effects */
    "./src/app/store/effect/app.effects.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _components_translator_translator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/translator/translator.component */
    "./src/app/components/translator/translator.component.ts");
    /* harmony import */


    var _store_effect_translate_effect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./store/effect/translate.effect */
    "./src/app/store/effect/translate.effect.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _components_dictionary_dictionary_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/dictionary/dictionary.component */
    "./src/app/components/dictionary/dictionary.component.ts");
    /* harmony import */


    var _components_game_service_data_game_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/game/service/data-game.service */
    "./src/app/components/game/service/data-game.service.ts");
    /* harmony import */


    var _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/about-me/about-me.component */
    "./src/app/components/about-me/about-me.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/not-found/not-found.component */
    "./src/app/components/not-found/not-found.component.ts");
    /* harmony import */


    var _components_game_service_audio_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/game/service/audio.service */
    "./src/app/components/game/service/audio.service.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_components_translator_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _components_game_service_data_game_service__WEBPACK_IMPORTED_MODULE_21__["DataGameService"], _components_game_service_audio_service__WEBPACK_IMPORTED_MODULE_25__["AudioService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_13__["reducer"]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_store_effect_app_effects__WEBPACK_IMPORTED_MODULE_14__["AppEffects"], _store_effect_translate_effect__WEBPACK_IMPORTED_MODULE_17__["TranslateEffects"]]), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__["StoreRouterConnectingModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"], _components_translator_translator_component__WEBPACK_IMPORTED_MODULE_16__["TranslatorComponent"], _components_dictionary_dictionary_component__WEBPACK_IMPORTED_MODULE_20__["DictionaryComponent"], _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_22__["AboutMeComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_24__["NotFoundComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_26__["MenuComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsRootModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__["StoreRouterConnectingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"], _components_translator_translator_component__WEBPACK_IMPORTED_MODULE_16__["TranslatorComponent"], _components_dictionary_dictionary_component__WEBPACK_IMPORTED_MODULE_20__["DictionaryComponent"], _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_22__["AboutMeComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_24__["NotFoundComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_26__["MenuComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_13__["reducer"]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
            maxAge: 25,
            logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production
          }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_store_effect_app_effects__WEBPACK_IMPORTED_MODULE_14__["AppEffects"], _store_effect_translate_effect__WEBPACK_IMPORTED_MODULE_17__["TranslateEffects"]]), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__["StoreRouterConnectingModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"]],
          providers: [_components_translator_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _components_game_service_data_game_service__WEBPACK_IMPORTED_MODULE_21__["DataGameService"], _components_game_service_audio_service__WEBPACK_IMPORTED_MODULE_25__["AudioService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/about-me/about-me.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/about-me/about-me.component.ts ***!
    \***********************************************************/

  /*! exports provided: AboutMeComponent */

  /***/
  function srcAppComponentsAboutMeAboutMeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function () {
      return AboutMeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutMeComponent = /*#__PURE__*/function () {
      function AboutMeComponent() {
        _classCallCheck(this, AboutMeComponent);
      }

      _createClass(AboutMeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutMeComponent;
    }();

    AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) {
      return new (t || AboutMeComponent)();
    };

    AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutMeComponent,
      selectors: [["app-about-me"]],
      decls: 2,
      vars: 0,
      template: function AboutMeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about-me works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about-me',
          templateUrl: './about-me.component.html',
          styleUrls: ['./about-me.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/dictionary/dictionary.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/dictionary/dictionary.component.ts ***!
    \***************************************************************/

  /*! exports provided: DictionaryComponent */

  /***/
  function srcAppComponentsDictionaryDictionaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DictionaryComponent", function () {
      return DictionaryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _game_service_data_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../game/service/data-game.service */
    "./src/app/components/game/service/data-game.service.ts");
    /* harmony import */


    var _game_service_audio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../game/service/audio.service */
    "./src/app/components/game/service/audio.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DictionaryComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DictionaryComponent_div_1_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var word_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.playAudio(word_r1.englishWord);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\uD83D\uDD08");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DictionaryComponent_div_1_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var word_r1 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.removeWordFromDictionary(word_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0412\u044B\u0443\u0447\u0438\u043B\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var word_r1 = ctx.$implicit;
        var i_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", i_r2 + 1, ". ", word_r1.englishWord, " - ", word_r1.russianWord, " ");
      }
    }

    var DictionaryComponent = /*#__PURE__*/function () {
      function DictionaryComponent(dataGameService, audioService) {
        _classCallCheck(this, DictionaryComponent);

        this.dataGameService = dataGameService;
        this.audioService = audioService;
        this.dictionary = [];
        this.numberWordsInDictionary = null;
        this.audio = new Audio();
      }

      _createClass(DictionaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.dataGameService.loadWordList().subscribe(function (data) {
            return _this.dictionary = data;
          });
          this.numberWordsInDictionary = this.dictionary.length;
          console.log('dictionary', this.numberWordsInDictionary);
        }
      }, {
        key: "removeWordFromDictionary",
        value: function removeWordFromDictionary(word) {
          this.dictionary = this.dictionary.filter(function (item) {
            return item.id !== word.id;
          });
          this.dataGameService.save(this.dictionary);
        }
      }, {
        key: "playAudio",
        value: function playAudio(word) {
          var _this2 = this;

          this.audioService.getAudio(word).subscribe(function (data) {
            data.subscribe(function (data) {
              _this2.audio.src = data.location;

              _this2.audio.play();
            });
          });
        }
      }]);

      return DictionaryComponent;
    }();

    DictionaryComponent.ɵfac = function DictionaryComponent_Factory(t) {
      return new (t || DictionaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service_data_game_service__WEBPACK_IMPORTED_MODULE_1__["DataGameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service_audio_service__WEBPACK_IMPORTED_MODULE_2__["AudioService"]));
    };

    DictionaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DictionaryComponent,
      selectors: [["app-dictionary"]],
      decls: 2,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], [3, "click"]],
      template: function DictionaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DictionaryComponent_div_1_Template, 6, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dictionary);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGljdGlvbmFyeS9kaWN0aW9uYXJ5LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DictionaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dictionary',
          templateUrl: './dictionary.component.html',
          styleUrls: ['./dictionary.component.scss']
        }]
      }], function () {
        return [{
          type: _game_service_data_game_service__WEBPACK_IMPORTED_MODULE_1__["DataGameService"]
        }, {
          type: _game_service_audio_service__WEBPACK_IMPORTED_MODULE_2__["AudioService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/game/game.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/game/game.component.ts ***!
    \***************************************************/

  /*! exports provided: GameComponent */

  /***/
  function srcAppComponentsGameGameComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameComponent", function () {
      return GameComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _service_data_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service/data-game.service */
    "./src/app/components/game/service/data-game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GameComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_5_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.startTimer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041D\u0430\u0447\u0430\u0442\u044C \u0438\u0433\u0440\u0443");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameComponent_div_6_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_6_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var wordRu_r6 = ctx.$implicit;
          var i_r7 = ctx.index;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.checkAnswer(wordRu_r6, i_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var wordRu_r6 = ctx.$implicit;
        var i_r7 = ctx.index;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r5.color[i_r7]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wordRu_r6);
      }
    }

    function GameComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameComponent_div_6_button_3_Template, 2, 2, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.word.englishWord);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.arrayAnswers);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.outputResult);
      }
    }

    function GameComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_7_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.goToDictionary("/dictionary");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0423\u0447\u0438\u0442\u044C \u043D\u0435\u0437\u043D\u0430\u043A\u043E\u043C\u044B\u0435 \u0441\u043B\u043E\u0432\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_7_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.startTimer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0421\u044B\u0433\u0440\u0430\u0442\u044C \u0435\u0449\u0435 \u0440\u0430\u0437");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.correctAnswer);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.wrongAnswer);
      }
    }

    var GameComponent = /*#__PURE__*/function () {
      function GameComponent(dataGameService, router) {
        _classCallCheck(this, GameComponent);

        this.dataGameService = dataGameService;
        this.router = router;
        this.word = null;
        this.gameStarted = 'start';
        this.count = null;
        this.arrayAnswers = null;
        this.outputResult = null;
        this.sec = 1000;
        this.resultDuration = 200;
        this.correctAnswer = null;
        this.wrongAnswer = null;
        this.timeRound = 30;
        this.arrayForDictionary = [];
        this.color = {};
        this.mode = 'determinate';
        this.showText = this.count;
        this.strokeWidth = 15;
        this.diameter = 120;
      }

      _createClass(GameComponent, [{
        key: "game",
        value: function game() {
          this.gameStarted = 'game';
          this.arrayAnswers = [];
          this.word = this.dataGameService.getRandomWord();
          var wordsForArrayAnswer = new Set();
          wordsForArrayAnswer.add(this.word.russianWord); // tslint:disable-next-line: no-magic-numbers

          while (wordsForArrayAnswer.size < 3) {
            var randomRuWord = this.dataGameService.getRandomWord();
            wordsForArrayAnswer.add(randomRuWord.russianWord);
          } // tslint:disable-next-line: no-magic-numbers


          this.arrayAnswers = Array.from(wordsForArrayAnswer).sort(function () {
            return Math.random() - 0.5;
          });
        }
      }, {
        key: "checkAnswer",
        value: function checkAnswer(answer, index) {
          var _this3 = this;

          if (answer === this.word.russianWord) {
            this.outputResult = 'V';
            this.correctAnswer++;
            this.color = _defineProperty({}, index, {
              background: 'green'
            });
          } else {
            this.outputResult = 'X';
            this.wrongAnswer++;
            this.arrayForDictionary.push(this.word);
            this.color = _defineProperty({}, index, {
              background: 'red'
            });
          }

          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.outputResult).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(this.resultDuration)).subscribe(function () {
            _this3.outputResult = '';
            _this3.color = {};
          });
          this.game();
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this4 = this;

          this.game();
          this.count = this.timeRound; // tslint:disable-next-line: no-magic-numbers

          this.valueProgressSpinner = 100;
          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(this.sec).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(this.timeRound)).subscribe(function (count) {
            count = _this4.timeRound - (count + 1);
            _this4.count = count; // tslint:disable-next-line: no-magic-numbers

            _this4.valueProgressSpinner = 100 / _this4.timeRound * count;

            if (_this4.count <= 0) {
              _this4.gameStarted = 'complete';
              _this4.count = null;

              _this4.dataGameService.addWordsDictionary(_this4.arrayForDictionary);
            }
          });
        }
      }, {
        key: "goToDictionary",
        value: function goToDictionary(pageName) {
          this.router.navigate(["".concat(pageName)]);
        }
      }]);

      return GameComponent;
    }();

    GameComponent.ɵfac = function GameComponent_Factory(t) {
      return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_game_service__WEBPACK_IMPORTED_MODULE_3__["DataGameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameComponent,
      selectors: [["app-game"]],
      decls: 9,
      vars: 10,
      consts: [[1, "app-game"], [1, "app-game--container"], ["aria-label", "showText", 3, "mode", "value", "strokeWidth", "diameter"], [1, "app-game--count"], [4, "ngIf"], [1, "ball"], [1, "app-game--btn-start", 3, "click"], [1, "app-game--word-english"], ["class", "app-game--btn-answer", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "app-game--btn-result"], [1, "app-game--btn-answer", 3, "ngStyle", "click"], [1, "app-game--answer"], [1, "app-game--btn-dictionary", 3, "click"], [1, "app-game--btn-repeat", 3, "click"]],
      template: function GameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-progress-spinner", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameComponent_div_5_Template, 3, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GameComponent_div_6_Template, 6, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GameComponent_div_7_Template, 13, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx.mode)("value", ctx.valueProgressSpinner)("strokeWidth", ctx.strokeWidth)("diameter", ctx.diameter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.count);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameStarted === "start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameStarted === "game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.gameStarted === "complete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.gameStarted === "game" ? "none" : "block");
        }
      },
      directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\n.app-game[_ngcontent-%COMP%] {\n  width: 900px;\n  height: 500px;\n  margin: 50px auto;\n  padding: 40px;\n  box-shadow: 0px 10px 10px black;\n  box-sizing: border-box;\n}\n.app-game--container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n.app-game--count[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 18px;\n  top: -70px;\n  font-family: \"Roboto\", sans-serif;\n  color: #414141;\n}\n.app-game--btn-start[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 18px;\n  color: whitesmoke;\n  text-shadow: 0 -1px rgba(0, 0, 0, 0.1);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 10px;\n  outline: none;\n  border: none;\n  border-radius: 6px;\n  background: #d25fb8 linear-gradient(#d182c0, #a212a7);\n  box-shadow: inset #f027e6 0 -1px 1px, inset 0 1px 1px #f698ff, #a63caa 0 0 0 1px, rgba(0, 0, 0, 0.3) 0 2px 5px;\n  -webkit-animation: pulsate 1.2s linear infinite;\n  animation: pulsate 1.2s linear infinite;\n}\n.app-game--btn-start[_ngcontent-%COMP%]:hover {\n  -webkit-animation-play-state: paused;\n  animation-play-state: paused;\n  cursor: pointer;\n}\n.app-game--btn-start[_ngcontent-%COMP%]:active {\n  top: 1px;\n  color: #fff;\n  text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;\n  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.3), 0 1px 1px #fff, inset 0 1px 2px rgba(0, 0, 0, 0.8), inset 0 -1px 0 rgba(0, 0, 0, 0.05);\n}\n@-webkit-keyframes pulsate {\n  50% {\n    color: #fff;\n    text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;\n  }\n}\n@keyframes pulsate {\n  50% {\n    color: #fff;\n    text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;\n  }\n}\n.app-game--word-english[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 28px;\n  font-weight: 800;\n  color: #414141;\n  text-align: center;\n  padding: 20px;\n}\n.app-game--btn-answer[_ngcontent-%COMP%] {\n  display: block;\n  width: 240px;\n  font-size: 18px;\n  font-family: \"Roboto\", sans-serif;\n  padding: 10px;\n  margin: 5px;\n  border-radius: 6px;\n  background: #ded9df;\n}\n.app-game--btn-answer[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n.app-game--btn-repeat[_ngcontent-%COMP%] {\n  display: block;\n  width: 250px;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 18px;\n  color: whitesmoke;\n  text-shadow: 0 -1px rgba(0, 0, 0, 0.1);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 10px;\n  margin: 7px auto;\n  outline: none;\n  border: none;\n  border-radius: 6px;\n  background: #00aeff;\n}\n.app-game--btn-dictionary[_ngcontent-%COMP%] {\n  display: block;\n  width: 250px;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 18px;\n  color: whitesmoke;\n  text-shadow: 0 -1px rgba(0, 0, 0, 0.1);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 10px;\n  margin: 7px auto;\n  outline: none;\n  border: none;\n  border-radius: 6px;\n  background: #0fc27d;\n}\n.app-game--answer[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 18px;\n  color: #363636;\n}\n .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #d25fb8 !important;\n}\n.ball[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  color: white;\n  line-height: 50px;\n  border: 5px solid purple;\n  position: relative;\n  -webkit-animation: combined 5s linear infinite;\n          animation: combined 5s linear infinite;\n  left: 0;\n  top: 0;\n}\n@-webkit-keyframes combined {\n  16%, 48%, 78% {\n    top: 190px;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  32% {\n    top: 50px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  62% {\n    top: 100px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0.8;\n  }\n  82% {\n    top: 100px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0.6;\n  }\n  90% {\n    top: 100px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0;\n  }\n  100% {\n    transform: rotate(360deg);\n    top: 190px;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    left: 100%;\n    opacity: 0;\n  }\n}\n@keyframes combined {\n  16%, 48%, 78% {\n    top: 190px;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  32% {\n    top: 50px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  62% {\n    top: 100px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0.8;\n  }\n  82% {\n    top: 100px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0.6;\n  }\n  90% {\n    top: 100px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0;\n  }\n  100% {\n    transform: rotate(360deg);\n    top: 190px;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    left: 100%;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJnYXJpdGEvRG93bmxvYWRzL2xlYXJuLWVuZ2xpc2gvc3JjL2FwcC9jb21wb25lbnRzL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9nYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsb0ZBQUE7QUFFUjtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtBQ0FEO0FER0M7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDREQ7QURLQztFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7QUNIRDtBRE1DO0VBQ0MsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLDhHQUFBO0VBQ0EsK0NBQUE7RUFDQSx1Q0FBQTtBQ0pGO0FET0M7RUFDQyxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBQ0xGO0FET0c7RUFDRCxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtFQUFBO0VBQ0EsaUlBQUE7QUNMRjtBRE9HO0VBQ0Q7SUFBSyxXQUFBO0lBQWEsa0VBQUE7RUNIbEI7QUFDRjtBRElHO0VBQ0Q7SUFBSyxXQUFBO0lBQWEsa0VBQUE7RUNBbEI7QUFDRjtBREVHO0VBQ0QsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQUY7QURFRztFQUNDLGNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQUo7QURFRztFQUNNLFlBQUE7QUNBVDtBREVHO0VBQ0QsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNBRjtBREVHO0VBQ0QsY0FBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNBRjtBREVHO0VBQ0QsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FGO0FES0E7O0VBRUMsMEJBQUE7QUNGRDtBREtBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNGLE9BQUE7RUFDRCxNQUFBO0FDRkQ7QURJQTtFQUNJO0lBQ0YsVUFBQTtJQUNNLDJDQUFBO1lBQUEsbUNBQUE7RUNETjtFREdFO0lBQ0ksU0FBQTtJQUNBLDBDQUFBO1lBQUEsa0NBQUE7RUNETjtFREdFO0lBQ0ksVUFBQTtJQUNOLDBDQUFBO1lBQUEsa0NBQUE7SUFDQSxZQUFBO0VDREE7RURHRDtJQUNPLFVBQUE7SUFDTiwwQ0FBQTtZQUFBLGtDQUFBO0lBQ0EsWUFBQTtFQ0RBO0VER0U7SUFDSSxVQUFBO0lBQ04sMENBQUE7WUFBQSxrQ0FBQTtJQUNBLFVBQUE7RUNEQTtFRElFO0lBQ0kseUJBQUE7SUFDQSxVQUFBO0lBQ0EsMkNBQUE7WUFBQSxtQ0FBQTtJQUNOLFVBQUE7SUFDQSxVQUFBO0VDRkE7QUFDRjtBRDdCQTtFQUNJO0lBQ0YsVUFBQTtJQUNNLDJDQUFBO1lBQUEsbUNBQUE7RUNETjtFREdFO0lBQ0ksU0FBQTtJQUNBLDBDQUFBO1lBQUEsa0NBQUE7RUNETjtFREdFO0lBQ0ksVUFBQTtJQUNOLDBDQUFBO1lBQUEsa0NBQUE7SUFDQSxZQUFBO0VDREE7RURHRDtJQUNPLFVBQUE7SUFDTiwwQ0FBQTtZQUFBLGtDQUFBO0lBQ0EsWUFBQTtFQ0RBO0VER0U7SUFDSSxVQUFBO0lBQ04sMENBQUE7WUFBQSxrQ0FBQTtJQUNBLFVBQUE7RUNEQTtFRElFO0lBQ0kseUJBQUE7SUFDQSxVQUFBO0lBQ0EsMkNBQUE7WUFBQSxtQ0FBQTtJQUNOLFVBQUE7SUFDQSxVQUFBO0VDRkE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4uYXBwLWdhbWUge1xuXHR3aWR0aDo5MDBweDsgXG5cdGhlaWdodDogNTAwcHg7XG5cdG1hcmdpbjogNTBweCBhdXRvO1xuXHRwYWRkaW5nOjQwcHg7XG5cdGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggYmxhY2s7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cblxuXHQmLS1jb250YWluZXJ7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxuXHRcblxuXHQmLS1jb3VudCB7XG5cdHBvc2l0aW9uOnJlbGF0aXZlOyBcblx0Zm9udC1zaXplOiAxOHB4O1xuXHR0b3A6IC03MHB4O1xuXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cdGNvbG9yOiAjNDE0MTQxO1xuXHR9XG5cblx0Ji0tYnRuLXN0YXJ0IHtcblx0XHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdGNvbG9yOiByZ2IoMjQ1LDI0NSwyNDUpO1xuXHRcdHRleHQtc2hhZG93OiAwIC0xcHggcmdiYSgwLDAsMCwuMSk7XG5cdFx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdFx0cGFkZGluZzogMTBweDtcblx0XHRvdXRsaW5lOiBub25lO1xuXHRcdGJvcmRlcjogbm9uZTtcblx0XHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdFx0YmFja2dyb3VuZDogcmdiKDIxMCwgOTUsIDE4NCkgbGluZWFyLWdyYWRpZW50KCNkMTgyYzAsICNhMjEyYTcpO1xuXHRcdGJveC1zaGFkb3c6IGluc2V0ICNmMDI3ZTYgMCAtMXB4IDFweCwgaW5zZXQgMCAxcHggMXB4ICNmNjk4ZmYsICNhNjNjYWEgMCAwIDAgMXB4LCByZ2JhKDAsMCwwLC4zKSAwIDJweCA1cHg7XG5cdFx0LXdlYmtpdC1hbmltYXRpb246IHB1bHNhdGUgMS4ycyBsaW5lYXIgaW5maW5pdGU7XG5cdFx0YW5pbWF0aW9uOiBwdWxzYXRlIDEuMnMgbGluZWFyIGluZmluaXRlO1xuXHRcdFxuXHR9XG5cdCYtLWJ0bi1zdGFydDpob3ZlciB7XG5cdFx0LXdlYmtpdC1hbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuXHRcdGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG5cdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHQgIH1cblx0ICAmLS1idG4tc3RhcnQ6YWN0aXZlIHtcblx0XHR0b3A6IDFweDtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHR0ZXh0LXNoYWRvdzogMCAtMXB4IHJnYmEoMCwwLDAsLjMpLCAwIDAgNXB4ICNmZmQsIDAgMCA4cHggI2ZmZjtcblx0XHRib3gtc2hhZG93OiAwIC0xcHggM3B4IHJnYmEoMCwwLDAsLjMpLCAwIDFweCAxcHggI2ZmZiwgaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwwLDAsLjgpLCBpbnNldCAwIC0xcHggMCByZ2JhKDAsMCwwLC4wNSk7XG5cdCAgfVxuXHQgIEAtd2Via2l0LWtleWZyYW1lcyBwdWxzYXRlIHtcblx0XHQ1MCUge2NvbG9yOiAjZmZmOyB0ZXh0LXNoYWRvdzogMCAtMXB4IHJnYmEoMCwwLDAsLjMpLCAwIDAgNXB4ICNmZmQsIDAgMCA4cHggI2ZmZjt9XG5cdCAgfVxuXHQgIEBrZXlmcmFtZXMgcHVsc2F0ZSB7XG5cdFx0NTAlIHtjb2xvcjogI2ZmZjsgdGV4dC1zaGFkb3c6IDAgLTFweCByZ2JhKDAsMCwwLC4zKSwgMCAwIDVweCAjZmZkLCAwIDAgOHB4ICNmZmY7fVxuXHQgIH1cblxuXHQgICYtLXdvcmQtZW5nbGlzaCB7XG5cdFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXHRcdGZvbnQtc2l6ZToyOHB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA4MDA7XG5cdFx0Y29sb3I6ICM0MTQxNDE7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHBhZGRpbmc6MjBweDtcblx0ICB9XG5cdCAgJi0tYnRuLWFuc3dlciB7XG5cdFx0ICBkaXNwbGF5OmJsb2NrO1xuXHRcdCAgd2lkdGg6MjQwcHg7XG5cdFx0ICBmb250LXNpemU6IDE4cHg7XG5cdFx0ICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cdFx0ICBwYWRkaW5nOjEwcHg7XG5cdFx0ICBtYXJnaW46NXB4O1xuXHRcdCAgYm9yZGVyLXJhZGl1czogNnB4O1xuXHRcdCAgYmFja2dyb3VuZDojZGVkOWRmO1xuXHQgIH1cblx0ICAmLS1idG4tYW5zd2VyOmhvdmVyIHtcbiAgICAgICAgIG9wYWNpdHk6IDAuODtcblx0ICB9O1xuXHQgICYtLWJ0bi1yZXBlYXQge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHdpZHRoOjI1MHB4O1xuXHRcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0Y29sb3I6IHJnYigyNDUsMjQ1LDI0NSk7XG5cdFx0dGV4dC1zaGFkb3c6IDAgLTFweCByZ2JhKDAsMCwwLC4xKTtcblx0XHR1c2VyLXNlbGVjdDogbm9uZTtcblx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdG1hcmdpbjo3cHggYXV0bztcblx0XHRvdXRsaW5lOiBub25lO1xuXHRcdGJvcmRlcjogbm9uZTtcblx0XHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdFx0YmFja2dyb3VuZDogcmdiKDAsIDE3NCwgMjU1KTtcblx0ICB9XG5cdCAgJi0tYnRuLWRpY3Rpb25hcnkge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHdpZHRoOjI1MHB4O1xuXHRcdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0Y29sb3I6IHJnYigyNDUsMjQ1LDI0NSk7XG5cdFx0dGV4dC1zaGFkb3c6IDAgLTFweCByZ2JhKDAsMCwwLC4xKTtcblx0XHR1c2VyLXNlbGVjdDogbm9uZTtcblx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdG1hcmdpbjo3cHggYXV0bztcblx0XHRvdXRsaW5lOiBub25lO1xuXHRcdGJvcmRlcjogbm9uZTtcblx0XHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdFx0YmFja2dyb3VuZDogcmdiKDE1LCAxOTQsIDEyNSk7XG5cdCAgfVxuXHQgICYtLWFuc3dlciB7XG5cdFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRjb2xvcjpyZ2IoNTQsIDU0LCA1NCk7XG5cdCAgfVxuXG59XG5cbjo6bmctZGVlcC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsXG4ubWF0LXNwaW5uZXIgY2lyY2xlIHtcblx0c3Ryb2tlOiByZ2IoMjEwLCA5NSwgMTg0KSAhaW1wb3J0YW50O1xufVxuXG4uYmFsbCB7XG4gICAgd2lkdGg6MTAwcHg7XG4gICAgaGVpZ2h0OjEwMHB4O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGxpbmUtaGVpZ2h0OjUwcHg7XG4gICAgYm9yZGVyOjVweCBzb2xpZCBwdXJwbGU7XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgYW5pbWF0aW9uOiBjb21iaW5lZCA1cyBsaW5lYXIgaW5maW5pdGU7XG4gXHRsZWZ0OjA7XG5cdHRvcDowOyBcbn1cbkBrZXlmcmFtZXMgY29tYmluZWQge1xuICAgIDE2JSwgNDglLCA3OCUgIHtcblx0XHR0b3A6IDE5MHB4O1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICB9XG4gICAgMzIlIHtcbiAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIH1cbiAgICA2MiUge1xuICAgICAgICB0b3A6IDEwMHB4O1xuXHRcdGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG5cdFx0b3BhY2l0eTowLjg7XG5cdH1cblx0ODIlIHtcbiAgICAgICAgdG9wOiAxMDBweDtcblx0XHRhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuXHRcdG9wYWNpdHk6MC42O1xuICAgIH1cbiAgICA5MCUge1xuICAgICAgICB0b3A6IDEwMHB4O1xuXHRcdGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG5cdFx0b3BhY2l0eTowO1xuXHR9XG5cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgdG9wOiAxOTBweDtcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG5cdFx0bGVmdDoxMDAlO1xuXHRcdG9wYWNpdHk6MDtcbiAgICB9XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XG4uYXBwLWdhbWUge1xuICB3aWR0aDogOTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICBwYWRkaW5nOiA0MHB4O1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IGJsYWNrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmFwcC1nYW1lLS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYXBwLWdhbWUtLWNvdW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRvcDogLTcwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzQxNDE0MTtcbn1cbi5hcHAtZ2FtZS0tYnRuLXN0YXJ0IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHRleHQtc2hhZG93OiAwIC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNkMjVmYjggbGluZWFyLWdyYWRpZW50KCNkMTgyYzAsICNhMjEyYTcpO1xuICBib3gtc2hhZG93OiBpbnNldCAjZjAyN2U2IDAgLTFweCAxcHgsIGluc2V0IDAgMXB4IDFweCAjZjY5OGZmLCAjYTYzY2FhIDAgMCAwIDFweCwgcmdiYSgwLCAwLCAwLCAwLjMpIDAgMnB4IDVweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNhdGUgMS4ycyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogcHVsc2F0ZSAxLjJzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi5hcHAtZ2FtZS0tYnRuLXN0YXJ0OmhvdmVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXBwLWdhbWUtLWJ0bi1zdGFydDphY3RpdmUge1xuICB0b3A6IDFweDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAwIC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDAgNXB4ICNmZmQsIDAgMCA4cHggI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMXB4IDFweCAjZmZmLCBpbnNldCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjgpLCBpbnNldCAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNhdGUge1xuICA1MCUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtc2hhZG93OiAwIC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDAgNXB4ICNmZmQsIDAgMCA4cHggI2ZmZjtcbiAgfVxufVxuQGtleWZyYW1lcyBwdWxzYXRlIHtcbiAgNTAlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LXNoYWRvdzogMCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAwIDVweCAjZmZkLCAwIDAgOHB4ICNmZmY7XG4gIH1cbn1cbi5hcHAtZ2FtZS0td29yZC1lbmdsaXNoIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICM0MTQxNDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5hcHAtZ2FtZS0tYnRuLWFuc3dlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjQwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6ICNkZWQ5ZGY7XG59XG4uYXBwLWdhbWUtLWJ0bi1hbnN3ZXI6aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG4uYXBwLWdhbWUtLWJ0bi1yZXBlYXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDI1MHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgdGV4dC1zaGFkb3c6IDAgLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDdweCBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogIzAwYWVmZjtcbn1cbi5hcHAtZ2FtZS0tYnRuLWRpY3Rpb25hcnkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDI1MHB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbiAgdGV4dC1zaGFkb3c6IDAgLTFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDdweCBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogIzBmYzI3ZDtcbn1cbi5hcHAtZ2FtZS0tYW5zd2VyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMzNjM2MzY7XG59XG5cbjo6bmctZGVlcC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsXG4ubWF0LXNwaW5uZXIgY2lyY2xlIHtcbiAgc3Ryb2tlOiAjZDI1ZmI4ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWxsIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IDVweCBzb2xpZCBwdXJwbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYW5pbWF0aW9uOiBjb21iaW5lZCA1cyBsaW5lYXIgaW5maW5pdGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cblxuQGtleWZyYW1lcyBjb21iaW5lZCB7XG4gIDE2JSwgNDglLCA3OCUge1xuICAgIHRvcDogMTkwcHg7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbiAgMzIlIHtcbiAgICB0b3A6IDUwcHg7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgfVxuICA2MiUge1xuICAgIHRvcDogMTAwcHg7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cbiAgODIlIHtcbiAgICB0b3A6IDEwMHB4O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG4gIDkwJSB7XG4gICAgdG9wOiAxMDBweDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB0b3A6IDE5MHB4O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgIGxlZnQ6IDEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-game',
          templateUrl: './game.component.html',
          styleUrls: ['./game.component.scss']
        }]
      }], function () {
        return [{
          type: _service_data_game_service__WEBPACK_IMPORTED_MODULE_3__["DataGameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/game/service/audio.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/game/service/audio.service.ts ***!
    \**********************************************************/

  /*! exports provided: AudioService */

  /***/
  function srcAppComponentsGameServiceAudioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AudioService", function () {
      return AudioService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AudioService = /*#__PURE__*/function () {
      /* 	public audio: HTMLAudioElement; */
      function AudioService(_http) {
        _classCallCheck(this, AudioService);

        this._http = _http;
        this.urlAPI = 'https://api.soundoftext.com/sounds';
        /* this.audio = new Audio(); */
      }

      _createClass(AudioService, [{
        key: "getAudio",
        value: function getAudio(word) {
          var _this5 = this;

          return this._http.post(this.urlAPI, JSON.stringify({
            engine: 'Google',
            data: {
              text: word,
              voice: 'en-US'
            }
          }), {
            headers: {
              'Content-Type': 'application/json'
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (items) {
            console.log('items', items);
            return _this5._http.get('https://api.soundoftext.com/sounds/' + items.id);
          }));
        }
      }]);

      return AudioService;
    }();

    AudioService.ɵfac = function AudioService_Factory(t) {
      return new (t || AudioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AudioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AudioService,
      factory: AudioService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/game/service/data-game.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/game/service/data-game.service.ts ***!
    \**************************************************************/

  /*! exports provided: DataGameService */

  /***/
  function srcAppComponentsGameServiceDataGameServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataGameService", function () {
      return DataGameService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DataGameService = /*#__PURE__*/function () {
      function DataGameService(_httpClient) {
        _classCallCheck(this, DataGameService);

        this._httpClient = _httpClient;
        this.words = [{
          id: '2',
          russianWord: 'передовой',
          englishWord: 'advanced'
        }, {
          id: '3',
          russianWord: 'спутанный',
          englishWord: 'confused'
        }, {
          id: '4',
          russianWord: 'управляемый',
          englishWord: 'controlled'
        }, {
          id: '5',
          russianWord: 'изогнутый',
          englishWord: 'curved'
        }, {
          id: '6',
          russianWord: 'занято',
          englishWord: 'engaged'
        }, {
          id: '7',
          russianWord: 'возбужденный',
          englishWord: 'excited'
        }, {
          id: '8',
          russianWord: 'немедленный',
          englishWord: 'immediate'
        }, {
          id: '9',
          russianWord: 'зараженный',
          englishWord: 'infected'
        }, {
          id: '10',
          russianWord: 'ингредиент',
          englishWord: 'ingredient'
        }, {
          id: '11',
          russianWord: 'пострадавший',
          englishWord: 'injured'
        }, {
          id: '12',
          russianWord: 'заинтересованный',
          englishWord: 'interested'
        }, {
          id: '13',
          russianWord: 'вязаный',
          englishWord: 'knitted'
        }, {
          id: '14',
          russianWord: 'женат',
          englishWord: 'married'
        }, {
          id: '16',
          russianWord: 'средний',
          englishWord: 'medium'
        }, {
          id: '17',
          russianWord: 'смешанный',
          englishWord: 'mixed'
        }, {
          id: '18',
          russianWord: 'голый',
          englishWord: 'naked'
        }, {
          id: '19',
          russianWord: 'необходимость',
          englishWord: 'need'
        }, {
          id: '20',
          russianWord: 'игла',
          englishWord: 'needle'
        }, {
          id: '21',
          russianWord: 'занятый',
          englishWord: 'occupied'
        }, {
          id: '24',
          russianWord: 'переполненный',
          englishWord: 'crowded'
        }, {
          id: '25',
          russianWord: 'угнетенный',
          englishWord: 'depressed'
        }, {
          id: '26',
          russianWord: 'пустынный',
          englishWord: 'deserted'
        }, {
          id: '27',
          russianWord: 'подробный',
          englishWord: 'detailed'
        }, {
          id: '28',
          russianWord: 'определяется',
          englishWord: 'determined'
        }, {
          id: '29',
          russianWord: 'посвященный',
          englishWord: 'devoted'
        }, {
          id: '30',
          russianWord: 'инвалид',
          englishWord: 'disabled'
        }, {
          id: '31',
          russianWord: 'разочарованный',
          englishWord: 'disappointed'
        }, {
          id: '32',
          russianWord: 'противно',
          englishWord: 'disgusted'
        }, {
          id: '33',
          russianWord: 'разведенный',
          englishWord: 'divorced'
        }, {
          id: '34',
          russianWord: 'одетый',
          englishWord: 'dressed'
        }, {
          id: '35',
          russianWord: 'край',
          englishWord: 'edge'
        }, {
          id: '36',
          russianWord: 'издание',
          englishWord: 'edition'
        }, {
          id: '37',
          russianWord: 'редактор',
          englishWord: 'editor'
        }, {
          id: '38',
          russianWord: 'воспитывать',
          englishWord: 'educate'
        }, {
          id: '39',
          russianWord: 'образование',
          englishWord: 'education'
        }, {
          id: '40',
          russianWord: 'смущенный',
          englishWord: 'embarrassed'
        }, {
          id: '41',
          russianWord: 'федеральный',
          englishWord: 'federal'
        }, {
          id: '42',
          russianWord: 'кормить',
          englishWord: 'feed'
        }, {
          id: '43',
          russianWord: 'беспокоило',
          englishWord: 'worried'
        }, {
          id: '44',
          russianWord: 'рассчитывать на',
          englishWord: 'rely on'
        }, {
          id: '45',
          russianWord: 'из-за',
          englishWord: 'because of'
        }, {
          id: '46',
          russianWord: 'немного',
          englishWord: 'a bit'
        }, {
          id: '47',
          russianWord: 'несколько',
          englishWord: 'a few'
        }, {
          id: '48',
          russianWord: 'отказываться от',
          englishWord: 'abandon'
        }, {
          id: '49',
          russianWord: 'способность',
          englishWord: 'ability'
        }, {
          id: '50',
          russianWord: 'в состоянии',
          englishWord: 'able'
        }, {
          id: '51',
          russianWord: 'о',
          englishWord: 'about'
        }, {
          id: '52',
          russianWord: 'выше',
          englishWord: 'above'
        }, {
          id: '53',
          russianWord: 'за границей',
          englishWord: 'abroad'
        }, {
          id: '54',
          russianWord: 'отсутствие',
          englishWord: 'absence'
        }, {
          id: '55',
          russianWord: 'отсутствовать',
          englishWord: 'absent'
        }, {
          id: '56',
          russianWord: 'абсолютный',
          englishWord: 'absolute'
        }, {
          id: '57',
          russianWord: 'поглощать',
          englishWord: 'absorb'
        }, {
          id: '58',
          russianWord: 'злоупотребление',
          englishWord: 'abuse'
        }, {
          id: '59',
          russianWord: 'учебный',
          englishWord: 'academic'
        }, {
          id: '60',
          russianWord: 'акцент',
          englishWord: 'accent'
        }, {
          id: '61',
          russianWord: 'приемлемый',
          englishWord: 'acceptable'
        }, {
          id: '62',
          russianWord: 'доступ',
          englishWord: 'access'
        }, {
          id: '63',
          russianWord: 'несчастный случай',
          englishWord: 'accident'
        }, {
          id: '64',
          russianWord: 'дополнительный',
          englishWord: 'additional'
        }, {
          id: '65',
          russianWord: 'адрес',
          englishWord: 'address'
        }, {
          id: '66',
          russianWord: 'адекватный',
          englishWord: 'adequate'
        }, {
          id: '67',
          russianWord: 'регулировать',
          englishWord: 'adjust'
        }, {
          id: '68',
          russianWord: 'восхищение',
          englishWord: 'admiration'
        }, {
          id: '69',
          russianWord: 'восхищаться',
          englishWord: 'admire'
        }, {
          id: '70',
          russianWord: 'признавать',
          englishWord: 'admit'
        }, {
          id: '71',
          russianWord: 'принимать',
          englishWord: 'adopt'
        }, {
          id: '72',
          russianWord: 'для взрослых',
          englishWord: 'adult'
        }, {
          id: '73',
          russianWord: 'продвижение',
          englishWord: 'advance'
        }, {
          id: '74',
          russianWord: 'преимущество',
          englishWord: 'advantage'
        }, {
          id: '75',
          russianWord: 'приключение',
          englishWord: 'adventure'
        }, {
          id: '76',
          russianWord: 'рекламировать',
          englishWord: 'advertise'
        }, {
          id: '77',
          russianWord: 'реклама',
          englishWord: 'advertisement'
        }, {
          id: '78',
          russianWord: 'реклама',
          englishWord: 'advertising'
        }, {
          id: '79',
          russianWord: 'совет',
          englishWord: 'advice'
        }, {
          id: '80',
          russianWord: 'консультировать',
          englishWord: 'advise'
        }, {
          id: '81',
          russianWord: 'дело',
          englishWord: 'affair'
        }, {
          id: '82',
          russianWord: 'влиять на',
          englishWord: 'affect'
        }, {
          id: '83',
          russianWord: 'любовь',
          englishWord: 'affection'
        }, {
          id: '84',
          russianWord: 'оказывать',
          englishWord: 'afford'
        }, {
          id: '85',
          russianWord: 'живой',
          englishWord: 'alive'
        }, {
          id: '86',
          russianWord: 'все',
          englishWord: 'all'
        }, {
          id: '87',
          russianWord: 'все в порядке',
          englishWord: 'all right'
        }, {
          id: '88',
          russianWord: 'позволять',
          englishWord: 'allow'
        }, {
          id: '89',
          russianWord: 'почти',
          englishWord: 'almost'
        }, {
          id: '90',
          russianWord: 'только',
          englishWord: 'alone'
        }, {
          id: '91',
          russianWord: 'по',
          englishWord: 'along'
        }, {
          id: '92',
          russianWord: 'рядом',
          englishWord: 'alongside'
        }, {
          id: '93',
          russianWord: 'вслух',
          englishWord: 'aloud'
        }, {
          id: '94',
          russianWord: 'алфавит',
          englishWord: 'alphabet'
        }, {
          id: '95',
          russianWord: 'алфавитный',
          englishWord: 'alphabetical'
        }, {
          id: '96',
          russianWord: 'уже',
          englishWord: 'already'
        }, {
          id: '97',
          russianWord: 'также',
          englishWord: 'also'
        }, {
          id: '98',
          russianWord: 'изменять',
          englishWord: 'alter'
        }, {
          id: '99',
          russianWord: 'альтернатива',
          englishWord: 'alternative'
        }, {
          id: '100',
          russianWord: 'хотя',
          englishWord: 'although'
        }, {
          id: '101',
          russianWord: 'всего',
          englishWord: 'altogether'
        }, {
          id: '102',
          russianWord: 'всегда',
          englishWord: 'always'
        }, {
          id: '103',
          russianWord: 'удивлять',
          englishWord: 'amaze'
        }, {
          id: '104',
          russianWord: 'удивительный',
          englishWord: 'amazing'
        }, {
          id: '105',
          russianWord: 'честолюбие',
          englishWord: 'ambition'
        }, {
          id: '106',
          russianWord: 'тревога',
          englishWord: 'anxiety'
        }, {
          id: '107',
          russianWord: 'тревожный',
          englishWord: 'anxious'
        }, {
          id: '108',
          russianWord: 'тревожно',
          englishWord: 'anxiously'
        }, {
          id: '109',
          russianWord: 'кто-нибудь',
          englishWord: 'anyone'
        }, {
          id: '110',
          russianWord: 'что-нибудь',
          englishWord: 'anything'
        }, {
          id: '111',
          russianWord: 'в любом случае',
          englishWord: 'anyway'
        }, {
          id: '112',
          russianWord: 'везде',
          englishWord: 'anywhere'
        }, {
          id: '113',
          russianWord: 'кроме',
          englishWord: 'apart'
        }, {
          id: '114',
          russianWord: 'квартира',
          englishWord: 'apartment'
        }, {
          id: '115',
          russianWord: 'извиняться',
          englishWord: 'apologize'
        }, {
          id: '116',
          russianWord: 'видимый',
          englishWord: 'apparent'
        }, {
          id: '117',
          russianWord: 'по-видимому',
          englishWord: 'apparently'
        }, {
          id: '118',
          russianWord: 'призыв',
          englishWord: 'appeal'
        }, {
          id: '119',
          russianWord: 'появляться',
          englishWord: 'appear'
        }, {
          id: '120',
          russianWord: 'внешний вид',
          englishWord: 'appearance'
        }, {
          id: '121',
          russianWord: 'яблоко',
          englishWord: 'apple'
        }, {
          id: '122',
          russianWord: 'применение',
          englishWord: 'application'
        }, {
          id: '123',
          russianWord: 'применять',
          englishWord: 'apply'
        }, {
          id: '124',
          russianWord: 'назначать',
          englishWord: 'appoint'
        }, {
          id: '125',
          russianWord: 'назначение',
          englishWord: 'appointment'
        }, {
          id: '126',
          russianWord: 'ценить',
          englishWord: 'appreciate'
        }, {
          id: '127',
          russianWord: 'искусственный',
          englishWord: 'artificial'
        }, {
          id: '128',
          russianWord: 'художник',
          englishWord: 'artist'
        }, {
          id: '129',
          russianWord: 'художественный',
          englishWord: 'artistic'
        }, {
          id: '130',
          russianWord: 'в сторону',
          englishWord: 'aside'
        }, {
          id: '131',
          russianWord: 'просить',
          englishWord: 'ask'
        }, {
          id: '132',
          russianWord: 'спящий',
          englishWord: 'asleep'
        }, {
          id: '133',
          russianWord: 'аспект',
          englishWord: 'aspect'
        }, {
          id: '134',
          russianWord: 'помощь',
          englishWord: 'assist'
        }, {
          id: '135',
          russianWord: 'помощь',
          englishWord: 'assistance'
        }, {
          id: '136',
          russianWord: 'помощник',
          englishWord: 'assistant'
        }, {
          id: '137',
          russianWord: 'ассоциированный',
          englishWord: 'associate'
        }, {
          id: '138',
          russianWord: 'объединение',
          englishWord: 'association'
        }, {
          id: '139',
          russianWord: 'считать',
          englishWord: 'assume'
        }, {
          id: '140',
          russianWord: 'гарантировать',
          englishWord: 'assure'
        }, {
          id: '141',
          russianWord: 'атмосфера',
          englishWord: 'atmosphere'
        }, {
          id: '142',
          russianWord: 'атом',
          englishWord: 'atom'
        }, {
          id: '143',
          russianWord: 'придавать',
          englishWord: 'attach'
        }, {
          id: '144',
          russianWord: 'нападение',
          englishWord: 'attack'
        }, {
          id: '145',
          russianWord: 'попытка',
          englishWord: 'attempt'
        }, {
          id: '146',
          russianWord: 'присутствовать',
          englishWord: 'attend'
        }, {
          id: '147',
          russianWord: 'внимание',
          englishWord: 'attention'
        }, {
          id: '148',
          russianWord: 'неуклюжий',
          englishWord: 'awkward'
        }, {
          id: '149',
          russianWord: 'неуклюже',
          englishWord: 'awkwardly'
        }, {
          id: '150',
          russianWord: 'ребенок',
          englishWord: 'baby'
        }, {
          id: '151',
          russianWord: 'назад',
          englishWord: 'back'
        }, {
          id: '152',
          russianWord: 'фон',
          englishWord: 'background'
        }, {
          id: '153',
          russianWord: 'назад',
          englishWord: 'backward'
        }, {
          id: '154',
          russianWord: 'бактерии',
          englishWord: 'bacteria'
        }, {
          id: '155',
          russianWord: 'плохой',
          englishWord: 'bad'
        }, {
          id: '156',
          russianWord: 'плохо',
          englishWord: 'badly'
        }, {
          id: '157',
          russianWord: 'мешок',
          englishWord: 'bag'
        }, {
          id: '158',
          russianWord: 'багаж',
          englishWord: 'baggage'
        }, {
          id: '159',
          russianWord: 'испечь',
          englishWord: 'bake'
        }, {
          id: '160',
          russianWord: 'баланс',
          englishWord: 'balance'
        }, {
          id: '161',
          russianWord: 'мяч',
          englishWord: 'ball'
        }, {
          id: '162',
          russianWord: 'полоса',
          englishWord: 'band'
        }, {
          id: '163',
          russianWord: 'бинт',
          englishWord: 'bandage'
        }, {
          id: '164',
          russianWord: 'банк',
          englishWord: 'bank'
        }, {
          id: '165',
          russianWord: 'бар',
          englishWord: 'bar'
        }, {
          id: '166',
          russianWord: 'торговаться',
          englishWord: 'bargain'
        }, {
          id: '167',
          russianWord: 'барьер',
          englishWord: 'barrier'
        }, {
          id: '168',
          russianWord: 'база',
          englishWord: 'base'
        }, {
          id: '169',
          russianWord: 'интерес',
          englishWord: 'behalf'
        }, {
          id: '170',
          russianWord: 'вести себя',
          englishWord: 'behave'
        }, {
          id: '171',
          russianWord: 'поведение',
          englishWord: 'behaviour'
        }, {
          id: '172',
          russianWord: 'за',
          englishWord: 'behind'
        }, {
          id: '173',
          russianWord: 'вера',
          englishWord: 'belief'
        }, {
          id: '174',
          russianWord: 'верить',
          englishWord: 'believe'
        }, {
          id: '175',
          russianWord: 'колокол',
          englishWord: 'bell'
        }, {
          id: '176',
          russianWord: 'принадлежать',
          englishWord: 'belong'
        }, {
          id: '177',
          russianWord: 'ниже',
          englishWord: 'below'
        }, {
          id: '178',
          russianWord: 'ремень',
          englishWord: 'belt'
        }, {
          id: '179',
          russianWord: 'изгиб',
          englishWord: 'bend'
        }, {
          id: '180',
          russianWord: 'под',
          englishWord: 'beneath'
        }, {
          id: '181',
          russianWord: 'пособие',
          englishWord: 'benefit'
        }, {
          id: '182',
          russianWord: 'изогнутый',
          englishWord: 'bent'
        }, {
          id: '183',
          russianWord: 'рядом с',
          englishWord: 'beside'
        }, {
          id: '184',
          russianWord: 'ставка',
          englishWord: 'bet'
        }, {
          id: '185',
          russianWord: 'лучше',
          englishWord: 'better'
        }, {
          id: '186',
          russianWord: 'пари',
          englishWord: 'betting'
        }, {
          id: '187',
          russianWord: 'между',
          englishWord: 'between'
        }, {
          id: '188',
          russianWord: 'за',
          englishWord: 'beyond'
        }, {
          id: '189',
          russianWord: 'велосипед',
          englishWord: 'bicycle'
        }, {
          id: '190',
          russianWord: 'доска',
          englishWord: 'board'
        }, {
          id: '191',
          russianWord: 'лодка',
          englishWord: 'boat'
        }, {
          id: '192',
          russianWord: 'тело',
          englishWord: 'body'
        }, {
          id: '193',
          russianWord: 'кипятить',
          englishWord: 'boil'
        }, {
          id: '194',
          russianWord: 'бомба',
          englishWord: 'bomb'
        }, {
          id: '195',
          russianWord: 'кость',
          englishWord: 'bone'
        }, {
          id: '196',
          russianWord: 'книга',
          englishWord: 'book'
        }, {
          id: '197',
          russianWord: 'ботинок',
          englishWord: 'boot'
        }, {
          id: '198',
          russianWord: 'граница',
          englishWord: 'border'
        }, {
          id: '199',
          russianWord: 'отверстие',
          englishWord: 'bore'
        }, {
          id: '200',
          russianWord: 'скучный',
          englishWord: 'boring'
        }, {
          id: '201',
          russianWord: 'занимать',
          englishWord: 'borrow'
        }, {
          id: '202',
          russianWord: 'босс',
          englishWord: 'boss'
        }, {
          id: '203',
          russianWord: 'оба',
          englishWord: 'both'
        }, {
          id: '204',
          russianWord: 'беспокоить',
          englishWord: 'bother'
        }, {
          id: '205',
          russianWord: 'бутылка',
          englishWord: 'bottle'
        }, {
          id: '206',
          russianWord: 'дно',
          englishWord: 'bottom'
        }, {
          id: '207',
          russianWord: 'связанный',
          englishWord: 'bound'
        }, {
          id: '208',
          russianWord: 'чаша',
          englishWord: 'bowl'
        }, {
          id: '209',
          russianWord: 'ящик',
          englishWord: 'box'
        }, {
          id: '210',
          russianWord: 'мальчик',
          englishWord: 'boy'
        }, {
          id: '211',
          russianWord: 'передача',
          englishWord: 'broadcast'
        }, {
          id: '212',
          russianWord: 'широко',
          englishWord: 'broadly'
        }, {
          id: '213',
          russianWord: 'сломанный',
          englishWord: 'broken'
        }, {
          id: '214',
          russianWord: 'брат',
          englishWord: 'brother'
        }, {
          id: '215',
          russianWord: 'коричневый',
          englishWord: 'brown'
        }, {
          id: '216',
          russianWord: 'кисть',
          englishWord: 'brush'
        }, {
          id: '217',
          russianWord: 'пузырь',
          englishWord: 'bubble'
        }, {
          id: '218',
          russianWord: 'бюджет',
          englishWord: 'budget'
        }, {
          id: '219',
          russianWord: 'строить',
          englishWord: 'build'
        }, {
          id: '220',
          russianWord: 'здание',
          englishWord: 'building'
        }, {
          id: '221',
          russianWord: 'пуля',
          englishWord: 'bullet'
        }, {
          id: '222',
          russianWord: 'связка',
          englishWord: 'bunch'
        }, {
          id: '223',
          russianWord: 'гореть',
          englishWord: 'burn'
        }, {
          id: '224',
          russianWord: 'взрыв',
          englishWord: 'burst'
        }, {
          id: '225',
          russianWord: 'похоронить',
          englishWord: 'bury'
        }, {
          id: '226',
          russianWord: 'автобус',
          englishWord: 'bus'
        }, {
          id: '227',
          russianWord: 'куст',
          englishWord: 'bush'
        }, {
          id: '228',
          russianWord: 'бизнес',
          englishWord: 'business'
        }, {
          id: '229',
          russianWord: 'бизнесмен',
          englishWord: 'businessman'
        }, {
          id: '230',
          russianWord: 'занятый',
          englishWord: 'busy'
        }, {
          id: '231',
          russianWord: 'но',
          englishWord: 'but'
        }, {
          id: '232',
          russianWord: 'способный',
          englishWord: 'capable'
        }, {
          id: '233',
          russianWord: 'мощность',
          englishWord: 'capacity'
        }, {
          id: '234',
          russianWord: 'капитал',
          englishWord: 'capital'
        }, {
          id: '235',
          russianWord: 'капитан',
          englishWord: 'captain'
        }, {
          id: '236',
          russianWord: 'захват',
          englishWord: 'capture'
        }, {
          id: '237',
          russianWord: 'автомобиль',
          englishWord: 'car'
        }, {
          id: '238',
          russianWord: 'карты',
          englishWord: 'card'
        }, {
          id: '239',
          russianWord: 'картон',
          englishWord: 'cardboard'
        }, {
          id: '240',
          russianWord: 'уход',
          englishWord: 'care'
        }, {
          id: '241',
          russianWord: 'карьера',
          englishWord: 'career'
        }, {
          id: '242',
          russianWord: 'тщательный',
          englishWord: 'careful'
        }, {
          id: '243',
          russianWord: 'беспечный',
          englishWord: 'careless'
        }, {
          id: '244',
          russianWord: 'ковер',
          englishWord: 'carpet'
        }, {
          id: '245',
          russianWord: 'морковь',
          englishWord: 'carrot'
        }, {
          id: '246',
          russianWord: 'дело',
          englishWord: 'case'
        }, {
          id: '247',
          russianWord: 'наличные деньги',
          englishWord: 'cash'
        }, {
          id: '248',
          russianWord: 'литье',
          englishWord: 'cast'
        }, {
          id: '249',
          russianWord: 'замок',
          englishWord: 'castle'
        }, {
          id: '250',
          russianWord: 'кошка',
          englishWord: 'cat'
        }, {
          id: '251',
          russianWord: 'категория',
          englishWord: 'category'
        }, {
          id: '252',
          russianWord: 'дело',
          englishWord: 'cause'
        }, {
          id: '253',
          russianWord: 'изменение',
          englishWord: 'change'
        }, {
          id: '254',
          russianWord: 'канал',
          englishWord: 'channel'
        }, {
          id: '255',
          russianWord: 'глава',
          englishWord: 'chapter'
        }, {
          id: '256',
          russianWord: 'характер',
          englishWord: 'character'
        }, {
          id: '257',
          russianWord: 'характерный',
          englishWord: 'characteristic'
        }, {
          id: '258',
          russianWord: 'заряд',
          englishWord: 'charge'
        }, {
          id: '259',
          russianWord: 'благотворительность',
          englishWord: 'charity'
        }, {
          id: '260',
          russianWord: 'график',
          englishWord: 'chart'
        }, {
          id: '261',
          russianWord: 'охота',
          englishWord: 'chase'
        }, {
          id: '262',
          russianWord: 'чат',
          englishWord: 'chat'
        }, {
          id: '263',
          russianWord: 'дешевый',
          englishWord: 'cheap'
        }, {
          id: '264',
          russianWord: 'дешево',
          englishWord: 'cheaply'
        }, {
          id: '265',
          russianWord: 'мошенничество',
          englishWord: 'cheat'
        }, {
          id: '266',
          russianWord: 'проверка',
          englishWord: 'check'
        }, {
          id: '267',
          russianWord: 'щека',
          englishWord: 'cheek'
        }, {
          id: '268',
          russianWord: 'веселый',
          englishWord: 'cheerful'
        }, {
          id: '269',
          russianWord: 'сыр',
          englishWord: 'cheese'
        }, {
          id: '270',
          russianWord: 'химический',
          englishWord: 'chemical'
        }, {
          id: '271',
          russianWord: 'химик',
          englishWord: 'chemist'
        }, {
          id: '272',
          russianWord: 'проверка',
          englishWord: 'cheque'
        }, {
          id: '273',
          russianWord: 'грудь',
          englishWord: 'chest'
        }, {
          id: '274',
          russianWord: 'классический',
          englishWord: 'classic'
        }, {
          id: '275',
          russianWord: 'класс',
          englishWord: 'classroom'
        }, {
          id: '276',
          russianWord: 'чистый',
          englishWord: 'clean'
        }, {
          id: '277',
          russianWord: 'ясно',
          englishWord: 'clear'
        }, {
          id: '278',
          russianWord: 'очевидно',
          englishWord: 'clearly'
        }, {
          id: '279',
          russianWord: 'чиновник',
          englishWord: 'clerk'
        }, {
          id: '280',
          russianWord: 'умный',
          englishWord: 'clever'
        }, {
          id: '281',
          russianWord: 'нажмите',
          englishWord: 'click'
        }, {
          id: '282',
          russianWord: 'клиент',
          englishWord: 'client'
        }, {
          id: '283',
          russianWord: 'климат',
          englishWord: 'climate'
        }, {
          id: '284',
          russianWord: 'восхождение',
          englishWord: 'climbing'
        }, {
          id: '285',
          russianWord: 'часы',
          englishWord: 'clock'
        }, {
          id: '286',
          russianWord: 'близко',
          englishWord: 'close'
        }, {
          id: '287',
          russianWord: 'стенной шкаф',
          englishWord: 'closet'
        }, {
          id: '288',
          russianWord: 'ткань',
          englishWord: 'cloth'
        }, {
          id: '289',
          russianWord: 'одежда',
          englishWord: 'clothes'
        }, {
          id: '290',
          russianWord: 'одежда',
          englishWord: 'clothing'
        }, {
          id: '291',
          russianWord: 'облако',
          englishWord: 'cloud'
        }, {
          id: '292',
          russianWord: 'клуб',
          englishWord: 'club'
        }, {
          id: '293',
          russianWord: 'тренер',
          englishWord: 'coach'
        }, {
          id: '294',
          russianWord: 'уголь',
          englishWord: 'coal'
        }, {
          id: '295',
          russianWord: 'коммерческий',
          englishWord: 'commercial'
        }, {
          id: '296',
          russianWord: 'комиссия',
          englishWord: 'commission'
        }, {
          id: '297',
          russianWord: 'совершать',
          englishWord: 'commit'
        }, {
          id: '298',
          russianWord: 'обязательство',
          englishWord: 'commitment'
        }, {
          id: '299',
          russianWord: 'комитет',
          englishWord: 'committee'
        }, {
          id: '300',
          russianWord: 'общий',
          englishWord: 'common'
        }, {
          id: '301',
          russianWord: 'обычно',
          englishWord: 'commonly'
        }, {
          id: '302',
          russianWord: 'общаться',
          englishWord: 'communicate'
        }, {
          id: '303',
          russianWord: 'связь',
          englishWord: 'communication'
        }, {
          id: '304',
          russianWord: 'сообщество',
          englishWord: 'community'
        }, {
          id: '305',
          russianWord: 'компания',
          englishWord: 'company'
        }, {
          id: '306',
          russianWord: 'сравнить',
          englishWord: 'compare'
        }, {
          id: '307',
          russianWord: 'сравнение',
          englishWord: 'comparison'
        }, {
          id: '308',
          russianWord: 'конкурировать',
          englishWord: 'compete'
        }, {
          id: '309',
          russianWord: 'конкурс',
          englishWord: 'competition'
        }, {
          id: '310',
          russianWord: 'конкурентный',
          englishWord: 'competitive'
        }, {
          id: '311',
          russianWord: 'жаловаться',
          englishWord: 'complain'
        }, {
          id: '312',
          russianWord: 'полный',
          englishWord: 'complete'
        }, {
          id: '313',
          russianWord: 'комплекс',
          englishWord: 'complex'
        }, {
          id: '314',
          russianWord: 'осложнять',
          englishWord: 'complicate'
        }, {
          id: '315',
          russianWord: 'компьютер',
          englishWord: 'computer'
        }, {
          id: '317',
          russianWord: 'конгресс',
          englishWord: 'congress'
        }, {
          id: '318',
          russianWord: 'соединять',
          englishWord: 'connect'
        }, {
          id: '319',
          russianWord: 'связи',
          englishWord: 'connection'
        }, {
          id: '320',
          russianWord: 'сознательный',
          englishWord: 'conscious'
        }, {
          id: '321',
          russianWord: 'следствие',
          englishWord: 'consequence'
        }, {
          id: '322',
          russianWord: 'консервативный',
          englishWord: 'conservative'
        }, {
          id: '323',
          russianWord: 'рассматривать',
          englishWord: 'consider'
        }, {
          id: '324',
          russianWord: 'значительный',
          englishWord: 'considerable'
        }, {
          id: '325',
          russianWord: 'значительно',
          englishWord: 'considerably'
        }, {
          id: '326',
          russianWord: 'рассмотрение',
          englishWord: 'consideration'
        }, {
          id: '327',
          russianWord: 'состоять из',
          englishWord: 'consist of'
        }, {
          id: '328',
          russianWord: 'постоянная',
          englishWord: 'constant'
        }, {
          id: '329',
          russianWord: 'постоянно',
          englishWord: 'constantly'
        }, {
          id: '330',
          russianWord: 'строить',
          englishWord: 'construct'
        }, {
          id: '331',
          russianWord: 'строительство',
          englishWord: 'construction'
        }, {
          id: '332',
          russianWord: 'консультироваться',
          englishWord: 'consult'
        }, {
          id: '333',
          russianWord: 'потребитель',
          englishWord: 'consumer'
        }, {
          id: '334',
          russianWord: 'контакт',
          englishWord: 'contact'
        }, {
          id: '335',
          russianWord: 'содержать',
          englishWord: 'contain'
        }, {
          id: '336',
          russianWord: 'контейнер',
          englishWord: 'container'
        }, {
          id: '337',
          russianWord: 'прохладный',
          englishWord: 'cool'
        }, {
          id: '338',
          russianWord: 'копия',
          englishWord: 'copy'
        }, {
          id: '339',
          russianWord: 'ядро',
          englishWord: 'core'
        }, {
          id: '340',
          russianWord: 'угол',
          englishWord: 'corner'
        }, {
          id: '341',
          russianWord: 'правильный',
          englishWord: 'correct'
        }, {
          id: '342',
          russianWord: 'правильно',
          englishWord: 'correctly'
        }, {
          id: '343',
          russianWord: 'стоимость',
          englishWord: 'cost'
        }, {
          id: '344',
          russianWord: 'коттедж',
          englishWord: 'cottage'
        }, {
          id: '345',
          russianWord: 'хлопок',
          englishWord: 'cotton'
        }, {
          id: '346',
          russianWord: 'кашель',
          englishWord: 'cough'
        }, {
          id: '347',
          russianWord: 'кашляющий',
          englishWord: 'coughing'
        }, {
          id: '348',
          russianWord: 'может',
          englishWord: 'could'
        }, {
          id: '349',
          russianWord: 'совет',
          englishWord: 'council'
        }, {
          id: '350',
          russianWord: 'считать',
          englishWord: 'count'
        }, {
          id: '351',
          russianWord: 'счетчик',
          englishWord: 'counter'
        }, {
          id: '352',
          russianWord: 'страна',
          englishWord: 'country'
        }, {
          id: '353',
          russianWord: 'деревня',
          englishWord: 'countryside'
        }, {
          id: '354',
          russianWord: 'графство',
          englishWord: 'county'
        }, {
          id: '355',
          russianWord: 'пара',
          englishWord: 'couple'
        }, {
          id: '356',
          russianWord: 'мужество',
          englishWord: 'courage'
        }, {
          id: '357',
          russianWord: 'курс',
          englishWord: 'course'
        }, {
          id: '358',
          russianWord: 'толпа',
          englishWord: 'crowd'
        }, {
          id: '359',
          russianWord: 'венец',
          englishWord: 'crown'
        }, {
          id: '360',
          russianWord: 'решающий',
          englishWord: 'crucial'
        }, {
          id: '361',
          russianWord: 'жестокий',
          englishWord: 'cruel'
        }, {
          id: '362',
          russianWord: 'раздавить',
          englishWord: 'crush'
        }, {
          id: '363',
          russianWord: 'плакать',
          englishWord: 'cry'
        }, {
          id: '364',
          russianWord: 'культурный',
          englishWord: 'cultural'
        }, {
          id: '365',
          russianWord: 'культура',
          englishWord: 'culture'
        }, {
          id: '366',
          russianWord: 'кубок',
          englishWord: 'cup'
        }, {
          id: '367',
          russianWord: 'шкаф',
          englishWord: 'cupboard'
        }, {
          id: '368',
          russianWord: 'сдерживать',
          englishWord: 'curb'
        }, {
          id: '369',
          russianWord: 'лечить',
          englishWord: 'cure'
        }, {
          id: '370',
          russianWord: 'любопытный',
          englishWord: 'curious'
        }, {
          id: '371',
          russianWord: 'странно',
          englishWord: 'curiously'
        }, {
          id: '372',
          russianWord: 'завиток',
          englishWord: 'curl'
        }, {
          id: '373',
          russianWord: 'кудрявый',
          englishWord: 'curly'
        }, {
          id: '374',
          russianWord: 'текущий',
          englishWord: 'current'
        }, {
          id: '375',
          russianWord: 'в настоящее время',
          englishWord: 'currently'
        }, {
          id: '376',
          russianWord: 'занавес',
          englishWord: 'curtain'
        }, {
          id: '377',
          russianWord: 'кривая',
          englishWord: 'curve'
        }, {
          id: '378',
          russianWord: 'обычай',
          englishWord: 'custom'
        }, {
          id: '379',
          russianWord: 'глухой',
          englishWord: 'deaf'
        }, {
          id: '380',
          russianWord: 'дело',
          englishWord: 'deal'
        }, {
          id: '381',
          russianWord: 'дело с',
          englishWord: 'deal with'
        }, {
          id: '382',
          russianWord: 'дорогой',
          englishWord: 'dear'
        }, {
          id: '383',
          russianWord: 'смерть',
          englishWord: 'death'
        }, {
          id: '384',
          russianWord: 'обсуждение',
          englishWord: 'debate'
        }, {
          id: '385',
          russianWord: 'долг',
          englishWord: 'debt'
        }, {
          id: '386',
          russianWord: 'десятилетие',
          englishWord: 'decade'
        }, {
          id: '387',
          russianWord: 'распад',
          englishWord: 'decay'
        }, {
          id: '388',
          russianWord: 'декабрь',
          englishWord: 'december'
        }, {
          id: '389',
          russianWord: 'решать',
          englishWord: 'decide'
        }, {
          id: '390',
          russianWord: 'решение',
          englishWord: 'decision'
        }, {
          id: '391',
          russianWord: 'объявлять',
          englishWord: 'declare'
        }, {
          id: '392',
          russianWord: 'снижение',
          englishWord: 'decline'
        }, {
          id: '393',
          russianWord: 'украшать',
          englishWord: 'decorate'
        }, {
          id: '394',
          russianWord: 'украшение',
          englishWord: 'decoration'
        }, {
          id: '395',
          russianWord: 'декоративный',
          englishWord: 'decorative'
        }, {
          id: '396',
          russianWord: 'снижение',
          englishWord: 'decrease'
        }, {
          id: '397',
          russianWord: 'глубокий',
          englishWord: 'deep'
        }, {
          id: '398',
          russianWord: 'глубоко',
          englishWord: 'deeply'
        }, {
          id: '399',
          russianWord: 'поражение',
          englishWord: 'defeat'
        }, {
          id: '400',
          russianWord: 'гнетущий',
          englishWord: 'depressing'
        }, {
          id: '401',
          russianWord: 'глубина',
          englishWord: 'depth'
        }, {
          id: '402',
          russianWord: 'получать',
          englishWord: 'derive'
        }, {
          id: '403',
          russianWord: 'описывать',
          englishWord: 'describe'
        }, {
          id: '404',
          russianWord: 'описание',
          englishWord: 'description'
        }, {
          id: '405',
          russianWord: 'пустыня',
          englishWord: 'desert'
        }, {
          id: '406',
          russianWord: 'заслуживать',
          englishWord: 'deserve'
        }, {
          id: '407',
          russianWord: 'дизайн',
          englishWord: 'design'
        }, {
          id: '408',
          russianWord: 'желание',
          englishWord: 'desire'
        }, {
          id: '409',
          russianWord: 'стол',
          englishWord: 'desk'
        }, {
          id: '410',
          russianWord: 'отчаянный',
          englishWord: 'desperate'
        }, {
          id: '411',
          russianWord: 'несмотря на',
          englishWord: 'despite'
        }, {
          id: '412',
          russianWord: 'уничтожить',
          englishWord: 'destroy'
        }, {
          id: '413',
          russianWord: 'уничтожение',
          englishWord: 'destruction'
        }, {
          id: '414',
          russianWord: 'деталь',
          englishWord: 'detail'
        }, {
          id: '415',
          russianWord: 'определение',
          englishWord: 'determination'
        }, {
          id: '416',
          russianWord: 'определять',
          englishWord: 'determine'
        }, {
          id: '417',
          russianWord: 'развивать',
          englishWord: 'develop'
        }, {
          id: '418',
          russianWord: 'развитие',
          englishWord: 'development'
        }, {
          id: '419',
          russianWord: 'устройство',
          englishWord: 'device'
        }, {
          id: '420',
          russianWord: 'посвящать',
          englishWord: 'devote'
        }, {
          id: '421',
          russianWord: 'несогласие',
          englishWord: 'disagreement'
        }, {
          id: '422',
          russianWord: 'исчезать',
          englishWord: 'disappear'
        }, {
          id: '423',
          russianWord: 'разочаровывать',
          englishWord: 'disappoint'
        }, {
          id: '424',
          russianWord: 'разочаровывающий',
          englishWord: 'disappointing'
        }, {
          id: '425',
          russianWord: 'разочарование',
          englishWord: 'disappointment'
        }, {
          id: '426',
          russianWord: 'неодобрение',
          englishWord: 'disapproval'
        }, {
          id: '427',
          russianWord: 'не одобрять',
          englishWord: 'disapprove'
        }, {
          id: '428',
          russianWord: 'неодобрительно',
          englishWord: 'disapproving'
        }, {
          id: '429',
          russianWord: 'катастрофа',
          englishWord: 'disaster'
        }, {
          id: '430',
          russianWord: 'диск',
          englishWord: 'disc'
        }, {
          id: '431',
          russianWord: 'дисциплина',
          englishWord: 'discipline'
        }, {
          id: '432',
          russianWord: 'скидка',
          englishWord: 'discount'
        }, {
          id: '433',
          russianWord: 'открыть',
          englishWord: 'discover'
        }, {
          id: '434',
          russianWord: 'открытие',
          englishWord: 'discovery'
        }, {
          id: '435',
          russianWord: 'обсуждать',
          englishWord: 'discuss'
        }, {
          id: '436',
          russianWord: 'обсуждение',
          englishWord: 'discussion'
        }, {
          id: '437',
          russianWord: 'болезнь',
          englishWord: 'disease'
        }, {
          id: '438',
          russianWord: 'отвращение',
          englishWord: 'disgust'
        }, {
          id: '439',
          russianWord: 'отвратительный',
          englishWord: 'disgusting'
        }, {
          id: '440',
          russianWord: 'блюдо',
          englishWord: 'dish'
        }, {
          id: '441',
          russianWord: 'нечестный',
          englishWord: 'dishonest'
        }, {
          id: '442',
          russianWord: 'доминировать',
          englishWord: 'dominate'
        }, {
          id: '443',
          russianWord: 'дверь',
          englishWord: 'door'
        }, {
          id: '444',
          russianWord: 'точка',
          englishWord: 'dot'
        }, {
          id: '445',
          russianWord: 'двойной',
          englishWord: 'double'
        }, {
          id: '446',
          russianWord: 'сомнение',
          englishWord: 'doubt'
        }, {
          id: '447',
          russianWord: 'вниз',
          englishWord: 'down'
        }, {
          id: '448',
          russianWord: 'вниз',
          englishWord: 'downstairs'
        }, {
          id: '449',
          russianWord: 'вниз',
          englishWord: 'downward'
        }, {
          id: '450',
          russianWord: 'вниз',
          englishWord: 'downwards'
        }, {
          id: '451',
          russianWord: 'дюжина',
          englishWord: 'dozen'
        }, {
          id: '452',
          russianWord: 'проект',
          englishWord: 'draft'
        }, {
          id: '453',
          russianWord: 'тащить',
          englishWord: 'drag'
        }, {
          id: '454',
          russianWord: 'драма',
          englishWord: 'drama'
        }, {
          id: '455',
          russianWord: 'драматический',
          englishWord: 'dramatic'
        }, {
          id: '456',
          russianWord: 'рисовать',
          englishWord: 'draw'
        }, {
          id: '457',
          russianWord: 'ящик',
          englishWord: 'drawer'
        }, {
          id: '458',
          russianWord: 'рисунок',
          englishWord: 'drawing'
        }, {
          id: '459',
          russianWord: 'сон',
          englishWord: 'dream'
        }, {
          id: '460',
          russianWord: 'платье',
          englishWord: 'dress'
        }, {
          id: '461',
          russianWord: 'пить',
          englishWord: 'drink'
        }, {
          id: '462',
          russianWord: 'привод',
          englishWord: 'drive'
        }, {
          id: '463',
          russianWord: 'легкость',
          englishWord: 'ease'
        }, {
          id: '464',
          russianWord: 'легко',
          englishWord: 'easily'
        }, {
          id: '465',
          russianWord: 'на восток',
          englishWord: 'east'
        }, {
          id: '466',
          russianWord: 'восточный',
          englishWord: 'eastern'
        }, {
          id: '467',
          russianWord: 'легко',
          englishWord: 'easy'
        }, {
          id: '468',
          russianWord: 'есть',
          englishWord: 'eat'
        }, {
          id: '469',
          russianWord: 'экономический',
          englishWord: 'economic'
        }, {
          id: '470',
          russianWord: 'экономика',
          englishWord: 'economy'
        }, {
          id: '471',
          russianWord: 'эффект',
          englishWord: 'effect'
        }, {
          id: '472',
          russianWord: 'эффективный',
          englishWord: 'effective'
        }, {
          id: '473',
          russianWord: 'эффективный',
          englishWord: 'efficient'
        }, {
          id: '474',
          russianWord: 'эффективно',
          englishWord: 'efficiently'
        }, {
          id: '475',
          russianWord: 'усилие',
          englishWord: 'effort'
        }, {
          id: '476',
          russianWord: 'яйцо',
          englishWord: 'egg'
        }, {
          id: '477',
          russianWord: 'или',
          englishWord: 'either'
        }, {
          id: '478',
          russianWord: 'локоть',
          englishWord: 'elbow'
        }, {
          id: '479',
          russianWord: 'пожилой',
          englishWord: 'elderly'
        }, {
          id: '480',
          russianWord: 'избирать',
          englishWord: 'elect'
        }, {
          id: '481',
          russianWord: 'выборы',
          englishWord: 'election'
        }, {
          id: '482',
          russianWord: 'электрический',
          englishWord: 'electric'
        }, {
          id: '483',
          russianWord: 'электрический',
          englishWord: 'electrical'
        }, {
          id: '484',
          russianWord: 'пустой',
          englishWord: 'empty'
        }, {
          id: '485',
          russianWord: 'позволить',
          englishWord: 'enable'
        }, {
          id: '486',
          russianWord: 'сталкиваться',
          englishWord: 'encounter'
        }, {
          id: '487',
          russianWord: 'поощрять',
          englishWord: 'encourage'
        }, {
          id: '488',
          russianWord: 'поощрение',
          englishWord: 'encouragement'
        }, {
          id: '489',
          russianWord: 'конец',
          englishWord: 'end'
        }, {
          id: '490',
          russianWord: 'окончание',
          englishWord: 'ending'
        }, {
          id: '491',
          russianWord: 'враг',
          englishWord: 'enemy'
        }, {
          id: '492',
          russianWord: 'энергия',
          englishWord: 'energy'
        }, {
          id: '493',
          russianWord: 'заниматься',
          englishWord: 'engage'
        }, {
          id: '494',
          russianWord: 'двигатель',
          englishWord: 'engine'
        }, {
          id: '495',
          russianWord: 'инженер',
          englishWord: 'engineer'
        }, {
          id: '496',
          russianWord: 'машиностроение',
          englishWord: 'engineering'
        }, {
          id: '497',
          russianWord: 'пользоваться',
          englishWord: 'enjoy'
        }, {
          id: '498',
          russianWord: 'огромный',
          englishWord: 'enormous'
        }, {
          id: '499',
          russianWord: 'достаточно',
          englishWord: 'enough'
        }, {
          id: '500',
          russianWord: 'запрос',
          englishWord: 'enquiry'
        }, {
          id: '501',
          russianWord: 'обеспечивать',
          englishWord: 'ensure'
        }, {
          id: '502',
          russianWord: 'вводить',
          englishWord: 'enter'
        }, {
          id: '503',
          russianWord: 'развлекать',
          englishWord: 'entertain'
        }, {
          id: '504',
          russianWord: 'конферансье',
          englishWord: 'entertainer'
        }, {
          id: '505',
          russianWord: 'евро',
          englishWord: 'euro'
        }, {
          id: '506',
          russianWord: 'даже',
          englishWord: 'even'
        }, {
          id: '507',
          russianWord: 'вечер',
          englishWord: 'evening'
        }, {
          id: '508',
          russianWord: 'событие',
          englishWord: 'event'
        }, {
          id: '509',
          russianWord: 'когда-либо',
          englishWord: 'ever'
        }, {
          id: '510',
          russianWord: 'каждый',
          englishWord: 'every'
        }, {
          id: '511',
          russianWord: 'каждый',
          englishWord: 'everyone'
        }, {
          id: '512',
          russianWord: 'все',
          englishWord: 'everything'
        }, {
          id: '513',
          russianWord: 'везде',
          englishWord: 'everywhere'
        }, {
          id: '514',
          russianWord: 'доказательства',
          englishWord: 'evidence'
        }, {
          id: '515',
          russianWord: 'зло',
          englishWord: 'evil'
        }, {
          id: '516',
          russianWord: 'точный',
          englishWord: 'exact'
        }, {
          id: '517',
          russianWord: 'точно',
          englishWord: 'exactly'
        }, {
          id: '518',
          russianWord: 'преувеличивать',
          englishWord: 'exaggerate'
        }, {
          id: '519',
          russianWord: 'экзамен',
          englishWord: 'exam'
        }, {
          id: '520',
          russianWord: 'изучать',
          englishWord: 'examine'
        }, {
          id: '521',
          russianWord: 'пример',
          englishWord: 'example'
        }, {
          id: '522',
          russianWord: 'отличный',
          englishWord: 'excellent'
        }, {
          id: '523',
          russianWord: 'за исключением',
          englishWord: 'except'
        }, {
          id: '524',
          russianWord: 'исключение',
          englishWord: 'exception'
        }, {
          id: '525',
          russianWord: 'обмен',
          englishWord: 'exchange'
        }, {
          id: '526',
          russianWord: 'объяснять',
          englishWord: 'explain'
        }, {
          id: '527',
          russianWord: 'объяснение',
          englishWord: 'explanation'
        }, {
          id: '528',
          russianWord: 'взорваться',
          englishWord: 'explode'
        }, {
          id: '529',
          russianWord: 'изучать',
          englishWord: 'explore'
        }, {
          id: '530',
          russianWord: 'взрыв',
          englishWord: 'explosion'
        }, {
          id: '531',
          russianWord: 'экспорт',
          englishWord: 'export'
        }, {
          id: '532',
          russianWord: 'разоблачать',
          englishWord: 'expose'
        }, {
          id: '533',
          russianWord: 'экспресс',
          englishWord: 'express'
        }, {
          id: '534',
          russianWord: 'выражение',
          englishWord: 'expression'
        }, {
          id: '535',
          russianWord: 'продлить',
          englishWord: 'extend'
        }, {
          id: '536',
          russianWord: 'расширение',
          englishWord: 'extension'
        }, {
          id: '537',
          russianWord: 'степень',
          englishWord: 'extent'
        }, {
          id: '538',
          russianWord: 'дополнительный',
          englishWord: 'extra'
        }, {
          id: '539',
          russianWord: 'внеочередной',
          englishWord: 'extraordinary'
        }, {
          id: '540',
          russianWord: 'экстремальный',
          englishWord: 'extreme'
        }, {
          id: '541',
          russianWord: 'глаз',
          englishWord: 'eye'
        }, {
          id: '542',
          russianWord: 'лицо',
          englishWord: 'face'
        }, {
          id: '543',
          russianWord: 'факт',
          englishWord: 'fact'
        }, {
          id: '544',
          russianWord: 'фактор',
          englishWord: 'factor'
        }, {
          id: '545',
          russianWord: 'завод',
          englishWord: 'factory'
        }, {
          id: '546',
          russianWord: 'поражение',
          englishWord: 'fail'
        }, {
          id: '547',
          russianWord: 'модный',
          englishWord: 'fashionable'
        }, {
          id: '548',
          russianWord: 'быстро',
          englishWord: 'fast'
        }, {
          id: '549',
          russianWord: 'крепить',
          englishWord: 'fasten'
        }, {
          id: '550',
          russianWord: 'толстый',
          englishWord: 'fat'
        }, {
          id: '551',
          russianWord: 'отец',
          englishWord: 'father'
        }, {
          id: '552',
          russianWord: 'кран',
          englishWord: 'faucet'
        }, {
          id: '553',
          russianWord: 'вина',
          englishWord: 'fault'
        }, {
          id: '554',
          russianWord: 'поддержка',
          englishWord: 'favour'
        }, {
          id: '555',
          russianWord: 'любимый',
          englishWord: 'favourite'
        }, {
          id: '556',
          russianWord: 'страх',
          englishWord: 'fear'
        }, {
          id: '557',
          russianWord: 'перо',
          englishWord: 'feather'
        }, {
          id: '558',
          russianWord: 'особенность',
          englishWord: 'feature'
        }, {
          id: '559',
          russianWord: 'сбор',
          englishWord: 'fee'
        }, {
          id: '560',
          russianWord: 'чувствовать',
          englishWord: 'feel'
        }, {
          id: '561',
          russianWord: 'чувство',
          englishWord: 'feeling'
        }, {
          id: '562',
          russianWord: 'человек',
          englishWord: 'fellow'
        }, {
          id: '563',
          russianWord: 'женский',
          englishWord: 'female'
        }, {
          id: '564',
          russianWord: 'забор',
          englishWord: 'fence'
        }, {
          id: '565',
          russianWord: 'фестиваль',
          englishWord: 'festival'
        }, {
          id: '566',
          russianWord: 'извлечение',
          englishWord: 'fetch'
        }, {
          id: '567',
          russianWord: 'лихорадка',
          englishWord: 'fever'
        }, {
          id: '568',
          russianWord: 'соответствовать',
          englishWord: 'fit'
        }, {
          id: '569',
          russianWord: 'фиксировать',
          englishWord: 'fix'
        }, {
          id: '570',
          russianWord: 'флаг',
          englishWord: 'flag'
        }, {
          id: '571',
          russianWord: 'пламя',
          englishWord: 'flame'
        }, {
          id: '572',
          russianWord: 'вспышка',
          englishWord: 'flash'
        }, {
          id: '573',
          russianWord: 'плоский',
          englishWord: 'flat'
        }, {
          id: '574',
          russianWord: 'вкус',
          englishWord: 'flavour'
        }, {
          id: '575',
          russianWord: 'плоть',
          englishWord: 'flesh'
        }, {
          id: '576',
          russianWord: 'полет',
          englishWord: 'flight'
        }, {
          id: '577',
          russianWord: 'поплавок',
          englishWord: 'float'
        }, {
          id: '578',
          russianWord: 'наводнение',
          englishWord: 'flood'
        }, {
          id: '579',
          russianWord: 'этаж',
          englishWord: 'floor'
        }, {
          id: '580',
          russianWord: 'муки',
          englishWord: 'flour'
        }, {
          id: '581',
          russianWord: 'поток',
          englishWord: 'flow'
        }, {
          id: '582',
          russianWord: 'цветок',
          englishWord: 'flower'
        }, {
          id: '583',
          russianWord: 'грипп',
          englishWord: 'flu'
        }, {
          id: '584',
          russianWord: 'летать',
          englishWord: 'fly'
        }, {
          id: '585',
          russianWord: 'фокус',
          englishWord: 'focus'
        }, {
          id: '586',
          russianWord: 'складка',
          englishWord: 'fold'
        }, {
          id: '587',
          russianWord: 'складной',
          englishWord: 'folding'
        }, {
          id: '588',
          russianWord: 'следить',
          englishWord: 'follow'
        }, {
          id: '589',
          russianWord: 'найдено',
          englishWord: 'found'
        }, {
          id: '590',
          russianWord: 'фундамент',
          englishWord: 'foundation'
        }, {
          id: '591',
          russianWord: 'кадр',
          englishWord: 'frame'
        }, {
          id: '592',
          russianWord: 'свободный',
          englishWord: 'free'
        }, {
          id: '593',
          russianWord: 'замораживание',
          englishWord: 'freeze'
        }, {
          id: '594',
          russianWord: 'частый',
          englishWord: 'frequent'
        }, {
          id: '595',
          russianWord: 'часто',
          englishWord: 'frequently'
        }, {
          id: '596',
          russianWord: 'свежий',
          englishWord: 'fresh'
        }, {
          id: '597',
          russianWord: 'только что',
          englishWord: 'freshly'
        }, {
          id: '598',
          russianWord: 'пятница',
          englishWord: 'friday'
        }, {
          id: '599',
          russianWord: 'холодильник',
          englishWord: 'fridge'
        }, {
          id: '600',
          russianWord: 'друг',
          englishWord: 'friend'
        }, {
          id: '601',
          russianWord: 'дружественный',
          englishWord: 'friendly'
        }, {
          id: '602',
          russianWord: 'дружба',
          englishWord: 'friendship'
        }, {
          id: '603',
          russianWord: 'пугать',
          englishWord: 'frighten'
        }, {
          id: '604',
          russianWord: 'пугающий',
          englishWord: 'frightening'
        }, {
          id: '605',
          russianWord: 'от',
          englishWord: 'from'
        }, {
          id: '606',
          russianWord: 'передний',
          englishWord: 'front'
        }, {
          id: '607',
          russianWord: 'замороженный',
          englishWord: 'frozen'
        }, {
          id: '608',
          russianWord: 'фрукты',
          englishWord: 'fruit'
        }, {
          id: '609',
          russianWord: 'жарить',
          englishWord: 'fry'
        }, {
          id: '610',
          russianWord: 'газ',
          englishWord: 'gas'
        }, {
          id: '611',
          russianWord: 'бензин',
          englishWord: 'gasoline'
        }, {
          id: '612',
          russianWord: 'ворота',
          englishWord: 'gate'
        }, {
          id: '613',
          russianWord: 'собирать',
          englishWord: 'gather'
        }, {
          id: '614',
          russianWord: 'шестерня',
          englishWord: 'gear'
        }, {
          id: '615',
          russianWord: 'общий',
          englishWord: 'general'
        }, {
          id: '616',
          russianWord: 'генерировать',
          englishWord: 'generate'
        }, {
          id: '617',
          russianWord: 'поколение',
          englishWord: 'generation'
        }, {
          id: '618',
          russianWord: 'щедрый',
          englishWord: 'generous'
        }, {
          id: '619',
          russianWord: 'щедро',
          englishWord: 'generously'
        }, {
          id: '620',
          russianWord: 'нежный',
          englishWord: 'gentle'
        }, {
          id: '621',
          russianWord: 'джентльмен',
          englishWord: 'gentleman'
        }, {
          id: '622',
          russianWord: 'осторожно',
          englishWord: 'gently'
        }, {
          id: '623',
          russianWord: 'подлинный',
          englishWord: 'genuine'
        }, {
          id: '624',
          russianWord: 'география',
          englishWord: 'geography'
        }, {
          id: '625',
          russianWord: 'сойти',
          englishWord: 'get off'
        }, {
          id: '626',
          russianWord: 'ладить',
          englishWord: 'get on'
        }, {
          id: '627',
          russianWord: 'гигантский',
          englishWord: 'giant'
        }, {
          id: '628',
          russianWord: 'подарок',
          englishWord: 'gift'
        }, {
          id: '629',
          russianWord: 'девушка',
          englishWord: 'girl'
        }, {
          id: '630',
          russianWord: 'подруга',
          englishWord: 'girlfriend'
        }, {
          id: '631',
          russianWord: 'грамматика',
          englishWord: 'grammar'
        }, {
          id: '632',
          russianWord: 'большой',
          englishWord: 'grand'
        }, {
          id: '633',
          russianWord: 'внук',
          englishWord: 'grandchild'
        }, {
          id: '634',
          russianWord: 'внучка',
          englishWord: 'granddaughter'
        }, {
          id: '635',
          russianWord: 'дед',
          englishWord: 'grandfather'
        }, {
          id: '636',
          russianWord: 'бабушка',
          englishWord: 'grandmother'
        }, {
          id: '638',
          russianWord: 'внук',
          englishWord: 'grandson'
        }, {
          id: '639',
          russianWord: 'грант',
          englishWord: 'grant'
        }, {
          id: '640',
          russianWord: 'трава',
          englishWord: 'grass'
        }, {
          id: '641',
          russianWord: 'благодарный',
          englishWord: 'grateful'
        }, {
          id: '642',
          russianWord: 'могила',
          englishWord: 'grave'
        }, {
          id: '643',
          russianWord: 'большой',
          englishWord: 'great'
        }, {
          id: '644',
          russianWord: 'значительно',
          englishWord: 'greatly'
        }, {
          id: '645',
          russianWord: 'зеленый',
          englishWord: 'green'
        }, {
          id: '647',
          russianWord: 'бакалея',
          englishWord: 'grocery'
        }, {
          id: '648',
          russianWord: 'земля',
          englishWord: 'ground'
        }, {
          id: '649',
          russianWord: 'группа',
          englishWord: 'group'
        }, {
          id: '650',
          russianWord: 'расти',
          englishWord: 'grow'
        }, {
          id: '651',
          russianWord: 'рост',
          englishWord: 'growth'
        }, {
          id: '652',
          russianWord: 'жесткий',
          englishWord: 'hard'
        }, {
          id: '653',
          russianWord: 'вряд ли',
          englishWord: 'hardly'
        }, {
          id: '654',
          russianWord: 'вред',
          englishWord: 'harm'
        }, {
          id: '655',
          russianWord: 'вредный',
          englishWord: 'harmful'
        }, {
          id: '656',
          russianWord: 'безвредный',
          englishWord: 'harmless'
        }, {
          id: '657',
          russianWord: 'шляпа',
          englishWord: 'hat'
        }, {
          id: '658',
          russianWord: 'ненависть',
          englishWord: 'hate'
        }, {
          id: '659',
          russianWord: 'иметь',
          englishWord: 'have'
        }, {
          id: '660',
          russianWord: 'руководитель',
          englishWord: 'head'
        }, {
          id: '661',
          russianWord: 'головная боль',
          englishWord: 'headache'
        }, {
          id: '662',
          russianWord: 'заживать',
          englishWord: 'heal'
        }, {
          id: '663',
          russianWord: 'здоровье',
          englishWord: 'health'
        }, {
          id: '664',
          russianWord: 'здоровый',
          englishWord: 'healthy'
        }, {
          id: '665',
          russianWord: 'услышать',
          englishWord: 'hear'
        }, {
          id: '666',
          russianWord: 'слух',
          englishWord: 'hearing'
        }, {
          id: '667',
          russianWord: 'сердце',
          englishWord: 'heart'
        }, {
          id: '668',
          russianWord: 'тепло',
          englishWord: 'heat'
        }, {
          id: '669',
          russianWord: 'отопление',
          englishWord: 'heating'
        }, {
          id: '670',
          russianWord: 'небо',
          englishWord: 'heaven'
        }, {
          id: '671',
          russianWord: 'сильно',
          englishWord: 'heavily'
        }, {
          id: '672',
          russianWord: 'тяжелый',
          englishWord: 'heavy'
        }, {
          id: '673',
          russianWord: 'хобби',
          englishWord: 'hobby'
        }, {
          id: '674',
          russianWord: 'держать',
          englishWord: 'hold'
        }, {
          id: '675',
          russianWord: 'отверстие',
          englishWord: 'hole'
        }, {
          id: '676',
          russianWord: 'праздник',
          englishWord: 'holiday'
        }, {
          id: '677',
          russianWord: 'полый',
          englishWord: 'hollow'
        }, {
          id: '678',
          russianWord: 'святой',
          englishWord: 'holy'
        }, {
          id: '679',
          russianWord: 'дома',
          englishWord: 'home'
        }, {
          id: '680',
          russianWord: 'домашнее задание',
          englishWord: 'homework'
        }, {
          id: '681',
          russianWord: 'честный',
          englishWord: 'honest'
        }, {
          id: '682',
          russianWord: 'честно',
          englishWord: 'honestly'
        }, {
          id: '683',
          russianWord: 'крючок',
          englishWord: 'hook'
        }, {
          id: '684',
          russianWord: 'надежда',
          englishWord: 'hope'
        }, {
          id: '685',
          russianWord: 'горизонтальный',
          englishWord: 'horizontal'
        }, {
          id: '686',
          russianWord: 'рог',
          englishWord: 'horn'
        }, {
          id: '687',
          russianWord: 'ужас',
          englishWord: 'horror'
        }, {
          id: '688',
          russianWord: 'лошадь',
          englishWord: 'horse'
        }, {
          id: '689',
          russianWord: 'больница',
          englishWord: 'hospital'
        }, {
          id: '690',
          russianWord: 'хозяин',
          englishWord: 'host'
        }, {
          id: '691',
          russianWord: 'горячий',
          englishWord: 'hot'
        }, {
          id: '692',
          russianWord: 'отель',
          englishWord: 'hotel'
        }, {
          id: '693',
          russianWord: 'час',
          englishWord: 'hour'
        }, {
          id: '694',
          russianWord: 'больной',
          englishWord: 'ill'
        }, {
          id: '695',
          russianWord: 'незаконный',
          englishWord: 'illegal'
        }, {
          id: '696',
          russianWord: 'болезнь',
          englishWord: 'illness'
        }, {
          id: '697',
          russianWord: 'иллюстрировать',
          englishWord: 'illustrate'
        }, {
          id: '698',
          russianWord: 'изображение',
          englishWord: 'image'
        }, {
          id: '699',
          russianWord: 'воображаемый',
          englishWord: 'imaginary'
        }, {
          id: '700',
          russianWord: 'воображение',
          englishWord: 'imagination'
        }, {
          id: '701',
          russianWord: 'вообразить',
          englishWord: 'imagine'
        }, {
          id: '702',
          russianWord: 'безнравственный',
          englishWord: 'immoral'
        }, {
          id: '703',
          russianWord: 'воздействие',
          englishWord: 'impact'
        }, {
          id: '704',
          russianWord: 'нетерпеливый',
          englishWord: 'impatient'
        }, {
          id: '705',
          russianWord: 'с нетерпением',
          englishWord: 'impatiently'
        }, {
          id: '706',
          russianWord: 'импликация',
          englishWord: 'implication'
        }, {
          id: '707',
          russianWord: 'подразумевать',
          englishWord: 'imply'
        }, {
          id: '708',
          russianWord: 'импорт',
          englishWord: 'import'
        }, {
          id: '709',
          russianWord: 'значение',
          englishWord: 'importance'
        }, {
          id: '710',
          russianWord: 'важный',
          englishWord: 'important'
        }, {
          id: '711',
          russianWord: 'важно',
          englishWord: 'importantly'
        }, {
          id: '712',
          russianWord: 'налагать',
          englishWord: 'impose'
        }, {
          id: '713',
          russianWord: 'невозможное',
          englishWord: 'impossible'
        }, {
          id: '714',
          russianWord: 'впечатление',
          englishWord: 'impress'
        }, {
          id: '715',
          russianWord: 'указывать',
          englishWord: 'indicate'
        }, {
          id: '716',
          russianWord: 'индикация',
          englishWord: 'indication'
        }, {
          id: '717',
          russianWord: 'непрямой',
          englishWord: 'indirect'
        }, {
          id: '718',
          russianWord: 'косвенно',
          englishWord: 'indirectly'
        }, {
          id: '719',
          russianWord: 'индивидуальный',
          englishWord: 'individual'
        }, {
          id: '720',
          russianWord: 'крытый',
          englishWord: 'indoor'
        }, {
          id: '721',
          russianWord: 'в помещении',
          englishWord: 'indoors'
        }, {
          id: '722',
          russianWord: 'промышленный',
          englishWord: 'industrial'
        }, {
          id: '723',
          russianWord: 'промышленность',
          englishWord: 'industry'
        }, {
          id: '724',
          russianWord: 'неизбежный',
          englishWord: 'inevitable'
        }, {
          id: '725',
          russianWord: 'неизбежно',
          englishWord: 'inevitably'
        }, {
          id: '726',
          russianWord: 'заражать',
          englishWord: 'infect'
        }, {
          id: '727',
          russianWord: 'инфекция',
          englishWord: 'infection'
        }, {
          id: '728',
          russianWord: 'инфекционный',
          englishWord: 'infectious'
        }, {
          id: '729',
          russianWord: 'влияние',
          englishWord: 'influence'
        }, {
          id: '730',
          russianWord: 'сообщить',
          englishWord: 'inform'
        }, {
          id: '731',
          russianWord: 'неофициальный',
          englishWord: 'informal'
        }, {
          id: '732',
          russianWord: 'информация',
          englishWord: 'information'
        }, {
          id: '733',
          russianWord: 'первоначальный',
          englishWord: 'initial'
        }, {
          id: '734',
          russianWord: 'инициатива',
          englishWord: 'initiative'
        }, {
          id: '735',
          russianWord: 'ранить',
          englishWord: 'injure'
        }, {
          id: '736',
          russianWord: 'намереваться',
          englishWord: 'intend'
        }, {
          id: '737',
          russianWord: 'намерение',
          englishWord: 'intention'
        }, {
          id: '738',
          russianWord: 'интерес',
          englishWord: 'interest'
        }, {
          id: '739',
          russianWord: 'интересный',
          englishWord: 'interesting'
        }, {
          id: '740',
          russianWord: 'интерьер',
          englishWord: 'interior'
        }, {
          id: '741',
          russianWord: 'внутренний',
          englishWord: 'internal'
        }, {
          id: '742',
          russianWord: 'международный',
          englishWord: 'international'
        }, {
          id: '743',
          russianWord: 'интернет',
          englishWord: 'internet'
        }, {
          id: '744',
          russianWord: 'интерпретировать',
          englishWord: 'interpret'
        }, {
          id: '745',
          russianWord: 'интерпретация',
          englishWord: 'interpretation'
        }, {
          id: '746',
          russianWord: 'прерывать',
          englishWord: 'interrupt'
        }, {
          id: '747',
          russianWord: 'перерыв',
          englishWord: 'interruption'
        }, {
          id: '748',
          russianWord: 'интервал',
          englishWord: 'interval'
        }, {
          id: '749',
          russianWord: 'интервью',
          englishWord: 'interview'
        }, {
          id: '750',
          russianWord: 'в',
          englishWord: 'into'
        }, {
          id: '751',
          russianWord: 'внедрять',
          englishWord: 'introduce'
        }, {
          id: '752',
          russianWord: 'введение',
          englishWord: 'introduction'
        }, {
          id: '753',
          russianWord: 'изобретать',
          englishWord: 'invent'
        }, {
          id: '754',
          russianWord: 'изобретение',
          englishWord: 'invention'
        }, {
          id: '755',
          russianWord: 'инвестировать',
          englishWord: 'invest'
        }, {
          id: '756',
          russianWord: 'расследовать',
          englishWord: 'investigate'
        }, {
          id: '757',
          russianWord: 'совместный',
          englishWord: 'joint'
        }, {
          id: '758',
          russianWord: 'шутка',
          englishWord: 'joke'
        }, {
          id: '759',
          russianWord: 'журналист',
          englishWord: 'journalist'
        }, {
          id: '760',
          russianWord: 'путешествие',
          englishWord: 'journey'
        }, {
          id: '761',
          russianWord: 'радость',
          englishWord: 'joy'
        }, {
          id: '762',
          russianWord: 'судья',
          englishWord: 'judge'
        }, {
          id: '763',
          russianWord: 'решение',
          englishWord: 'judgement'
        }, {
          id: '764',
          russianWord: 'сок',
          englishWord: 'juice'
        }, {
          id: '765',
          russianWord: 'июль',
          englishWord: 'july'
        }, {
          id: '766',
          russianWord: 'прыжок',
          englishWord: 'jump'
        }, {
          id: '767',
          russianWord: 'июнь',
          englishWord: 'june'
        }, {
          id: '768',
          russianWord: 'младший',
          englishWord: 'junior'
        }, {
          id: '769',
          russianWord: 'просто',
          englishWord: 'just'
        }, {
          id: '770',
          russianWord: 'справедливость',
          englishWord: 'justice'
        }, {
          id: '771',
          russianWord: 'оправдывать',
          englishWord: 'justify'
        }, {
          id: '772',
          russianWord: 'острый',
          englishWord: 'keen'
        }, {
          id: '773',
          russianWord: 'заинтересованы в',
          englishWord: 'keen on'
        }, {
          id: '774',
          russianWord: 'держать',
          englishWord: 'keep'
        }, {
          id: '775',
          russianWord: 'ключ',
          englishWord: 'key'
        }, {
          id: '776',
          russianWord: 'клавиатура',
          englishWord: 'keyboard'
        }, {
          id: '777',
          russianWord: 'удар',
          englishWord: 'kick'
        }, {
          id: '778',
          russianWord: 'недостающий',
          englishWord: 'lacking'
        }, {
          id: '779',
          russianWord: 'леди',
          englishWord: 'lady'
        }, {
          id: '780',
          russianWord: 'озеро',
          englishWord: 'lake'
        }, {
          id: '781',
          russianWord: 'лампа',
          englishWord: 'lamp'
        }, {
          id: '782',
          russianWord: 'земля',
          englishWord: 'land'
        }, {
          id: '783',
          russianWord: 'пейзаж',
          englishWord: 'landscape'
        }, {
          id: '784',
          russianWord: 'переулок',
          englishWord: 'lane'
        }, {
          id: '785',
          russianWord: 'язык',
          englishWord: 'language'
        }, {
          id: '786',
          russianWord: 'большой',
          englishWord: 'large'
        }, {
          id: '787',
          russianWord: 'последний',
          englishWord: 'last'
        }, {
          id: '788',
          russianWord: 'поздно',
          englishWord: 'late'
        }, {
          id: '789',
          russianWord: 'позже',
          englishWord: 'later'
        }, {
          id: '790',
          russianWord: 'последний',
          englishWord: 'latest'
        }, {
          id: '791',
          russianWord: 'последний',
          englishWord: 'latter'
        }, {
          id: '792',
          russianWord: 'смеяться',
          englishWord: 'laugh'
        }, {
          id: '793',
          russianWord: 'запуск',
          englishWord: 'launch'
        }, {
          id: '794',
          russianWord: 'закон',
          englishWord: 'law'
        }, {
          id: '795',
          russianWord: 'адвокат',
          englishWord: 'lawyer'
        }, {
          id: '796',
          russianWord: 'лежать',
          englishWord: 'lay'
        }, {
          id: '797',
          russianWord: 'слой',
          englishWord: 'layer'
        }, {
          id: '798',
          russianWord: 'ленивый',
          englishWord: 'lazy'
        }, {
          id: '799',
          russianWord: 'библиотека',
          englishWord: 'library'
        }, {
          id: '800',
          russianWord: 'лицензия',
          englishWord: 'licence'
        }, {
          id: '801',
          russianWord: 'лицензия',
          englishWord: 'license'
        }, {
          id: '802',
          russianWord: 'крышка',
          englishWord: 'lid'
        }, {
          id: '803',
          russianWord: 'ложь',
          englishWord: 'lie'
        }, {
          id: '804',
          russianWord: 'жизнь',
          englishWord: 'life'
        }, {
          id: '805',
          russianWord: 'лифт',
          englishWord: 'lift'
        }, {
          id: '806',
          russianWord: 'свет',
          englishWord: 'light'
        }, {
          id: '807',
          russianWord: 'легко',
          englishWord: 'lightly'
        }, {
          id: '808',
          russianWord: 'вроде',
          englishWord: 'like'
        }, {
          id: '809',
          russianWord: 'предел',
          englishWord: 'limit'
        }, {
          id: '810',
          russianWord: 'линия',
          englishWord: 'line'
        }, {
          id: '811',
          russianWord: 'ссылка',
          englishWord: 'link'
        }, {
          id: '812',
          russianWord: 'губа',
          englishWord: 'lip'
        }, {
          id: '813',
          russianWord: 'жидкий',
          englishWord: 'liquid'
        }, {
          id: '814',
          russianWord: 'список',
          englishWord: 'list'
        }, {
          id: '815',
          russianWord: 'литература',
          englishWord: 'literature'
        }, {
          id: '816',
          russianWord: 'маленький',
          englishWord: 'little'
        }, {
          id: '817',
          russianWord: 'жизнь',
          englishWord: 'living'
        }, {
          id: '818',
          russianWord: 'нагрузка',
          englishWord: 'load'
        }, {
          id: '819',
          russianWord: 'заем',
          englishWord: 'loan'
        }, {
          id: '820',
          russianWord: 'ком',
          englishWord: 'lump'
        }, {
          id: '821',
          russianWord: 'обед',
          englishWord: 'lunch'
        }, {
          id: '822',
          russianWord: 'легкое',
          englishWord: 'lung'
        }, {
          id: '823',
          russianWord: 'машина',
          englishWord: 'machine'
        }, {
          id: '824',
          russianWord: 'машины',
          englishWord: 'machinery'
        }, {
          id: '825',
          russianWord: 'сумасшедший',
          englishWord: 'mad'
        }, {
          id: '826',
          russianWord: 'журнал',
          englishWord: 'magazine'
        }, {
          id: '827',
          russianWord: 'магический',
          englishWord: 'magic'
        }, {
          id: '828',
          russianWord: 'почта',
          englishWord: 'mail'
        }, {
          id: '829',
          russianWord: 'основной',
          englishWord: 'main'
        }, {
          id: '830',
          russianWord: 'главным образом',
          englishWord: 'mainly'
        }, {
          id: '831',
          russianWord: 'поддерживать',
          englishWord: 'maintain'
        }, {
          id: '832',
          russianWord: 'основной',
          englishWord: 'major'
        }, {
          id: '833',
          russianWord: 'большинство',
          englishWord: 'majority'
        }, {
          id: '834',
          russianWord: 'делать',
          englishWord: 'make'
        }, {
          id: '835',
          russianWord: 'мужской',
          englishWord: 'male'
        }, {
          id: '836',
          russianWord: 'торговый центр',
          englishWord: 'mall'
        }, {
          id: '837',
          russianWord: 'человек',
          englishWord: 'man'
        }, {
          id: '838',
          russianWord: 'управлять',
          englishWord: 'manage'
        }, {
          id: '839',
          russianWord: 'управление',
          englishWord: 'management'
        }, {
          id: '840',
          russianWord: 'менеджер',
          englishWord: 'manager'
        }, {
          id: '841',
          russianWord: 'мэр',
          englishWord: 'mayor'
        }, {
          id: '842',
          russianWord: 'еда',
          englishWord: 'meal'
        }, {
          id: '843',
          russianWord: 'среднее',
          englishWord: 'mean'
        }, {
          id: '844',
          russianWord: 'смысл',
          englishWord: 'meaning'
        }, {
          id: '845',
          russianWord: 'средства',
          englishWord: 'means'
        }, {
          id: '846',
          russianWord: 'тем временем',
          englishWord: 'meanwhile'
        }, {
          id: '847',
          russianWord: 'мера',
          englishWord: 'measure'
        }, {
          id: '848',
          russianWord: 'измерение',
          englishWord: 'measurement'
        }, {
          id: '849',
          russianWord: 'мясо',
          englishWord: 'meat'
        }, {
          id: '850',
          russianWord: 'встречаться',
          englishWord: 'meet'
        }, {
          id: '851',
          russianWord: 'заседание',
          englishWord: 'meeting'
        }, {
          id: '852',
          russianWord: 'расплав',
          englishWord: 'melt'
        }, {
          id: '853',
          russianWord: 'член',
          englishWord: 'member'
        }, {
          id: '854',
          russianWord: 'членство',
          englishWord: 'membership'
        }, {
          id: '855',
          russianWord: 'память',
          englishWord: 'memory'
        }, {
          id: '856',
          russianWord: 'умственный',
          englishWord: 'mental'
        }, {
          id: '857',
          russianWord: 'упомянуть',
          englishWord: 'mention'
        }, {
          id: '858',
          russianWord: 'меню',
          englishWord: 'menu'
        }, {
          id: '859',
          russianWord: 'простой',
          englishWord: 'mere'
        }, {
          id: '860',
          russianWord: 'беспорядок',
          englishWord: 'mess'
        }, {
          id: '861',
          russianWord: 'сообщение',
          englishWord: 'message'
        }, {
          id: '862',
          russianWord: 'ошибка',
          englishWord: 'mistake'
        }, {
          id: '863',
          russianWord: 'ошибочный',
          englishWord: 'mistaken'
        }, {
          id: '864',
          russianWord: 'смесь',
          englishWord: 'mix'
        }, {
          id: '865',
          russianWord: 'смесь',
          englishWord: 'mixture'
        }, {
          id: '867',
          russianWord: 'модель',
          englishWord: 'model'
        }, {
          id: '868',
          russianWord: 'современный',
          englishWord: 'modern'
        }, {
          id: '869',
          russianWord: 'момент',
          englishWord: 'moment'
        }, {
          id: '870',
          russianWord: 'понедельник',
          englishWord: 'monday'
        }, {
          id: '871',
          russianWord: 'деньги',
          englishWord: 'money'
        }, {
          id: '872',
          russianWord: 'монитор',
          englishWord: 'monitor'
        }, {
          id: '873',
          russianWord: 'месяц',
          englishWord: 'month'
        }, {
          id: '874',
          russianWord: 'настроение',
          englishWord: 'mood'
        }, {
          id: '875',
          russianWord: 'луна',
          englishWord: 'moon'
        }, {
          id: '876',
          russianWord: 'моральный',
          englishWord: 'moral'
        }, {
          id: '877',
          russianWord: 'больше',
          englishWord: 'more'
        }, {
          id: '878',
          russianWord: 'кроме того',
          englishWord: 'moreover'
        }, {
          id: '879',
          russianWord: 'утро',
          englishWord: 'morning'
        }, {
          id: '880',
          russianWord: 'наиболее',
          englishWord: 'most'
        }, {
          id: '881',
          russianWord: 'главным образом',
          englishWord: 'mostly'
        }, {
          id: '882',
          russianWord: 'мать',
          englishWord: 'mother'
        }, {
          id: '883',
          russianWord: 'таинственный',
          englishWord: 'mysterious'
        }, {
          id: '884',
          russianWord: 'тайна',
          englishWord: 'mystery'
        }, {
          id: '885',
          russianWord: 'гвоздь',
          englishWord: 'nail'
        }, {
          id: '886',
          russianWord: 'имя',
          englishWord: 'name'
        }, {
          id: '887',
          russianWord: 'узкий',
          englishWord: 'narrow'
        }, {
          id: '888',
          russianWord: 'народ',
          englishWord: 'nation'
        }, {
          id: '889',
          russianWord: 'национальный',
          englishWord: 'national'
        }, {
          id: '890',
          russianWord: 'природный',
          englishWord: 'natural'
        }, {
          id: '891',
          russianWord: 'характер',
          englishWord: 'nature'
        }, {
          id: '893',
          russianWord: 'около',
          englishWord: 'near'
        }, {
          id: '894',
          russianWord: 'рядом',
          englishWord: 'nearby'
        }, {
          id: '895',
          russianWord: 'почти',
          englishWord: 'nearly'
        }, {
          id: '896',
          russianWord: 'опрятный',
          englishWord: 'neat'
        }, {
          id: '897',
          russianWord: 'аккуратно',
          englishWord: 'neatly'
        }, {
          id: '898',
          russianWord: 'обязательно',
          englishWord: 'necessarily'
        }, {
          id: '899',
          russianWord: 'необходимо',
          englishWord: 'necessary'
        }, {
          id: '900',
          russianWord: 'шея',
          englishWord: 'neck'
        }, {
          id: '901',
          russianWord: 'отрицательный',
          englishWord: 'negative'
        }, {
          id: '902',
          russianWord: 'окрестности',
          englishWord: 'neighbourhood'
        }, {
          id: '903',
          russianWord: 'ни',
          englishWord: 'neither'
        }, {
          id: '904',
          russianWord: 'шумный',
          englishWord: 'noisy'
        }, {
          id: '905',
          russianWord: 'чушь',
          englishWord: 'nonsense'
        }, {
          id: '907',
          russianWord: 'нормальный',
          englishWord: 'normal'
        }, {
          id: '908',
          russianWord: 'к северу',
          englishWord: 'north'
        }, {
          id: '909',
          russianWord: 'северный',
          englishWord: 'northern'
        }, {
          id: '910',
          russianWord: 'нос',
          englishWord: 'nose'
        }, {
          id: '911',
          russianWord: 'не',
          englishWord: 'not'
        }, {
          id: '912',
          russianWord: 'внимание',
          englishWord: 'note'
        }, {
          id: '913',
          russianWord: 'уведомление',
          englishWord: 'notice'
        }, {
          id: '914',
          russianWord: 'заметный',
          englishWord: 'noticeable'
        }, {
          id: '915',
          russianWord: 'роман',
          englishWord: 'novel'
        }, {
          id: '916',
          russianWord: 'ноябрь',
          englishWord: 'november'
        }, {
          id: '918',
          russianWord: 'нигде',
          englishWord: 'nowhere'
        }, {
          id: '919',
          russianWord: 'ядерный',
          englishWord: 'nuclear'
        }, {
          id: '920',
          russianWord: 'медсестра',
          englishWord: 'nurse'
        }, {
          id: '921',
          russianWord: 'гайка',
          englishWord: 'nut'
        }, {
          id: '922',
          russianWord: 'повиноваться',
          englishWord: 'obey'
        }, {
          id: '923',
          russianWord: 'объект',
          englishWord: 'object'
        }, {
          id: '924',
          russianWord: 'цель',
          englishWord: 'objective'
        }, {
          id: '925',
          russianWord: 'старый',
          englishWord: 'old'
        }, {
          id: '926',
          russianWord: 'раз',
          englishWord: 'once'
        }, {
          id: '927',
          russianWord: 'лук',
          englishWord: 'onion'
        }, {
          id: '928',
          russianWord: 'только',
          englishWord: 'only'
        }, {
          id: '929',
          russianWord: 'открытый',
          englishWord: 'open'
        }, {
          id: '930',
          russianWord: 'открытие',
          englishWord: 'opening'
        }, {
          id: '931',
          russianWord: 'открыто',
          englishWord: 'openly'
        }, {
          id: '932',
          russianWord: 'работать',
          englishWord: 'operate'
        }, {
          id: '933',
          russianWord: 'операция',
          englishWord: 'operation'
        }, {
          id: '934',
          russianWord: 'мнение',
          englishWord: 'opinion'
        }, {
          id: '935',
          russianWord: 'противник',
          englishWord: 'opponent'
        }, {
          id: '936',
          russianWord: 'возможность',
          englishWord: 'opportunity'
        }, {
          id: '937',
          russianWord: 'противиться',
          englishWord: 'oppose'
        }, {
          id: '938',
          russianWord: 'против',
          englishWord: 'opposing'
        }, {
          id: '939',
          russianWord: 'напротив',
          englishWord: 'opposite'
        }, {
          id: '940',
          russianWord: 'оппозиция',
          englishWord: 'opposition'
        }, {
          id: '941',
          russianWord: 'вариант',
          englishWord: 'option'
        }, {
          id: '942',
          russianWord: 'или',
          englishWord: 'or'
        }, {
          id: '943',
          russianWord: 'оранжевый',
          englishWord: 'orange'
        }, {
          id: '944',
          russianWord: 'порядок',
          englishWord: 'order'
        }, {
          id: '945',
          russianWord: 'обычный',
          englishWord: 'ordinary'
        }, {
          id: '946',
          russianWord: 'темп',
          englishWord: 'pace'
        }, {
          id: '947',
          russianWord: 'пакет',
          englishWord: 'pack'
        }, {
          id: '948',
          russianWord: 'пакет',
          englishWord: 'package'
        }, {
          id: '949',
          russianWord: 'упаковка',
          englishWord: 'packaging'
        }, {
          id: '950',
          russianWord: 'пакет',
          englishWord: 'packet'
        }, {
          id: '951',
          russianWord: 'страница',
          englishWord: 'page'
        }, {
          id: '952',
          russianWord: 'боль',
          englishWord: 'pain'
        }, {
          id: '953',
          russianWord: 'болезненный',
          englishWord: 'painful'
        }, {
          id: '954',
          russianWord: 'краска',
          englishWord: 'paint'
        }, {
          id: '955',
          russianWord: 'художник',
          englishWord: 'painter'
        }, {
          id: '956',
          russianWord: 'живопись',
          englishWord: 'painting'
        }, {
          id: '957',
          russianWord: 'пара',
          englishWord: 'pair'
        }, {
          id: '958',
          russianWord: 'дворец',
          englishWord: 'palace'
        }, {
          id: '959',
          russianWord: 'бледный',
          englishWord: 'pale'
        }, {
          id: '960',
          russianWord: 'сковорода',
          englishWord: 'pan'
        }, {
          id: '961',
          russianWord: 'панель',
          englishWord: 'panel'
        }, {
          id: '962',
          russianWord: 'брюки',
          englishWord: 'pants'
        }, {
          id: '963',
          russianWord: 'бумага',
          englishWord: 'paper'
        }, {
          id: '964',
          russianWord: 'параллельный',
          englishWord: 'parallel'
        }, {
          id: '965',
          russianWord: 'родитель',
          englishWord: 'parent'
        }, {
          id: '966',
          russianWord: 'парк',
          englishWord: 'park'
        }, {
          id: '967',
          russianWord: 'мир',
          englishWord: 'peace'
        }, {
          id: '968',
          russianWord: 'мирный',
          englishWord: 'peaceful'
        }, {
          id: '969',
          russianWord: 'пик',
          englishWord: 'peak'
        }, {
          id: '970',
          russianWord: 'ручка',
          englishWord: 'pen'
        }, {
          id: '971',
          russianWord: 'пенсов',
          englishWord: 'pence'
        }, {
          id: '972',
          russianWord: 'карандаш',
          englishWord: 'pencil'
        }, {
          id: '973',
          russianWord: 'пенни',
          englishWord: 'penny'
        }, {
          id: '974',
          russianWord: 'пенсия',
          englishWord: 'pension'
        }, {
          id: '975',
          russianWord: 'люди',
          englishWord: 'people'
        }, {
          id: '976',
          russianWord: 'перец',
          englishWord: 'pepper'
        }, {
          id: '977',
          russianWord: 'совершенный',
          englishWord: 'perfect'
        }, {
          id: '978',
          russianWord: 'отлично',
          englishWord: 'perfectly'
        }, {
          id: '979',
          russianWord: 'выполнять',
          englishWord: 'perform'
        }, {
          id: '980',
          russianWord: 'производительное',
          englishWord: 'performance'
        }, {
          id: '981',
          russianWord: 'исполнитель',
          englishWord: 'performer'
        }, {
          id: '982',
          russianWord: 'может быть',
          englishWord: 'perhaps'
        }, {
          id: '983',
          russianWord: 'период',
          englishWord: 'period'
        }, {
          id: '984',
          russianWord: 'постоянный',
          englishWord: 'permanent'
        }, {
          id: '985',
          russianWord: 'постоянно',
          englishWord: 'permanently'
        }, {
          id: '986',
          russianWord: 'разрешение',
          englishWord: 'permission'
        }, {
          id: '987',
          russianWord: 'разрешение',
          englishWord: 'permit'
        }, {
          id: '988',
          russianWord: 'свая',
          englishWord: 'pile'
        }, {
          id: '989',
          russianWord: 'таблетка',
          englishWord: 'pill'
        }, {
          id: '990',
          russianWord: 'пилот',
          englishWord: 'pilot'
        }, {
          id: '991',
          russianWord: 'штифт',
          englishWord: 'pin'
        }, {
          id: '992',
          russianWord: 'розовый',
          englishWord: 'pink'
        }, {
          id: '993',
          russianWord: 'пинта',
          englishWord: 'pint'
        }, {
          id: '994',
          russianWord: 'труба',
          englishWord: 'pipe'
        }, {
          id: '995',
          russianWord: 'шаг',
          englishWord: 'pitch'
        }, {
          id: '996',
          russianWord: 'жалость',
          englishWord: 'pity'
        }, {
          id: '997',
          russianWord: 'место',
          englishWord: 'place'
        }, {
          id: '998',
          russianWord: 'простой',
          englishWord: 'plain'
        }, {
          id: '999',
          russianWord: 'план',
          englishWord: 'plan'
        }, {
          id: '1000',
          russianWord: 'самолет',
          englishWord: 'plane'
        }, {
          id: '1001',
          russianWord: 'планета',
          englishWord: 'planet'
        }, {
          id: '1002',
          russianWord: 'планирование',
          englishWord: 'planning'
        }, {
          id: '1003',
          russianWord: 'завод',
          englishWord: 'plant'
        }, {
          id: '1004',
          russianWord: 'пластиковый',
          englishWord: 'plastic'
        }, {
          id: '1005',
          russianWord: 'плита',
          englishWord: 'plate'
        }, {
          id: '1006',
          russianWord: 'платформа',
          englishWord: 'platform'
        }, {
          id: '1007',
          russianWord: 'играть',
          englishWord: 'play'
        }, {
          id: '1008',
          russianWord: 'игрок',
          englishWord: 'player'
        }, {
          id: '1009',
          russianWord: 'политик',
          englishWord: 'politician'
        }, {
          id: '1010',
          russianWord: 'политика',
          englishWord: 'politics'
        }, {
          id: '1011',
          russianWord: 'загрязнение',
          englishWord: 'pollution'
        }, {
          id: '1012',
          russianWord: 'бассейн',
          englishWord: 'pool'
        }, {
          id: '1013',
          russianWord: 'бедные',
          englishWord: 'poor'
        }, {
          id: '1014',
          russianWord: 'хлопнуть',
          englishWord: 'pop'
        }, {
          id: '1015',
          russianWord: 'популярный',
          englishWord: 'popular'
        }, {
          id: '1016',
          russianWord: 'население',
          englishWord: 'population'
        }, {
          id: '1017',
          russianWord: 'порт',
          englishWord: 'port'
        }, {
          id: '1018',
          russianWord: 'поза',
          englishWord: 'pose'
        }, {
          id: '1019',
          russianWord: 'положение',
          englishWord: 'position'
        }, {
          id: '1020',
          russianWord: 'положительный',
          englishWord: 'positive'
        }, {
          id: '1021',
          russianWord: 'обладать',
          englishWord: 'possess'
        }, {
          id: '1022',
          russianWord: 'владение',
          englishWord: 'possession'
        }, {
          id: '1023',
          russianWord: 'возможность',
          englishWord: 'possibility'
        }, {
          id: '1024',
          russianWord: 'возможное',
          englishWord: 'possible'
        }, {
          id: '1025',
          russianWord: 'возможно',
          englishWord: 'possibly'
        }, {
          id: '1026',
          russianWord: 'пост',
          englishWord: 'post'
        }, {
          id: '1027',
          russianWord: 'горшок',
          englishWord: 'pot'
        }, {
          id: '1028',
          russianWord: 'картофель',
          englishWord: 'potato'
        }, {
          id: '1029',
          russianWord: 'потенциал',
          englishWord: 'potential'
        }, {
          id: '1030',
          russianWord: 'президент',
          englishWord: 'president'
        }, {
          id: '1031',
          russianWord: 'пресс',
          englishWord: 'press'
        }, {
          id: '1032',
          russianWord: 'давление',
          englishWord: 'pressure'
        }, {
          id: '1034',
          russianWord: 'притворяться',
          englishWord: 'pretend'
        }, {
          id: '1035',
          russianWord: 'довольно',
          englishWord: 'pretty'
        }, {
          id: '1036',
          russianWord: 'предотвращать',
          englishWord: 'prevent'
        }, {
          id: '1037',
          russianWord: 'предыдущий',
          englishWord: 'previous'
        }, {
          id: '1038',
          russianWord: 'предварительно',
          englishWord: 'previously'
        }, {
          id: '1039',
          russianWord: 'цена',
          englishWord: 'price'
        }, {
          id: '1040',
          russianWord: 'гордость',
          englishWord: 'pride'
        }, {
          id: '1041',
          russianWord: 'священник',
          englishWord: 'priest'
        }, {
          id: '1042',
          russianWord: 'в первую очередь',
          englishWord: 'primarily'
        }, {
          id: '1043',
          russianWord: 'первичный',
          englishWord: 'primary'
        }, {
          id: '1044',
          russianWord: 'князь',
          englishWord: 'prince'
        }, {
          id: '1045',
          russianWord: 'принцесса',
          englishWord: 'princess'
        }, {
          id: '1046',
          russianWord: 'принцип',
          englishWord: 'principle'
        }, {
          id: '1047',
          russianWord: 'печать',
          englishWord: 'print'
        }, {
          id: '1048',
          russianWord: 'принтер',
          englishWord: 'printer'
        }, {
          id: '1049',
          russianWord: 'печать',
          englishWord: 'printing'
        }, {
          id: '1050',
          russianWord: 'предварительный',
          englishWord: 'prior'
        }, {
          id: '1051',
          russianWord: 'обещание',
          englishWord: 'promise'
        }, {
          id: '1052',
          russianWord: 'содействовать',
          englishWord: 'promote'
        }, {
          id: '1053',
          russianWord: 'содействие',
          englishWord: 'promotion'
        }, {
          id: '1054',
          russianWord: 'быстро',
          englishWord: 'prompt'
        }, {
          id: '1056',
          russianWord: 'произносить',
          englishWord: 'pronounce'
        }, {
          id: '1057',
          russianWord: 'произношение',
          englishWord: 'pronunciation'
        }, {
          id: '1058',
          russianWord: 'доказательство',
          englishWord: 'proof'
        }, {
          id: '1059',
          russianWord: 'надлежащий',
          englishWord: 'proper'
        }, {
          id: '1060',
          russianWord: 'правильно',
          englishWord: 'properly'
        }, {
          id: '1061',
          russianWord: 'имущество',
          englishWord: 'property'
        }, {
          id: '1062',
          russianWord: 'доля',
          englishWord: 'proportion'
        }, {
          id: '1063',
          russianWord: 'предложение',
          englishWord: 'proposal'
        }, {
          id: '1064',
          russianWord: 'предлагать',
          englishWord: 'propose'
        }, {
          id: '1065',
          russianWord: 'перспектива',
          englishWord: 'prospect'
        }, {
          id: '1066',
          russianWord: 'защищать',
          englishWord: 'protect'
        }, {
          id: '1067',
          russianWord: 'защита',
          englishWord: 'protection'
        }, {
          id: '1068',
          russianWord: 'протест',
          englishWord: 'protest'
        }, {
          id: '1069',
          russianWord: 'гордый',
          englishWord: 'proud'
        }, {
          id: '1070',
          russianWord: 'гордо',
          englishWord: 'proudly'
        }, {
          id: '1071',
          russianWord: 'доказывать',
          englishWord: 'prove'
        }, {
          id: '1072',
          russianWord: 'качество',
          englishWord: 'quality'
        }, {
          id: '1073',
          russianWord: 'количество',
          englishWord: 'quantity'
        }, {
          id: '1074',
          russianWord: 'четверть',
          englishWord: 'quarter'
        }, {
          id: '1075',
          russianWord: 'королева',
          englishWord: 'queen'
        }, {
          id: '1076',
          russianWord: 'вопрос',
          englishWord: 'question'
        }, {
          id: '1077',
          russianWord: 'быстрый',
          englishWord: 'quick'
        }, {
          id: '1078',
          russianWord: 'быстро',
          englishWord: 'quickly'
        }, {
          id: '1079',
          russianWord: 'тихий',
          englishWord: 'quiet'
        }, {
          id: '1080',
          russianWord: 'спокойно',
          englishWord: 'quietly'
        }, {
          id: '1081',
          russianWord: 'выход',
          englishWord: 'quit'
        }, {
          id: '1082',
          russianWord: 'вполне',
          englishWord: 'quite'
        }, {
          id: '1083',
          russianWord: 'цитата',
          englishWord: 'quote'
        }, {
          id: '1084',
          russianWord: 'гонки',
          englishWord: 'race'
        }, {
          id: '1085',
          russianWord: 'гоночный',
          englishWord: 'racing'
        }, {
          id: '1086',
          russianWord: 'радио',
          englishWord: 'radio'
        }, {
          id: '1087',
          russianWord: 'рельс',
          englishWord: 'rail'
        }, {
          id: '1088',
          russianWord: 'дождь',
          englishWord: 'rain'
        }, {
          id: '1089',
          russianWord: 'поднимать',
          englishWord: 'raise'
        }, {
          id: '1090',
          russianWord: 'диапазон',
          englishWord: 'range'
        }, {
          id: '1091',
          russianWord: 'звание',
          englishWord: 'rank'
        }, {
          id: '1092',
          russianWord: 'быстрый',
          englishWord: 'rapid'
        }, {
          id: '1093',
          russianWord: 'получение',
          englishWord: 'receipt'
        }, {
          id: '1094',
          russianWord: 'получать',
          englishWord: 'receive'
        }, {
          id: '1095',
          russianWord: 'последний',
          englishWord: 'recent'
        }, {
          id: '1097',
          russianWord: 'прием',
          englishWord: 'reception'
        }, {
          id: '1098',
          russianWord: 'рассчитывать',
          englishWord: 'reckon'
        }, {
          id: '1099',
          russianWord: 'признание',
          englishWord: 'recognition'
        }, {
          id: '1100',
          russianWord: 'признавать',
          englishWord: 'recognize'
        }, {
          id: '1101',
          russianWord: 'рекомендовать',
          englishWord: 'recommend'
        }, {
          id: '1102',
          russianWord: 'запись',
          englishWord: 'record'
        }, {
          id: '1103',
          russianWord: 'запись',
          englishWord: 'recording'
        }, {
          id: '1104',
          russianWord: 'восстанавливать',
          englishWord: 'recover'
        }, {
          id: '1105',
          russianWord: 'ссылка',
          englishWord: 'reference'
        }, {
          id: '1106',
          russianWord: 'отражать',
          englishWord: 'reflect'
        }, {
          id: '1107',
          russianWord: 'реформа',
          englishWord: 'reform'
        }, {
          id: '1108',
          russianWord: 'холодильник',
          englishWord: 'refrigerator'
        }, {
          id: '1109',
          russianWord: 'отказ',
          englishWord: 'refusal'
        }, {
          id: '1110',
          russianWord: 'отказывать',
          englishWord: 'refuse'
        }, {
          id: '1111',
          russianWord: 'отношение',
          englishWord: 'regard'
        }, {
          id: '1112',
          russianWord: 'о',
          englishWord: 'regarding'
        }, {
          id: '1113',
          russianWord: 'область',
          englishWord: 'region'
        }, {
          id: '1114',
          russianWord: 'замечание',
          englishWord: 'remark'
        }, {
          id: '1115',
          russianWord: 'замечательный',
          englishWord: 'remarkable'
        }, {
          id: '1116',
          russianWord: 'замечательно',
          englishWord: 'remarkably'
        }, {
          id: '1117',
          russianWord: 'запомнить',
          englishWord: 'remember'
        }, {
          id: '1118',
          russianWord: 'напоминать',
          englishWord: 'remind'
        }, {
          id: '1119',
          russianWord: 'удаленный',
          englishWord: 'remote'
        }, {
          id: '1120',
          russianWord: 'удаление',
          englishWord: 'removal'
        }, {
          id: '1121',
          russianWord: 'удаление',
          englishWord: 'remove'
        }, {
          id: '1122',
          russianWord: 'аренда',
          englishWord: 'rent'
        }, {
          id: '1123',
          russianWord: 'ремонт',
          englishWord: 'repair'
        }, {
          id: '1124',
          russianWord: 'повторять',
          englishWord: 'repeat'
        }, {
          id: '1125',
          russianWord: 'заменять',
          englishWord: 'replace'
        }, {
          id: '1126',
          russianWord: 'ответ',
          englishWord: 'reply'
        }, {
          id: '1127',
          russianWord: 'доклад',
          englishWord: 'report'
        }, {
          id: '1128',
          russianWord: 'представлять',
          englishWord: 'represent'
        }, {
          id: '1129',
          russianWord: 'представитель',
          englishWord: 'representative'
        }, {
          id: '1130',
          russianWord: 'воспроизводить',
          englishWord: 'reproduce'
        }, {
          id: '1131',
          russianWord: 'репутация',
          englishWord: 'reputation'
        }, {
          id: '1132',
          russianWord: 'запрос',
          englishWord: 'request'
        }, {
          id: '1133',
          russianWord: 'требовать',
          englishWord: 'require'
        }, {
          id: '1134',
          russianWord: 'требование',
          englishWord: 'requirement'
        }, {
          id: '1135',
          russianWord: 'сохранять',
          englishWord: 'retain'
        }, {
          id: '1136',
          russianWord: 'пенсию',
          englishWord: 'retire'
        }, {
          id: '1137',
          russianWord: 'уход на пенсию',
          englishWord: 'retirement'
        }, {
          id: '1138',
          russianWord: 'возвращение',
          englishWord: 'return'
        }, {
          id: '1139',
          russianWord: 'раскрывать',
          englishWord: 'reveal'
        }, {
          id: '1140',
          russianWord: 'обратный',
          englishWord: 'reverse'
        }, {
          id: '1141',
          russianWord: 'обзор',
          englishWord: 'review'
        }, {
          id: '1142',
          russianWord: 'пересматривать',
          englishWord: 'revise'
        }, {
          id: '1143',
          russianWord: 'пересмотр',
          englishWord: 'revision'
        }, {
          id: '1144',
          russianWord: 'революция',
          englishWord: 'revolution'
        }, {
          id: '1145',
          russianWord: 'вознаграждение',
          englishWord: 'reward'
        }, {
          id: '1146',
          russianWord: 'ритм',
          englishWord: 'rhythm'
        }, {
          id: '1147',
          russianWord: 'рис',
          englishWord: 'rice'
        }, {
          id: '1148',
          russianWord: 'богатый',
          englishWord: 'rich'
        }, {
          id: '1149',
          russianWord: 'ездить',
          englishWord: 'ride'
        }, {
          id: '1150',
          russianWord: 'всадник',
          englishWord: 'rider'
        }, {
          id: '1151',
          russianWord: 'смешной',
          englishWord: 'ridiculous'
        }, {
          id: '1152',
          russianWord: 'верховая езда',
          englishWord: 'riding'
        }, {
          id: '1153',
          russianWord: 'право',
          englishWord: 'right'
        }, {
          id: '1154',
          russianWord: 'справедливо',
          englishWord: 'rightly'
        }, {
          id: '1155',
          russianWord: 'кольцо',
          englishWord: 'ring'
        }, {
          id: '1156',
          russianWord: 'каучук',
          englishWord: 'rubber'
        }, {
          id: '1157',
          russianWord: 'мусор',
          englishWord: 'rubbish'
        }, {
          id: '1158',
          russianWord: 'грубый',
          englishWord: 'rude'
        }, {
          id: '1159',
          russianWord: 'гибель',
          englishWord: 'ruin'
        }, {
          id: '1160',
          russianWord: 'правило',
          englishWord: 'rule'
        }, {
          id: '1161',
          russianWord: 'правитель',
          englishWord: 'ruler'
        }, {
          id: '1162',
          russianWord: 'слух',
          englishWord: 'rumour'
        }, {
          id: '1163',
          russianWord: 'бежать',
          englishWord: 'run'
        }, {
          id: '1164',
          russianWord: 'бегун',
          englishWord: 'runner'
        }, {
          id: '1165',
          russianWord: 'работа',
          englishWord: 'running'
        }, {
          id: '1166',
          russianWord: 'сельский',
          englishWord: 'rural'
        }, {
          id: '1167',
          russianWord: 'торопиться',
          englishWord: 'rush'
        }, {
          id: '1168',
          russianWord: 'мешок',
          englishWord: 'sack'
        }, {
          id: '1169',
          russianWord: 'печальный',
          englishWord: 'sad'
        }, {
          id: '1170',
          russianWord: 'грустно',
          englishWord: 'sadly'
        }, {
          id: '1171',
          russianWord: 'печаль',
          englishWord: 'sadness'
        }, {
          id: '1172',
          russianWord: 'безопасный',
          englishWord: 'safe'
        }, {
          id: '1173',
          russianWord: 'безопасность',
          englishWord: 'safety'
        }, {
          id: '1174',
          russianWord: 'парус',
          englishWord: 'sail'
        }, {
          id: '1175',
          russianWord: 'парусный спорт',
          englishWord: 'sailing'
        }, {
          id: '1176',
          russianWord: 'матрос',
          englishWord: 'sailor'
        }, {
          id: '1177',
          russianWord: 'научный',
          englishWord: 'scientific'
        }, {
          id: '1178',
          russianWord: 'ученый',
          englishWord: 'scientist'
        }, {
          id: '1179',
          russianWord: 'ножницы',
          englishWord: 'scissors'
        }, {
          id: '1180',
          russianWord: 'счет',
          englishWord: 'score'
        }, {
          id: '1181',
          russianWord: 'царапина',
          englishWord: 'scratch'
        }, {
          id: '1182',
          russianWord: 'вопль',
          englishWord: 'scream'
        }, {
          id: '1183',
          russianWord: 'экран',
          englishWord: 'screen'
        }, {
          id: '1184',
          russianWord: 'винт',
          englishWord: 'screw'
        }, {
          id: '1185',
          russianWord: 'море',
          englishWord: 'sea'
        }, {
          id: '1186',
          russianWord: 'печать',
          englishWord: 'seal'
        }, {
          id: '1187',
          russianWord: 'поиск',
          englishWord: 'search'
        }, {
          id: '1188',
          russianWord: 'сезон',
          englishWord: 'season'
        }, {
          id: '1189',
          russianWord: 'место',
          englishWord: 'seat'
        }, {
          id: '1190',
          russianWord: 'второй',
          englishWord: 'second'
        }, {
          id: '1191',
          russianWord: 'второй',
          englishWord: 'secondary'
        }, {
          id: '1192',
          russianWord: 'тайный',
          englishWord: 'secret'
        }, {
          id: '1193',
          russianWord: 'секретарь',
          englishWord: 'secretary'
        }, {
          id: '1194',
          russianWord: 'тайно',
          englishWord: 'secretly'
        }, {
          id: '1195',
          russianWord: 'раздел',
          englishWord: 'section'
        }, {
          id: '1196',
          russianWord: 'сектор',
          englishWord: 'sector'
        }, {
          id: '1197',
          russianWord: 'безопасный',
          englishWord: 'secure'
        }, {
          id: '1198',
          russianWord: 'слуга',
          englishWord: 'servant'
        }, {
          id: '1199',
          russianWord: 'служить',
          englishWord: 'serve'
        }, {
          id: '1200',
          russianWord: 'обслуживание',
          englishWord: 'service'
        }, {
          id: '1201',
          russianWord: 'сессия',
          englishWord: 'session'
        }, {
          id: '1202',
          russianWord: 'набор',
          englishWord: 'set'
        }, {
          id: '1203',
          russianWord: 'урегулировать',
          englishWord: 'settle'
        }, {
          id: '1204',
          russianWord: 'несколько',
          englishWord: 'several'
        }, {
          id: '1205',
          russianWord: 'тяжелый',
          englishWord: 'severe'
        }, {
          id: '1206',
          russianWord: 'шить',
          englishWord: 'sew'
        }, {
          id: '1207',
          russianWord: 'шитье',
          englishWord: 'sewing'
        }, {
          id: '1209',
          russianWord: 'половой',
          englishWord: 'sexual'
        }, {
          id: '1210',
          russianWord: 'тень',
          englishWord: 'shade'
        }, {
          id: '1211',
          russianWord: 'тень',
          englishWord: 'shadow'
        }, {
          id: '1212',
          russianWord: 'трясти',
          englishWord: 'shake'
        }, {
          id: '1213',
          russianWord: 'мелкий',
          englishWord: 'shallow'
        }, {
          id: '1214',
          russianWord: 'позор',
          englishWord: 'shame'
        }, {
          id: '1215',
          russianWord: 'форма',
          englishWord: 'shape'
        }, {
          id: '1216',
          russianWord: 'доля',
          englishWord: 'share'
        }, {
          id: '1217',
          russianWord: 'острый',
          englishWord: 'sharp'
        }, {
          id: '1218',
          russianWord: 'резко',
          englishWord: 'sharply'
        }, {
          id: '1219',
          russianWord: 'плечо',
          englishWord: 'shoulder'
        }, {
          id: '1220',
          russianWord: 'рупор',
          englishWord: 'shout'
        }, {
          id: '1221',
          russianWord: 'шоу',
          englishWord: 'show'
        }, {
          id: '1222',
          russianWord: 'душ',
          englishWord: 'shower'
        }, {
          id: '1223',
          russianWord: 'закрывать',
          englishWord: 'shut'
        }, {
          id: '1224',
          russianWord: 'застенчивый',
          englishWord: 'shy'
        }, {
          id: '1225',
          russianWord: 'больной',
          englishWord: 'sick'
        }, {
          id: '1226',
          russianWord: 'сторона',
          englishWord: 'side'
        }, {
          id: '1227',
          russianWord: 'боком',
          englishWord: 'sideways'
        }, {
          id: '1228',
          russianWord: 'взгляд',
          englishWord: 'sight'
        }, {
          id: '1229',
          russianWord: 'знак',
          englishWord: 'sign'
        }, {
          id: '1230',
          russianWord: 'сигнал',
          englishWord: 'signal'
        }, {
          id: '1231',
          russianWord: 'подпись',
          englishWord: 'signature'
        }, {
          id: '1232',
          russianWord: 'значительный',
          englishWord: 'significant'
        }, {
          id: '1233',
          russianWord: 'существенно',
          englishWord: 'significantly'
        }, {
          id: '1234',
          russianWord: 'молчание',
          englishWord: 'silence'
        }, {
          id: '1235',
          russianWord: 'молчаливый',
          englishWord: 'silent'
        }, {
          id: '1236',
          russianWord: 'шелк',
          englishWord: 'silk'
        }, {
          id: '1237',
          russianWord: 'глупый',
          englishWord: 'silly'
        }, {
          id: '1238',
          russianWord: 'серебро',
          englishWord: 'silver'
        }, {
          id: '1239',
          russianWord: 'аналогичный',
          englishWord: 'similar'
        }, {
          id: '1240',
          russianWord: 'спать',
          englishWord: 'sleep'
        }, {
          id: '1241',
          russianWord: 'рукав',
          englishWord: 'sleeve'
        }, {
          id: '1242',
          russianWord: 'ломтик',
          englishWord: 'slice'
        }, {
          id: '1243',
          russianWord: 'слайд',
          englishWord: 'slide'
        }, {
          id: '1244',
          russianWord: 'незначительный',
          englishWord: 'slight'
        }, {
          id: '1245',
          russianWord: 'немного',
          englishWord: 'slightly'
        }, {
          id: '1246',
          russianWord: 'скольжение',
          englishWord: 'slip'
        }, {
          id: '1247',
          russianWord: 'наклон',
          englishWord: 'slope'
        }, {
          id: '1248',
          russianWord: 'медленный',
          englishWord: 'slow'
        }, {
          id: '1249',
          russianWord: 'медленно',
          englishWord: 'slowly'
        }, {
          id: '1250',
          russianWord: 'небольшой',
          englishWord: 'small'
        }, {
          id: '1251',
          russianWord: 'умный',
          englishWord: 'smart'
        }, {
          id: '1252',
          russianWord: 'разгромить',
          englishWord: 'smash'
        }, {
          id: '1253',
          russianWord: 'пахнуть',
          englishWord: 'smell'
        }, {
          id: '1254',
          russianWord: 'улыбка',
          englishWord: 'smile'
        }, {
          id: '1255',
          russianWord: 'курить',
          englishWord: 'smoke'
        }, {
          id: '1256',
          russianWord: 'курение',
          englishWord: 'smoking'
        }, {
          id: '1257',
          russianWord: 'плавный',
          englishWord: 'smooth'
        }, {
          id: '1258',
          russianWord: 'гладко',
          englishWord: 'smoothly'
        }, {
          id: '1259',
          russianWord: 'змея',
          englishWord: 'snake'
        }, {
          id: '1260',
          russianWord: 'снег',
          englishWord: 'snow'
        }, {
          id: '1261',
          russianWord: 'песня',
          englishWord: 'song'
        }, {
          id: '1262',
          russianWord: 'скоро',
          englishWord: 'soon'
        }, {
          id: '1263',
          russianWord: 'больной',
          englishWord: 'sore'
        }, {
          id: '1264',
          russianWord: 'извините',
          englishWord: 'sorry'
        }, {
          id: '1265',
          russianWord: 'сортировать',
          englishWord: 'sort'
        }, {
          id: '1266',
          russianWord: 'душа',
          englishWord: 'soul'
        }, {
          id: '1267',
          russianWord: 'звук',
          englishWord: 'sound'
        }, {
          id: '1268',
          russianWord: 'суп',
          englishWord: 'soup'
        }, {
          id: '1269',
          russianWord: 'кислый',
          englishWord: 'sour'
        }, {
          id: '1270',
          russianWord: 'источник',
          englishWord: 'source'
        }, {
          id: '1271',
          russianWord: 'на юг',
          englishWord: 'south'
        }, {
          id: '1272',
          russianWord: 'южный',
          englishWord: 'southern'
        }, {
          id: '1273',
          russianWord: 'пространство',
          englishWord: 'space'
        }, {
          id: '1274',
          russianWord: 'запасной',
          englishWord: 'spare'
        }, {
          id: '1275',
          russianWord: 'говорить',
          englishWord: 'speak'
        }, {
          id: '1276',
          russianWord: 'оратор',
          englishWord: 'speaker'
        }, {
          id: '1277',
          russianWord: 'специальный',
          englishWord: 'special'
        }, {
          id: '1278',
          russianWord: 'специалист',
          englishWord: 'specialist'
        }, {
          id: '1279',
          russianWord: 'конкретный',
          englishWord: 'specific'
        }, {
          id: '1280',
          russianWord: 'речь',
          englishWord: 'speech'
        }, {
          id: '1281',
          russianWord: 'заклинание',
          englishWord: 'spell'
        }, {
          id: '1282',
          russianWord: 'этап',
          englishWord: 'stage'
        }, {
          id: '1283',
          russianWord: 'ступень',
          englishWord: 'stair'
        }, {
          id: '1284',
          russianWord: 'печать',
          englishWord: 'stamp'
        }, {
          id: '1285',
          russianWord: 'стенд',
          englishWord: 'stand'
        }, {
          id: '1286',
          russianWord: 'вставать',
          englishWord: 'stand up'
        }, {
          id: '1287',
          russianWord: 'стандартный',
          englishWord: 'standard'
        }, {
          id: '1288',
          russianWord: 'звезда',
          englishWord: 'star'
        }, {
          id: '1289',
          russianWord: 'смотреть',
          englishWord: 'stare'
        }, {
          id: '1290',
          russianWord: 'начало',
          englishWord: 'start'
        }, {
          id: '1291',
          russianWord: 'состояние',
          englishWord: 'state'
        }, {
          id: '1292',
          russianWord: 'заявление',
          englishWord: 'statement'
        }, {
          id: '1293',
          russianWord: 'станция',
          englishWord: 'station'
        }, {
          id: '1294',
          russianWord: 'статуя',
          englishWord: 'statue'
        }, {
          id: '1295',
          russianWord: 'статус',
          englishWord: 'status'
        }, {
          id: '1296',
          russianWord: 'остановиться',
          englishWord: 'stay'
        }, {
          id: '1297',
          russianWord: 'постоянно',
          englishWord: 'steadily'
        }, {
          id: '1298',
          russianWord: 'неуклонный',
          englishWord: 'steady'
        }, {
          id: '1299',
          russianWord: 'украсть',
          englishWord: 'steal'
        }, {
          id: '1300',
          russianWord: 'пар',
          englishWord: 'steam'
        }, {
          id: '1301',
          russianWord: 'сталь',
          englishWord: 'steel'
        }, {
          id: '1302',
          russianWord: 'крутой',
          englishWord: 'steep'
        }, {
          id: '1303',
          russianWord: 'странный',
          englishWord: 'strange'
        }, {
          id: '1304',
          russianWord: 'незнакомец',
          englishWord: 'stranger'
        }, {
          id: '1305',
          russianWord: 'стратегия',
          englishWord: 'strategy'
        }, {
          id: '1306',
          russianWord: 'поток',
          englishWord: 'stream'
        }, {
          id: '1307',
          russianWord: 'улица',
          englishWord: 'street'
        }, {
          id: '1308',
          russianWord: 'прочность',
          englishWord: 'strength'
        }, {
          id: '1309',
          russianWord: 'стресс',
          englishWord: 'stress'
        }, {
          id: '1310',
          russianWord: 'растягивать',
          englishWord: 'stretch'
        }, {
          id: '1311',
          russianWord: 'строгий',
          englishWord: 'strict'
        }, {
          id: '1312',
          russianWord: 'строго',
          englishWord: 'strictly'
        }, {
          id: '1313',
          russianWord: 'забастовка',
          englishWord: 'strike'
        }, {
          id: '1314',
          russianWord: 'поразительный',
          englishWord: 'striking'
        }, {
          id: '1315',
          russianWord: 'строка',
          englishWord: 'string'
        }, {
          id: '1316',
          russianWord: 'полоса',
          englishWord: 'strip'
        }, {
          id: '1317',
          russianWord: 'полоса',
          englishWord: 'stripe'
        }, {
          id: '1318',
          russianWord: 'удар',
          englishWord: 'stroke'
        }, {
          id: '1319',
          russianWord: 'сильный',
          englishWord: 'strong'
        }, {
          id: '1320',
          russianWord: 'сильно',
          englishWord: 'strongly'
        }, {
          id: '1321',
          russianWord: 'структура',
          englishWord: 'structure'
        }, {
          id: '1322',
          russianWord: 'борьба',
          englishWord: 'struggle'
        }, {
          id: '1323',
          russianWord: 'студент',
          englishWord: 'student'
        }, {
          id: '1324',
          russianWord: 'предлагать',
          englishWord: 'suggest'
        }, {
          id: '1325',
          russianWord: 'предложение',
          englishWord: 'suggestion'
        }, {
          id: '1326',
          russianWord: 'костюм',
          englishWord: 'suit'
        }, {
          id: '1327',
          russianWord: 'подходящий',
          englishWord: 'suitable'
        }, {
          id: '1328',
          russianWord: 'чемодан',
          englishWord: 'suitcase'
        }, {
          id: '1329',
          russianWord: 'сумма',
          englishWord: 'sum'
        }, {
          id: '1330',
          russianWord: 'резюме',
          englishWord: 'summary'
        }, {
          id: '1331',
          russianWord: 'лето',
          englishWord: 'summer'
        }, {
          id: '1332',
          russianWord: 'солнце',
          englishWord: 'sun'
        }, {
          id: '1333',
          russianWord: 'воскресенье',
          englishWord: 'sunday'
        }, {
          id: '1334',
          russianWord: 'начальник',
          englishWord: 'superior'
        }, {
          id: '1335',
          russianWord: 'супермаркет',
          englishWord: 'supermarket'
        }, {
          id: '1336',
          russianWord: 'снабжение',
          englishWord: 'supply'
        }, {
          id: '1337',
          russianWord: 'поддержка',
          englishWord: 'support'
        }, {
          id: '1338',
          russianWord: 'сторонник',
          englishWord: 'supporter'
        }, {
          id: '1339',
          russianWord: 'полагать',
          englishWord: 'suppose'
        }, {
          id: '1340',
          russianWord: 'конечно',
          englishWord: 'sure'
        }, {
          id: '1341',
          russianWord: 'поверхность',
          englishWord: 'surface'
        }, {
          id: '1342',
          russianWord: 'фамилия',
          englishWord: 'surname'
        }, {
          id: '1343',
          russianWord: 'сюрприз',
          englishWord: 'surprise'
        }, {
          id: '1344',
          russianWord: 'удивительный',
          englishWord: 'surprising'
        }, {
          id: '1345',
          russianWord: 'качели',
          englishWord: 'swing'
        }, {
          id: '1346',
          russianWord: 'переключатель',
          englishWord: 'switch'
        }, {
          id: '1347',
          russianWord: 'набухший',
          englishWord: 'swollen'
        }, {
          id: '1348',
          russianWord: 'символ',
          englishWord: 'symbol'
        }, {
          id: '1349',
          russianWord: 'сочувственный',
          englishWord: 'sympathetic'
        }, {
          id: '1350',
          russianWord: 'сочувствие',
          englishWord: 'sympathy'
        }, {
          id: '1351',
          russianWord: 'система',
          englishWord: 'system'
        }, {
          id: '1352',
          russianWord: 'стол',
          englishWord: 'table'
        }, {
          id: '1353',
          russianWord: 'таблетка',
          englishWord: 'tablet'
        }, {
          id: '1354',
          russianWord: 'решения',
          englishWord: 'tackle'
        }, {
          id: '1355',
          russianWord: 'хвост',
          englishWord: 'tail'
        }, {
          id: '1356',
          russianWord: 'принимать',
          englishWord: 'take'
        }, {
          id: '1357',
          russianWord: 'принимать меры',
          englishWord: 'take action'
        }, {
          id: '1359',
          russianWord: 'говорить',
          englishWord: 'talk'
        }, {
          id: '1360',
          russianWord: 'высокий',
          englishWord: 'tall'
        }, {
          id: '1361',
          russianWord: 'бак',
          englishWord: 'tank'
        }, {
          id: '1362',
          russianWord: 'кран',
          englishWord: 'tap'
        }, {
          id: '1363',
          russianWord: 'лента',
          englishWord: 'tape'
        }, {
          id: '1364',
          russianWord: 'цель',
          englishWord: 'target'
        }, {
          id: '1365',
          russianWord: 'задача',
          englishWord: 'task'
        }, {
          id: '1366',
          russianWord: 'срок',
          englishWord: 'term'
        }, {
          id: '1367',
          russianWord: 'ужасный',
          englishWord: 'terrible'
        }, {
          id: '1368',
          russianWord: 'ужасно',
          englishWord: 'terribly'
        }, {
          id: '1369',
          russianWord: 'тест',
          englishWord: 'test'
        }, {
          id: '1370',
          russianWord: 'текст',
          englishWord: 'text'
        }, {
          id: '1371',
          russianWord: 'чем',
          englishWord: 'than'
        }, {
          id: '1372',
          russianWord: 'поблагодарить',
          englishWord: 'thank'
        }, {
          id: '1373',
          russianWord: 'что',
          englishWord: 'that'
        }, {
          id: '1374',
          russianWord: 'театр',
          englishWord: 'theatre'
        }, {
          id: '1375',
          russianWord: 'их',
          englishWord: 'their'
        }, {
          id: '1376',
          russianWord: 'тема',
          englishWord: 'theme'
        }, {
          id: '1377',
          russianWord: 'затем',
          englishWord: 'then'
        }, {
          id: '1378',
          russianWord: 'теория',
          englishWord: 'theory'
        }, {
          id: '1379',
          russianWord: 'там',
          englishWord: 'there'
        }, {
          id: '1380',
          russianWord: 'по тому',
          englishWord: 'therefore'
        }, {
          id: '1381',
          russianWord: 'толстый',
          englishWord: 'thick'
        }, {
          id: '1382',
          russianWord: 'густо',
          englishWord: 'thickly'
        }, {
          id: '1383',
          russianWord: 'толщина',
          englishWord: 'thickness'
        }, {
          id: '1384',
          russianWord: 'вор',
          englishWord: 'thief'
        }, {
          id: '1385',
          russianWord: 'тонкий',
          englishWord: 'thin'
        }, {
          id: '1386',
          russianWord: 'вещь',
          englishWord: 'thing'
        }, {
          id: '1387',
          russianWord: 'галстук',
          englishWord: 'tie'
        }, {
          id: '1388',
          russianWord: 'тугой',
          englishWord: 'tight'
        }, {
          id: '1389',
          russianWord: 'плотно',
          englishWord: 'tightly'
        }, {
          id: '1390',
          russianWord: 'до',
          englishWord: 'till'
        }, {
          id: '1391',
          russianWord: 'время',
          englishWord: 'time'
        }, {
          id: '1392',
          russianWord: 'расписание',
          englishWord: 'timetable'
        }, {
          id: '1393',
          russianWord: 'олово',
          englishWord: 'tin'
        }, {
          id: '1394',
          russianWord: 'крошечный',
          englishWord: 'tiny'
        }, {
          id: '1395',
          russianWord: 'наконечник',
          englishWord: 'tip'
        }, {
          id: '1396',
          russianWord: 'шина',
          englishWord: 'tire'
        }, {
          id: '1397',
          russianWord: 'утомительный',
          englishWord: 'tiring'
        }, {
          id: '1398',
          russianWord: 'название',
          englishWord: 'title'
        }, {
          id: '1399',
          russianWord: 'сегодня',
          englishWord: 'today'
        }, {
          id: '1400',
          russianWord: 'носок',
          englishWord: 'toe'
        }, {
          id: '1401',
          russianWord: 'вместе',
          englishWord: 'together'
        }, {
          id: '1402',
          russianWord: 'туалет',
          englishWord: 'toilet'
        }, {
          id: '1403',
          russianWord: 'помидор',
          englishWord: 'tomato'
        }, {
          id: '1404',
          russianWord: 'завтра',
          englishWord: 'tomorrow'
        }, {
          id: '1405',
          russianWord: 'тонна',
          englishWord: 'ton'
        }, {
          id: '1406',
          russianWord: 'тон',
          englishWord: 'tone'
        }, {
          id: '1407',
          russianWord: 'язык',
          englishWord: 'tongue'
        }, {
          id: '1408',
          russianWord: 'традиция',
          englishWord: 'tradition'
        }, {
          id: '1409',
          russianWord: 'традиционный',
          englishWord: 'traditional'
        }, {
          id: '1410',
          russianWord: 'трафик',
          englishWord: 'traffic'
        }, {
          id: '1411',
          russianWord: 'поезд',
          englishWord: 'train'
        }, {
          id: '1412',
          russianWord: 'обучение',
          englishWord: 'training'
        }, {
          id: '1413',
          russianWord: 'передача',
          englishWord: 'transfer'
        }, {
          id: '1414',
          russianWord: 'преобразование',
          englishWord: 'transform'
        }, {
          id: '1415',
          russianWord: 'переводить',
          englishWord: 'translate'
        }, {
          id: '1416',
          russianWord: 'перевод',
          englishWord: 'translation'
        }, {
          id: '1417',
          russianWord: 'прозрачный',
          englishWord: 'transparent'
        }, {
          id: '1418',
          russianWord: 'транспорт',
          englishWord: 'transport'
        }, {
          id: '1419',
          russianWord: 'ловушка',
          englishWord: 'trap'
        }, {
          id: '1420',
          russianWord: 'путешествовать',
          englishWord: 'travel'
        }, {
          id: '1421',
          russianWord: 'путешественник',
          englishWord: 'traveller'
        }, {
          id: '1422',
          russianWord: 'лечить',
          englishWord: 'treat'
        }, {
          id: '1423',
          russianWord: 'лечение',
          englishWord: 'treatment'
        }, {
          id: '1424',
          russianWord: 'дерево',
          englishWord: 'tree'
        }, {
          id: '1425',
          russianWord: 'тенденция',
          englishWord: 'trend'
        }, {
          id: '1427',
          russianWord: 'треугольник',
          englishWord: 'triangle'
        }, {
          id: '1428',
          russianWord: 'трюк',
          englishWord: 'trick'
        }, {
          id: '1429',
          russianWord: 'уродливый',
          englishWord: 'ugly'
        }, {
          id: '1430',
          russianWord: 'конечный',
          englishWord: 'ultimate'
        }, {
          id: '1431',
          russianWord: 'зонтик',
          englishWord: 'umbrella'
        }, {
          id: '1432',
          russianWord: 'не в состоянии',
          englishWord: 'unable'
        }, {
          id: '1433',
          russianWord: 'неприемлемый',
          englishWord: 'unacceptable'
        }, {
          id: '1434',
          russianWord: 'неопределенный',
          englishWord: 'uncertain'
        }, {
          id: '1435',
          russianWord: 'дядя',
          englishWord: 'uncle'
        }, {
          id: '1436',
          russianWord: 'неудобный',
          englishWord: 'uncomfortable'
        }, {
          id: '1437',
          russianWord: 'бессознательный',
          englishWord: 'unconscious'
        }, {
          id: '1438',
          russianWord: 'под',
          englishWord: 'under'
        }, {
          id: '1439',
          russianWord: 'под контролем',
          englishWord: 'under control'
        }, {
          id: '1440',
          russianWord: 'метро',
          englishWord: 'underground'
        }, {
          id: '1441',
          russianWord: 'под',
          englishWord: 'underneath'
        }, {
          id: '1442',
          russianWord: 'понять',
          englishWord: 'understand'
        }, {
          id: '1443',
          russianWord: 'понимание',
          englishWord: 'understanding'
        }, {
          id: '1444',
          russianWord: 'подводный',
          englishWord: 'underwater'
        }, {
          id: '1445',
          russianWord: 'нижнее белье',
          englishWord: 'underwear'
        }, {
          id: '1446',
          russianWord: 'отменить',
          englishWord: 'undo'
        }, {
          id: '1447',
          russianWord: 'безработица',
          englishWord: 'unemployment'
        }, {
          id: '1448',
          russianWord: 'несправедливый',
          englishWord: 'unfair'
        }, {
          id: '1449',
          russianWord: 'несправедливо',
          englishWord: 'unfairly'
        }, {
          id: '1450',
          russianWord: 'нестационарных',
          englishWord: 'unsteady'
        }, {
          id: '1451',
          russianWord: 'неудачный',
          englishWord: 'unsuccessful'
        }, {
          id: '1452',
          russianWord: 'неопрятный',
          englishWord: 'untidy'
        }, {
          id: '1453',
          russianWord: 'не желают',
          englishWord: 'unwilling'
        }, {
          id: '1454',
          russianWord: 'неохотно',
          englishWord: 'unwillingly'
        }, {
          id: '1455',
          russianWord: 'верхний',
          englishWord: 'upper'
        }, {
          id: '1456',
          russianWord: 'расстройство',
          englishWord: 'upset'
        }, {
          id: '1457',
          russianWord: 'осадки',
          englishWord: 'upsetting'
        }, {
          id: '1458',
          russianWord: 'с ног на голову',
          englishWord: 'upside down'
        }, {
          id: '1459',
          russianWord: 'наверх',
          englishWord: 'upstairs'
        }, {
          id: '1460',
          russianWord: 'вверх',
          englishWord: 'upward'
        }, {
          id: '1461',
          russianWord: 'вверх',
          englishWord: 'upwards'
        }, {
          id: '1462',
          russianWord: 'городской',
          englishWord: 'urban'
        }, {
          id: '1463',
          russianWord: 'срочный',
          englishWord: 'urgent'
        }, {
          id: '1464',
          russianWord: 'использовать',
          englishWord: 'use'
        }, {
          id: '1465',
          russianWord: 'полезный',
          englishWord: 'useful'
        }, {
          id: '1466',
          russianWord: 'бесполезный',
          englishWord: 'useless'
        }, {
          id: '1467',
          russianWord: 'пользователь',
          englishWord: 'user'
        }, {
          id: '1468',
          russianWord: 'обычный',
          englishWord: 'usual'
        }, {
          id: '1469',
          russianWord: 'отпуск',
          englishWord: 'vacation'
        }, {
          id: '1470',
          russianWord: 'действительный',
          englishWord: 'valid'
        }, {
          id: '1471',
          russianWord: 'насильственный',
          englishWord: 'violent'
        }, {
          id: '1472',
          russianWord: 'видимый',
          englishWord: 'visible'
        }, {
          id: '1473',
          russianWord: 'зрение',
          englishWord: 'vision'
        }, {
          id: '1474',
          russianWord: 'визит',
          englishWord: 'visit'
        }, {
          id: '1475',
          russianWord: 'посетитель',
          englishWord: 'visitor'
        }, {
          id: '1476',
          russianWord: 'жизненно важный',
          englishWord: 'vital'
        }, {
          id: '1477',
          russianWord: 'словарь',
          englishWord: 'vocabulary'
        }, {
          id: '1478',
          russianWord: 'голос',
          englishWord: 'voice'
        }, {
          id: '1479',
          russianWord: 'объем',
          englishWord: 'volume'
        }, {
          id: '1480',
          russianWord: 'голосование',
          englishWord: 'vote'
        }, {
          id: '1481',
          russianWord: 'заработная плата',
          englishWord: 'wage'
        }, {
          id: '1482',
          russianWord: 'талия',
          englishWord: 'waist'
        }, {
          id: '1483',
          russianWord: 'подождать',
          englishWord: 'wait'
        }, {
          id: '1484',
          russianWord: 'официант',
          englishWord: 'waiter'
        }, {
          id: '1485',
          russianWord: 'ходить',
          englishWord: 'walk'
        }, {
          id: '1486',
          russianWord: 'ходьба',
          englishWord: 'walking'
        }, {
          id: '1487',
          russianWord: 'стена',
          englishWord: 'wall'
        }, {
          id: '1488',
          russianWord: 'бумажник',
          englishWord: 'wallet'
        }, {
          id: '1489',
          russianWord: 'блуждать',
          englishWord: 'wander'
        }, {
          id: '1490',
          russianWord: 'необходимость',
          englishWord: 'want'
        }, {
          id: '1491',
          russianWord: 'война',
          englishWord: 'war'
        }, {
          id: '1492',
          russianWord: 'весить',
          englishWord: 'weigh'
        }, {
          id: '1493',
          russianWord: 'вес',
          englishWord: 'weight'
        }, {
          id: '1494',
          russianWord: 'приветствовать',
          englishWord: 'welcome'
        }, {
          id: '1495',
          russianWord: 'хорошо',
          englishWord: 'well'
        }, {
          id: '1496',
          russianWord: 'на запад',
          englishWord: 'west'
        }, {
          id: '1497',
          russianWord: 'западный',
          englishWord: 'western'
        }, {
          id: '1498',
          russianWord: 'мокрый',
          englishWord: 'wet'
        }, {
          id: '1499',
          russianWord: 'любой',
          englishWord: 'whatever'
        }, {
          id: '1500',
          russianWord: 'колесо',
          englishWord: 'wheel'
        }, {
          id: '1501',
          russianWord: 'когда',
          englishWord: 'when'
        }, {
          id: '1502',
          russianWord: 'всякий раз, когда',
          englishWord: 'whenever'
        }, {
          id: '1503',
          russianWord: 'где',
          englishWord: 'where'
        }, {
          id: '1504',
          russianWord: 'в то время как',
          englishWord: 'whereas'
        }, {
          id: '1505',
          russianWord: 'где',
          englishWord: 'wherever'
        }, {
          id: '1506',
          russianWord: 'ли',
          englishWord: 'whether'
        }, {
          id: '1507',
          russianWord: 'в то время как',
          englishWord: 'while'
        }, {
          id: '1509',
          russianWord: 'шепот',
          englishWord: 'whisper'
        }, {
          id: '1510',
          russianWord: 'свист',
          englishWord: 'whistle'
        }, {
          id: '1511',
          russianWord: 'белый',
          englishWord: 'white'
        }, {
          id: '1512',
          russianWord: 'кто бы ни',
          englishWord: 'whoever'
        }, {
          id: '1513',
          russianWord: 'c',
          englishWord: 'with'
        }, {
          id: '1514',
          russianWord: 'снять',
          englishWord: 'withdraw'
        }, {
          id: '1515',
          russianWord: 'в',
          englishWord: 'within'
        }, {
          id: '1516',
          russianWord: 'без',
          englishWord: 'without'
        }, {
          id: '1517',
          russianWord: 'свидетель',
          englishWord: 'witness'
        }, {
          id: '1518',
          russianWord: 'женщина',
          englishWord: 'woman'
        }, {
          id: '1519',
          russianWord: 'чудо',
          englishWord: 'wonder'
        }, {
          id: '1520',
          russianWord: 'чудесный',
          englishWord: 'wonderful'
        }, {
          id: '1521',
          russianWord: 'дерево',
          englishWord: 'wood'
        }, {
          id: '1522',
          russianWord: 'деревянный',
          englishWord: 'wooden'
        }, {
          id: '1523',
          russianWord: 'шерсть',
          englishWord: 'wool'
        }, {
          id: '1524',
          russianWord: 'слово',
          englishWord: 'word'
        }, {
          id: '1525',
          russianWord: 'работа',
          englishWord: 'work'
        }, {
          id: '1526',
          russianWord: 'рабочий',
          englishWord: 'worker'
        }, {
          id: '1527',
          russianWord: 'рабочий',
          englishWord: 'working'
        }, {
          id: '1528',
          russianWord: 'мир',
          englishWord: 'world'
        }, {
          id: '1529',
          russianWord: 'беспокоиться',
          englishWord: 'worry'
        }, {
          id: '1531',
          russianWord: 'поклоняться',
          englishWord: 'worship'
        }, {
          id: '1532',
          russianWord: 'стоимость',
          englishWord: 'worth'
        }, {
          id: '1533',
          russianWord: 'рана',
          englishWord: 'wound'
        }];
      }

      _createClass(DataGameService, [{
        key: "getRandomWord",
        value: function getRandomWord() {
          var rand = Math.floor(Math.random() * this.words.length);
          var randWord = this.words[rand];
          return randWord;
        }
      }, {
        key: "loadWordList",
        value: function loadWordList() {
          var gettingDataFromLocalStorage = localStorage.getItem(DataGameService.wordsforLearningLSKey);

          if (gettingDataFromLocalStorage) {
            var wordsStorageString = gettingDataFromLocalStorage;
            var wordsStorage = JSON.parse(wordsStorageString); // массив объеков ru-eng;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(wordsStorage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) {
              return items.map(function (item) {
                return item;
              });
            }));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
      }, {
        key: "save",
        value: function save(words) {
          var dataForLocalSrorageString = JSON.stringify(words);
          localStorage.setItem(DataGameService.wordsforLearningLSKey, dataForLocalSrorageString);
        }
      }, {
        key: "addWordsDictionary",
        value: function addWordsDictionary(words) {
          var gettingDataFromLocalStorage = localStorage.getItem(DataGameService.wordsforLearningLSKey);

          if (gettingDataFromLocalStorage) {
            var wordsStorageString = gettingDataFromLocalStorage;
            var wordsStorage = JSON.parse(wordsStorageString);
            var dataForLocalSrorageConcat = wordsStorage.concat(words);
            var dataForLocalSrorageString = JSON.stringify(dataForLocalSrorageConcat);
            localStorage.setItem(DataGameService.wordsforLearningLSKey, dataForLocalSrorageString);
          } else {
            var dataForLocalStorage = JSON.stringify(words);
            localStorage.setItem(DataGameService.wordsforLearningLSKey, dataForLocalStorage);
          }
        }
      }]);

      return DataGameService;
    }();

    DataGameService.wordsforLearningLSKey = 'wordsforLearning';

    DataGameService.ɵfac = function DataGameService_Factory(t) {
      return new (t || DataGameService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    DataGameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataGameService,
      factory: DataGameService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataGameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
      }

      _createClass(HomeComponent, [{
        key: "goToGame",
        value: function goToGame(pageName) {
          this.router.navigate(["".concat(pageName)]);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 13,
      vars: 0,
      consts: [[1, "app-home"], [1, "app-home--title"], [1, "app-home--text"], [1, "app-home--button", 3, "click"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hello, my friend!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This small service will help you ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " remember or learn English words, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " participate in the game, ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " choosing the correct translation options. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_11_listener() {
            return ctx.goToGame("/game");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " go to game...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap\");\n.app-home[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  box-shadow: 0px 10px 10px black;\n  background-image: url('3269841.jpg');\n  background-size: cover;\n  width: 900px;\n  height: 500px;\n  margin: 50px auto;\n  padding: 50px 60px;\n  box-sizing: border-box;\n}\n.app-home--title[_ngcontent-%COMP%] {\n  color: #9c2f9c;\n  font-family: \"Balsamiq Sans\", cursive;\n  font-size: 26px;\n}\n.app-home--text[_ngcontent-%COMP%] {\n  font-family: \"Balsamiq Sans\", cursive;\n  font-size: 18px;\n  color: #3a3838;\n  line-height: 2;\n}\n.app-home--button[_ngcontent-%COMP%] {\n  font-family: \"Balsamiq Sans\", cursive;\n  font-size: 22px;\n  width: 180px;\n  line-height: 20px;\n  margin: 40px auto;\n  padding: 12px 16px;\n  text-align: center;\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\n  position: relative;\n  transition-duration: 0.3s;\n  transition-property: transform;\n  transform: translateZ(0);\n  background: linear-gradient(to bottom, #bd35bd, #e7bae7);\n  border: 1px solid #9c2f9c;\n  color: #3a3838;\n  border-radius: 20px;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset, 0 1px 2px rgba(0, 0, 0, 0.05);\n  outline: none;\n}\n.app-home--button[_ngcontent-%COMP%]:before {\n  pointer-events: none;\n  position: absolute;\n  z-index: -1;\n  content: \"\";\n  top: 100%;\n  left: 5%;\n  height: 10px;\n  width: 90%;\n  opacity: 0;\n  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);\n  transition-duration: 0.3s;\n  transition-property: transform, opacity;\n}\n.app-home--button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.app-home--button[_ngcontent-%COMP%]:hover:before {\n  opacity: 1;\n  transform: translateY(5px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJnYXJpdGEvRG93bmxvYWRzL2xlYXJuLWVuZ2xpc2gvc3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0ZBQUE7QUFFUjtFQUNDLDJCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNBRDtBREVDO0VBQ0MsY0FBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtBQ0FGO0FER0M7RUFDQyxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0RGO0FESUM7RUFDQyxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0RBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlGQUFBO0VBQ0EsYUFBQTtBQ0ZKO0FES0M7RUFDRyxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNELFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUVBLDRGQUFBO0VBQ0EseUJBQUE7RUFDQyx1Q0FBQTtBQ0hKO0FETUM7RUFDRywyQkFBQTtBQ0pKO0FET0M7RUFDRSxVQUFBO0VBQ0MsMEJBQUE7QUNMSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFsc2FtaXErU2FucyZkaXNwbGF5PXN3YXAnKTtcblxuLmFwcC1ob21lIHtcblx0Ym9yZGVyOjFweCBzb2xpZCBsaWdodGdyZXk7XG5cdGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggYmxhY2s7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nLzMyNjk4NDEuanBnKTsgXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdHdpZHRoOjkwMHB4OyBcblx0aGVpZ2h0OiA1MDBweDtcblx0bWFyZ2luOiA1MHB4IGF1dG87XG5cdHBhZGRpbmc6NTBweCA2MHB4OyBcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblxuXHQmLS10aXRsZSB7XG5cdFx0Y29sb3I6cmdiKDE1NiwgNDcsIDE1Nik7XG5cdFx0Zm9udC1mYW1pbHk6ICdCYWxzYW1pcSBTYW5zJywgY3Vyc2l2ZTtcblx0XHRmb250LXNpemU6IDI2cHg7XG5cdH1cblxuXHQmLS10ZXh0IHtcblx0XHRmb250LWZhbWlseTogJ0JhbHNhbWlxIFNhbnMnLCBjdXJzaXZlO1xuXHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRjb2xvcjpyZ2IoNTgsIDU2LCA1Nik7XG5cdFx0bGluZS1oZWlnaHQ6MjsgXG5cblx0fVxuXHQmLS1idXR0b257XG5cdFx0Zm9udC1mYW1pbHk6ICdCYWxzYW1pcSBTYW5zJywgY3Vyc2l2ZTtcblx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0d2lkdGg6MTgwcHg7XG5cdFx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdFx0bWFyZ2luOiA0MHB4IGF1dG87XG5cdFx0cGFkZGluZzogMTJweCAxNnB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG5cdCAgXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdCAgXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuXHQgIFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuXHQgIFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuXHQgIFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDE4OSwgNTMsIDE4OSksIHJnYigyMzEsIDE4NiwgMjMxKSk7XG5cdCAgXHRib3JkZXI6MXB4IHNvbGlkIHJnYigxNTYsIDQ3LCAxNTYpO1xuXHQgIFx0Y29sb3I6cmdiKDU4LCA1NiwgNTYpO1xuXHQgIFx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0ICBcdGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIGluc2V0LCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcblx0ICBcdG91dGxpbmU6IG5vbmU7XG5cdH1cblx0XG5cdCYtLWJ1dHRvbjpiZWZvcmUge1xuXHQgIFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdCAgXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgXHR6LWluZGV4OiAtMTtcblx0IFx0Y29udGVudDogJyc7XG5cdCBcdHRvcDogMTAwJTtcblx0IFx0bGVmdDogNSU7XG5cdCBcdGhlaWdodDogMTBweDtcblx0IFx0d2lkdGg6IDkwJTtcblx0IFx0b3BhY2l0eTogMDtcblx0IFx0YmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2VudGVyLCBlbGxpcHNlLCByZ2JhKDAsIDAsIDAsIDAuMzUpIDAlLCByZ2JhKDAsIDAsIDAsIDApIDgwJSk7XG5cdCBcdGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgcmdiYSgwLCAwLCAwLCAwLjM1KSAwJSwgcmdiYSgwLCAwLCAwLCAwKSA4MCUpO1xuXHQgXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuXHQgIFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuXHR9XG5cdFxuXHQmLS1idXR0b246aG92ZXIge1xuXHQgIFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuXHR9XG5cblx0Ji0tYnV0dG9uOmhvdmVyOmJlZm9yZSB7XG5cdCBcdG9wYWNpdHk6IDE7XG5cdCAgXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcblx0fVxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYWxzYW1pcStTYW5zJmRpc3BsYXk9c3dhcFwiKTtcbi5hcHAtaG9tZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCBibGFjaztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvMzI2OTg0MS5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogOTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICBwYWRkaW5nOiA1MHB4IDYwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uYXBwLWhvbWUtLXRpdGxlIHtcbiAgY29sb3I6ICM5YzJmOWM7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbHNhbWlxIFNhbnNcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuLmFwcC1ob21lLS10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiQmFsc2FtaXEgU2Fuc1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjM2EzODM4O1xuICBsaW5lLWhlaWdodDogMjtcbn1cbi5hcHAtaG9tZS0tYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiQmFsc2FtaXEgU2Fuc1wiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDIycHg7XG4gIHdpZHRoOiAxODBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbjogNDBweCBhdXRvO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjYmQzNWJkLCAjZTdiYWU3KTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzljMmY5YztcbiAgY29sb3I6ICMzYTM4Mzg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIGluc2V0LCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5hcHAtaG9tZS0tYnV0dG9uOmJlZm9yZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICBjb250ZW50OiBcIlwiO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDUlO1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNlbnRlciwgZWxsaXBzZSwgcmdiYSgwLCAwLCAwLCAwLjM1KSAwJSwgcmdiYSgwLCAwLCAwLCAwKSA4MCUpO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMCwgMCwgMCwgMC4zNSkgMCUsIHJnYmEoMCwgMCwgMCwgMCkgODAlKTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xufVxuLmFwcC1ob21lLS1idXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG59XG4uYXBwLWhvbWUtLWJ1dHRvbjpob3ZlcjpiZWZvcmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/menu/menu.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/menu/menu.component.ts ***!
    \***************************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppComponentsMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _game_service_data_game_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../game/service/data-game.service */
    "./src/app/components/game/service/data-game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");

    var _c0 = function _c0() {
      return {
        exact: true
      };
    };

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent(dataGameService) {
        _classCallCheck(this, MenuComponent);

        this.dataGameService = dataGameService;
        this.dictionary = [];
        this.numberWordsInDictionary = null;
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.dataGameService.loadWordList().subscribe(function (data) {
            return _this6.dictionary = data;
          });
          this.numberWordsInDictionary = this.dictionary.length;
          console.log('из меню', this.numberWordsInDictionary);
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service_data_game_service__WEBPACK_IMPORTED_MODULE_1__["DataGameService"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 13,
      vars: 3,
      consts: [[1, "app-menu"], [1, "app-menu--navigate"], ["routerLink", "", "routerLinkActive", "active-link", 1, "app-menu--link", 3, "routerLinkActiveOptions"], ["routerLink", "/game", "routerLinkActive", "active-link", 1, "app-menu--link"], ["routerLink", "/dictionary", "routerLinkActive", "active-link", 1, "app-menu--link"], ["matBadgeOverlap", "false", 3, "matBadge"], ["routerLink", "/translate", "routerLinkActive", "active-link", 1, "app-menu--link"], ["routerLink", "/about-me", "routerLinkActive", "active-link", 1, "app-menu--link"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dictionary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About me");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", ctx.numberWordsInDictionary);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadge"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Balsamiq+Sans&display=swap\");\n.app-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  background-color: #d865d8;\n  width: 100%;\n  height: 80px;\n  box-shadow: 0 1px 10px 1px black;\n  margin-bottom: 15px;\n}\n.app-menu--navigate[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  margin: auto;\n  width: 900px;\n}\n.app-menu--link[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  color: white;\n  font-size: 24px;\n  font-family: \"Balsamiq Sans\", cursive;\n}\n.app-menu--link.active-link[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 20px;\n  background: #d25fb8;\n}\n.app-menu--link[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: 0.8s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJnYXJpdGEvRG93bmxvYWRzL2xlYXJuLWVuZ2xpc2gvc3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsa0ZBQUE7QUFFUjtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUNBRDtBREVDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDRyxtQkFBQTtFQUNILFlBQUE7RUFDQSxZQUFBO0FDQUY7QURJQztFQUNDLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7QUNGRjtBRElDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNGRjtBREtDO0VBQ0kscUJBQUE7RUFDRyxnQkFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CYWxzYW1pcStTYW5zJmRpc3BsYXk9c3dhcCcpO1xuXG4uYXBwLW1lbnUge1xuXHRkaXNwbGF5OmZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6cmdiKDIxNiwgMTAxLCAyMTYpO1xuXHR3aWR0aDoxMDAlO1xuXHRoZWlnaHQ6IDgwcHg7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDEwcHggMXB4IGJsYWNrO1xuXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG5cdCYtLW5hdmlnYXRlIHtcblx0XHRkaXNwbGF5OmZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdCAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcblx0XHRtYXJnaW46YXV0bztcblx0XHR3aWR0aDo5MDBweDtcblx0XHRcblx0fVxuXG5cdCYtLWxpbmsge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRjb2xvcjp3aGl0ZTtcblx0XHRmb250LXNpemU6MjRweDtcblx0XHRmb250LWZhbWlseTogJ0JhbHNhbWlxIFNhbnMnLCBjdXJzaXZlO1xuXHRcblx0Ji5hY3RpdmUtbGluayB7XG5cdFx0cGFkZGluZzoxMHB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XG5cdFx0YmFja2dyb3VuZDogcmdiKDIxMCwgOTUsIDE4NCk7XG5cdH1cbn1cblx0Ji0tbGluazpob3Zlcntcblx0ICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC44cztcbn1cbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFsc2FtaXErU2FucyZkaXNwbGF5PXN3YXBcIik7XG4uYXBwLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDg2NWQ4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAxMHB4IDFweCBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5hcHAtbWVudS0tbmF2aWdhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDkwMHB4O1xufVxuLmFwcC1tZW51LS1saW5rIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbHNhbWlxIFNhbnNcIiwgY3Vyc2l2ZTtcbn1cbi5hcHAtbWVudS0tbGluay5hY3RpdmUtbGluayB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNkMjVmYjg7XG59XG4uYXBwLW1lbnUtLWxpbms6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IDAuOHM7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.scss']
        }]
      }], function () {
        return [{
          type: _game_service_data_game_service__WEBPACK_IMPORTED_MODULE_1__["DataGameService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/not-found/not-found.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/not-found/not-found.component.ts ***!
    \*************************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppComponentsNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 2,
      vars: 0,
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/translator/fullTranslator.model.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/translator/fullTranslator.model.ts ***!
    \***************************************************************/

  /*! exports provided: FullTranslation */

  /***/
  function srcAppComponentsTranslatorFullTranslatorModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FullTranslation", function () {
      return FullTranslation;
    });

    var FullTranslation = /*#__PURE__*/function () {
      function FullTranslation() {
        _classCallCheck(this, FullTranslation);
      }

      _createClass(FullTranslation, [{
        key: "parseTranslation",
        value: function parseTranslation(data) {
          if (data.def.length === 0) {
            throw new Error('word not found');
          }

          this.translate = data.def[0].tr.map(function (item) {
            return item.text;
          });
          this.transcription = data.def[0].ts;
          /*this.example = data.def[0].tr.map((item: APIYandex.Tr) => item.ex.map((items: APIYandex.Ex) => items.text));*/

          /* this.example = data.def[0].tr.map((items: APIYandex.Tr) => items.ex.map((item: APIYandex.Ex) => item.tr[0].text)); */
        }
      }]);

      return FullTranslation;
    }();
    /***/

  },

  /***/
  "./src/app/components/translator/service/data.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/translator/service/data.service.ts ***!
    \***************************************************************/

  /*! exports provided: DataService */

  /***/
  function srcAppComponentsTranslatorServiceDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _fullTranslator_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../fullTranslator.model */
    "./src/app/components/translator/fullTranslator.model.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DataService = /*#__PURE__*/function () {
      function DataService(_http) {
        _classCallCheck(this, DataService);

        this._http = _http;
        this.sourceLanguage = ['ru-ru', 'ru-en', 'ru-pl', 'ru-uk', 'ru-de', 'ru-fr', 'ru-es', 'ru-it', 'ru-tr', 'en-ru', 'en-en', 'en-de', 'en-fr', 'en-es', 'en-tr', 'pl-ru', 'uk-ru', 'de-ru', 'de-en', 'fr-ru', 'fr-en', 'es-ru', 'es-en', 'it-ru', 'it-en', 'tr-ru', 'tr-en'];
        this.urlAPI = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=';
        this.mainAPIKey = 'dict.1.1.20200609T214032Z.bb7f13f95e75ccf2.de79d0d2a909a5510ae3147dde13ba2f0d3f1dd8';
      }

      _createClass(DataService, [{
        key: "translateWord",
        value: function translateWord(data) {
          var url = "".concat(this.urlAPI).concat(this.mainAPIKey, "&lang=ru-en&text=").concat(data); // console.log(url);

          return this._http.post(url, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (items) {
            var translation = new _fullTranslator_model__WEBPACK_IMPORTED_MODULE_2__["FullTranslation"]();
            translation.parseTranslation(items);
            return translation;
          }));
        }
      }]);

      return DataService;
    }();

    DataService.ɵfac = function DataService_Factory(t) {
      return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DataService,
      factory: DataService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/translator/translator.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/translator/translator.component.ts ***!
    \***************************************************************/

  /*! exports provided: TranslatorComponent */

  /***/
  function srcAppComponentsTranslatorTranslatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslatorComponent", function () {
      return TranslatorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_store_action_translate_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/store/action/translate.action */
    "./src/app/store/action/translate.action.ts");
    /* harmony import */


    var src_app_store_selectors_api_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/selectors/api.selectors */
    "./src/app/store/selectors/api.selectors.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function TranslatorComponent_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranslatorComponent_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r3.word = "";
          return ctx_r3.onTitleChange();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TranslatorComponent_p_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var word_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", word_r5, " ");
      }
    }

    function TranslatorComponent_p_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.error$), "");
      }
    }

    var TranslatorComponent = /*#__PURE__*/function () {
      function TranslatorComponent(_store$) {
        _classCallCheck(this, TranslatorComponent);

        this._store$ = _store$;
        this.wordsEng$ = this._store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_store_selectors_api_selectors__WEBPACK_IMPORTED_MODULE_3__["selectWordEng"]));
        this.error$ = this._store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_store_selectors_api_selectors__WEBPACK_IMPORTED_MODULE_3__["selectError"]));
      }

      _createClass(TranslatorComponent, [{
        key: "translate",
        value: function translate() {
          return this._store$.dispatch(Object(src_app_store_action_translate_action__WEBPACK_IMPORTED_MODULE_2__["translate"])({
            wordRu: this.word
          }));
        }
      }, {
        key: "onTitleChange",
        value: function onTitleChange() {
          if (this.word.length === 0) {
            return this._store$.dispatch(Object(src_app_store_action_translate_action__WEBPACK_IMPORTED_MODULE_2__["resultTranslate"])({
              wordEng: []
            }));
          }
        }
      }]);

      return TranslatorComponent;
    }();

    TranslatorComponent.ɵfac = function TranslatorComponent_Factory(t) {
      return new (t || TranslatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    TranslatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TranslatorComponent,
      selectors: [["app-translator"]],
      decls: 11,
      vars: 8,
      consts: [[1, "app-translator"], [1, "app-translator--form", 3, "ngSubmit"], [1, "app-translator--full-width"], ["matInput", "", "placeholder", "Ex. World", "value", "Hello", "type", "search", "name", "wordsEng", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", "class", "app-translator--button", "type", "button", 3, "click", 4, "ngIf"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", "type", "button", 1, "app-translator--button", 3, "click"]],
      template: function TranslatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TranslatorComponent_Template_form_ngSubmit_1_listener() {
            return ctx.translate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter word...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TranslatorComponent_Template_input_ngModelChange_5_listener($event) {
            return ctx.word = $event;
          })("ngModelChange", function TranslatorComponent_Template_input_ngModelChange_5_listener() {
            return ctx.onTitleChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TranslatorComponent_button_6_Template, 3, 0, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TranslatorComponent_p_7_Template, 2, 1, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TranslatorComponent_p_9_Template, 3, 3, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.word);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.word);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx.wordsEng$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 6, ctx.error$));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: [".app-translator--form[_ngcontent-%COMP%] {\n  width: 500px;\n}\n.app-translator--full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.app-translator--button[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJnYXJpdGEvRG93bmxvYWRzL2xlYXJuLWVuZ2xpc2gvc3JjL2FwcC9jb21wb25lbnRzL3RyYW5zbGF0b3IvdHJhbnNsYXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90cmFuc2xhdG9yL3RyYW5zbGF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQSxZQUFBO0FDQUQ7QURFRztFQUNGLFdBQUE7QUNBRDtBREVFO0VBQ0MsWUFBQTtFQUNBLHVCQUFBO0FDQUgiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RyYW5zbGF0b3IvdHJhbnNsYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtdHJhbnNsYXRvcntcblx0Ji0tZm9ybSB7XG5cdHdpZHRoOiA1MDBweDtcbiAgfVxuICBcdCYtLWZ1bGwtd2lkdGgge1xuXHR3aWR0aDogMTAwJTtcbiAgfVxuICAmLS1idXR0b24ge1xuXHQgIGJvcmRlcjogbm9uZTtcblx0ICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxufVxuXG4gIFxuIiwiLmFwcC10cmFuc2xhdG9yLS1mb3JtIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuLmFwcC10cmFuc2xhdG9yLS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYXBwLXRyYW5zbGF0b3ItLWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-translator',
          templateUrl: './translator.component.html',
          styleUrls: ['./translator.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/action/app.actions.ts":
  /*!*********************************************!*\
    !*** ./src/app/store/action/app.actions.ts ***!
    \*********************************************/

  /*! exports provided: increase, decrease, clear, updatedAt */

  /***/
  function srcAppStoreActionAppActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "increase", function () {
      return increase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "decrease", function () {
      return decrease;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "clear", function () {
      return clear;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updatedAt", function () {
      return updatedAt;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var increase = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Count] increase');
    var decrease = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Count] decrease');
    var clear = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Count] clear');
    var updatedAt = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Count] updated at', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/store/action/translate.action.ts":
  /*!**************************************************!*\
    !*** ./src/app/store/action/translate.action.ts ***!
    \**************************************************/

  /*! exports provided: translate, resultTranslate, error */

  /***/
  function srcAppStoreActionTranslateActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "translate", function () {
      return translate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "resultTranslate", function () {
      return resultTranslate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "error", function () {
      return error;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var translate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Translate] translate word', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var resultTranslate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Translate] result translate', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var error = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Translate] error translate', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/store/effect/app.effects.ts":
  /*!*********************************************!*\
    !*** ./src/app/store/effect/app.effects.ts ***!
    \*********************************************/

  /*! exports provided: AppEffects */

  /***/
  function srcAppStoreEffectAppEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppEffects", function () {
      return AppEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _action_app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../action/app.actions */
    "./src/app/store/action/app.actions.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AppEffects = function AppEffects(actions$) {
      var _this7 = this;

      _classCallCheck(this, AppEffects);

      this.actions$ = actions$;
      this.updatedAt$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this7.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_app_actions__WEBPACK_IMPORTED_MODULE_2__["increase"], _action_app_actions__WEBPACK_IMPORTED_MODULE_2__["decrease"], _action_app_actions__WEBPACK_IMPORTED_MODULE_2__["clear"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
          return Object(_action_app_actions__WEBPACK_IMPORTED_MODULE_2__["updatedAt"])({
            payload: Date.now()
          });
        }));
      });
    };

    AppEffects.ɵfac = function AppEffects_Factory(t) {
      return new (t || AppEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]));
    };

    AppEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppEffects,
      factory: AppEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/effect/translate.effect.ts":
  /*!**************************************************!*\
    !*** ./src/app/store/effect/translate.effect.ts ***!
    \**************************************************/

  /*! exports provided: TranslateEffects */

  /***/
  function srcAppStoreEffectTranslateEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateEffects", function () {
      return TranslateEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _action_translate_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../action/translate.action */
    "./src/app/store/action/translate.action.ts");
    /* harmony import */


    var src_app_components_translator_service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/translator/service/data.service */
    "./src/app/components/translator/service/data.service.ts");

    var TranslateEffects = function TranslateEffects(actions$, dataService) {
      var _this8 = this;

      _classCallCheck(this, TranslateEffects);

      this.actions$ = actions$;
      this.dataService = dataService;
      this.translate$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this8.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_translate_action__WEBPACK_IMPORTED_MODULE_4__["translate"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) {
          return _this8.dataService.translateWord(action.wordRu).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return Object(_action_translate_action__WEBPACK_IMPORTED_MODULE_4__["resultTranslate"])({
              wordEng: data.translate
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (e) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(_action_translate_action__WEBPACK_IMPORTED_MODULE_4__["error"])({
              error: e.message
            }));
          }));
        }));
      });
    };

    TranslateEffects.ɵfac = function TranslateEffects_Factory(t) {
      return new (t || TranslateEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_components_translator_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]));
    };

    TranslateEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TranslateEffects,
      factory: TranslateEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranslateEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: src_app_components_translator_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/index.ts":
  /*!********************************!*\
    !*** ./src/app/store/index.ts ***!
    \********************************/

  /*! exports provided: reducer */

  /***/
  function srcAppStoreIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _reducer;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony import */


    var _state_app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./state/app.state */
    "./src/app/store/state/app.state.ts");
    /* harmony import */


    var _reducer_app_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./reducer/app.reducers */
    "./src/app/store/reducer/app.reducers.ts");
    /* harmony import */


    var _state_translate_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./state/translate.state */
    "./src/app/store/state/translate.state.ts");
    /* harmony import */


    var _reducer_translate_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reducer/translate.reducer */
    "./src/app/store/reducer/translate.reducer.ts");

    var reducer = (_reducer = {}, _defineProperty(_reducer, _state_app_state__WEBPACK_IMPORTED_MODULE_0__["featureKeyCount"], _reducer_app_reducers__WEBPACK_IMPORTED_MODULE_1__["StateReducerCount"]), _defineProperty(_reducer, _state_translate_state__WEBPACK_IMPORTED_MODULE_2__["featureKeyTranslate"], _reducer_translate_reducer__WEBPACK_IMPORTED_MODULE_3__["StateReducerTranslate"]), _reducer);
    /***/
  },

  /***/
  "./src/app/store/reducer/app.reducers.ts":
  /*!***********************************************!*\
    !*** ./src/app/store/reducer/app.reducers.ts ***!
    \***********************************************/

  /*! exports provided: countReducer, StateReducerCount */

  /***/
  function srcAppStoreReducerAppReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "countReducer", function () {
      return countReducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateReducerCount", function () {
      return StateReducerCount;
    });
    /* harmony import */


    var _state_app_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../state/app.state */
    "./src/app/store/state/app.state.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _action_app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../action/app.actions */
    "./src/app/store/action/app.actions.ts");

    var countReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_state_app_state__WEBPACK_IMPORTED_MODULE_0__["initialState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_app_actions__WEBPACK_IMPORTED_MODULE_2__["increase"], function (state) {
      return Object.assign(Object.assign({}, state), {
        count: state.count + 1
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_app_actions__WEBPACK_IMPORTED_MODULE_2__["decrease"], function (state) {
      return Object.assign(Object.assign({}, state), {
        count: state.count - 1
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_app_actions__WEBPACK_IMPORTED_MODULE_2__["clear"], function (state) {
      return Object.assign(Object.assign({}, state), {
        count: 0
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_app_actions__WEBPACK_IMPORTED_MODULE_2__["updatedAt"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        updatedAt: action.payload
      });
    }));

    function StateReducerCount(state, action) {
      return countReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/store/reducer/translate.reducer.ts":
  /*!****************************************************!*\
    !*** ./src/app/store/reducer/translate.reducer.ts ***!
    \****************************************************/

  /*! exports provided: translateReducer, StateReducerTranslate */

  /***/
  function srcAppStoreReducerTranslateReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "translateReducer", function () {
      return translateReducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateReducerTranslate", function () {
      return StateReducerTranslate;
    });
    /* harmony import */


    var _state_translate_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../state/translate.state */
    "./src/app/store/state/translate.state.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _action_translate_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../action/translate.action */
    "./src/app/store/action/translate.action.ts");

    var translateReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_state_translate_state__WEBPACK_IMPORTED_MODULE_0__["initialState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_translate_action__WEBPACK_IMPORTED_MODULE_2__["resultTranslate"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        error: '',
        wordEng: action.wordEng
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_translate_action__WEBPACK_IMPORTED_MODULE_2__["error"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        error: action.error
      });
    }));

    function StateReducerTranslate(state, action) {
      return translateReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/store/selectors/api.selectors.ts":
  /*!**************************************************!*\
    !*** ./src/app/store/selectors/api.selectors.ts ***!
    \**************************************************/

  /*! exports provided: selectStateTranslate, selectWordEng, selectWordRu, selectError */

  /***/
  function srcAppStoreSelectorsApiSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectStateTranslate", function () {
      return selectStateTranslate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectWordEng", function () {
      return selectWordEng;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectWordRu", function () {
      return selectWordRu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectError", function () {
      return selectError;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _state_translate_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../state/translate.state */
    "./src/app/store/state/translate.state.ts");

    var selectStateTranslate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_state_translate_state__WEBPACK_IMPORTED_MODULE_1__["featureKeyTranslate"]); // tslint:disable-next-line: max-line-length

    var selectWordEng = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateTranslate, function (state) {
      return state.wordEng;
    }); // tslint:disable-next-line: max-line-length

    var selectWordRu = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateTranslate, function (state) {
      return state.wordRu;
    });
    var selectError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateTranslate, function (state) {
      return state.error;
    });
    /***/
  },

  /***/
  "./src/app/store/state/app.state.ts":
  /*!******************************************!*\
    !*** ./src/app/store/state/app.state.ts ***!
    \******************************************/

  /*! exports provided: featureKeyCount, initialState */

  /***/
  function srcAppStoreStateAppStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "featureKeyCount", function () {
      return featureKeyCount;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });

    var featureKeyCount = 'COUNT';
    var initialState = {
      count: 0,
      updatedAt: Date.now()
    };
    /***/
  },

  /***/
  "./src/app/store/state/translate.state.ts":
  /*!************************************************!*\
    !*** ./src/app/store/state/translate.state.ts ***!
    \************************************************/

  /*! exports provided: featureKeyTranslate, initialState */

  /***/
  function srcAppStoreStateTranslateStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "featureKeyTranslate", function () {
      return featureKeyTranslate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });

    var featureKeyTranslate = 'TRANSLATE';
    var initialState = {
      id: 0,
      wordRu: '',
      wordEng: [],
      error: ''
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/margarita/Downloads/learn-english/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map