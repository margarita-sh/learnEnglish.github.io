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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _store_action_dictionary_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./store/action/dictionary.action */
    "./src/app/store/action/dictionary.action.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _components_game_service_data_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/game/service/data-game.service */
    "./src/app/components/game/service/data-game.service.ts");
    /* harmony import */


    var _components_profile_service_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/profile/service/profile.service */
    "./src/app/components/profile/service/profile.service.ts");
    /* harmony import */


    var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(translateService, _store$, dataGameServise, profileService) {
        _classCallCheck(this, AppComponent);

        this.translateService = translateService;
        this._store$ = _store$;
        this.dataGameServise = dataGameServise;
        this.profileService = profileService;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.translateService.use(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].defaultLocale);

          this._store$.dispatch(Object(_store_action_dictionary_action__WEBPACK_IMPORTED_MODULE_2__["getWordsFromLS"])({}));

          this.dataGameServise.loadWordsHttp();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_game_service_data_game_service__WEBPACK_IMPORTED_MODULE_5__["DataGameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_components_profile_service_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]));
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
      directives: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]],
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
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _components_game_service_data_game_service__WEBPACK_IMPORTED_MODULE_5__["DataGameService"]
        }, {
          type: _components_profile_service_profile_service__WEBPACK_IMPORTED_MODULE_6__["ProfileService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: HttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
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


    var _store_effect_profile_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./store/effect/profile.effects */
    "./src/app/store/effect/profile.effects.ts");
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
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _components_locale_missing_translation_service_ts__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/locale/missing-translation.service.ts */
    "./src/app/components/locale/missing-translation.service.ts.ts");
    /* harmony import */


    var mat_progress_buttons__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! mat-progress-buttons */
    "./node_modules/mat-progress-buttons/__ivy_ngcc__/esm2015/mat-progress-buttons.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _components_profile_service_profile_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/profile/service/profile.service */
    "./src/app/components/profile/service/profile.service.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _store_effect_dictionary_effect__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./store/effect/dictionary.effect */
    "./src/app/store/effect/dictionary.effect.ts");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _store_effect_game_effect__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./store/effect/game.effect */
    "./src/app/store/effect/game.effect.ts");

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_31__["TranslateHttpLoader"](http, './assets/locale/', '.json');
    }

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
      providers: [_components_translator_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _components_game_service_data_game_service__WEBPACK_IMPORTED_MODULE_21__["DataGameService"], _components_game_service_audio_service__WEBPACK_IMPORTED_MODULE_25__["AudioService"], _components_profile_service_profile_service__WEBPACK_IMPORTED_MODULE_37__["ProfileService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_13__["reducer"]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_store_effect_translate_effect__WEBPACK_IMPORTED_MODULE_17__["TranslateEffects"], _store_effect_dictionary_effect__WEBPACK_IMPORTED_MODULE_40__["DictionaryEffects"], _store_effect_profile_effects__WEBPACK_IMPORTED_MODULE_14__["ProfileEffects"], _store_effect_game_effect__WEBPACK_IMPORTED_MODULE_42__["GameEffects"]]), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__["StoreRouterConnectingModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]]
        },
        missingTranslationHandler: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__["MissingTranslationHandler"],
          useClass: _components_locale_missing_translation_service_ts__WEBPACK_IMPORTED_MODULE_32__["MissingTranslationService"]
        },
        defaultLanguage: 'ru'
      }), mat_progress_buttons__WEBPACK_IMPORTED_MODULE_33__["MatProgressButtonsModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__["MatButtonToggleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_36__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__["MatPaginatorModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_41__["MatMenuModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"], _components_translator_translator_component__WEBPACK_IMPORTED_MODULE_16__["TranslatorComponent"], _components_dictionary_dictionary_component__WEBPACK_IMPORTED_MODULE_20__["DictionaryComponent"], _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_22__["AboutMeComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_24__["NotFoundComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_26__["MenuComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_35__["ProfileComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsRootModule"], _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__["StoreRouterConnectingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__["TranslateModule"], mat_progress_buttons__WEBPACK_IMPORTED_MODULE_33__["MatProgressButtonsModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__["MatButtonToggleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_36__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__["MatPaginatorModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_41__["MatMenuModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_game_game_component__WEBPACK_IMPORTED_MODULE_4__["GameComponent"], _components_translator_translator_component__WEBPACK_IMPORTED_MODULE_16__["TranslatorComponent"], _components_dictionary_dictionary_component__WEBPACK_IMPORTED_MODULE_20__["DictionaryComponent"], _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_22__["AboutMeComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_23__["HomeComponent"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_24__["NotFoundComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_26__["MenuComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_35__["ProfileComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_13__["reducer"]), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_7__["StoreDevtoolsModule"].instrument({
            maxAge: 25,
            logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production
          }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([_store_effect_translate_effect__WEBPACK_IMPORTED_MODULE_17__["TranslateEffects"], _store_effect_dictionary_effect__WEBPACK_IMPORTED_MODULE_40__["DictionaryEffects"], _store_effect_profile_effects__WEBPACK_IMPORTED_MODULE_14__["ProfileEffects"], _store_effect_game_effect__WEBPACK_IMPORTED_MODULE_42__["GameEffects"]]), _ngrx_router_store__WEBPACK_IMPORTED_MODULE_10__["StoreRouterConnectingModule"].forRoot(), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__["MatProgressSpinnerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIconModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_29__["MatBadgeModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__["TranslateLoader"],
              useFactory: HttpLoaderFactory,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"]]
            },
            missingTranslationHandler: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_30__["MissingTranslationHandler"],
              useClass: _components_locale_missing_translation_service_ts__WEBPACK_IMPORTED_MODULE_32__["MissingTranslationService"]
            },
            defaultLanguage: 'ru'
          }), mat_progress_buttons__WEBPACK_IMPORTED_MODULE_33__["MatProgressButtonsModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_34__["MatButtonToggleModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_36__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_39__["MatPaginatorModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_41__["MatMenuModule"]],
          providers: [_components_translator_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _components_game_service_data_game_service__WEBPACK_IMPORTED_MODULE_21__["DataGameService"], _components_game_service_audio_service__WEBPACK_IMPORTED_MODULE_25__["AudioService"], _components_profile_service_profile_service__WEBPACK_IMPORTED_MODULE_37__["ProfileService"]],
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
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var AboutMeComponent = function AboutMeComponent(translate) {
      _classCallCheck(this, AboutMeComponent);

      this.translate = translate;
      translate.addLangs(['en', 'ru']);
      translate.setDefaultLang('en');
      var browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
    };

    AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) {
      return new (t || AboutMeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
    };

    AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutMeComponent,
      selectors: [["app-about-me"]],
      decls: 9,
      vars: 9,
      consts: [[1, "app-about-me"], [1, "app-about-me--container"], [1, "app-about-me--text"]],
      template: function AboutMeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "ABOUT-ME.ARTICLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "ABOUT-ME.TEXT"), " Angular Typescript, SCSS, ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 7, "ABOUT-ME.CONTINUE"), " RxJS, NgRx.");
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\n.app-about-me[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 50px auto;\n}\n.app-about-me--container[_ngcontent-%COMP%] {\n  width: 1200px;\n  margin: auto;\n}\n.app-about-me--text[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  line-height: 1.5em;\n  font-family: \"Roboto\", sans-serif;\n  color: #3b3b3b;\n}\n@media (max-width: 1440px) {\n  .app-about-me--container[_ngcontent-%COMP%] {\n    width: 1000px;\n  }\n}\n@media (max-width: 1200px) {\n  .app-about-me--container[_ngcontent-%COMP%] {\n    width: 800px;\n  }\n}\n@media (max-width: 998px) {\n  .app-about-me--container[_ngcontent-%COMP%] {\n    width: 700px;\n  }\n}\n@media (max-width: 768px) {\n  .app-about-me--container[_ngcontent-%COMP%] {\n    width: 520px;\n  }\n  .app-about-me--text[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    line-height: 1.2em;\n  }\n}\n@media (max-width: 550px) {\n  .app-about-me--container[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJnYXJpdGEvRG93bmxvYWRzL2xlYXJuLWVuZ2xpc2gvc3JjL2FwcC9jb21wb25lbnRzL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9GQUFBO0FBQ1I7RUFDQyxXQUFBO0VBQ0EsaUJBQUE7QUNDRDtBREVHO0VBQ0YsYUFBQTtFQUNBLFlBQUE7QUNBRDtBREVHO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtBQ0FKO0FETUE7RUFFRTtJQUNDLGFBQUE7RUNKRDtBQUNGO0FEUUE7RUFFRTtJQUNDLFlBQUE7RUNQRDtBQUNGO0FEV0E7RUFFRTtJQUNDLFlBQUE7RUNWRDtBQUNGO0FEY0E7RUFFRTtJQUNDLFlBQUE7RUNiRDtFRGVBO0lBQ0MsZ0JBQUE7SUFDQSxrQkFBQTtFQ2JEO0FBQ0Y7QURtQkE7RUFFRTtJQUNDLFlBQUE7RUNsQkQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQtbWUvYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4uYXBwLWFib3V0LW1lIHtcblx0d2lkdGg6MTAwJTtcblx0bWFyZ2luOjUwcHggYXV0bztcblxuXG4gICAmLS1jb250YWluZXIge1xuXHR3aWR0aDoxMjAwcHg7XG5cdG1hcmdpbjogYXV0bztcbiAgIH1cbiAgICYtLXRleHQge1xuXHQgICBmb250LXNpemU6IDEuNGVtO1xuXHQgICBsaW5lLWhlaWdodDoxLjVlbTtcblx0ICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXHQgICBjb2xvcjogcmdiKDU5LCA1OSwgNTkpO1xuICAgfVxuXG59XG4gXG5cbkBtZWRpYSAobWF4LXdpZHRoOjE0NDBweCkge1xuICAgIC5hcHAtYWJvdXQtbWUge1xuXHRcdCYtLWNvbnRhaW5lciB7XG5cdFx0XHR3aWR0aDoxMDAwcHg7XG5cdFx0ICAgfVxuXHRcdH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6MTIwMHB4KSB7XG5cdC5hcHAtYWJvdXQtbWUgIHtcblx0XHQmLS1jb250YWluZXIge1xuXHRcdFx0d2lkdGg6ODAwcHg7XG5cdFx0ICAgfVxuXHRcdH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6OTk4cHgpIHtcblx0LmFwcC1hYm91dC1tZSAge1xuXHRcdCYtLWNvbnRhaW5lciB7XG5cdFx0XHR3aWR0aDo3MDBweDtcblx0XHQgICB9XG5cdH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcblx0LmFwcC1hYm91dC1tZSAge1xuXHRcdCYtLWNvbnRhaW5lciB7XG5cdFx0XHR3aWR0aDo1MjBweDtcblx0XHR9XG5cdFx0Ji0tdGV4dCB7XG5cdFx0XHRmb250LXNpemU6IDEuMmVtO1xuXHRcdFx0bGluZS1oZWlnaHQ6MS4yZW07XG5cdFx0fVxuXHRcdFxuXHR9XG59XG5cblxuQG1lZGlhKG1heC13aWR0aDogNTUwcHgpIHtcblx0LmFwcC1hYm91dC1tZSAge1xuXHRcdCYtLWNvbnRhaW5lciB7XG5cdFx0XHR3aWR0aDozNTBweDtcblx0XHQgICB9XG5cdH1cblx0XG5cdFxufVxuICIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuLmFwcC1hYm91dC1tZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cbi5hcHAtYWJvdXQtbWUtLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5hcHAtYWJvdXQtbWUtLXRleHQge1xuICBmb250LXNpemU6IDEuNGVtO1xuICBsaW5lLWhlaWdodDogMS41ZW07XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzNiM2IzYjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuYXBwLWFib3V0LW1lLS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmFwcC1hYm91dC1tZS0tY29udGFpbmVyIHtcbiAgICB3aWR0aDogODAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OThweCkge1xuICAuYXBwLWFib3V0LW1lLS1jb250YWluZXIge1xuICAgIHdpZHRoOiA3MDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hcHAtYWJvdXQtbWUtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUyMHB4O1xuICB9XG4gIC5hcHAtYWJvdXQtbWUtLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLmFwcC1hYm91dC1tZS0tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMzUwcHg7XG4gIH1cbn0iXX0= */"]
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
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }];
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


    var _game_word_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../game/word.model */
    "./src/app/components/game/word.model.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_store_action_dictionary_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/store/action/dictionary.action */
    "./src/app/store/action/dictionary.action.ts");
    /* harmony import */


    var src_app_store_selectors_dictionary_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/store/selectors/dictionary.selectors */
    "./src/app/store/selectors/dictionary.selectors.ts");
    /* harmony import */


    var _game_service_data_game_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../game/service/data-game.service */
    "./src/app/components/game/service/data-game.service.ts");
    /* harmony import */


    var _game_service_audio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../game/service/audio.service */
    "./src/app/components/game/service/audio.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var mat_progress_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! mat-progress-buttons */
    "./node_modules/mat-progress-buttons/__ivy_ngcc__/esm2015/mat-progress-buttons.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function DictionaryComponent_div_2_th_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " N. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DictionaryComponent_div_2_td_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r14 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.dataSource.filteredData.indexOf(element_r14) + 1, " ");
      }
    }

    function DictionaryComponent_div_2_th_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "DICTIONARY.TRANSLATION"));
      }
    }

    function DictionaryComponent_div_2_td_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.russianWord, " ");
      }
    }

    function DictionaryComponent_div_2_th_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "DICTIONARY.ENGLISH-WORD"));
      }
    }

    function DictionaryComponent_div_2_td_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.englishWord, " ");
      }
    }

    function DictionaryComponent_div_2_th_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "DICTIONARY.LISTEN"), " ");
      }
    }

    function DictionaryComponent_div_2_td_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-spinner-button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DictionaryComponent_div_2_td_13_Template_mat_spinner_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var word_r17 = ctx.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.playAudio(word_r17);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var word_r17 = ctx.$implicit;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r9.getSpinnerButtonOptions(word_r17));
      }
    }

    function DictionaryComponent_div_2_th_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "DICTIONARY.REMOVE"), " ");
      }
    }

    function DictionaryComponent_div_2_td_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DictionaryComponent_div_2_td_16_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var word_r20 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r21.removeWordFromDictionary(word_r20);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "DICTIONARY.BUTTON"));
      }
    }

    function DictionaryComponent_div_2_tr_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 29);
      }
    }

    function DictionaryComponent_div_2_tr_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 30);
      }
    }

    var _c0 = function _c0() {
      return [10, 20, 50, 100];
    };

    function DictionaryComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DictionaryComponent_div_2_th_3_Template, 2, 0, "th", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DictionaryComponent_div_2_td_4_Template, 2, 1, "td", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DictionaryComponent_div_2_th_6_Template, 3, 3, "th", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DictionaryComponent_div_2_td_7_Template, 2, 1, "td", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DictionaryComponent_div_2_th_9_Template, 3, 3, "th", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DictionaryComponent_div_2_td_10_Template, 2, 1, "td", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DictionaryComponent_div_2_th_12_Template, 3, 3, "th", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DictionaryComponent_div_2_td_13_Template, 2, 1, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DictionaryComponent_div_2_th_15_Template, 3, 3, "th", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DictionaryComponent_div_2_td_16_Template, 4, 3, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DictionaryComponent_div_2_tr_17_Template, 1, 0, "tr", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DictionaryComponent_div_2_tr_18_Template, 1, 0, "tr", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-paginator", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
      }
    }

    function DictionaryComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "DICTIONARY.WARNING"));
      }
    }

    var DictionaryComponent = /*#__PURE__*/function () {
      function DictionaryComponent(dataGameService, audioService, translate, _store$) {
        _classCallCheck(this, DictionaryComponent);

        this.dataGameService = dataGameService;
        this.audioService = audioService;
        this.translate = translate;
        this._store$ = _store$;
        this.dictionary$ = this._store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(src_app_store_selectors_dictionary_selectors__WEBPACK_IMPORTED_MODULE_6__["selectDictionary"]));
        this.srcAudio$ = this._store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(src_app_store_selectors_dictionary_selectors__WEBPACK_IMPORTED_MODULE_6__["selectSrcAudio"]));
        this.displayedColumns = ['index', 'englishWord', 'russianWord', 'listen', 'actions'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.spinnerButtonOptions = {
          active: false,
          text: '🔈',
          spinnerSize: 18,
          raised: true,
          stroked: false,
          buttonColor: 'primary',
          spinnerColor: 'accent',
          fullWidth: false,
          disabled: false,
          mode: 'indeterminate'
        };
        this.audio = new Audio();
        translate.addLangs(['en', 'ru']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
      }

      _createClass(DictionaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._store$.dispatch(Object(src_app_store_action_dictionary_action__WEBPACK_IMPORTED_MODULE_5__["setAudioSrc"])({
            word: new _game_word_model__WEBPACK_IMPORTED_MODULE_1__["Word"](),
            src: ''
          }));

          this.dictionarySubscription = this.dictionary$.subscribe(function (data) {
            _this.dataSource.data = data;
            _this.dataSource.paginator = _this.paginator;
          });
          this.srcAudioSubscription = this.srcAudio$.subscribe(function (data) {
            // tslint:disable-next-line: strict-boolean-expressions
            if (!data.src) {
              return;
            }

            _this.audio.src = data.src;

            _this.audio.play();

            _this.spinnerButtonOptions.active = false;

            _this._store$.dispatch(Object(src_app_store_action_dictionary_action__WEBPACK_IMPORTED_MODULE_5__["changeWordStatus"])({
              word: data.word,
              isLoading: false
            }));
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.dictionarySubscription.unsubscribe();
          this.srcAudioSubscription.unsubscribe();
        }
      }, {
        key: "removeWordFromDictionary",
        value: function removeWordFromDictionary(word) {
          this._store$.dispatch(Object(src_app_store_action_dictionary_action__WEBPACK_IMPORTED_MODULE_5__["removeWordFromDictionary"])({
            word: word
          }));
        }
      }, {
        key: "playAudio",
        value: function playAudio(word) {
          this.spinnerButtonOptions.active = true;

          this._store$.dispatch(Object(src_app_store_action_dictionary_action__WEBPACK_IMPORTED_MODULE_5__["changeWordStatus"])({
            word: word,
            isLoading: true
          }));

          this._store$.dispatch(Object(src_app_store_action_dictionary_action__WEBPACK_IMPORTED_MODULE_5__["getAudioSrc"])({
            word: word
          }));
        }
      }, {
        key: "getSpinnerButtonOptions",
        value: function getSpinnerButtonOptions(word) {
          return Object.assign(Object.assign({}, this.spinnerButtonOptions), {
            active: word.isLoading
          });
        }
      }]);

      return DictionaryComponent;
    }();

    DictionaryComponent.ɵfac = function DictionaryComponent_Factory(t) {
      return new (t || DictionaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service_data_game_service__WEBPACK_IMPORTED_MODULE_7__["DataGameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service_audio_service__WEBPACK_IMPORTED_MODULE_8__["AudioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]));
    };

    DictionaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DictionaryComponent,
      selectors: [["app-dictionary"]],
      viewQuery: function DictionaryComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      decls: 4,
      vars: 2,
      consts: [[1, "app-dictionary"], [1, "app-dictionary--container"], [4, "ngIf"], ["class", "app-dictionary--warning", 4, "ngIf"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "index"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "app-dictionary--index", 4, "matCellDef"], ["matColumnDef", "russianWord"], ["mat-cell", "", "class", "app-dictionary--word", 4, "matCellDef"], ["matColumnDef", "englishWord"], ["matColumnDef", "listen"], ["mat-header-cell", "", "class", "app-dictionary--sound", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "app-dictionary--sound", 4, "matCellDef"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "app-dictionary--remove", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "app-dictionary--remove", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", "", 1, "app-dictionary--index"], ["mat-cell", "", 1, "app-dictionary--word"], ["mat-header-cell", "", 1, "app-dictionary--sound"], ["mat-cell", "", 1, "app-dictionary--sound"], [1, "app-dictionary--spinner-btn", 3, "options", "click"], ["mat-header-cell", "", 1, "app-dictionary--remove"], ["mat-cell", "", 1, "app-dictionary--remove"], ["mat-raised-button", "", "color", "accent", 1, "app-dictionary--remove-btn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "app-dictionary--warning"]],
      template: function DictionaryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DictionaryComponent_div_2_Template, 20, 5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DictionaryComponent_div_3_Template, 3, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.filteredData.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource.filteredData.length === 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], mat_progress_buttons__WEBPACK_IMPORTED_MODULE_11__["MatSpinnerButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\n.app-dictionary[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 50px auto;\n}\n.app-dictionary--container[_ngcontent-%COMP%] {\n  width: 1200px;\n  margin: auto;\n}\n.app-dictionary--index[_ngcontent-%COMP%], .app-dictionary--word[_ngcontent-%COMP%], .app-dictionary--sound[_ngcontent-%COMP%], .app-dictionary--remove[_ngcontent-%COMP%] {\n  padding: 0.5em;\n}\n.app-dictionary--index[_ngcontent-%COMP%] {\n  width: 10%;\n}\n.app-dictionary--word[_ngcontent-%COMP%] {\n  width: 35%;\n}\n.app-dictionary--sound[_ngcontent-%COMP%], .app-dictionary--remove[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 10%;\n}\n.app-dictionary--warning[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  font-family: \"Roboto\", sans-serif;\n  color: #424242;\n  line-height: 2em;\n  text-align: center;\n}\n.mat-elevation-z8[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n}\n@media (max-width: 1440px) {\n  .app-dictionary--container[_ngcontent-%COMP%] {\n    width: 1000px;\n  }\n}\n@media (max-width: 1200px) {\n  .app-dictionary--container[_ngcontent-%COMP%] {\n    width: 800px;\n  }\n}\n@media (max-width: 998px) {\n  .app-dictionary--container[_ngcontent-%COMP%] {\n    width: 700px;\n  }\n}\n@media (max-width: 768px) {\n  .app-dictionary--container[_ngcontent-%COMP%] {\n    width: 520px;\n  }\n}\n@media (max-width: 550px) {\n  .app-dictionary--container[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n  .app-dictionary--remove-btn[_ngcontent-%COMP%], .app-dictionary--spinner-btn[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n    line-height: 2.2em;\n    min-width: 2em;\n    padding: 0.5em;\n    text-align: right;\n  }\n  .app-dictionary--index[_ngcontent-%COMP%], .app-dictionary--word[_ngcontent-%COMP%], .app-dictionary--sound[_ngcontent-%COMP%], .app-dictionary--remove[_ngcontent-%COMP%] {\n    padding: 0.2em;\n  }\n\n  td.mat-cell[_ngcontent-%COMP%]:last-of-type, th.mat-header-cell[_ngcontent-%COMP%]:last-of-type {\n    padding-right: 0.5em;\n  }\n\n  td.mat-cell[_ngcontent-%COMP%]:first-of-type, th.mat-header-cell[_ngcontent-%COMP%]:first-of-type {\n    padding-left: 0.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJnYXJpdGEvRG93bmxvYWRzL2xlYXJuLWVuZ2xpc2gvc3JjL2FwcC9jb21wb25lbnRzL2RpY3Rpb25hcnkvZGljdGlvbmFyeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9kaWN0aW9uYXJ5L2RpY3Rpb25hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsb0ZBQUE7QUFFUjtFQUNDLFdBQUE7RUFDQSxpQkFBQTtBQ0FEO0FER0c7RUFDRixhQUFBO0VBQ0EsWUFBQTtBQ0REO0FESUU7RUFJRCxjQUFBO0FDTEQ7QURPQztFQUNDLFVBQUE7QUNMRjtBRFFDO0VBQ0MsVUFBQTtBQ05GO0FEU0M7RUFFQyxrQkFBQTtFQUNBLFVBQUE7QUNSRjtBRFdDO0VBQ0MsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDVEY7QURhQztFQUNBLFdBQUE7RUFDQSxZQUFBO0FDVkQ7QURhQTtFQUVFO0lBQ0MsYUFBQTtFQ1hEO0FBQ0Y7QURlQTtFQUVFO0lBQ0MsWUFBQTtFQ2REO0FBQ0Y7QURrQkE7RUFFRTtJQUNDLFlBQUE7RUNqQkQ7QUFDRjtBRHFCQTtFQUVFO0lBQ0MsWUFBQTtFQ3BCRDtBQUNGO0FEeUJBO0VBRUU7SUFDQyxZQUFBO0VDeEJEO0VEMkJBO0lBRUMsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUMxQkQ7RUQ2QkE7SUFJRSxjQUFBO0VDOUJGOztFRGtDRDs7SUFFQyxvQkFBQTtFQy9CQTs7RURrQ0Q7O0lBRUMsbUJBQUE7RUMvQkE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGljdGlvbmFyeS9kaWN0aW9uYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4uYXBwLWRpY3Rpb25hcnkge1xuXHR3aWR0aDoxMDAlO1xuXHRtYXJnaW46NTBweCBhdXRvO1xuXG5cbiAgICYtLWNvbnRhaW5lciB7XG5cdHdpZHRoOjEyMDBweDtcblx0bWFyZ2luOiBhdXRvO1xuICAgfVxuXG4gXHQmLS1pbmRleCxcbiBcdCYtLXdvcmQsXG4gXHQmLS1zb3VuZCxcblx0Ji0tcmVtb3ZlIHtcblx0cGFkZGluZzowLjVlbTtcbn1cblx0Ji0taW5kZXgge1xuXHRcdHdpZHRoOjEwJTtcblx0fVxuXG5cdCYtLXdvcmQge1xuXHRcdHdpZHRoOjM1JTtcblx0fVxuXG5cdCYtLXNvdW5kLFxuXHQmLS1yZW1vdmUge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHR3aWR0aDoxMCU7XG5cdH1cblx0XHRcblx0Ji0td2FybmluZyB7XG5cdFx0Zm9udC1zaXplOiAxLjJlbTtcblx0XHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cdFx0Y29sb3I6IHJnYig2NiwgNjYsIDY2KTtcblx0XHRsaW5lLWhlaWdodDogMmVtO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxufVxuXG4gLm1hdC1lbGV2YXRpb24tejgge1xuXHR3aWR0aDoxMDAlO1xuXHRtYXJnaW46YXV0bztcbn0gICBcblxuQG1lZGlhIChtYXgtd2lkdGg6MTQ0MHB4KSB7XG4gICAgLmFwcC1kaWN0aW9uYXJ5IHtcblx0XHQmLS1jb250YWluZXIge1xuXHRcdFx0d2lkdGg6MTAwMHB4O1xuXHRcdCAgIH1cblx0XHR9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjEyMDBweCkge1xuXHQuYXBwLWRpY3Rpb25hcnkge1xuXHRcdCYtLWNvbnRhaW5lciB7XG5cdFx0XHR3aWR0aDo4MDBweDtcblx0XHQgICB9XG5cdFx0fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDo5OThweCkge1xuXHQuYXBwLWRpY3Rpb25hcnkge1xuXHRcdCYtLWNvbnRhaW5lciB7XG5cdFx0XHR3aWR0aDo3MDBweDtcblx0XHQgICB9XG5cdH1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcblx0LmFwcC1kaWN0aW9uYXJ5IHtcblx0XHQmLS1jb250YWluZXIge1xuXHRcdFx0d2lkdGg6NTIwcHg7XG5cdFx0fVxuXHR9XG59XG5cblxuQG1lZGlhKG1heC13aWR0aDogNTUwcHgpIHtcblx0LmFwcC1kaWN0aW9uYXJ5IHtcblx0XHQmLS1jb250YWluZXIge1xuXHRcdFx0d2lkdGg6MzUwcHg7XG5cdFx0ICAgfVxuXG5cdFx0Ji0tcmVtb3ZlLWJ0biAsXG5cdFx0Ji0tc3Bpbm5lci1idG4ge1xuXHRcdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0XHRcdGxpbmUtaGVpZ2h0OiAyLjJlbTsgXG5cdFx0XHRtaW4td2lkdGg6IDJlbTtcblx0XHRcdHBhZGRpbmc6MC41ZW07XG5cdFx0XHR0ZXh0LWFsaWduOiByaWdodDtcblx0XHQgICB9XG5cblx0XHQmLS1pbmRleCxcblx0XHQmLS13b3JkLFxuXHRcdCYtLXNvdW5kLFxuXHRcdCYtLXJlbW92ZSB7XG5cdFx0IFx0cGFkZGluZzowLjJlbTtcblx0ICBcdFx0fSBcblx0fVxuXHRcblx0dGQubWF0LWNlbGw6bGFzdC1vZi10eXBlLFxuXHR0aC5tYXQtaGVhZGVyLWNlbGw6bGFzdC1vZi10eXBlIHtcblx0XHRwYWRkaW5nLXJpZ2h0OiAwLjVlbTtcblx0fVxuXG5cdHRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUsXG5cdHRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1vZi10eXBlIHtcblx0XHRwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuXHR9XG5cdFxufVxuICIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuLmFwcC1kaWN0aW9uYXJ5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuLmFwcC1kaWN0aW9uYXJ5LS1jb250YWluZXIge1xuICB3aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uYXBwLWRpY3Rpb25hcnktLWluZGV4LCAuYXBwLWRpY3Rpb25hcnktLXdvcmQsIC5hcHAtZGljdGlvbmFyeS0tc291bmQsIC5hcHAtZGljdGlvbmFyeS0tcmVtb3ZlIHtcbiAgcGFkZGluZzogMC41ZW07XG59XG4uYXBwLWRpY3Rpb25hcnktLWluZGV4IHtcbiAgd2lkdGg6IDEwJTtcbn1cbi5hcHAtZGljdGlvbmFyeS0td29yZCB7XG4gIHdpZHRoOiAzNSU7XG59XG4uYXBwLWRpY3Rpb25hcnktLXNvdW5kLCAuYXBwLWRpY3Rpb25hcnktLXJlbW92ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwJTtcbn1cbi5hcHAtZGljdGlvbmFyeS0td2FybmluZyB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzQyNDI0MjtcbiAgbGluZS1oZWlnaHQ6IDJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWVsZXZhdGlvbi16OCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmFwcC1kaWN0aW9uYXJ5LS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmFwcC1kaWN0aW9uYXJ5LS1jb250YWluZXIge1xuICAgIHdpZHRoOiA4MDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5OHB4KSB7XG4gIC5hcHAtZGljdGlvbmFyeS0tY29udGFpbmVyIHtcbiAgICB3aWR0aDogNzAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYXBwLWRpY3Rpb25hcnktLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLmFwcC1kaWN0aW9uYXJ5LS1jb250YWluZXIge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgfVxuICAuYXBwLWRpY3Rpb25hcnktLXJlbW92ZS1idG4sIC5hcHAtZGljdGlvbmFyeS0tc3Bpbm5lci1idG4ge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuMmVtO1xuICAgIG1pbi13aWR0aDogMmVtO1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG4gIC5hcHAtZGljdGlvbmFyeS0taW5kZXgsIC5hcHAtZGljdGlvbmFyeS0td29yZCwgLmFwcC1kaWN0aW9uYXJ5LS1zb3VuZCwgLmFwcC1kaWN0aW9uYXJ5LS1yZW1vdmUge1xuICAgIHBhZGRpbmc6IDAuMmVtO1xuICB9XG5cbiAgdGQubWF0LWNlbGw6bGFzdC1vZi10eXBlLFxudGgubWF0LWhlYWRlci1jZWxsOmxhc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1yaWdodDogMC41ZW07XG4gIH1cblxuICB0ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlLFxudGgubWF0LWhlYWRlci1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctbGVmdDogMC41ZW07XG4gIH1cbn0iXX0= */"]
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
          type: _game_service_data_game_service__WEBPACK_IMPORTED_MODULE_7__["DataGameService"]
        }, {
          type: _game_service_audio_service__WEBPACK_IMPORTED_MODULE_8__["AudioService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }];
      }, {
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], {
            "static": true
          }]
        }]
      });
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


    var src_app_store_action_dictionary_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/action/dictionary.action */
    "./src/app/store/action/dictionary.action.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_store_action_game_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/store/action/game.action */
    "./src/app/store/action/game.action.ts");
    /* harmony import */


    var src_app_store_selectors_game_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/store/selectors/game.selectors */
    "./src/app/store/selectors/game.selectors.ts");
    /* harmony import */


    var src_app_store_action_profile_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/store/action/profile.actions */
    "./src/app/store/action/profile.actions.ts");
    /* harmony import */


    var src_app_store_selectors_profile_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/store/selectors/profile.selectors */
    "./src/app/store/selectors/profile.selectors.ts");
    /* harmony import */


    var _service_data_game_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./service/data-game.service */
    "./src/app/components/game/service/data-game.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _profile_service_profile_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../profile/service/profile.service */
    "./src/app/components/profile/service/profile.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function GameComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-profile", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSaved", function GameComponent_div_1_Template_app_profile_onSaved_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.onSaved();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function GameComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.startTimer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "GAME.BUTTON-START"));
      }
    }

    function GameComponent_div_5_button_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_5_button_26_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var wordRu_r9 = ctx.$implicit;
          var i_r10 = ctx.index;

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.checkAnswer(wordRu_r9, i_r10);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var wordRu_r9 = ctx.$implicit;
        var i_r10 = ctx.index;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r8.color[i_r10]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](wordRu_r9);
      }
    }

    function GameComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "mat-progress-spinner", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, GameComponent_div_5_button_26_Template, 2, 2, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 15, ctx_r2.randomRival$).src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 17, ctx_r2.randomRival$).nickname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", ctx_r2.mode)("value", ctx_r2.valueProgressSpinner)("strokeWidth", ctx_r2.strokeWidth)("diameter", ctx_r2.diameter);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.count);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 19, ctx_r2.User$).src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 21, ctx_r2.User$).nickname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 23, ctx_r2.word$).englishWord);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r2.selectedAnswer === "true" ? "block" : "none");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r2.selectedAnswer === "false" ? "block" : "none");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 25, ctx_r2.answers$));
      }
    }

    var _c0 = function _c0(a0) {
      return {
        win: a0
      };
    };

    function GameComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_7_Template_button_click_47_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.goToDictionary("/dictionary");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameComponent_div_7_Template_button_click_50_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.startTimer();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](45, _c0, ctx_r3.resultAllGame === "GAME.RESULT_WIN"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r3.resultAllGame === "GAME.RESULT_WIN" ? "green" : "red");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 21, ctx_r3.resultAllGame), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 23, ctx_r3.randomRival$).src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 25, ctx_r3.randomRival$).nickname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 27, "GAME.TRUE-ANSWER"), ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.correctAnswerRival);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 29, "GAME.WRONG-ANSWER"), ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.wrongAnserRival);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r3.resultAllGame === "GAME.RESULT_WIN" ? "green" : "red");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 31, ctx_r3.resultAllGame), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 33, ctx_r3.User$).src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 35, ctx_r3.User$).nickname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 37, "GAME.TRUE-ANSWER"), ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.correctAnswer);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 39, "GAME.WRONG-ANSWER"), ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.wrongAnswer);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 41, "GAME.BUTTON-LEARN"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 43, "GAME.BUTTON-REPEAT"));
      }
    }

    var GameComponent = /*#__PURE__*/function () {
      function GameComponent(dataGameService, router, translate, profileService, _store$) {
        _classCallCheck(this, GameComponent);

        this.dataGameService = dataGameService;
        this.router = router;
        this.translate = translate;
        this.profileService = profileService;
        this._store$ = _store$;
        this.gameStatus$ = this._store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(src_app_store_selectors_game_selectors__WEBPACK_IMPORTED_MODULE_6__["selectStatusGame"]));
        this.word$ = this._store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(src_app_store_selectors_game_selectors__WEBPACK_IMPORTED_MODULE_6__["selectWord"]));
        this.answers$ = this._store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(src_app_store_selectors_game_selectors__WEBPACK_IMPORTED_MODULE_6__["selectAnswers"]));
        this.randomRival$ = this._store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(src_app_store_selectors_profile_selectors__WEBPACK_IMPORTED_MODULE_8__["selectRivalProfile"]));
        this.User$ = this._store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(src_app_store_selectors_profile_selectors__WEBPACK_IMPORTED_MODULE_8__["selectUserProfile"]));
        this.count = null;
        this.sec = 1000;
        this.resultDuration = 200;
        this.correctAnswer = 0;
        this.wrongAnswer = 0;
        this.timeRound = 30;
        this.arrayForDictionary = [];
        this.color = {};
        this.selectedAnswer = '';
        this.allAnswerRival = 30;
        this.correctAnswerRival = 0;
        this.wrongAnserRival = 0;
        this.resultAllGame = null;
        this.mode = 'determinate';
        this.showText = this.count;
        this.strokeWidth = 15;
        this.diameter = 120;
        translate.addLangs(['en', 'ru']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
      }

      _createClass(GameComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.profileService.loadAvatarHttp().subscribe(function () {
            _this2._store$.dispatch(Object(src_app_store_action_profile_actions__WEBPACK_IMPORTED_MODULE_7__["getProfileUserFromLS"])({}));

            _this2._store$.dispatch(Object(src_app_store_action_profile_actions__WEBPACK_IMPORTED_MODULE_7__["getRivalProfile"])({}));

            if (typeof _this2.profileService.getProfileFromLS().id === 'number') {
              _this2._store$.dispatch(Object(src_app_store_action_game_action__WEBPACK_IMPORTED_MODULE_5__["setGameStatus"])({
                gameStatus: 'start'
              }));
            } else {
              _this2._store$.dispatch(Object(src_app_store_action_game_action__WEBPACK_IMPORTED_MODULE_5__["setGameStatus"])({
                gameStatus: 'profile'
              }));
            }
          });
        }
      }, {
        key: "game",
        value: function game() {
          this._store$.dispatch(Object(src_app_store_action_game_action__WEBPACK_IMPORTED_MODULE_5__["setGameStatus"])({
            gameStatus: 'game'
          }));

          this._store$.dispatch(Object(src_app_store_action_game_action__WEBPACK_IMPORTED_MODULE_5__["getNewQuestion"])({}));
        }
      }, {
        key: "checkAnswer",
        value: function checkAnswer(answer, index) {
          var _this3 = this;

          this.word$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (word) {
            if (answer === word.russianWord) {
              _this3.selectedAnswer = 'true';
              _this3.correctAnswer++;
              _this3.color = _defineProperty({}, index, {
                background: 'green'
              });
            } else {
              _this3.selectedAnswer = 'false';
              _this3.wrongAnswer++;

              _this3.arrayForDictionary.push(word);

              _this3.color = _defineProperty({}, index, {
                background: 'red'
              });
            }

            Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_this3.color).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(_this3.resultDuration)).subscribe(function () {
              _this3.color = {};
              _this3.selectedAnswer = '';
            });

            _this3.game();
          });
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this4 = this;

          this.correctAnswer = 0;
          this.wrongAnswer = 0;
          this.correctAnswerRival = 0;
          this.wrongAnserRival = 0;
          this.game();
          this.count = this.timeRound;
          var newLocal_1 = 100;
          this.valueProgressSpinner = newLocal_1;
          Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(this.sec).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(this.timeRound)).subscribe(function (count) {
            count = _this4.timeRound - (count + 1);
            _this4.count = count;
            var valueSpinner = 100;
            _this4.valueProgressSpinner = valueSpinner / _this4.timeRound * count;

            if (_this4.count <= 0) {
              _this4._store$.dispatch(Object(src_app_store_action_game_action__WEBPACK_IMPORTED_MODULE_5__["setGameStatus"])({
                gameStatus: 'complete'
              }));

              _this4.count = null;

              _this4.resultGameRival();

              _this4.resultGame();

              _this4.dataGameService.addWordsDictionary(_this4.arrayForDictionary);

              _this4._store$.dispatch(Object(src_app_store_action_dictionary_action__WEBPACK_IMPORTED_MODULE_3__["getWordsFromLS"])({}));
            }
          });
        }
      }, {
        key: "goToDictionary",
        value: function goToDictionary(pageName) {
          this.router.navigate(["".concat(pageName)]);
        }
      }, {
        key: "onSaved",
        value: function onSaved() {
          this._store$.dispatch(Object(src_app_store_action_game_action__WEBPACK_IMPORTED_MODULE_5__["setGameStatus"])({
            gameStatus: 'start'
          }));

          this._store$.dispatch(Object(src_app_store_action_profile_actions__WEBPACK_IMPORTED_MODULE_7__["getProfileUserFromLS"])({}));
        }
      }, {
        key: "resultGameRival",
        value: function resultGameRival() {
          var minAnswerRival = 15;
          this.correctAnswerRival = Math.floor(Math.random() * (this.allAnswerRival - minAnswerRival) + minAnswerRival);
          this.wrongAnserRival = this.allAnswerRival - this.correctAnswerRival;
        }
      }, {
        key: "resultGame",
        value: function resultGame() {
          var totalPoints = this.correctAnswer - this.wrongAnswer * 2;
          var totalPointRival = this.correctAnswerRival - this.wrongAnserRival * 2;

          if (totalPoints > totalPointRival) {
            this.resultAllGame = 'GAME.RESULT_WIN';
          } else if (totalPoints < totalPointRival) {
            this.resultAllGame = 'GAME.RESULT_FAIL';
          } else {
            this.resultAllGame = 'GAME.RESULT_DRAW';
          }
        }
      }]);

      return GameComponent;
    }();

    GameComponent.ɵfac = function GameComponent_Factory(t) {
      return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_game_service__WEBPACK_IMPORTED_MODULE_9__["DataGameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_profile_service_profile_service__WEBPACK_IMPORTED_MODULE_12__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]));
    };

    GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GameComponent,
      selectors: [["app-game"]],
      decls: 9,
      vars: 12,
      consts: [[1, "app-game"], ["class", "app-game--container-profile", 4, "ngIf"], ["class", "app-game--container-start", 4, "ngIf"], ["class", "app-game--container-game", 4, "ngIf"], ["class", "app-game--container-complete", 4, "ngIf"], [1, "app-game--container-profile"], [3, "onSaved"], [1, "app-game--container-start"], [1, "app-game--btn-start", 3, "click"], [1, "app-game--ball"], [1, "app-game--container-game"], [1, "app-game--container-avatar"], [1, "app-game--avatar"], [3, "src"], [1, "app-game--nickname"], [1, "app-game--spinner"], ["aria-label", "showText", 3, "mode", "value", "strokeWidth", "diameter"], [1, "app-game--count"], [1, "app-game--word-english"], [1, "app-game--hidden-content"], ["src", "./assets/img/checkmark.png", "alt", "checkmark", 1, "app-game--checkmark"], ["src", "./assets/img/close.svg.png", "alt", "checkmark", 1, "app-game--close"], ["mat-stroked-button", "", "class", "app-game--btn-answer", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], ["mat-stroked-button", "", 1, "app-game--btn-answer", 3, "ngStyle", "click"], [1, "app-game--container-complete"], [3, "ngClass"], [1, "app-game--result-game"], [1, "app-game--result-text-complete"], [1, "app-game--game-outcome"], [1, "app-game--avatar-complete"], [1, "app-game--result"], [1, "app-game--answer"], [1, "app-game--result-text"], ["mat-raised-button", "", "color", "accent", 1, "app-game--btn-complete", 3, "click"], ["mat-raised-button", "", "color", "primary", 1, "app-game--btn-complete", 3, "click"]],
      template: function GameComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameComponent_div_1_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GameComponent_div_3_Template, 5, 3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameComponent_div_5_Template, 28, 27, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GameComponent_div_7_Template, 53, 47, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, ctx.gameStatus$) === "profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx.gameStatus$) === "start");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, ctx.gameStatus$) === "game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 10, ctx.gameStatus$) === "complete");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\n.app-game[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-family: \"Roboto\", sans-serif;\n  width: 100%;\n  min-width: 360px;\n}\n.app-game--container-start[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  min-width: 360px;\n}\n.app-game--container-game[_ngcontent-%COMP%], .app-game--container-complete[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 1200px;\n  margin-top: 50px;\n}\n.app-game--count[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 1.2em;\n  left: 50px;\n  bottom: 70px;\n  color: #414141;\n}\n.app-game--btn-start[_ngcontent-%COMP%] {\n  margin-top: 7em;\n  font-size: 1.8em;\n  color: whitesmoke;\n  text-shadow: 0 -1px rgba(0, 0, 0, 0.1);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 0.5em;\n  outline: none;\n  border: none;\n  border-radius: 6px;\n  background: #d25fb8 linear-gradient(#d182c0, #a212a7);\n  box-shadow: inset #f027e6 0 -1px 1px, inset 0 1px 1px #f698ff, #a63caa 0 0 0 1px, rgba(0, 0, 0, 0.3) 0 2px 5px;\n  -webkit-animation: pulsate 1.2s linear infinite;\n  animation: pulsate 1.2s linear infinite;\n}\n.app-game--btn-start[_ngcontent-%COMP%]:hover {\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n  cursor: pointer;\n}\n.app-game--btn-start[_ngcontent-%COMP%]:active {\n  top: 1px;\n  color: #fff;\n  text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;\n  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.3), 0 1px 1px #fff, inset 0 1px 2px rgba(0, 0, 0, 0.8), inset 0 -1px 0 rgba(0, 0, 0, 0.05);\n}\n@-webkit-keyframes pulsate {\n  50% {\n    color: #fff;\n    text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;\n  }\n}\n@keyframes pulsate {\n  50% {\n    color: #fff;\n    text-shadow: 0 -1px rgba(0, 0, 0, 0.3), 0 0 5px #ffd, 0 0 8px #fff;\n  }\n}\n.app-game--word-english[_ngcontent-%COMP%] {\n  font-size: 2.5em;\n  font-weight: 800;\n  color: #414141;\n  text-align: center;\n  padding: 0.5em 0;\n}\n.app-game--btn-answer[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.6em;\n  width: 14em;\n  margin: 0.5em;\n  color: #414141;\n  padding: 0.2em;\n}\n.app-game--btn-complete[_ngcontent-%COMP%] {\n  display: block;\n  width: 14em;\n  margin: 0.5em auto;\n  font-size: 1.6em;\n  padding: 0.2em;\n}\n.app-game--answer[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  color: #363636;\n  padding: 0.2em;\n}\n.app-game--checkmark[_ngcontent-%COMP%], .app-game--close[_ngcontent-%COMP%] {\n  width: 5em;\n  height: auto;\n  position: absolute;\n}\n.app-game--hidden-content[_ngcontent-%COMP%] {\n  width: 5em;\n  height: 5em;\n  margin: auto;\n}\n.app-game--avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .app-game--avatar-complete[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 12em;\n  height: 12em;\n}\n.app-game--result-text-complete[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 1.4em;\n  text-align: center;\n  margin: 0.2em 0;\n}\n.app-game--container-avatar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n.app-game--nickname[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n  margin: 1em 0;\n  text-align: center;\n  color: #363636;\n}\n.app-game--spinner[_ngcontent-%COMP%] {\n  margin: 0 50px;\n}\n.app-game--result-game[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.app-game--game-outcome[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 20px 40px 20px;\n}\n.app-game--result-text[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2em;\n}\n.app-game--container-ball[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.app-game--ball[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  line-height: 50px;\n  border: 5px solid purple;\n  position: relative;\n  -webkit-animation: combined 5s linear infinite;\n          animation: combined 5s linear infinite;\n  left: 0;\n  top: 0;\n}\n .mat-progress-spinner circle, .mat-spinner[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #d25fb8 !important;\n}\n@-webkit-keyframes combined {\n  16%, 48%, 78% {\n    top: 280px;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  32% {\n    top: 50px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  62% {\n    top: 120px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0.8;\n  }\n  82% {\n    top: 120px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0.6;\n  }\n  90% {\n    top: 120px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0;\n  }\n  100% {\n    transform: rotate(360deg);\n    top: 160px;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    left: 100%;\n    opacity: 0;\n  }\n}\n@keyframes combined {\n  16%, 48%, 78% {\n    top: 280px;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  32% {\n    top: 50px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  62% {\n    top: 120px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0.8;\n  }\n  82% {\n    top: 120px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0.6;\n  }\n  90% {\n    top: 120px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0;\n  }\n  100% {\n    transform: rotate(360deg);\n    top: 160px;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    left: 100%;\n    opacity: 0;\n  }\n}\n.win[_ngcontent-%COMP%] {\n  background-image: url('win.png');\n  background-size: cover;\n}\n@media (max-width: 1440px) {\n  .app-game--btn-start[_ngcontent-%COMP%] {\n    font-size: 1.4em;\n  }\n  .app-game--word-english[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n  .app-game--btn-answer[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    margin: 0.2em;\n    padding: 0.2em;\n  }\n  .app-game--btn-complete[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n  .app-game--checkmark[_ngcontent-%COMP%], .app-game--close[_ngcontent-%COMP%] {\n    width: 4em;\n    height: auto;\n  }\n  .app-game--hidden-content[_ngcontent-%COMP%] {\n    width: 4em;\n    height: 4em;\n  }\n  .app-game--avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .app-game--avatar-complete[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 10em;\n    height: 10em;\n  }\n  .app-game--nickname[_ngcontent-%COMP%] {\n    font-size: 1.4em;\n    margin: 0.5em 0;\n  }\n}\n@media (max-width: 1200px) {\n  .app-game--btn-start[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n  .app-game--word-english[_ngcontent-%COMP%] {\n    font-size: 1.8em;\n    padding: 0.2em 0;\n  }\n  .app-game--btn-complete[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n  .app-game--answer[_ngcontent-%COMP%] {\n    font-size: 1em;\n    padding: 0.1em;\n  }\n  .app-game--checkmark[_ngcontent-%COMP%], .app-game--close[_ngcontent-%COMP%] {\n    width: 3em;\n    height: auto;\n  }\n  .app-game--hidden-content[_ngcontent-%COMP%] {\n    width: 3em;\n    height: 3em;\n  }\n  .app-game--avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .app-game--avatar-complete[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 8em;\n    height: 8em;\n  }\n  .app-game--nickname[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n  .app-game--result-text[_ngcontent-%COMP%] {\n    font-size: 1.4em;\n  }\n\n  @-webkit-keyframes combined {\n    16%, 48%, 78% {\n      top: 200px;\n      -webkit-animation-timing-function: ease-out;\n              animation-timing-function: ease-out;\n    }\n    32% {\n      top: 50px;\n      -webkit-animation-timing-function: ease-in;\n              animation-timing-function: ease-in;\n    }\n    62% {\n      top: 100px;\n      -webkit-animation-timing-function: ease-in;\n              animation-timing-function: ease-in;\n      opacity: 0.8;\n    }\n    82% {\n      top: 100px;\n      -webkit-animation-timing-function: ease-in;\n              animation-timing-function: ease-in;\n      opacity: 0.6;\n    }\n    90% {\n      top: 100px;\n      -webkit-animation-timing-function: ease-in;\n              animation-timing-function: ease-in;\n      opacity: 0;\n    }\n    100% {\n      transform: rotate(360deg);\n      top: 120px;\n      -webkit-animation-timing-function: ease-out;\n              animation-timing-function: ease-out;\n      left: 100%;\n      opacity: 0;\n    }\n  }\n\n  @keyframes combined {\n    16%, 48%, 78% {\n      top: 200px;\n      -webkit-animation-timing-function: ease-out;\n              animation-timing-function: ease-out;\n    }\n    32% {\n      top: 50px;\n      -webkit-animation-timing-function: ease-in;\n              animation-timing-function: ease-in;\n    }\n    62% {\n      top: 100px;\n      -webkit-animation-timing-function: ease-in;\n              animation-timing-function: ease-in;\n      opacity: 0.8;\n    }\n    82% {\n      top: 100px;\n      -webkit-animation-timing-function: ease-in;\n              animation-timing-function: ease-in;\n      opacity: 0.6;\n    }\n    90% {\n      top: 100px;\n      -webkit-animation-timing-function: ease-in;\n              animation-timing-function: ease-in;\n      opacity: 0;\n    }\n    100% {\n      transform: rotate(360deg);\n      top: 120px;\n      -webkit-animation-timing-function: ease-out;\n              animation-timing-function: ease-out;\n      left: 100%;\n      opacity: 0;\n    }\n  }\n}\n@media (max-width: 768px) {\n  .app-game--count[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n  .app-game--word-english[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n  }\n  .app-game--btn-answer[_ngcontent-%COMP%] {\n    font-size: 1em;\n    padding: 0.1em;\n  }\n  .app-game--btn-complete[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n  }\n  .app-game--answer[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n    padding: 0;\n    margin: 0;\n  }\n  .app-game--checkmark[_ngcontent-%COMP%], .app-game--close[_ngcontent-%COMP%] {\n    width: 3em;\n    height: auto;\n  }\n  .app-game--avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .app-game--avatar-complete[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 7em;\n    height: 7em;\n  }\n  .app-game--result-text[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n  .app-game--ball[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n  .app-game--spinner[_ngcontent-%COMP%] {\n    margin: 0 30px;\n  }\n}\n@media (max-width: 550px) {\n  .app-game--count[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n  .app-game--word-english[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n  }\n  .app-game--btn-answer[_ngcontent-%COMP%] {\n    font-size: 1em;\n    padding: 0.1em;\n  }\n  .app-game--answer[_ngcontent-%COMP%] {\n    font-size: 1em;\n    padding: 0.2em 0;\n    margin: 0;\n  }\n  .app-game--checkmark[_ngcontent-%COMP%], .app-game--close[_ngcontent-%COMP%] {\n    width: 3em;\n    height: auto;\n  }\n  .app-game--avatar-complete[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 4em;\n    height: auto;\n  }\n  .app-game--result-text[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    display: none;\n  }\n  .app-game--result-text-complete[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .app-game--ball[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 100px;\n  }\n  .app-game--game-outcome[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: start;\n    margin: 1em;\n  }\n  .app-game--result-game[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .app-game--nickname[_ngcontent-%COMP%] {\n    font-size: 1em;\n    margin: 0.2em;\n  }\n  .app-game--result[_ngcontent-%COMP%] {\n    margin-left: 0.5em;\n  }\n  .app-game--spinner[_ngcontent-%COMP%] {\n    margin: 0 10px;\n  }\n  .app-game--avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 6em;\n    height: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJnYXJpdGEvRG93bmxvYWRzL2xlYXJuLWVuZ2xpc2gvc3JjL2FwcC9jb21wb25lbnRzL2dhbWUvZ2FtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9nYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsb0ZBQUE7QUFFUjtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQUQ7QURFQztFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQUQ7QURHQztFQUVDLGFBQUE7RUFDQSxzQkFBQTtFQUNDLG1CQUFBO0VBQ0QsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNGRjtBREtDO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0hGO0FETUM7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0EsOEdBQUE7RUFDQSwrQ0FBQTtFQUNBLHVDQUFBO0FDSkY7QURPQztFQUNDLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxlQUFBO0FDTEY7QURPRztFQUNELFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0VBQUE7RUFDQSxpSUFBQTtBQ0xGO0FET0c7RUFDRDtJQUFLLFdBQUE7SUFBYSxrRUFBQTtFQ0hsQjtBQUNGO0FESUc7RUFDRDtJQUFLLFdBQUE7SUFBYSxrRUFBQTtFQ0FsQjtBQUNGO0FERUc7RUFDRCxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBRjtBREdHO0VBQ0QsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0RGO0FESUc7RUFDRCxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRkY7QURLRztFQUNELGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNIRjtBRE1HO0VBRUQsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0xGO0FEUUc7RUFDRCxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNORjtBRFNHO0VBRUQsV0FBQTtFQUNBLFlBQUE7QUNSRjtBRFdHO0VBQ0QsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDVEY7QURZRztFQUNELGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNWRjtBRGFHO0VBQ0QsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDWEY7QURjRztFQUNELGNBQUE7QUNaRjtBRGVHO0VBQ0QsYUFBQTtFQUNBLG1CQUFBO0FDYkY7QURnQkc7RUFDRCxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUNkRjtBRGlCRztFQUNELGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ2ZGO0FEa0JFO0VBQ0EsV0FBQTtBQ2hCRjtBRG1CQztFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNGLE9BQUE7RUFDRCxNQUFBO0FDakJGO0FEc0JBOztFQUVDLDBCQUFBO0FDbkJEO0FEc0JBO0VBQ0k7SUFDRixVQUFBO0lBQ00sMkNBQUE7WUFBQSxtQ0FBQTtFQ25CTjtFRHFCRTtJQUNJLFNBQUE7SUFDQSwwQ0FBQTtZQUFBLGtDQUFBO0VDbkJOO0VEcUJFO0lBQ0ksVUFBQTtJQUNOLDBDQUFBO1lBQUEsa0NBQUE7SUFDQSxZQUFBO0VDbkJBO0VEcUJEO0lBQ08sVUFBQTtJQUNOLDBDQUFBO1lBQUEsa0NBQUE7SUFDQSxZQUFBO0VDbkJBO0VEcUJFO0lBQ0ksVUFBQTtJQUNOLDBDQUFBO1lBQUEsa0NBQUE7SUFDQSxVQUFBO0VDbkJBO0VEc0JFO0lBQ0kseUJBQUE7SUFDQSxVQUFBO0lBQ0EsMkNBQUE7WUFBQSxtQ0FBQTtJQUNOLFVBQUE7SUFDQSxVQUFBO0VDcEJBO0FBQ0Y7QURYQTtFQUNJO0lBQ0YsVUFBQTtJQUNNLDJDQUFBO1lBQUEsbUNBQUE7RUNuQk47RURxQkU7SUFDSSxTQUFBO0lBQ0EsMENBQUE7WUFBQSxrQ0FBQTtFQ25CTjtFRHFCRTtJQUNJLFVBQUE7SUFDTiwwQ0FBQTtZQUFBLGtDQUFBO0lBQ0EsWUFBQTtFQ25CQTtFRHFCRDtJQUNPLFVBQUE7SUFDTiwwQ0FBQTtZQUFBLGtDQUFBO0lBQ0EsWUFBQTtFQ25CQTtFRHFCRTtJQUNJLFVBQUE7SUFDTiwwQ0FBQTtZQUFBLGtDQUFBO0lBQ0EsVUFBQTtFQ25CQTtFRHNCRTtJQUNJLHlCQUFBO0lBQ0EsVUFBQTtJQUNBLDJDQUFBO1lBQUEsbUNBQUE7SUFDTixVQUFBO0lBQ0EsVUFBQTtFQ3BCQTtBQUNGO0FEc0JBO0VBQ0ksZ0NBQUE7RUFDSCxzQkFBQTtBQ3BCRDtBRHdCQTtFQUVFO0lBQ0MsZ0JBQUE7RUN0QkQ7RUR5QkE7SUFDQyxjQUFBO0VDdkJEO0VEMEJFO0lBQ0QsZ0JBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtFQ3hCRDtFRDJCRTtJQUNELGdCQUFBO0VDekJEO0VENEJFO0lBRUQsVUFBQTtJQUNBLFlBQUE7RUMzQkQ7RUQ4QkU7SUFDQyxVQUFBO0lBQ0EsV0FBQTtFQzVCSDtFRCtCRTtJQUVDLFdBQUE7SUFDQSxZQUFBO0VDOUJIO0VEaUNFO0lBQ0MsZ0JBQUE7SUFDQSxlQUFBO0VDL0JIO0FBQ0Y7QURxQ0E7RUFFRTtJQUNDLGdCQUFBO0VDcENEO0VEdUNBO0lBQ0MsZ0JBQUE7SUFDQSxnQkFBQTtFQ3JDRDtFRHdDRTtJQUNELGNBQUE7RUN0Q0Q7RUR5Q0E7SUFDQyxjQUFBO0lBQ0EsY0FBQTtFQ3ZDRDtFRDBDRTtJQUVELFVBQUE7SUFDQSxZQUFBO0VDekNEO0VENENFO0lBQ0MsVUFBQTtJQUNBLFdBQUE7RUMxQ0g7RUQ2Q0U7SUFFQyxVQUFBO0lBQ0EsV0FBQTtFQzVDSDtFRGdERTtJQUNDLGdCQUFBO0VDOUNIO0VEaURFO0lBQ0QsZ0JBQUE7RUMvQ0Q7O0VEb0RGO0lBQ0k7TUFDRixVQUFBO01BQ08sMkNBQUE7Y0FBQSxtQ0FBQTtJQ2pETDtJRG1EQTtNQUNJLFNBQUE7TUFDSCwwQ0FBQTtjQUFBLGtDQUFBO0lDakREO0lEbURBO01BQ0ksVUFBQTtNQUNILDBDQUFBO2NBQUEsa0NBQUE7TUFDSCxZQUFBO0lDakRFO0lEbURIO01BQ08sVUFBQTtNQUNMLDBDQUFBO2NBQUEsa0NBQUE7TUFDRCxZQUFBO0lDakRFO0lEbURBO01BQ0ksVUFBQTtNQUNMLDBDQUFBO2NBQUEsa0NBQUE7TUFDRCxVQUFBO0lDakRFO0lEb0RBO01BQ0cseUJBQUE7TUFDQyxVQUFBO01BQ0EsMkNBQUE7Y0FBQSxtQ0FBQTtNQUNOLFVBQUE7TUFDQSxVQUFBO0lDbERFO0VBQ0Y7O0VEbUJGO0lBQ0k7TUFDRixVQUFBO01BQ08sMkNBQUE7Y0FBQSxtQ0FBQTtJQ2pETDtJRG1EQTtNQUNJLFNBQUE7TUFDSCwwQ0FBQTtjQUFBLGtDQUFBO0lDakREO0lEbURBO01BQ0ksVUFBQTtNQUNILDBDQUFBO2NBQUEsa0NBQUE7TUFDSCxZQUFBO0lDakRFO0lEbURIO01BQ08sVUFBQTtNQUNMLDBDQUFBO2NBQUEsa0NBQUE7TUFDRCxZQUFBO0lDakRFO0lEbURBO01BQ0ksVUFBQTtNQUNMLDBDQUFBO2NBQUEsa0NBQUE7TUFDRCxVQUFBO0lDakRFO0lEb0RBO01BQ0cseUJBQUE7TUFDQyxVQUFBO01BQ0EsMkNBQUE7Y0FBQSxtQ0FBQTtNQUNOLFVBQUE7TUFDQSxVQUFBO0lDbERFO0VBQ0Y7QUFDRjtBRHVEQTtFQUVDO0lBQ0MsY0FBQTtFQ3REQTtFRHlERDtJQUNDLGdCQUFBO0VDdkRBO0VEMEREO0lBQ0MsY0FBQTtJQUNBLGNBQUE7RUN4REE7RUQyREU7SUFDRixnQkFBQTtFQ3pEQTtFRDREQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtJQUNBLFNBQUE7RUMxREE7RUQ2REU7SUFFRixVQUFBO0lBQ0EsWUFBQTtFQzVEQTtFRCtERTtJQUVGLFVBQUE7SUFDQSxXQUFBO0VDOURBO0VEaUVFO0lBQ0YsZ0JBQUE7RUMvREE7RURrRUU7SUFDRixZQUFBO0lBQ0EsYUFBQTtFQ2hFQTtFRGtFRztJQUNILGNBQUE7RUNoRUE7QUFDRjtBRHNFQTtFQUVFO0lBQ0MsY0FBQTtFQ3JFRDtFRHdFQTtJQUNDLGdCQUFBO0VDdEVEO0VEeUVBO0lBQ0MsY0FBQTtJQUNBLGNBQUE7RUN2RUQ7RUQwRUM7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxTQUFBO0VDeEVEO0VEMkVHO0lBRUYsVUFBQTtJQUNBLFlBQUE7RUMxRUQ7RUQ2RUE7SUFDQyxVQUFBO0lBQ0EsWUFBQTtFQzNFRDtFRDhFQTtJQUNDLGdCQUFBO0lBQ0EsYUFBQTtFQzVFRDtFRCtFQTtJQUNJLGNBQUE7RUM3RUo7RURnRkE7SUFDQyxZQUFBO0lBQ0EsYUFBQTtFQzlFRDtFRGlGQTtJQUNDLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsV0FBQTtFQy9FRDtFRGtGRTtJQUNELGFBQUE7SUFDQSxzQkFBQTtFQ2hGRDtFRG9GRTtJQUNELGNBQUE7SUFDQSxhQUFBO0VDbEZEO0VEcUZDO0lBQ0Esa0JBQUE7RUNuRkQ7RURzRkE7SUFDQyxjQUFBO0VDcEZEO0VEdUZBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUNyRkE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4uYXBwLWdhbWUge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cdHdpZHRoOjEwMCU7XG5cdG1pbi13aWR0aDozNjBweDtcblxuXHQmLS1jb250YWluZXItc3RhcnQge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOjEwMCU7IFxuXHRtaW4td2lkdGg6MzYwcHg7XG5cdH1cblxuXHQmLS1jb250YWluZXItZ2FtZSxcblx0Ji0tY29udGFpbmVyLWNvbXBsZXRlIHtcdFxuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiBcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHR3aWR0aDoxMjAwcHg7XG5cdFx0bWFyZ2luLXRvcDogNTBweDtcblx0fVxuXHRcblx0Ji0tY291bnQge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTsgXG5cdFx0Zm9udC1zaXplOiAxLjJlbTtcblx0XHRsZWZ0OjUwcHg7XG5cdFx0Ym90dG9tOjcwcHg7XG5cdFx0Y29sb3I6ICM0MTQxNDE7IFxuXHR9XG5cblx0Ji0tYnRuLXN0YXJ0IHtcblx0XHRtYXJnaW4tdG9wOiA3ZW07XG5cdFx0Zm9udC1zaXplOiAxLjhlbTtcblx0XHRjb2xvcjogcmdiKDI0NSwyNDUsMjQ1KTtcblx0XHR0ZXh0LXNoYWRvdzogMCAtMXB4IHJnYmEoMCwwLDAsLjEpO1xuXHRcdHVzZXItc2VsZWN0OiBub25lO1xuXHRcdHBhZGRpbmc6IDAuNWVtO1xuXHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0Ym9yZGVyOiBub25lO1xuXHRcdGJvcmRlci1yYWRpdXM6IDZweDtcblx0XHRiYWNrZ3JvdW5kOiByZ2IoMjEwLCA5NSwgMTg0KSBsaW5lYXItZ3JhZGllbnQoI2QxODJjMCwgI2EyMTJhNyk7XG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgI2YwMjdlNiAwIC0xcHggMXB4LCBpbnNldCAwIDFweCAxcHggI2Y2OThmZiwgI2E2M2NhYSAwIDAgMCAxcHgsIHJnYmEoMCwwLDAsLjMpIDAgMnB4IDVweDtcblx0XHQtd2Via2l0LWFuaW1hdGlvbjogcHVsc2F0ZSAxLjJzIGxpbmVhciBpbmZpbml0ZTtcblx0XHRhbmltYXRpb246IHB1bHNhdGUgMS4ycyBsaW5lYXIgaW5maW5pdGU7XG5cdH1cblxuXHQmLS1idG4tc3RhcnQ6aG92ZXIge1xuXHRcdGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG5cdFx0Y3Vyc29yOiBwb2ludGVyOyBcblx0ICB9XG5cdCAgJi0tYnRuLXN0YXJ0OmFjdGl2ZSB7XG5cdFx0dG9wOiAxcHg7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdFx0dGV4dC1zaGFkb3c6IDAgLTFweCByZ2JhKDAsMCwwLC4zKSwgMCAwIDVweCAjZmZkLCAwIDAgOHB4ICNmZmY7XG5cdFx0Ym94LXNoYWRvdzogMCAtMXB4IDNweCByZ2JhKDAsMCwwLC4zKSwgMCAxcHggMXB4ICNmZmYsIGluc2V0IDAgMXB4IDJweCByZ2JhKDAsMCwwLC44KSwgaW5zZXQgMCAtMXB4IDAgcmdiYSgwLDAsMCwuMDUpO1xuXHQgIH1cblx0ICBALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2F0ZSB7XG5cdFx0NTAlIHtjb2xvcjogI2ZmZjsgdGV4dC1zaGFkb3c6IDAgLTFweCByZ2JhKDAsMCwwLC4zKSwgMCAwIDVweCAjZmZkLCAwIDAgOHB4ICNmZmY7fVxuXHQgIH1cblx0ICBAa2V5ZnJhbWVzIHB1bHNhdGUge1xuXHRcdDUwJSB7Y29sb3I6ICNmZmY7IHRleHQtc2hhZG93OiAwIC0xcHggcmdiYSgwLDAsMCwuMyksIDAgMCA1cHggI2ZmZCwgMCAwIDhweCAjZmZmO31cblx0ICB9XG5cblx0ICAmLS13b3JkLWVuZ2xpc2gge1xuXHRcdGZvbnQtc2l6ZTogMi41ZW07XG5cdFx0Zm9udC13ZWlnaHQ6IDgwMDtcblx0XHRjb2xvcjogIzQxNDE0MTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0cGFkZGluZzogLjVlbSAwO1xuXHQgIH1cblxuXHQgICYtLWJ0bi1hbnN3ZXIge1xuXHRcdGRpc3BsYXk6YmxvY2s7XG5cdFx0Zm9udC1zaXplOjEuNmVtO1xuXHRcdHdpZHRoOiAxNGVtO1xuXHRcdG1hcmdpbjogLjVlbTtcblx0XHRjb2xvcjogIzQxNDE0MTtcblx0XHRwYWRkaW5nOjAuMmVtO1xuXHQgIH1cblxuXHQgICYtLWJ0bi1jb21wbGV0ZSB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0d2lkdGg6IDE0ZW07XG5cdFx0bWFyZ2luOiAuNWVtIGF1dG87XG5cdFx0Zm9udC1zaXplOjEuNmVtO1xuXHRcdHBhZGRpbmc6MC4yZW07XG5cdCAgfVxuXG5cdCAgJi0tYW5zd2VyIHtcblx0XHRmb250LXNpemU6IDEuNGVtO1xuXHRcdGNvbG9yOnJnYig1NCwgNTQsIDU0KTtcblx0XHRwYWRkaW5nOiAuMmVtO1xuXHQgIH1cblxuXHQgICYtLWNoZWNrbWFyayxcblx0ICAmLS1jbG9zZSB7XG5cdFx0d2lkdGg6NWVtO1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdCAgfVxuXG5cdCAgJi0taGlkZGVuLWNvbnRlbnQge1xuXHRcdHdpZHRoOjVlbTtcblx0XHRoZWlnaHQ6IDVlbTsgXG5cdFx0bWFyZ2luOiBhdXRvO1xuXHQgIH1cblxuXHQgICYtLWF2YXRhciBpbWcsXG5cdCAgJi0tYXZhdGFyLWNvbXBsZXRlIGltZ3tcblx0XHR3aWR0aDoxMmVtO1xuXHRcdGhlaWdodDoxMmVtO1xuXHQgIH1cblxuXHQgICYtLXJlc3VsdC10ZXh0LWNvbXBsZXRlIHtcblx0XHRkaXNwbGF5Om5vbmU7XG5cdFx0Zm9udC1zaXplOiAxLjRlbTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bWFyZ2luOiAuMmVtIDA7XG5cdH1cblxuXHQgICYtLWNvbnRhaW5lci1hdmF0YXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0IH0gXG5cblx0ICAmLS1uaWNrbmFtZSB7XG5cdFx0Zm9udC1zaXplOiAxLjhlbTtcblx0XHRtYXJnaW46IDFlbSAwO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRjb2xvcjpyZ2IoNTQsIDU0LCA1NCk7XG5cdCAgfVxuXG5cdCAgJi0tc3Bpbm5lciB7XG5cdFx0bWFyZ2luOjAgNTBweDtcblx0ICB9XG5cblx0ICAmLS1yZXN1bHQtZ2FtZSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHQgIH1cblxuXHQgICYtLWdhbWUtb3V0Y29tZSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0bWFyZ2luOiAwIDIwcHggNDBweCAyMHB4O1xuXHQgIH1cblxuXHQgICYtLXJlc3VsdC10ZXh0IHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0Zm9udC1zaXplOiAyZW07XG5cdCAgfVxuXG5cdCAmLS1jb250YWluZXItYmFsbCB7XG5cdFx0d2lkdGg6MTAwJTtcblx0ICB9IFxuXG5cdCYtLWJhbGwge1xuICAgIFx0d2lkdGg6MTIwcHg7XG4gICAgXHRoZWlnaHQ6MTIwcHg7XG4gICAgXHRsaW5lLWhlaWdodDo1MHB4O1xuICAgIFx0Ym9yZGVyOjVweCBzb2xpZCBwdXJwbGU7XG4gICAgXHRwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBcdGFuaW1hdGlvbjogY29tYmluZWQgNXMgbGluZWFyIGluZmluaXRlO1xuIFx0XHRsZWZ0OjA7XG5cdFx0dG9wOjA7IFxufVxuXG59XG5cbjo6bmctZGVlcC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciBjaXJjbGUsXG4ubWF0LXNwaW5uZXIgY2lyY2xlIHtcblx0c3Ryb2tlOiByZ2IoMjEwLCA5NSwgMTg0KSAhaW1wb3J0YW50O1xufSBcblxuQGtleWZyYW1lcyBjb21iaW5lZCB7XG4gICAgMTYlLCA0OCUsIDc4JSAge1xuXHRcdHRvcDogMjgwcHg7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgIH1cbiAgICAzMiUge1xuICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgfVxuICAgIDYyJSB7XG4gICAgICAgIHRvcDogMTIwcHg7XG5cdFx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcblx0XHRvcGFjaXR5OjAuODtcblx0fVxuXHQ4MiUge1xuICAgICAgICB0b3A6IDEyMHB4O1xuXHRcdGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG5cdFx0b3BhY2l0eTowLjY7XG4gICAgfVxuICAgIDkwJSB7XG4gICAgICAgIHRvcDogMTIwcHg7XG5cdFx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcblx0XHRvcGFjaXR5OjA7XG5cdH1cblxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICB0b3A6IDE2MHB4O1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcblx0XHRsZWZ0OjEwMCU7XG5cdFx0b3BhY2l0eTowO1xuICAgIH1cbn1cbi53aW4ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfnNyYy9hc3NldHMvaW1nL3dpbi5wbmcnKTtcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgXG59IFxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOjE0NDBweCkge1xuICAgIC5hcHAtZ2FtZSB7XG5cdFx0Ji0tYnRuLXN0YXJ0IHtcblx0XHRcdGZvbnQtc2l6ZTogMS40ZW07XG5cdFx0fVxuXG5cdFx0Ji0td29yZC1lbmdsaXNoIHtcblx0XHRcdGZvbnQtc2l6ZTogMmVtO1xuXHRcdCAgfVxuXHRcblx0XHQgICYtLWJ0bi1hbnN3ZXIge1xuXHRcdFx0Zm9udC1zaXplOjEuMmVtO1xuXHRcdFx0bWFyZ2luOiAuMmVtO1xuXHRcdFx0cGFkZGluZzowLjJlbTtcblx0XHQgIH1cblx0XG5cdFx0ICAmLS1idG4tY29tcGxldGUge1xuXHRcdFx0Zm9udC1zaXplOjEuMmVtO1xuXHRcdCAgfVxuXHRcblx0XHQgICYtLWNoZWNrbWFyayxcblx0XHQgICYtLWNsb3NlIHtcblx0XHRcdHdpZHRoOjRlbTtcblx0XHRcdGhlaWdodDogYXV0bztcblx0XHQgIH1cblx0XG5cdFx0ICAmLS1oaWRkZW4tY29udGVudCB7XG5cdFx0XHQgIHdpZHRoOjRlbTtcblx0XHRcdCAgaGVpZ2h0OiA0ZW07IFxuXHRcdCAgfVxuXHRcblx0XHQgICYtLWF2YXRhciBpbWcsXG5cdFx0ICAmLS1hdmF0YXItY29tcGxldGUgaW1ne1xuXHRcdFx0ICB3aWR0aDoxMGVtO1xuXHRcdFx0ICBoZWlnaHQ6MTBlbTtcblx0XHQgIH1cblxuXHRcdCAgJi0tbmlja25hbWUge1xuXHRcdFx0ICBmb250LXNpemU6IDEuNGVtO1xuXHRcdFx0ICBtYXJnaW46IDAuNWVtIDA7XG5cdFx0ICB9XG5cdH1cblxufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOjEyMDBweCkge1xuXHQgLmFwcC1nYW1lIHtcblx0XHQmLS1idG4tc3RhcnQge1xuXHRcdFx0Zm9udC1zaXplOiAxLjJlbTtcblx0XHR9XG5cblx0XHQmLS13b3JkLWVuZ2xpc2gge1xuXHRcdFx0Zm9udC1zaXplOiAxLjhlbTtcblx0XHRcdHBhZGRpbmc6IC4yZW0gMDtcblx0XHQgIH1cblx0XG5cdFx0ICAmLS1idG4tY29tcGxldGUge1xuXHRcdFx0Zm9udC1zaXplOjFlbTtcblx0XHQgIH1cblx0XG5cdFx0Ji0tYW5zd2VyIHtcblx0XHRcdGZvbnQtc2l6ZTogMWVtO1xuXHRcdFx0cGFkZGluZzogLjFlbTtcblx0XHQgIH1cblx0XG5cdFx0ICAmLS1jaGVja21hcmssXG5cdFx0ICAmLS1jbG9zZSB7XG5cdFx0XHR3aWR0aDozZW07XG5cdFx0XHRoZWlnaHQ6IGF1dG87XG5cdFx0ICB9XG5cdFxuXHRcdCAgJi0taGlkZGVuLWNvbnRlbnQge1xuXHRcdFx0ICB3aWR0aDozZW07XG5cdFx0XHQgIGhlaWdodDogM2VtOyBcblx0XHQgIH1cblx0XG5cdFx0ICAmLS1hdmF0YXIgaW1nLFxuXHRcdCAgJi0tYXZhdGFyLWNvbXBsZXRlIGltZ3tcblx0XHRcdCAgd2lkdGg6OGVtO1xuXHRcdFx0ICBoZWlnaHQ6OGVtO1xuXHRcdCAgfVxuXG5cblx0XHQgICYtLW5pY2tuYW1lIHtcblx0XHRcdCAgZm9udC1zaXplOiAxLjJlbTtcblx0XHQgIH1cblx0XG5cdFx0ICAmLS1yZXN1bHQtdGV4dCB7XG5cdFx0XHRmb250LXNpemU6IDEuNGVtO1xuXHRcdCAgfVxuXHR9XG5cblxuQGtleWZyYW1lcyBjb21iaW5lZCB7XG4gICAgMTYlLCA0OCUsIDc4JSAge1xuXHRcdHRvcDogMjAwcHg7XG4gICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDsgXG4gICAgfVxuICAgIDMyJSB7XG4gICAgICAgIHRvcDogNTBweDtcblx0ICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgfVxuICAgIDYyJSB7XG4gICAgICAgIHRvcDogMTAwcHg7XG5cdCAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuXHRcdG9wYWNpdHk6MC44O1xuXHR9XG5cdDgyJSB7XG4gICAgICAgIHRvcDogMTAwcHg7XG4gXHRcdGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG5cdFx0b3BhY2l0eTowLjY7IFxuICAgIH1cbiAgICA5MCUge1xuICAgICAgICB0b3A6IDEwMHB4O1xuXHQgXHRhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuXHRcdG9wYWNpdHk6MDsgXG5cdH1cblxuICAgIDEwMCUge1xuICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IFxuICAgICAgICB0b3A6IDEyMHB4O1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcblx0XHRsZWZ0OjEwMCU7XG5cdFx0b3BhY2l0eTowO1xuICAgIH1cbn1cblxufVxuXG5cbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4uYXBwLWdhbWUge1xuXHQmLS1jb3VudCB7XG5cdFx0Zm9udC1zaXplOiAxZW07XG5cdFx0fVxuXHRcblx0Ji0td29yZC1lbmdsaXNoIHtcblx0XHRmb250LXNpemU6IDEuNmVtO1xuXHRcdH1cblx0XG5cdCYtLWJ0bi1hbnN3ZXIge1xuXHRcdGZvbnQtc2l6ZToxZW07XG5cdFx0cGFkZGluZzowLjFlbTsgXG5cdCAgIH1cbiBcblx0ICAgJi0tYnRuLWNvbXBsZXRlIHtcblx0XHRmb250LXNpemU6MC44ZW07XG5cdCAgIH1cbiBcblx0ICYtLWFuc3dlciB7XG5cdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdG1hcmdpbjowO1xuXHQgICB9XG4gXG5cdCAgICYtLWNoZWNrbWFyayxcblx0ICAgJi0tY2xvc2Uge1xuXHRcdHdpZHRoOjNlbTtcblx0XHRoZWlnaHQ6IGF1dG87XG5cdCAgIH1cblxuXHQgICAmLS1hdmF0YXIgaW1nLFxuXHQgICAmLS1hdmF0YXItY29tcGxldGUgaW1ne1xuXHRcdHdpZHRoOjdlbTtcblx0XHRoZWlnaHQ6N2VtO1xuXHQgICB9XG5cblx0ICAgJi0tcmVzdWx0LXRleHQge1xuXHRcdGZvbnQtc2l6ZTogMS4yZW07XG5cdCAgIH1cblx0XG5cdCAgICYtLWJhbGwge1xuXHRcdHdpZHRoOjEwMHB4O1xuXHRcdGhlaWdodDoxMDBweDtcblx0fVxuXHQgICAgJi0tc3Bpbm5lciB7XG5cdFx0bWFyZ2luOjAgMzBweDtcblx0ICB9XG59XG59XG5cblxuXG5AbWVkaWEobWF4LXdpZHRoOiA1NTBweCkge1xuXHQuYXBwLWdhbWUge1xuXHRcdCYtLWNvdW50IHtcblx0XHRcdGZvbnQtc2l6ZTogMWVtO1xuXHRcdFx0fVxuXHRcdFxuXHRcdCYtLXdvcmQtZW5nbGlzaCB7XG5cdFx0XHRmb250LXNpemU6IDEuNmVtO1xuXHRcdFx0fVxuXHRcdFxuXHRcdCYtLWJ0bi1hbnN3ZXIge1xuXHRcdFx0Zm9udC1zaXplOjFlbTtcblx0XHRcdHBhZGRpbmc6MC4xZW07IFxuXHRcdCAgIH1cblx0IFxuXHRcdCAmLS1hbnN3ZXIge1xuXHRcdFx0Zm9udC1zaXplOiAxZW07XG5cdFx0XHRwYWRkaW5nOiAuMmVtIDA7XG5cdFx0XHRtYXJnaW46MDtcblx0XHQgICB9XG5cdCBcblx0XHQgICAmLS1jaGVja21hcmssXG5cdFx0ICAgJi0tY2xvc2Uge1xuXHRcdFx0d2lkdGg6M2VtO1xuXHRcdFx0aGVpZ2h0OiBhdXRvO1xuXHRcdH1cblx0XG5cdFx0Ji0tYXZhdGFyLWNvbXBsZXRlIGltZ3tcblx0XHRcdHdpZHRoOjRlbTtcblx0XHRcdGhlaWdodDogYXV0bztcblx0XHR9XG5cdFxuXHRcdCYtLXJlc3VsdC10ZXh0IHtcblx0XHRcdGZvbnQtc2l6ZTogMS4yZW07XG5cdFx0XHRkaXNwbGF5Om5vbmU7XG5cdFx0fVxuXG5cdFx0Ji0tcmVzdWx0LXRleHQtY29tcGxldGUge1xuXHRcdFx0ICAgZGlzcGxheTpibG9jaztcblx0XHQgICB9XG5cdFx0XG5cdFx0Ji0tYmFsbCB7XG5cdFx0XHR3aWR0aDoxMDBweDtcblx0XHRcdGhlaWdodDoxMDBweDtcblx0XHR9XG5cblx0XHQmLS1nYW1lLW91dGNvbWUge1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuXHRcdFx0bWFyZ2luOiAxZW07XG5cdFx0ICB9XG5cblx0XHQgICYtLXJlc3VsdC1nYW1lIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cdFx0ICB9XG5cblx0XHQgICYtLW5pY2tuYW1lIHtcblx0XHRcdGZvbnQtc2l6ZTogMWVtO1xuXHRcdFx0bWFyZ2luOiAuMmVtO1xuXHRcdCAgfVxuXG5cdFx0ICYtLXJlc3VsdCB7XG5cdFx0XHRtYXJnaW4tbGVmdDogLjVlbTtcblx0XHR9XG5cblx0XHQmLS1zcGlubmVyIHtcblx0XHRcdG1hcmdpbjowIDEwcHg7XG5cdFx0ICB9XG5cblx0XHQmLS1hdmF0YXIgaW1nIHtcblx0XHR3aWR0aDo2ZW07XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHQgICB9XG5cdH1cblx0fVxuICIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuLmFwcC1nYW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDM2MHB4O1xufVxuLmFwcC1nYW1lLS1jb250YWluZXItc3RhcnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDM2MHB4O1xufVxuLmFwcC1nYW1lLS1jb250YWluZXItZ2FtZSwgLmFwcC1nYW1lLS1jb250YWluZXItY29tcGxldGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5hcHAtZ2FtZS0tY291bnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGxlZnQ6IDUwcHg7XG4gIGJvdHRvbTogNzBweDtcbiAgY29sb3I6ICM0MTQxNDE7XG59XG4uYXBwLWdhbWUtLWJ0bi1zdGFydCB7XG4gIG1hcmdpbi10b3A6IDdlbTtcbiAgZm9udC1zaXplOiAxLjhlbTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIHRleHQtc2hhZG93OiAwIC0xcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcGFkZGluZzogMC41ZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZDI1ZmI4IGxpbmVhci1ncmFkaWVudCgjZDE4MmMwLCAjYTIxMmE3KTtcbiAgYm94LXNoYWRvdzogaW5zZXQgI2YwMjdlNiAwIC0xcHggMXB4LCBpbnNldCAwIDFweCAxcHggI2Y2OThmZiwgI2E2M2NhYSAwIDAgMCAxcHgsIHJnYmEoMCwgMCwgMCwgMC4zKSAwIDJweCA1cHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzYXRlIDEuMnMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IHB1bHNhdGUgMS4ycyBsaW5lYXIgaW5maW5pdGU7XG59XG4uYXBwLWdhbWUtLWJ0bi1zdGFydDpob3ZlciB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hcHAtZ2FtZS0tYnRuLXN0YXJ0OmFjdGl2ZSB7XG4gIHRvcDogMXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDAgLTFweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMCA1cHggI2ZmZCwgMCAwIDhweCAjZmZmO1xuICBib3gtc2hhZG93OiAwIC0xcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCAxcHggMXB4ICNmZmYsIGluc2V0IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuOCksIGluc2V0IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcHVsc2F0ZSB7XG4gIDUwJSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1zaGFkb3c6IDAgLTFweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMCA1cHggI2ZmZCwgMCAwIDhweCAjZmZmO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHB1bHNhdGUge1xuICA1MCUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtc2hhZG93OiAwIC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpLCAwIDAgNXB4ICNmZmQsIDAgMCA4cHggI2ZmZjtcbiAgfVxufVxuLmFwcC1nYW1lLS13b3JkLWVuZ2xpc2gge1xuICBmb250LXNpemU6IDIuNWVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzQxNDE0MTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbSAwO1xufVxuLmFwcC1nYW1lLS1idG4tYW5zd2VyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG4gIHdpZHRoOiAxNGVtO1xuICBtYXJnaW46IDAuNWVtO1xuICBjb2xvcjogIzQxNDE0MTtcbiAgcGFkZGluZzogMC4yZW07XG59XG4uYXBwLWdhbWUtLWJ0bi1jb21wbGV0ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTRlbTtcbiAgbWFyZ2luOiAwLjVlbSBhdXRvO1xuICBmb250LXNpemU6IDEuNmVtO1xuICBwYWRkaW5nOiAwLjJlbTtcbn1cbi5hcHAtZ2FtZS0tYW5zd2VyIHtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgY29sb3I6ICMzNjM2MzY7XG4gIHBhZGRpbmc6IDAuMmVtO1xufVxuLmFwcC1nYW1lLS1jaGVja21hcmssIC5hcHAtZ2FtZS0tY2xvc2Uge1xuICB3aWR0aDogNWVtO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5hcHAtZ2FtZS0taGlkZGVuLWNvbnRlbnQge1xuICB3aWR0aDogNWVtO1xuICBoZWlnaHQ6IDVlbTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmFwcC1nYW1lLS1hdmF0YXIgaW1nLCAuYXBwLWdhbWUtLWF2YXRhci1jb21wbGV0ZSBpbWcge1xuICB3aWR0aDogMTJlbTtcbiAgaGVpZ2h0OiAxMmVtO1xufVxuLmFwcC1nYW1lLS1yZXN1bHQtdGV4dC1jb21wbGV0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwLjJlbSAwO1xufVxuLmFwcC1nYW1lLS1jb250YWluZXItYXZhdGFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmFwcC1nYW1lLS1uaWNrbmFtZSB7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG4gIG1hcmdpbjogMWVtIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzNjM2MzY7XG59XG4uYXBwLWdhbWUtLXNwaW5uZXIge1xuICBtYXJnaW46IDAgNTBweDtcbn1cbi5hcHAtZ2FtZS0tcmVzdWx0LWdhbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmFwcC1nYW1lLS1nYW1lLW91dGNvbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIDIwcHggNDBweCAyMHB4O1xufVxuLmFwcC1nYW1lLS1yZXN1bHQtdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDJlbTtcbn1cbi5hcHAtZ2FtZS0tY29udGFpbmVyLWJhbGwge1xuICB3aWR0aDogMTAwJTtcbn1cbi5hcHAtZ2FtZS0tYmFsbCB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogNXB4IHNvbGlkIHB1cnBsZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbmltYXRpb246IGNvbWJpbmVkIDVzIGxpbmVhciBpbmZpbml0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuXG46Om5nLWRlZXAubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLFxuLm1hdC1zcGlubmVyIGNpcmNsZSB7XG4gIHN0cm9rZTogI2QyNWZiOCAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIGNvbWJpbmVkIHtcbiAgMTYlLCA0OCUsIDc4JSB7XG4gICAgdG9wOiAyODBweDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuICAzMiUge1xuICAgIHRvcDogNTBweDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG4gIDYyJSB7XG4gICAgdG9wOiAxMjBweDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICA4MiUge1xuICAgIHRvcDogMTIwcHg7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBvcGFjaXR5OiAwLjY7XG4gIH1cbiAgOTAlIHtcbiAgICB0b3A6IDEyMHB4O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRvcDogMTYwcHg7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgbGVmdDogMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4ud2luIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifnNyYy9hc3NldHMvaW1nL3dpbi5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmFwcC1nYW1lLS1idG4tc3RhcnQge1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gIH1cbiAgLmFwcC1nYW1lLS13b3JkLWVuZ2xpc2gge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICB9XG4gIC5hcHAtZ2FtZS0tYnRuLWFuc3dlciB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBtYXJnaW46IDAuMmVtO1xuICAgIHBhZGRpbmc6IDAuMmVtO1xuICB9XG4gIC5hcHAtZ2FtZS0tYnRuLWNvbXBsZXRlIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG4gIC5hcHAtZ2FtZS0tY2hlY2ttYXJrLCAuYXBwLWdhbWUtLWNsb3NlIHtcbiAgICB3aWR0aDogNGVtO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAuYXBwLWdhbWUtLWhpZGRlbi1jb250ZW50IHtcbiAgICB3aWR0aDogNGVtO1xuICAgIGhlaWdodDogNGVtO1xuICB9XG4gIC5hcHAtZ2FtZS0tYXZhdGFyIGltZywgLmFwcC1nYW1lLS1hdmF0YXItY29tcGxldGUgaW1nIHtcbiAgICB3aWR0aDogMTBlbTtcbiAgICBoZWlnaHQ6IDEwZW07XG4gIH1cbiAgLmFwcC1nYW1lLS1uaWNrbmFtZSB7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICBtYXJnaW46IDAuNWVtIDA7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmFwcC1nYW1lLS1idG4tc3RhcnQge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbiAgLmFwcC1nYW1lLS13b3JkLWVuZ2xpc2gge1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgcGFkZGluZzogMC4yZW0gMDtcbiAgfVxuICAuYXBwLWdhbWUtLWJ0bi1jb21wbGV0ZSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbiAgLmFwcC1nYW1lLS1hbnN3ZXIge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IDAuMWVtO1xuICB9XG4gIC5hcHAtZ2FtZS0tY2hlY2ttYXJrLCAuYXBwLWdhbWUtLWNsb3NlIHtcbiAgICB3aWR0aDogM2VtO1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICAuYXBwLWdhbWUtLWhpZGRlbi1jb250ZW50IHtcbiAgICB3aWR0aDogM2VtO1xuICAgIGhlaWdodDogM2VtO1xuICB9XG4gIC5hcHAtZ2FtZS0tYXZhdGFyIGltZywgLmFwcC1nYW1lLS1hdmF0YXItY29tcGxldGUgaW1nIHtcbiAgICB3aWR0aDogOGVtO1xuICAgIGhlaWdodDogOGVtO1xuICB9XG4gIC5hcHAtZ2FtZS0tbmlja25hbWUge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbiAgLmFwcC1nYW1lLS1yZXN1bHQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgY29tYmluZWQge1xuICAgIDE2JSwgNDglLCA3OCUge1xuICAgICAgdG9wOiAyMDBweDtcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICAgIH1cbiAgICAzMiUge1xuICAgICAgdG9wOiA1MHB4O1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICB9XG4gICAgNjIlIHtcbiAgICAgIHRvcDogMTAwcHg7XG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgICA4MiUge1xuICAgICAgdG9wOiAxMDBweDtcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgfVxuICAgIDkwJSB7XG4gICAgICB0b3A6IDEwMHB4O1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIHRvcDogMTIwcHg7XG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hcHAtZ2FtZS0tY291bnQge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICB9XG4gIC5hcHAtZ2FtZS0td29yZC1lbmdsaXNoIHtcbiAgICBmb250LXNpemU6IDEuNmVtO1xuICB9XG4gIC5hcHAtZ2FtZS0tYnRuLWFuc3dlciB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogMC4xZW07XG4gIH1cbiAgLmFwcC1nYW1lLS1idG4tY29tcGxldGUge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cbiAgLmFwcC1nYW1lLS1hbnN3ZXIge1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmFwcC1nYW1lLS1jaGVja21hcmssIC5hcHAtZ2FtZS0tY2xvc2Uge1xuICAgIHdpZHRoOiAzZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5hcHAtZ2FtZS0tYXZhdGFyIGltZywgLmFwcC1nYW1lLS1hdmF0YXItY29tcGxldGUgaW1nIHtcbiAgICB3aWR0aDogN2VtO1xuICAgIGhlaWdodDogN2VtO1xuICB9XG4gIC5hcHAtZ2FtZS0tcmVzdWx0LXRleHQge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbiAgLmFwcC1nYW1lLS1iYWxsIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuICAuYXBwLWdhbWUtLXNwaW5uZXIge1xuICAgIG1hcmdpbjogMCAzMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLmFwcC1nYW1lLS1jb3VudCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbiAgLmFwcC1nYW1lLS13b3JkLWVuZ2xpc2gge1xuICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gIH1cbiAgLmFwcC1nYW1lLS1idG4tYW5zd2VyIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiAwLjFlbTtcbiAgfVxuICAuYXBwLWdhbWUtLWFuc3dlciB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogMC4yZW0gMDtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmFwcC1nYW1lLS1jaGVja21hcmssIC5hcHAtZ2FtZS0tY2xvc2Uge1xuICAgIHdpZHRoOiAzZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIC5hcHAtZ2FtZS0tYXZhdGFyLWNvbXBsZXRlIGltZyB7XG4gICAgd2lkdGg6IDRlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgLmFwcC1nYW1lLS1yZXN1bHQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5hcHAtZ2FtZS0tcmVzdWx0LXRleHQtY29tcGxldGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5hcHAtZ2FtZS0tYmFsbCB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gIH1cbiAgLmFwcC1nYW1lLS1nYW1lLW91dGNvbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIG1hcmdpbjogMWVtO1xuICB9XG4gIC5hcHAtZ2FtZS0tcmVzdWx0LWdhbWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuYXBwLWdhbWUtLW5pY2tuYW1lIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW46IDAuMmVtO1xuICB9XG4gIC5hcHAtZ2FtZS0tcmVzdWx0IHtcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XG4gIH1cbiAgLmFwcC1nYW1lLS1zcGlubmVyIHtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgfVxuICAuYXBwLWdhbWUtLWF2YXRhciBpbWcge1xuICAgIHdpZHRoOiA2ZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59Il19 */"]
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
          type: _service_data_game_service__WEBPACK_IMPORTED_MODULE_9__["DataGameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateService"]
        }, {
          type: _profile_service_profile_service__WEBPACK_IMPORTED_MODULE_12__["ProfileService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
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
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (items) {
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
        this.url = './assets/words.json';
        this.words = [];
        this.numberOptionsAnswer = 3;
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
            var wordsStorage = JSON.parse(wordsStorageString);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(wordsStorage);
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
            words = words.filter(function (value) {
              // tslint:disable-next-line: typedef
              var result = wordsStorage.find(function (data) {
                return data.id === value.id;
              });

              if (result) {
                return false;
              } else {
                return true;
              }
            });
            var dataForLocalSrorageConcat = wordsStorage.concat(words);
            var dataForLocalSrorageString = JSON.stringify(dataForLocalSrorageConcat);
            localStorage.setItem(DataGameService.wordsforLearningLSKey, dataForLocalSrorageString);
          } else {
            var dataForLocalStorage = JSON.stringify(words);
            localStorage.setItem(DataGameService.wordsforLearningLSKey, dataForLocalStorage);
          }
        }
      }, {
        key: "removeWordFromDictionary",
        value: function removeWordFromDictionary(word) {
          var _this6 = this;

          return this.loadWordList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) {
            items = items.filter(function (item) {
              return item.id !== word.id;
            });

            _this6.save(items);

            return items;
          }));
        }
      }, {
        key: "loadWordsHttp",
        value: function loadWordsHttp() {
          var _this7 = this;

          this._httpClient.get(this.url).subscribe(function (items) {
            return _this7.words = items;
          });
        }
      }, {
        key: "getRandomAnswers",
        value: function getRandomAnswers(word) {
          var wordsForArrayAnswer = new Set();
          wordsForArrayAnswer.add(word.russianWord);

          while (wordsForArrayAnswer.size < this.numberOptionsAnswer) {
            var randomRuWord = this.getRandomWord();
            wordsForArrayAnswer.add(randomRuWord.russianWord);
          }

          var newLocal = 0.5;
          return Array.from(wordsForArrayAnswer).sort(function () {
            return Math.random() - newLocal;
          });
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
  "./src/app/components/game/word.model.ts":
  /*!***********************************************!*\
    !*** ./src/app/components/game/word.model.ts ***!
    \***********************************************/

  /*! exports provided: Word */

  /***/
  function srcAppComponentsGameWordModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Word", function () {
      return Word;
    });

    var Word = function Word(russianWord, englishWord, id) {
      _classCallCheck(this, Word);

      this.isLoading = false;
      this.russianWord = russianWord;
      this.englishWord = englishWord;
      this.id = id;
    };
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
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router, translate) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.translate = translate;
        translate.addLangs(['en', 'ru']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
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
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 11,
      vars: 9,
      consts: [[1, "app-home"], [1, "app-home--container"], [1, "app-home--title"], [1, "app-home--text"], [1, "app-home--button", 3, "click"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_8_listener() {
            return ctx.goToGame("/game");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "HOME.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "HOME.TEXT"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, "HOME.BUTTON"), "");
        }
      },
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\n.app-home[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-family: \"Roboto\", sans-serif;\n}\n.app-home--container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  background-image: url('3269841.jpg');\n  background-size: cover;\n  width: 100%;\n  min-width: 360px;\n  background-position: 50% 50%;\n  margin: 50px auto;\n  padding: 4em;\n  box-sizing: border-box;\n}\n.app-home--title[_ngcontent-%COMP%] {\n  color: #9c2f9c;\n  font-size: 2em;\n}\n.app-home--text[_ngcontent-%COMP%] {\n  width: 40%;\n  margin: 3em 0;\n  font-size: 1.2em;\n  color: #3a3838;\n  line-height: 2;\n}\n.app-home--button[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  width: 10em;\n  line-height: 20px;\n  padding: 0.6em;\n  text-align: center;\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);\n  position: relative;\n  transition-duration: 0.3s;\n  background: linear-gradient(to bottom, #bd35bd, #e7bae7);\n  border: 1px solid #9c2f9c;\n  color: #3a3838;\n  border-radius: 6px;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.2) inset, 0 1px 2px rgba(0, 0, 0, 0.05);\n  outline: none;\n}\n.app-home--button[_ngcontent-%COMP%]:before {\n  pointer-events: none;\n  position: absolute;\n  z-index: -1;\n  content: \"\";\n  top: 100%;\n  left: 5%;\n  height: 10px;\n  width: 90%;\n  opacity: 0;\n  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);\n  transition-duration: 0.3s;\n}\n.app-home--button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n}\n.app-home--button[_ngcontent-%COMP%]:hover:before {\n  opacity: 1;\n  transform: translateY(5px);\n}\n@media (max-width: 998px) {\n  .app-home--container[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 600px;\n  }\n  .app-home--title[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n  }\n  .app-home--text[_ngcontent-%COMP%] {\n    width: 50%;\n    font-size: 1.1em;\n  }\n  .app-home--button[_ngcontent-%COMP%] {\n    font-size: 1em;\n    padding: 0.5em;\n  }\n}\n@media (max-width: 768px) {\n  .app-home[_ngcontent-%COMP%] {\n    \n  }\n  .app-home--title[_ngcontent-%COMP%] {\n    font-size: 1.4em;\n  }\n  .app-home--text[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n@media (max-width: 550px) {\n  .app-home--container[_ngcontent-%COMP%] {\n    align-items: center;\n    width: 100%;\n    \n    background: yellow;\n  }\n  .app-home--title[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n  }\n  .app-home--text[_ngcontent-%COMP%] {\n    font-size: 1em;\n    margin: 2em 0;\n    width: 90%;\n  }\n  .app-home--button[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJnYXJpdGEvRG93bmxvYWRzL2xlYXJuLWVuZ2xpc2gvc3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsb0ZBQUE7QUFFUjtFQUNDLGVBQUE7RUFDQSxpQ0FBQTtBQ0FEO0FERUM7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0csb0NBQUE7RUFDSCxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNBRjtBREVDO0VBQ0MsY0FBQTtFQUNBLGNBQUE7QUNBRjtBREdDO0VBQ0MsVUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDREY7QURJQztFQUNDLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDRyxrQkFBQTtFQUNELHlCQUFBO0VBQ0Esd0RBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlGQUFBO0VBQ0EsYUFBQTtBQ0ZKO0FES0M7RUFDRyxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNELFdBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDRGQUFBO0VBQ0EseUJBQUE7QUNISDtBRE1DO0VBQ0csMkJBQUE7QUNKSjtBRE9DO0VBQ0UsVUFBQTtFQUNDLDBCQUFBO0FDTEo7QURVQTtFQUVFO0lBQ0MsV0FBQTtJQUNBLGFBQUE7RUNSRDtFRFVBO0lBQ0MsZ0JBQUE7RUNSRDtFRFVBO0lBQ0MsVUFBQTtJQUNBLGdCQUFBO0VDUkQ7RURVQTtJQUNDLGNBQUE7SUFDQSxjQUFBO0VDUkQ7QUFDRjtBRFlBO0VBRUM7SUFPQzs7T0FBQTtFQ2ZBO0VEU0E7SUFDQyxnQkFBQTtFQ1BEO0VEU0E7SUFDQyxjQUFBO0VDUEQ7QUFDRjtBRGNBO0VBRUU7SUFDQyxtQkFBQTtJQUNBLFdBQUE7SUFDRixxQkFBQTtJQUNFLGtCQUFBO0VDYkQ7RURlQTtJQUNDLGdCQUFBO0VDYkQ7RURlQTtJQUNDLGNBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtFQ2JEO0VEZUE7SUFDQyxjQUFBO0VDYkQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4uYXBwLWhvbWUge1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblxuXHQmLS1jb250YWluZXIge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy8zMjY5ODQxLmpwZycpOyBcblx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcblx0XHR3aWR0aDoxMDAlOyBcblx0XHRtaW4td2lkdGg6MzYwcHg7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcblx0XHRtYXJnaW46IDUwcHggYXV0bztcblx0XHRwYWRkaW5nOjRlbTtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHR9XG5cdCYtLXRpdGxlIHtcblx0XHRjb2xvcjpyZ2IoMTU2LCA0NywgMTU2KTtcblx0XHRmb250LXNpemU6IDJlbTtcblx0fVxuXG5cdCYtLXRleHQge1xuXHRcdHdpZHRoOjQwJTtcblx0XHRtYXJnaW46M2VtIDA7XG5cdFx0Zm9udC1zaXplOiAxLjJlbTtcblx0XHRjb2xvcjpyZ2IoNTgsIDU2LCA1Nik7XG5cdFx0bGluZS1oZWlnaHQ6MjsgXG5cblx0fVxuXHQmLS1idXR0b257XG5cdFx0Zm9udC1zaXplOjEuMmVtO1xuXHRcdHdpZHRoOjEwZW07XG5cdFx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdFx0cGFkZGluZzogMC42ZW07XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcblx0ICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ICBcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG5cdCAgXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMTg5LCA1MywgMTg5KSwgcmdiKDIzMSwgMTg2LCAyMzEpKTtcblx0ICBcdGJvcmRlcjoxcHggc29saWQgcmdiKDE1NiwgNDcsIDE1Nik7XG5cdCAgXHRjb2xvcjpyZ2IoNTgsIDU2LCA1Nik7XG5cdCAgXHRib3JkZXItcmFkaXVzOiA2cHg7XG5cdCAgXHRib3gtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSBpbnNldCwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG5cdCAgXHRvdXRsaW5lOiBub25lO1xuXHR9XG5cdFxuXHQmLS1idXR0b246YmVmb3JlIHtcblx0ICBcdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHQgIFx0cG9zaXRpb246IGFic29sdXRlO1xuXHQgIFx0ei1pbmRleDogLTE7XG5cdCBcdGNvbnRlbnQ6ICcnO1xuXHQgXHR0b3A6IDEwMCU7XG5cdCBcdGxlZnQ6IDUlO1xuXHQgXHRoZWlnaHQ6IDEwcHg7XG5cdCBcdHdpZHRoOiA5MCU7XG5cdCBcdG9wYWNpdHk6IDA7XG5cdCBcdGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgcmdiYSgwLCAwLCAwLCAwLjM1KSAwJSwgcmdiYSgwLCAwLCAwLCAwKSA4MCUpO1xuXHQgXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuXHR9XG5cdFxuXHQmLS1idXR0b246aG92ZXIge1xuXHQgIFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuXHR9XG5cblx0Ji0tYnV0dG9uOmhvdmVyOmJlZm9yZSB7XG5cdCBcdG9wYWNpdHk6IDE7XG5cdCAgXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcblx0fVxufVxuXHRcblxuQG1lZGlhIChtYXgtd2lkdGg6OTk4cHgpIHtcbiAgICAuYXBwLWhvbWUge1xuXHRcdCYtLWNvbnRhaW5lciB7XG5cdFx0XHR3aWR0aDoxMDAlOyBcblx0XHRcdGhlaWdodDogNjAwcHg7XG5cdFx0fVxuXHRcdCYtLXRpdGxlIHtcblx0XHRcdGZvbnQtc2l6ZTogMS42ZW07XG5cdFx0fVxuXHRcdCYtLXRleHQge1xuXHRcdFx0d2lkdGg6NTAlO1xuXHRcdFx0Zm9udC1zaXplOiAxLjFlbTtcblx0XHR9XG5cdFx0Ji0tYnV0dG9uIHtcblx0XHRcdGZvbnQtc2l6ZTogMWVtO1xuXHRcdFx0cGFkZGluZzogMC41ZW07XG5cdFx0fVxuXHR9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KSB7XG5cblx0LmFwcC1ob21lIHtcblx0XHQmLS10aXRsZSB7XG5cdFx0XHRmb250LXNpemU6IDEuNGVtO1xuXHRcdH1cblx0XHQmLS10ZXh0IHtcblx0XHRcdGZvbnQtc2l6ZTogMWVtO1xuXHRcdH1cblx0XHQvKiAmLS1idXR0b24ge1xuXHRcdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0XHR9ICovXG5cdH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6NTUwcHgpIHtcbiAgICAuYXBwLWhvbWUge1xuXHRcdCYtLWNvbnRhaW5lciB7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0d2lkdGg6MTAwJTsgXG5cdC8qIFx0XHRoZWlnaHQ6IDUwMHB4OyAqL1xuXHRcdFx0YmFja2dyb3VuZDogeWVsbG93O1xuXHRcdH1cblx0XHQmLS10aXRsZSB7XG5cdFx0XHRmb250LXNpemU6IDEuNmVtO1xuXHRcdH1cblx0XHQmLS10ZXh0IHtcblx0XHRcdGZvbnQtc2l6ZTogMWVtO1xuXHRcdFx0bWFyZ2luOjJlbSAwO1xuXHRcdFx0d2lkdGg6OTAlXG5cdFx0fVxuXHRcdCYtLWJ1dHRvbiB7XG5cdFx0XHRmb250LXNpemU6IDFlbTtcblx0XHR9XG5cdH1cbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcbi5hcHAtaG9tZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG4uYXBwLWhvbWUtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy8zMjY5ODQxLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMzYwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xuICBwYWRkaW5nOiA0ZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uYXBwLWhvbWUtLXRpdGxlIHtcbiAgY29sb3I6ICM5YzJmOWM7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuLmFwcC1ob21lLS10ZXh0IHtcbiAgd2lkdGg6IDQwJTtcbiAgbWFyZ2luOiAzZW0gMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6ICMzYTM4Mzg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuLmFwcC1ob21lLS1idXR0b24ge1xuICBmb250LXNpemU6IDEuMmVtO1xuICB3aWR0aDogMTBlbTtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHBhZGRpbmc6IDAuNmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjYmQzNWJkLCAjZTdiYWU3KTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzljMmY5YztcbiAgY29sb3I6ICMzYTM4Mzg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgaW5zZXQsIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmFwcC1ob21lLS1idXR0b246YmVmb3JlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogNSU7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCByZ2JhKDAsIDAsIDAsIDAuMzUpIDAlLCByZ2JhKDAsIDAsIDAsIDApIDgwJSk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG59XG4uYXBwLWhvbWUtLWJ1dHRvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbn1cbi5hcHAtaG9tZS0tYnV0dG9uOmhvdmVyOmJlZm9yZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTk4cHgpIHtcbiAgLmFwcC1ob21lLS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjAwcHg7XG4gIH1cbiAgLmFwcC1ob21lLS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjZlbTtcbiAgfVxuICAuYXBwLWhvbWUtLXRleHQge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgfVxuICAuYXBwLWhvbWUtLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogMC41ZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYXBwLWhvbWUge1xuICAgIC8qICYtLWJ1dHRvbiB7XG4gICAgXHRmb250LXNpemU6IDAuOGVtO1xuICAgIH0gKi9cbiAgfVxuICAuYXBwLWhvbWUtLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICB9XG4gIC5hcHAtaG9tZS0tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xuICAuYXBwLWhvbWUtLWNvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBcdFx0aGVpZ2h0OiA1MDBweDsgKi9cbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gIH1cbiAgLmFwcC1ob21lLS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjZlbTtcbiAgfVxuICAuYXBwLWhvbWUtLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbjogMmVtIDA7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuYXBwLWhvbWUtLWJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn0iXX0= */"]
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
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/locale/missing-translation.service.ts.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/locale/missing-translation.service.ts.ts ***!
    \*********************************************************************/

  /*! exports provided: MissingTranslationService */

  /***/
  function srcAppComponentsLocaleMissingTranslationServiceTsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MissingTranslationService", function () {
      return MissingTranslationService;
    });

    var MissingTranslationService = /*#__PURE__*/function () {
      function MissingTranslationService() {
        _classCallCheck(this, MissingTranslationService);
      }

      _createClass(MissingTranslationService, [{
        key: "handle",
        value: function handle(params) {
          return "WARN: '".concat(params.key, "' is missing in '").concat(params.translateService.currentLang, "' locale");
        }
      }]);

      return MissingTranslationService;
    }();
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


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var src_app_store_selectors_dictionary_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/store/selectors/dictionary.selectors */
    "./src/app/store/selectors/dictionary.selectors.ts");
    /* harmony import */


    var _game_service_data_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../game/service/data-game.service */
    "./src/app/components/game/service/data-game.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MenuComponent_mat_button_toggle_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lang_r3 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lang_r3)("checked", lang_r3 === ctx_r2.translate.currentLang);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r3 == "ru" ? "\uD83C\uDDF7\uD83C\uDDFA" : "\uD83C\uDDEC\uD83C\uDDE7");
      }
    }

    var _c0 = function _c0() {
      return {
        exact: true
      };
    };

    var _c1 = function _c1() {
      return ["/"];
    };

    var _c2 = function _c2() {
      return ["/game"];
    };

    var _c3 = function _c3() {
      return ["/dictionary"];
    };

    var _c4 = function _c4() {
      return ["/translate"];
    };

    var _c5 = function _c5() {
      return ["/about-me"];
    };

    var MenuComponent = function MenuComponent(dataGameService, translate, _store$) {
      _classCallCheck(this, MenuComponent);

      this.dataGameService = dataGameService;
      this.translate = translate;
      this._store$ = _store$;
      this.dictionary = [];
      this.numberWordsInDictionary = null;
      this.dictionaryCount$ = this._store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_store_selectors_dictionary_selectors__WEBPACK_IMPORTED_MODULE_2__["selectDictionaryCount"]));
      translate.addLangs(['en', 'ru']);
      translate.setDefaultLang('en');
      var browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
    };

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_game_service_data_game_service__WEBPACK_IMPORTED_MODULE_3__["DataGameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]));
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 60,
      vars: 47,
      consts: [[1, "app-menu"], [1, "app-menu--container"], [1, "app-menu--navigate"], ["routerLink", "", "routerLinkActive", "active-link", 1, "app-menu--link", 3, "routerLinkActiveOptions"], ["routerLink", "/game", "routerLinkActive", "active-link", 1, "app-menu--link"], ["routerLink", "/dictionary", "routerLinkActive", "active-link", 1, "app-menu--link"], ["matBadgeOverlap", "false", 3, "matBadge"], ["routerLink", "/translate", "routerLinkActive", "active-link", 1, "app-menu--link"], ["routerLink", "/about-me", "routerLinkActive", "active-link", 1, "app-menu--link"], [1, "app-menu--mat-menu"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink"], [1, "app-menu--toggle-button"], [3, "change"], ["langSelect", "matButtonToggleGroup"], [3, "value", "checked", 4, "ngFor", "ngForOf"], [3, "value", "checked"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "more_vert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-menu", null, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "gamepad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "menu_book");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "person_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-button-toggle-group", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MenuComponent_Template_mat_button_toggle_group_change_57_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58);

            return ctx.translate.use(_r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, MenuComponent_mat_button_toggle_59_Template, 2, 3, "mat-button-toggle", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 19, "MENU.HOME"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 21, "MENU.GAME"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matBadge", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 23, ctx.dictionaryCount$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 25, "MENU.DICTIONARY"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 27, "MENU.TRANSLATOR"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 29, "MENU.ABOUT ME"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 31, "MENU.HOME"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 33, "MENU.GAME"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](44, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 35, "MENU.DICTIONARY"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 37, "MENU.TRANSLATOR"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 39, "MENU.ABOUT ME"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.translate.getLangs());
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadge"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggle"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\n.app-menu[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 16px;\n  font-family: \"Roboto\", sans-serif;\n  background-color: #d865d8;\n  width: 100%;\n  min-width: 360px;\n  height: 6em;\n  box-shadow: 0 1px 10px 1px black;\n}\n.app-menu--container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  margin: 0 0.5em;\n}\n.app-menu--toggle-button[_ngcontent-%COMP%] {\n  margin-right: 1em;\n}\n.app-menu--navigate[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 600px;\n}\n.app-menu--link[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  color: white;\n  font-size: 1.4em;\n  margin: 0.2em;\n}\n.app-menu--link.active-link[_ngcontent-%COMP%] {\n  padding: 0.6em 0.8em;\n  border-radius: 0.8em;\n  background: #d25fb8;\n}\n.app-menu--link[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: 0.8s;\n}\n.app-menu--mat-menu[_ngcontent-%COMP%] {\n  display: none;\n  color: white;\n  margin-left: 2em;\n}\n@media (max-width: 998px) {\n  .app-menu--navigate[_ngcontent-%COMP%] {\n    width: 500px;\n  }\n  .app-menu--link[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n  .app-menu--link.active-link[_ngcontent-%COMP%] {\n    padding: 0.4em 0.6em;\n  }\n}\n@media (max-width: 768px) {\n  .app-menu[_ngcontent-%COMP%] {\n    height: 4em;\n  }\n  .app-menu--navigate[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .app-menu--mat-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJnYXJpdGEvRG93bmxvYWRzL2xlYXJuLWVuZ2xpc2gvc3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVMsb0ZBQUE7QUFFVDtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0MsV0FBQTtFQUNELGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FDQUQ7QURFRTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0FGO0FER0M7RUFDQyxpQkFBQTtBQ0RGO0FESUM7RUFDSSxhQUFBO0VBQ0gsbUJBQUE7RUFDQSw4QkFBQTtFQUNHLG1CQUFBO0VBQ0gsWUFBQTtBQ0ZGO0FES0M7RUFDQyxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0ksZ0JBQUE7RUFDSixhQUFBO0FDSEY7QURLQztFQUNDLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQ0hGO0FETUM7RUFDSSxxQkFBQTtFQUNHLGdCQUFBO0FDSlI7QURNQztFQUNDLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNKRjtBRFNBO0VBRUU7SUFDQyxZQUFBO0VDUEQ7RURVQTtJQUNDLGdCQUFBO0VDUkQ7RURVQTtJQUNDLG9CQUFBO0VDUkQ7QUFDRjtBRGFDO0VBQ0M7SUFDQyxXQUFBO0VDWEQ7RURhQTtJQUNDLGFBQUE7RUNYRDtFRGFBO0lBQ0MsY0FBQTtFQ1hEO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG5cbi5hcHAtbWVudSB7XG5cdGRpc3BsYXk6ZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjsgXG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYigyMTYsIDEwMSwgMjE2KTtcbiBcdHdpZHRoOjEwMCU7XG5cdG1pbi13aWR0aDogMzYwcHg7IFxuXHRoZWlnaHQ6IDZlbTtcblx0Ym94LXNoYWRvdzogMCAxcHggMTBweCAxcHggYmxhY2s7XG5cbiBcdCYtLWNvbnRhaW5lciB7XG5cdFx0ZGlzcGxheTpmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuXHRcdHdpZHRoOjEwMCU7XHRcblx0XHRtYXJnaW46MCAwLjVlbTtcblx0fSBcblxuXHQmLS10b2dnbGUtYnV0dG9uIHtcblx0XHRtYXJnaW4tcmlnaHQ6IDFlbTtcblx0fSAgXG5cblx0Ji0tbmF2aWdhdGUge1xuXHQgICAgZGlzcGxheTpmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHQgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG5cdFx0d2lkdGg6NjAwcHg7IFxuXHR9XG5cblx0Ji0tbGluayB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdGNvbG9yOndoaXRlO1xuICAgICBcdGZvbnQtc2l6ZToxLjRlbTsgXG5cdFx0bWFyZ2luOiAwLjJlbTtcblx0XG5cdCYuYWN0aXZlLWxpbmsge1xuXHRcdHBhZGRpbmc6MC42ZW0gMC44ZW07XG5cdFx0Ym9yZGVyLXJhZGl1czogMC44ZW07XG5cdFx0YmFja2dyb3VuZDogcmdiKDIxMCwgOTUsIDE4NCk7XG5cdH1cbn1cblx0Ji0tbGluazpob3Zlcntcblx0ICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC44cztcbn1cblx0Ji0tbWF0LW1lbnUge1xuXHRcdGRpc3BsYXk6bm9uZTtcblx0XHRjb2xvcjp3aGl0ZTtcblx0XHRtYXJnaW4tbGVmdDoyZW07XG59XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6OTk4cHgpIHtcbiAgICAuYXBwLW1lbnUge1xuXHRcdCYtLW5hdmlnYXRlIHtcblx0XHRcdHdpZHRoOjUwMHB4O1xuXHRcdH1cblx0XG5cdFx0Ji0tbGluayB7XG5cdFx0XHRmb250LXNpemU6MS4yZW07XG5cdFx0XG5cdFx0Ji5hY3RpdmUtbGluayB7XG5cdFx0XHRwYWRkaW5nOjAuNGVtIDAuNmVtO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5cdEBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KSB7XG5cdFx0LmFwcC1tZW51IHtcblx0XHQgaGVpZ2h0OiA0ZW07XG5cblx0XHQmLS1uYXZpZ2F0ZSB7XG5cdFx0XHRkaXNwbGF5Om5vbmU7XG5cdFx0fVxuXHRcdCYtLW1hdC1tZW51IHtcblx0XHRcdGRpc3BsYXk6YmxvY2s7XG5cdFx0fVxuXHR9XG59ICIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuLmFwcC1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4NjVkODtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMzYwcHg7XG4gIGhlaWdodDogNmVtO1xuICBib3gtc2hhZG93OiAwIDFweCAxMHB4IDFweCBibGFjaztcbn1cbi5hcHAtbWVudS0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDAuNWVtO1xufVxuLmFwcC1tZW51LS10b2dnbGUtYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG4uYXBwLW1lbnUtLW5hdmlnYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNjAwcHg7XG59XG4uYXBwLW1lbnUtLWxpbmsge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS40ZW07XG4gIG1hcmdpbjogMC4yZW07XG59XG4uYXBwLW1lbnUtLWxpbmsuYWN0aXZlLWxpbmsge1xuICBwYWRkaW5nOiAwLjZlbSAwLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogMC44ZW07XG4gIGJhY2tncm91bmQ6ICNkMjVmYjg7XG59XG4uYXBwLW1lbnUtLWxpbms6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIHRyYW5zaXRpb246IDAuOHM7XG59XG4uYXBwLW1lbnUtLW1hdC1tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTk4cHgpIHtcbiAgLmFwcC1tZW51LS1uYXZpZ2F0ZSB7XG4gICAgd2lkdGg6IDUwMHB4O1xuICB9XG4gIC5hcHAtbWVudS0tbGluayB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxuICAuYXBwLW1lbnUtLWxpbmsuYWN0aXZlLWxpbmsge1xuICAgIHBhZGRpbmc6IDAuNGVtIDAuNmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFwcC1tZW51IHtcbiAgICBoZWlnaHQ6IDRlbTtcbiAgfVxuICAuYXBwLW1lbnUtLW5hdmlnYXRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5hcHAtbWVudS0tbWF0LW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59Il19 */"]
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
          type: _game_service_data_game_service__WEBPACK_IMPORTED_MODULE_3__["DataGameService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
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
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent(translate) {
        _classCallCheck(this, NotFoundComponent);

        this.translate = translate;
        translate.addLangs(['en', 'ru']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
      }

      _createClass(NotFoundComponent, [{
        key: "back",
        value: function back() {
          window.history.back();
        }
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 12,
      vars: 6,
      consts: [[1, "app-not-found"], [1, "app-not-found--container"], [1, "app-not-found--info"], [1, "app-not-found--number"], [1, "app-not-found--text"], ["mat-stroked-button", "", 1, "app-not-found--btn", 3, "click"], ["src", "./assets/img/404.png", 1, "app-not-found--img"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "404");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotFoundComponent_Template_button_click_8_listener() {
            return ctx.back();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, "NOTFOUND.TEXT"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, "NOTFOUND.BUTTON"));
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\n.app-not-found[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 50px auto;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n}\n.app-not-found--info[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.app-not-found--container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.app-not-found--number[_ngcontent-%COMP%] {\n  font-size: 8em;\n  text-shadow: 1px 1px 2px black;\n  font-weight: 800;\n  padding: 0.5em;\n  color: purple;\n}\n.app-not-found--text[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n}\n.app-not-found--img[_ngcontent-%COMP%] {\n  width: 800px;\n  height: auto;\n}\n.app-not-found--btn[_ngcontent-%COMP%] {\n  width: 10em;\n  margin: 1em;\n}\n@media (max-width: 1200px) {\n  .app-not-found--number[_ngcontent-%COMP%] {\n    font-size: 6em;\n  }\n  .app-not-found--text[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n  .app-not-found--img[_ngcontent-%COMP%] {\n    width: 600px;\n  }\n}\n@media (max-width: 998px) {\n  .app-not-found--number[_ngcontent-%COMP%] {\n    font-size: 4em;\n  }\n  .app-not-found--text[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n  .app-not-found--img[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n}\n@media (max-width: 550px) {\n  .app-not-found--img[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJnYXJpdGEvRG93bmxvYWRzL2xlYXJuLWVuZ2xpc2gvc3JjL2FwcC9jb21wb25lbnRzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxvRkFBQTtBQUVSO0VBQ0MsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0FDQUQ7QURFQztFQUNDLGtCQUFBO0FDQUY7QURHQztFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDREY7QURHQztFQUNDLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNERjtBREdDO0VBQ0MsZ0JBQUE7QUNERjtBREdDO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNESDtBREdDO0VBQ0MsV0FBQTtFQUNBLFdBQUE7QUNERjtBRE9DO0VBRUM7SUFDQSxjQUFBO0VDTEE7RURPRDtJQUNDLGdCQUFBO0VDTEE7RURPRDtJQUNFLFlBQUE7RUNMRDtBQUNGO0FEVUE7RUFFRTtJQUNBLGNBQUE7RUNUQTtFRFdEO0lBQ0MsY0FBQTtFQ1RBO0VEV0Q7SUFDRSxZQUFBO0VDVEQ7QUFDRjtBRGNBO0VBRUM7SUFDQyxhQUFBO0VDYkE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcblxuLmFwcC1ub3QtZm91bmQge1xuXHR3aWR0aDoxMDAlO1xuXHRtYXJnaW46NTBweCBhdXRvO1xuXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cdGZvbnQtc2l6ZTogMTZweDtcblxuXHQmLS1pbmZvIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cblxuXHQmLS1jb250YWluZXIge1xuXHRcdGRpc3BsYXk6ZmxleDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXHR9XG5cdCYtLW51bWJlciB7XG5cdFx0Zm9udC1zaXplOjhlbTtcblx0XHR0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG5cdFx0Zm9udC13ZWlnaHQ6IDgwMDtcblx0XHRwYWRkaW5nOjAuNWVtO1xuXHRcdGNvbG9yOnB1cnBsZTtcblx0fVxuXHQmLS10ZXh0IHtcblx0XHRmb250LXNpemU6MS40ZW07XG5cdH1cblx0Ji0taW1nIHtcblx0XHQgd2lkdGg6ODAwcHg7XG5cdFx0IGhlaWdodDogYXV0bzsgXG5cdH1cblx0Ji0tYnRuIHtcblx0XHR3aWR0aDoxMGVtO1xuXHRcdG1hcmdpbjoxZW07XG5cdH1cblx0XG59XG5cblxuIEBtZWRpYSAobWF4LXdpZHRoOjEyMDBweCkge1xuXHQuYXBwLW5vdC1mb3VuZCB7XG5cdFx0Ji0tbnVtYmVyIHtcblx0XHRmb250LXNpemU6NmVtO1xuXHR9XG5cdCYtLXRleHQge1xuXHRcdGZvbnQtc2l6ZToxLjJlbTtcblx0fVxuXHQmLS1pbWcge1xuXHRcdCB3aWR0aDo2MDBweDtcblx0fVxuXHR9XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6OTk4cHgpIHtcblx0LmFwcC1ub3QtZm91bmQge1xuXHRcdCYtLW51bWJlciB7XG5cdFx0Zm9udC1zaXplOjRlbTtcblx0fVxuXHQmLS10ZXh0IHtcblx0XHRmb250LXNpemU6MWVtO1xuXHR9XG5cdCYtLWltZyB7XG5cdFx0IHdpZHRoOjM1MHB4O1xuXHR9XG5cdH1cbn1cblxuXG5AbWVkaWEobWF4LXdpZHRoOiA1NTBweCkge1xuXHQuYXBwLW5vdC1mb3VuZCB7XG5cdCYtLWltZyB7XG5cdFx0ZGlzcGxheTpub25lO1xuXHR9XG5cdH1cblxuXHR9IFxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXBcIik7XG4uYXBwLW5vdC1mb3VuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5hcHAtbm90LWZvdW5kLS1pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFwcC1ub3QtZm91bmQtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmFwcC1ub3QtZm91bmQtLW51bWJlciB7XG4gIGZvbnQtc2l6ZTogOGVtO1xuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBjb2xvcjogcHVycGxlO1xufVxuLmFwcC1ub3QtZm91bmQtLXRleHQge1xuICBmb250LXNpemU6IDEuNGVtO1xufVxuLmFwcC1ub3QtZm91bmQtLWltZyB7XG4gIHdpZHRoOiA4MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmFwcC1ub3QtZm91bmQtLWJ0biB7XG4gIHdpZHRoOiAxMGVtO1xuICBtYXJnaW46IDFlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuYXBwLW5vdC1mb3VuZC0tbnVtYmVyIHtcbiAgICBmb250LXNpemU6IDZlbTtcbiAgfVxuICAuYXBwLW5vdC1mb3VuZC0tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxuICAuYXBwLW5vdC1mb3VuZC0taW1nIHtcbiAgICB3aWR0aDogNjAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OThweCkge1xuICAuYXBwLW5vdC1mb3VuZC0tbnVtYmVyIHtcbiAgICBmb250LXNpemU6IDRlbTtcbiAgfVxuICAuYXBwLW5vdC1mb3VuZC0tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbiAgLmFwcC1ub3QtZm91bmQtLWltZyB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLmFwcC1ub3QtZm91bmQtLWltZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"]
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
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/profile/profile.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/profile/profile.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _profile_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./profile.model */
    "./src/app/components/profile/profile.model.ts");
    /* harmony import */


    var src_app_store_action_profile_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/store/action/profile.actions */
    "./src/app/store/action/profile.actions.ts");
    /* harmony import */


    var _service_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service/profile.service */
    "./src/app/components/profile/service/profile.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function ProfileComponent_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.nickname = "";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ProfileComponent_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_button_12_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var avatar_r5 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.getIdAvatar(avatar_r5.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var avatar_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", avatar_r5.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(profileService, translate, _store) {
        _classCallCheck(this, ProfileComponent);

        this.profileService = profileService;
        this.translate = translate;
        this._store = _store;
        this.nickname = null;
        this.idAvatar = null;
        this.onSaved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        translate.addLangs(['en', 'ru']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
      }

      _createClass(ProfileComponent, [{
        key: "getIdAvatar",
        value: function getIdAvatar(data) {
          this.idAvatar = data;
        }
      }, {
        key: "save",
        value: function save(nickname, idAvatar) {
          /* 	this.profileService.saveProfile(nickname, idAvatar); */
          var profile = new _profile_model__WEBPACK_IMPORTED_MODULE_1__["Profile"]();
          profile.nickname = nickname;
          profile.id = idAvatar;

          this._store.dispatch(Object(src_app_store_action_profile_actions__WEBPACK_IMPORTED_MODULE_2__["saveProfileUser"])({
            profile: profile
          }));

          this.onSaved.emit();
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]));
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      outputs: {
        onSaved: "onSaved"
      },
      decls: 16,
      vars: 13,
      consts: [[1, "app-profile"], [1, "app-profile--text"], [1, "example-form-field"], ["matInput", "", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["xxx", "ngModel"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "class", "app-profile--button-close", 3, "click", 4, "ngIf"], [1, "app-profile--container"], ["class", "app-profile--button-avatar", 3, "click", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 1, "app-profile--button-done", 3, "disabled", "click"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", 1, "app-profile--button-close", 3, "click"], [1, "app-profile--button-avatar", 3, "click"], [1, "app-profile--avatar", 3, "src"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_8_listener($event) {
            return ctx.nickname = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProfileComponent_button_10_Template, 3, 0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProfileComponent_button_12_Template, 2, 1, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_13_listener() {
            return ctx.save(ctx.nickname, ctx.idAvatar);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, "PROFILE.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, "PROFILE.MAT-LABEL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nickname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nickname);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profileService.avatars);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r0.invalid || !ctx.idAvatar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 11, "PROFILE.BUTTON"));
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\n.app-profile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 16px;\n  font-family: \"Roboto\", sans-serif;\n  margin-top: 50px;\n}\n.app-profile--container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: 1.5em auto;\n  width: 1200px;\n}\n.app-profile--text[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin-bottom: 1em;\n  font-weight: 700;\n}\n.app-profile--avatar[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 12em;\n  height: auto;\n}\n.app-profile--button-close[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n}\n.app-profile--button-avatar[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  outline: none;\n}\n.app-profile--button-avatar[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  transition: ease;\n}\n.app-profile--button-avatar[_ngcontent-%COMP%]:focus {\n  transform: scale(1.2);\n}\n.app-profile--button-done[_ngcontent-%COMP%] {\n  margin: 1em auto;\n  width: 6em;\n  font-size: 1.6em;\n}\n.mat-form-field[_ngcontent-%COMP%] {\n  width: 15em;\n}\n@media (max-width: 1440px) {\n  .app-profile--container[_ngcontent-%COMP%] {\n    width: 1000px;\n  }\n  .app-profile--text[_ngcontent-%COMP%] {\n    font-size: 1.8em;\n  }\n  .app-profile--avatar[_ngcontent-%COMP%] {\n    width: 10em;\n  }\n  .app-profile--button-done[_ngcontent-%COMP%] {\n    margin: 0.8em auto;\n  }\n}\n@media (max-width: 1200px) {\n  .app-profile--container[_ngcontent-%COMP%] {\n    margin: 1.2em auto;\n    width: 800px;\n  }\n  .app-profile--avatar[_ngcontent-%COMP%] {\n    width: 8em;\n  }\n  .app-profile--button-done[_ngcontent-%COMP%] {\n    font-size: 1.4em;\n  }\n}\n@media (max-width: 998px) {\n  .app-profile--container[_ngcontent-%COMP%] {\n    width: 700px;\n  }\n  .app-profile--text[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n  }\n  .app-profile--avatar[_ngcontent-%COMP%] {\n    width: 10em;\n  }\n  .app-profile--button-done[_ngcontent-%COMP%] {\n    width: 5em;\n    font-size: 1.2em;\n  }\n\n  .mat-form-field[_ngcontent-%COMP%] {\n    width: 12em;\n  }\n}\n@media (max-width: 768px) {\n  .app-profile--container[_ngcontent-%COMP%] {\n    width: 520px;\n  }\n  .app-profile--text[_ngcontent-%COMP%] {\n    font-size: 1.4em;\n  }\n  .app-profile--avatar[_ngcontent-%COMP%] {\n    width: 8em;\n  }\n  .app-profile--button-done[_ngcontent-%COMP%] {\n    margin: 0.5em auto;\n    font-size: 1em;\n  }\n}\n@media (max-width: 550px) {\n  .app-profile--container[_ngcontent-%COMP%] {\n    margin: 0.5em auto;\n    width: 350px;\n  }\n  .app-profile--text[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n  .app-profile--avatar[_ngcontent-%COMP%] {\n    width: 7em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJnYXJpdGEvRG93bmxvYWRzL2xlYXJuLWVuZ2xpc2gvc3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsb0ZBQUE7QUFDUjtFQUNDLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUNDRDtBRENDO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQ0Y7QURFQztFQUNDLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUY7QURHQztFQUNDLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RGO0FESUM7RUFDQyxZQUFBO0VBQ0EsdUJBQUE7QUNGRjtBREtDO0VBQ0MsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0hGO0FES0M7RUFDQyxxQkFBQTtFQUNBLGdCQUFBO0FDSEY7QURLQztFQUNDLHFCQUFBO0FDSEY7QURLQztFQUNDLGdCQUFBO0VBQ0EsVUFBQTtFQUNHLGdCQUFBO0FDSEw7QURRRTtFQUNELFdBQUE7QUNMRDtBRFNBO0VBRUU7SUFDQyxhQUFBO0VDUEQ7RURVQTtJQUNDLGdCQUFBO0VDUkQ7RURXQTtJQUNDLFdBQUE7RUNURDtFRFlBO0lBQ0Msa0JBQUE7RUNWRDtBQUNGO0FEaUJBO0VBRUU7SUFDQyxrQkFBQTtJQUNBLFlBQUE7RUNoQkQ7RURtQkE7SUFDQyxVQUFBO0VDakJEO0VEb0JBO0lBQ0MsZ0JBQUE7RUNsQkQ7QUFDRjtBRDBCQTtFQUVJO0lBQ0MsWUFBQTtFQ3pCSDtFRDRCRTtJQUNDLGdCQUFBO0VDMUJIO0VENkJFO0lBQ0MsV0FBQTtFQzNCSDtFRDhCRTtJQUNDLFVBQUE7SUFDQSxnQkFBQTtFQzVCSDs7RURnQ0E7SUFDQSxXQUFBO0VDN0JBO0FBQ0Y7QURpQ0E7RUFFQztJQUNDLFlBQUE7RUNoQ0E7RURtQ0Q7SUFDQyxnQkFBQTtFQ2pDQTtFRG9DRDtJQUNDLFVBQUE7RUNsQ0E7RURxQ0Q7SUFDQyxrQkFBQTtJQUNBLGNBQUE7RUNuQ0E7QUFDRjtBRHlDQTtFQUVFO0lBQ0Msa0JBQUE7SUFDQSxZQUFBO0VDeENEO0VEMkNBO0lBQ0MsZ0JBQUE7RUN6Q0Q7RUQ0Q0E7SUFDQyxVQUFBO0VDMUNEO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcbi5hcHAtcHJvZmlsZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cdG1hcmdpbi10b3A6IDUwcHg7XG5cblx0Ji0tY29udGFpbmVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOnJvdztcblx0XHRmbGV4LXdyYXA6IHdyYXA7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdG1hcmdpbjoxLjVlbSBhdXRvO1xuXHRcdHdpZHRoOjEyMDBweDtcblx0fVxuXG5cdCYtLXRleHQge1xuXHRcdGZvbnQtc2l6ZTogMmVtO1xuXHRcdG1hcmdpbi1ib3R0b206IDFlbTtcblx0XHRmb250LXdlaWdodDogNzAwO1xuXHR9XG5cblx0Ji0tYXZhdGFyIHtcblx0XHRtYXJnaW46NXB4O1xuXHRcdHdpZHRoOjEyZW07XG5cdFx0aGVpZ2h0OiBhdXRvO1xuXHR9XG5cblx0Ji0tYnV0dG9uLWNsb3NlIHtcblx0XHRib3JkZXI6IG5vbmU7XG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdH1cblxuXHQmLS1idXR0b24tYXZhdGFyIHtcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRib3JkZXI6bm9uZTtcblx0XHRvdXRsaW5lOiBub25lO1xuXHR9XG5cdCYtLWJ1dHRvbi1hdmF0YXI6aG92ZXIge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcblx0XHR0cmFuc2l0aW9uOiBlYXNlO1xuXHR9XG5cdCYtLWJ1dHRvbi1hdmF0YXI6Zm9jdXMge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcblx0fVxuXHQmLS1idXR0b24tZG9uZSB7XG5cdFx0bWFyZ2luOiAxZW0gYXV0bztcblx0XHR3aWR0aDogNmVtO1xuXHQgICAgZm9udC1zaXplOiAxLjZlbTtcblxuXHR9XG59XG5cbiAgLm1hdC1mb3JtLWZpZWxke1xuXHR3aWR0aDogMTVlbTtcbiAgfVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOjE0NDBweCkge1xuICAgIC5hcHAtcHJvZmlsZSB7XG5cdFx0Ji0tY29udGFpbmVyIHtcblx0XHRcdHdpZHRoOjEwMDBweDtcblx0XHR9XG5cdFxuXHRcdCYtLXRleHQge1xuXHRcdFx0Zm9udC1zaXplOiAxLjhlbTtcblx0XHR9XG5cdFxuXHRcdCYtLWF2YXRhciB7XG5cdFx0XHR3aWR0aDoxMGVtO1xuXHRcdH1cblxuXHRcdCYtLWJ1dHRvbi1kb25lIHtcblx0XHRcdG1hcmdpbjogLjhlbSBhdXRvO1xuXHRcdH1cblxuXHR9XG5cbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDoxMjAwcHgpIHtcblx0IC5hcHAtcHJvZmlsZSB7XG5cdFx0Ji0tY29udGFpbmVyIHtcblx0XHRcdG1hcmdpbjoxLjJlbSBhdXRvO1xuXHRcdFx0d2lkdGg6ODAwcHg7XG5cdFx0fVxuXHRcblx0XHQmLS1hdmF0YXIge1xuXHRcdFx0d2lkdGg6OGVtO1xuXHRcdH1cblxuXHRcdCYtLWJ1dHRvbi1kb25lIHtcblx0XHRcdGZvbnQtc2l6ZTogMS40ZW07XG5cdFx0fVxuXG5cdCB9XG5cbn1cblxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOjk5OHB4KSB7XG5cdC5hcHAtcHJvZmlsZSB7XG5cdCAgICYtLWNvbnRhaW5lciB7XG5cdFx0ICAgd2lkdGg6NzAwcHg7XG5cdCAgIH1cbiAgIFxuXHQgICAmLS10ZXh0IHtcblx0XHQgICBmb250LXNpemU6IDEuNmVtO1xuXHQgICB9XG4gICBcblx0ICAgJi0tYXZhdGFyIHtcblx0XHQgICB3aWR0aDoxMGVtO1xuXHQgICB9XG5cblx0ICAgJi0tYnV0dG9uLWRvbmUge1xuXHRcdCAgIHdpZHRoOiA1ZW07XG5cdFx0ICAgZm9udC1zaXplOiAxLjJlbTtcblx0ICAgfVxuXG5cdH1cbiBcdC5tYXQtZm9ybS1maWVsZHtcblx0XHR3aWR0aDogMTJlbTtcblx0ICB9IFxuXG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XG4uYXBwLXByb2ZpbGUge1xuXHQmLS1jb250YWluZXIge1xuXHRcdHdpZHRoOjUyMHB4O1xuXHR9XG5cblx0Ji0tdGV4dCB7XG5cdFx0Zm9udC1zaXplOiAxLjRlbTtcblx0fVxuXG5cdCYtLWF2YXRhciB7XG5cdFx0d2lkdGg6OGVtO1xuXHR9XG5cblx0Ji0tYnV0dG9uLWRvbmUge1xuXHRcdG1hcmdpbjogLjVlbSBhdXRvO1xuXHRcdGZvbnQtc2l6ZTogMWVtO1xuXHR9XG5cbn1cblxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA1NTBweCkge1xuXHQuYXBwLXByb2ZpbGUge1xuXHRcdCYtLWNvbnRhaW5lciB7XG5cdFx0XHRtYXJnaW46MC41ZW0gYXV0bztcblx0XHRcdHdpZHRoOjM1MHB4O1xuXHRcdH1cblx0XG5cdFx0Ji0tdGV4dCB7XG5cdFx0XHRmb250LXNpemU6IDEuMmVtO1xuXHRcdH1cblx0XG5cdFx0Ji0tYXZhdGFyIHtcblx0XHRcdHdpZHRoOjdlbTtcblx0XHR9XG5cdH1cblx0fVxuICIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwXCIpO1xuLmFwcC1wcm9maWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5hcHAtcHJvZmlsZS0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMS41ZW0gYXV0bztcbiAgd2lkdGg6IDEyMDBweDtcbn1cbi5hcHAtcHJvZmlsZS0tdGV4dCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uYXBwLXByb2ZpbGUtLWF2YXRhciB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogMTJlbTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmFwcC1wcm9maWxlLS1idXR0b24tY2xvc2Uge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmFwcC1wcm9maWxlLS1idXR0b24tYXZhdGFyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5hcHAtcHJvZmlsZS0tYnV0dG9uLWF2YXRhcjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNpdGlvbjogZWFzZTtcbn1cbi5hcHAtcHJvZmlsZS0tYnV0dG9uLWF2YXRhcjpmb2N1cyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cbi5hcHAtcHJvZmlsZS0tYnV0dG9uLWRvbmUge1xuICBtYXJnaW46IDFlbSBhdXRvO1xuICB3aWR0aDogNmVtO1xuICBmb250LXNpemU6IDEuNmVtO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTVlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuYXBwLXByb2ZpbGUtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMDBweDtcbiAgfVxuICAuYXBwLXByb2ZpbGUtLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gIH1cbiAgLmFwcC1wcm9maWxlLS1hdmF0YXIge1xuICAgIHdpZHRoOiAxMGVtO1xuICB9XG4gIC5hcHAtcHJvZmlsZS0tYnV0dG9uLWRvbmUge1xuICAgIG1hcmdpbjogMC44ZW0gYXV0bztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuYXBwLXByb2ZpbGUtLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxLjJlbSBhdXRvO1xuICAgIHdpZHRoOiA4MDBweDtcbiAgfVxuICAuYXBwLXByb2ZpbGUtLWF2YXRhciB7XG4gICAgd2lkdGg6IDhlbTtcbiAgfVxuICAuYXBwLXByb2ZpbGUtLWJ1dHRvbi1kb25lIHtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTk4cHgpIHtcbiAgLmFwcC1wcm9maWxlLS1jb250YWluZXIge1xuICAgIHdpZHRoOiA3MDBweDtcbiAgfVxuICAuYXBwLXByb2ZpbGUtLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gIH1cbiAgLmFwcC1wcm9maWxlLS1hdmF0YXIge1xuICAgIHdpZHRoOiAxMGVtO1xuICB9XG4gIC5hcHAtcHJvZmlsZS0tYnV0dG9uLWRvbmUge1xuICAgIHdpZHRoOiA1ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYXBwLXByb2ZpbGUtLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDUyMHB4O1xuICB9XG4gIC5hcHAtcHJvZmlsZS0tdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgfVxuICAuYXBwLXByb2ZpbGUtLWF2YXRhciB7XG4gICAgd2lkdGg6IDhlbTtcbiAgfVxuICAuYXBwLXByb2ZpbGUtLWJ1dHRvbi1kb25lIHtcbiAgICBtYXJnaW46IDAuNWVtIGF1dG87XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xuICAuYXBwLXByb2ZpbGUtLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwLjVlbSBhdXRvO1xuICAgIHdpZHRoOiAzNTBweDtcbiAgfVxuICAuYXBwLXByb2ZpbGUtLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbiAgLmFwcC1wcm9maWxlLS1hdmF0YXIge1xuICAgIHdpZHRoOiA3ZW07XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.scss']
        }]
      }], function () {
        return [{
          type: _service_profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }];
      }, {
        onSaved: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/profile/profile.model.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/profile/profile.model.ts ***!
    \*****************************************************/

  /*! exports provided: Profile */

  /***/
  function srcAppComponentsProfileProfileModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Profile", function () {
      return Profile;
    });

    var Profile = function Profile() {
      _classCallCheck(this, Profile);
    };
    /***/

  },

  /***/
  "./src/app/components/profile/service/profile.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/profile/service/profile.service.ts ***!
    \***************************************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppComponentsProfileServiceProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _profile_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../profile.model */
    "./src/app/components/profile/profile.model.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProfileService = /*#__PURE__*/function () {
      function ProfileService(_http) {
        _classCallCheck(this, ProfileService);

        this._http = _http;
        this.baseURL = './assets/avatars.json';
        this.avatars = [];
        this.nicknameRival = ['Саша', 'Женя', 'Знаток', 'Учитель'];
      }

      _createClass(ProfileService, [{
        key: "loadAvatarHttp",
        value: function loadAvatarHttp() {
          var _this8 = this;

          /* this._http.get<Profile[]>(this.baseURL).subscribe((items: Profile[]) => this.avatars = items); */
          return this._http.get(this.baseURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (items) {
            _this8.avatars = items;
            return items;
          }));
        }
      }, {
        key: "saveProfile",
        value: function saveProfile(userName, idAvatar) {
          var dataUser = {
            nickname: userName,
            id: idAvatar
          };
          var dataUserLS = JSON.stringify(dataUser);
          localStorage.setItem(ProfileService.profileKeyLS, dataUserLS);
        }
      }, {
        key: "getProfileFromLS",
        value: function getProfileFromLS() {
          var gettingDataFromLocalStorage = localStorage.getItem(ProfileService.profileKeyLS);

          if (gettingDataFromLocalStorage) {
            var datafromStorage = JSON.parse(gettingDataFromLocalStorage);
            var foundElement = this.avatars.find(function (data) {
              return data.id === datafromStorage.id;
            });
            datafromStorage.src = foundElement.src;
            return datafromStorage;
          }

          return new _profile_model__WEBPACK_IMPORTED_MODULE_1__["Profile"]();
        }
      }, {
        key: "getRandomUser",
        value: function getRandomUser() {
          var rand = Math.floor(Math.random() * this.avatars.length);
          var randNickname = Math.floor(Math.random() * this.nicknameRival.length);
          var profile = new _profile_model__WEBPACK_IMPORTED_MODULE_1__["Profile"]();
          profile.src = this.avatars[rand].src;
          profile.nickname = this.nicknameRival[randNickname];
          return profile;
        }
      }]);

      return ProfileService;
    }();

    ProfileService.profileKeyLS = 'profileKeyLS';

    ProfileService.ɵfac = function ProfileService_Factory(t) {
      return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProfileService,
      factory: ProfileService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
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

        this._http = _http; // public sourceLanguage: string[] = ['ru-ru', 'ru-en', 'ru-pl', 'ru-de', 'ru-fr', 'ru-es', 'ru-it'];

        this.urlAPI = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=';
        this.mainAPIKey = 'dict.1.1.20200609T214032Z.bb7f13f95e75ccf2.de79d0d2a909a5510ae3147dde13ba2f0d3f1dd8';
        this.langRU = 'ru-en';
        this.langEN = 'en-ru';
      }

      _createClass(DataService, [{
        key: "translateWord",
        value: function translateWord(data, lang) {
          var url = "".concat(this.urlAPI).concat(this.mainAPIKey, "&lang=").concat(lang, "&text=").concat(data);
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


    var src_app_store_selectors_translate_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/store/selectors/translate.selectors */
    "./src/app/store/selectors/translate.selectors.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function TranslatorComponent_button_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranslatorComponent_button_15_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r2.word = "";
          return ctx_r2.onTitleChange();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function TranslatorComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r1.error$), "");
      }
    }

    var TranslatorComponent = /*#__PURE__*/function () {
      // tslint:disable-next-line: no-shadowed-variable
      function TranslatorComponent(_store$, translate) {
        _classCallCheck(this, TranslatorComponent);

        this._store$ = _store$;
        this.translate = translate;
        this.wordTranslate$ = this._store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_store_selectors_translate_selectors__WEBPACK_IMPORTED_MODULE_3__["selectWordTranslate"]));
        this.error$ = this._store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(src_app_store_selectors_translate_selectors__WEBPACK_IMPORTED_MODULE_3__["selectError"]));
        this.lang = 'ru-en';
        translate.addLangs(['en', 'ru']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
      }

      _createClass(TranslatorComponent, [{
        key: "translateWord",
        value: function translateWord() {
          return this._store$.dispatch(Object(src_app_store_action_translate_action__WEBPACK_IMPORTED_MODULE_2__["translate"])({
            word: this.word,
            lang: this.lang
          }));
        }
      }, {
        key: "onTitleChange",
        value: function onTitleChange() {
          if (this.word.length === 0) {
            return this._store$.dispatch(Object(src_app_store_action_translate_action__WEBPACK_IMPORTED_MODULE_2__["resultTranslate"])({
              wordTranslate: []
            }));
          }
        }
      }, {
        key: "changeLang",
        value: function changeLang() {
          if (this.lang === 'ru-en') {
            this.lang = 'en-ru';
          } else {
            this.lang = 'ru-en';
          }
        }
      }]);

      return TranslatorComponent;
    }();

    TranslatorComponent.ɵfac = function TranslatorComponent_Factory(t) {
      return new (t || TranslatorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]));
    };

    TranslatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TranslatorComponent,
      selectors: [["app-translator"]],
      decls: 23,
      vars: 13,
      consts: [[1, "app-translator"], [1, "app-translator--container"], [1, "app-translator--translate"], [1, "app-translator--lang"], [1, "app-translator--arrows", 3, "click"], [1, "material-icons"], [1, "app-translator--text"], [1, "app-translator--form"], [1, "app-translator--form", 3, "keyup.enter"], ["type", "text", "name", "wordTranslate", 1, "app-translator--input", 3, "placeholder", "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", "class", "app-translator--button", "type", "button", "class", "app-translator--btn", 3, "click", 4, "ngIf"], [1, "app-translator--answer"], [4, "ngIf"], [1, "ball"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", "type", "button", 1, "app-translator--btn", 3, "click"]],
      template: function TranslatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranslatorComponent_Template_div_click_5_listener() {
            return ctx.changeLang();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " sync_alt ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function TranslatorComponent_Template_form_keyup_enter_12_listener() {
            return ctx.translateWord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TranslatorComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.word = $event;
          })("ngModelChange", function TranslatorComponent_Template_input_ngModelChange_13_listener() {
            return ctx.onTitleChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TranslatorComponent_button_15_Template, 3, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TranslatorComponent_div_20_Template, 3, 3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "ru-en" ? "\u0420\u0443\u0441\u0441\u043A\u0438\u0439" : "\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.lang === "ru-en" ? "\u0410\u043D\u0433\u043B\u0438\u0439\u0441\u043A\u0438\u0439" : "\u0420\u0443\u0441\u0441\u043A\u0438\u0439");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, "TRANSLATOR.EXAMPLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.word);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.word);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 9, ctx.wordTranslate$)[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 11, ctx.error$));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\n.app-translator[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 50px auto;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  box-sizing: border-box;\n}\n.app-translator--container[_ngcontent-%COMP%] {\n  width: 800px;\n  margin: auto;\n  border: 1px solid gray;\n}\n.app-translator--translate[_ngcontent-%COMP%] {\n  display: flex;\n  border-bottom: 1px solid gray;\n  padding: 1em;\n  font-size: 1.4em;\n}\n.app-translator--text[_ngcontent-%COMP%] {\n  display: flex;\n}\n.app-translator--lang[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: center;\n  color: #504e4e;\n}\n.app-translator--input[_ngcontent-%COMP%] {\n  width: 16em;\n  padding: 0.8em;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 1.2em;\n}\n.app-translator--form[_ngcontent-%COMP%] {\n  width: 400px;\n  border-right: 1px solid gray;\n  box-sizing: border-box;\n}\n.app-translator--arrows[_ngcontent-%COMP%] {\n  color: #504e4e;\n  cursor: pointer;\n}\n.app-translator--arrows[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n.app-translator--btn[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.app-translator--answer[_ngcontent-%COMP%] {\n  padding: 0.8em;\n  font-size: 1.2em;\n  height: 3em;\n  box-sizing: border-box;\n}\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, input[_ngcontent-%COMP%]:-webkit-autofill:active {\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n}\n@media (max-width: 998px) {\n  .app-translator--container[_ngcontent-%COMP%] {\n    width: 600px;\n  }\n  .app-translator--translate[_ngcontent-%COMP%] {\n    padding: 0.5em;\n    font-size: 1.2;\n  }\n  .app-translator--input[_ngcontent-%COMP%] {\n    width: 11em;\n    padding: 1em;\n  }\n  .app-translator--form[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n  .app-translator--answer[_ngcontent-%COMP%] {\n    padding: 1em;\n  }\n}\n@media (max-width: 768px) {\n  .app-translator--container[_ngcontent-%COMP%] {\n    width: 500px;\n  }\n  .app-translator--input[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n  .app-translator--form[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n  .app-translator--answer[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n@media (max-width: 550px) {\n  .app-translator--container[_ngcontent-%COMP%] {\n    width: 350px;\n  }\n  .app-translator--translate[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n  .app-translator--input[_ngcontent-%COMP%] {\n    width: 16em;\n  }\n  .app-translator--form[_ngcontent-%COMP%] {\n    width: 300px;\n    border-right: none;\n  }\n  .app-translator--text[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .app-translator--answer[_ngcontent-%COMP%] {\n    padding: 0.8em 1em;\n    border-top: 1px solid gray;\n  }\n}\n.ball[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  line-height: 50px;\n  border: 5px solid purple;\n  position: relative;\n  -webkit-animation: combined 5s linear infinite;\n          animation: combined 5s linear infinite;\n  left: 0;\n  top: 0;\n}\n@-webkit-keyframes combined {\n  16%, 48%, 78% {\n    top: 280px;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  32% {\n    top: 50px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  62% {\n    top: 120px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0.8;\n  }\n  82% {\n    top: 120px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0.6;\n  }\n  90% {\n    top: 120px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0;\n  }\n  100% {\n    transform: rotate(360deg);\n    top: 160px;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    left: 100%;\n    opacity: 0;\n  }\n}\n@keyframes combined {\n  16%, 48%, 78% {\n    top: 280px;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n  }\n  32% {\n    top: 50px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n  }\n  62% {\n    top: 120px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0.8;\n  }\n  82% {\n    top: 120px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0.6;\n  }\n  90% {\n    top: 120px;\n    -webkit-animation-timing-function: ease-in;\n            animation-timing-function: ease-in;\n    opacity: 0;\n  }\n  100% {\n    transform: rotate(360deg);\n    top: 160px;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    left: 100%;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXJnYXJpdGEvRG93bmxvYWRzL2xlYXJuLWVuZ2xpc2gvc3JjL2FwcC9jb21wb25lbnRzL3RyYW5zbGF0b3IvdHJhbnNsYXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90cmFuc2xhdG9yL3RyYW5zbGF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsb0ZBQUE7QUFFUjtFQUNDLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDQUQ7QURFQztFQUNDLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNBRjtBREdDO0VBQ0MsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDREY7QURHQztFQUNDLGFBQUE7QUNERjtBRElDO0VBQ0MsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0ZGO0FES0M7RUFDQyxXQUFBO0VBQ0MsY0FBQTtFQUNELFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0hGO0FET0M7RUFDQyxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0xGO0FEUUM7RUFDQyxjQUFBO0VBQ0EsZUFBQTtBQ05GO0FEUUM7RUFDQyxZQUFBO0FDTkY7QURTQztFQUNDLGtCQUFBO0FDUEY7QURTQztFQUNDLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQyxzQkFBQTtBQ1BIO0FEV0E7Ozs7RUFJSSx5REFBQTtFQUFBLGlEQUFBO0FDUko7QURXQTtFQUVDO0lBQ0MsWUFBQTtFQ1RBO0VEV0Q7SUFDQyxjQUFBO0lBQ0EsY0FBQTtFQ1RBO0VEV0Q7SUFDQyxXQUFBO0lBQ0MsWUFBQTtFQ1REO0VEV0Q7SUFDQyxZQUFBO0VDVEE7RURXRDtJQUNBLFlBQUE7RUNUQztBQUNGO0FEY0E7RUFFQztJQUNDLFlBQUE7RUNiQTtFRGdCRDtJQUNDLGNBQUE7RUNkQTtFRGdCRDtJQUNDLFlBQUE7RUNkQTtFRGdCRDtJQUNDLGNBQUE7RUNkQTtBQUNGO0FEa0JBO0VBRUM7SUFDQyxZQUFBO0VDakJBO0VEb0JEO0lBQ0MsY0FBQTtFQ2xCQTtFRHFCRDtJQUNDLFdBQUE7RUNuQkE7RURxQkQ7SUFDQyxZQUFBO0lBQ0Esa0JBQUE7RUNuQkE7RURxQkQ7SUFDQyxzQkFBQTtFQ25CQTtFRHFCRDtJQUNFLGtCQUFBO0lBQ0QsMEJBQUE7RUNuQkE7QUFDRjtBRDBCQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FDeEJEO0FENkJBO0VBQ0E7SUFDQyxVQUFBO0lBQ0EsMkNBQUE7WUFBQSxtQ0FBQTtFQzFCQztFRDRCRjtJQUNDLFNBQUE7SUFDQSwwQ0FBQTtZQUFBLGtDQUFBO0VDMUJDO0VENEJGO0lBQ0MsVUFBQTtJQUNBLDBDQUFBO1lBQUEsa0NBQUE7SUFDQSxZQUFBO0VDMUJDO0VENEJGO0lBQ0MsVUFBQTtJQUNBLDBDQUFBO1lBQUEsa0NBQUE7SUFDQSxZQUFBO0VDMUJDO0VENEJGO0lBQ0MsVUFBQTtJQUNBLDBDQUFBO1lBQUEsa0NBQUE7SUFDQSxVQUFBO0VDMUJDO0VENkJGO0lBQ0MseUJBQUE7SUFDQSxVQUFBO0lBQ0EsMkNBQUE7WUFBQSxtQ0FBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0VDM0JDO0FBQ0Y7QURKQTtFQUNBO0lBQ0MsVUFBQTtJQUNBLDJDQUFBO1lBQUEsbUNBQUE7RUMxQkM7RUQ0QkY7SUFDQyxTQUFBO0lBQ0EsMENBQUE7WUFBQSxrQ0FBQTtFQzFCQztFRDRCRjtJQUNDLFVBQUE7SUFDQSwwQ0FBQTtZQUFBLGtDQUFBO0lBQ0EsWUFBQTtFQzFCQztFRDRCRjtJQUNDLFVBQUE7SUFDQSwwQ0FBQTtZQUFBLGtDQUFBO0lBQ0EsWUFBQTtFQzFCQztFRDRCRjtJQUNDLFVBQUE7SUFDQSwwQ0FBQTtZQUFBLGtDQUFBO0lBQ0EsVUFBQTtFQzFCQztFRDZCRjtJQUNDLHlCQUFBO0lBQ0EsVUFBQTtJQUNBLDJDQUFBO1lBQUEsbUNBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtFQzNCQztBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90cmFuc2xhdG9yL3RyYW5zbGF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XG4gIFxuLmFwcC10cmFuc2xhdG9ye1xuXHR3aWR0aDoxMDAlO1xuXHRtYXJnaW46IDUwcHggYXV0bztcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cblx0Ji0tY29udGFpbmVyIHtcblx0XHR3aWR0aDo4MDBweDtcblx0XHRtYXJnaW46YXV0bztcblx0XHRib3JkZXI6MXB4IHNvbGlkIGdyYXk7IFxuXHR9XG5cblx0Ji0tdHJhbnNsYXRlIHtcblx0XHRkaXNwbGF5OmZsZXg7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7IFxuXHRcdHBhZGRpbmc6MWVtO1xuXHRcdGZvbnQtc2l6ZToxLjRlbTtcblx0fVxuXHQmLS10ZXh0IHtcblx0XHRkaXNwbGF5OmZsZXg7XG5cdH1cblxuXHQmLS1sYW5nIHtcblx0XHR3aWR0aDo1MCU7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGNvbG9yOnJnYig4MCwgNzgsIDc4KTtcblx0fVxuXG5cdCYtLWlucHV0IHtcblx0XHR3aWR0aDoxNmVtO1xuXHQgXHRwYWRkaW5nOjAuOGVtOyBcblx0XHRib3JkZXI6IG5vbmU7XG5cdFx0b3V0bGluZTogbm9uZTtcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRmb250LXNpemU6IDEuMmVtO1xuXG5cdH0gXG5cdFxuXHQmLS1mb3JtIHtcblx0XHR3aWR0aDo0MDBweDtcblx0XHRib3JkZXItcmlnaHQ6MXB4IHNvbGlkIGdyYXk7XG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0fVxuXG5cdCYtLWFycm93cyB7XG5cdFx0Y29sb3I6cmdiKDgwLCA3OCwgNzgpO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0fVxuXHQmLS1hcnJvd3M6aG92ZXIgIHtcblx0XHRjb2xvcjpibGFja1xuXHR9XG5cblx0Ji0tYnRuIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdH1cblx0Ji0tYW5zd2VyIHtcblx0XHRwYWRkaW5nOjAuOGVtO1xuXHRcdGZvbnQtc2l6ZTogMS4yZW07XG5cdFx0aGVpZ2h0OiAzZW07XG5cdCBcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7IFxuXHR9XG59XG5cbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlIHtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzO1xufSBcblxuQG1lZGlhKG1heC13aWR0aDogOTk4cHgpIHtcblx0LmFwcC10cmFuc2xhdG9ye1xuXHQmLS1jb250YWluZXIge1xuXHRcdHdpZHRoOjYwMHB4O1xuXHR9XG5cdCYtLXRyYW5zbGF0ZSB7XG5cdFx0cGFkZGluZzowLjVlbTtcblx0XHRmb250LXNpemU6IDEuMjtcblx0fVxuXHQmLS1pbnB1dCB7XG5cdFx0d2lkdGg6MTFlbTtcblx0IFx0cGFkZGluZzoxZW07IFxuXHR9IFxuXHQmLS1mb3JtIHtcblx0XHR3aWR0aDozMDBweDtcblx0fVxuXHQmLS1hbnN3ZXIge1xuXHRwYWRkaW5nOiAxZW07XG5cdH1cbn1cblxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuYXBwLXRyYW5zbGF0b3J7XG5cdCYtLWNvbnRhaW5lciB7XG5cdFx0d2lkdGg6NTAwcHg7XG5cdH1cblxuXHQmLS1pbnB1dCB7XG5cdFx0Zm9udC1zaXplOiAxZW07IFxuXHR9IFxuXHQmLS1mb3JtIHtcblx0XHR3aWR0aDoyNTBweDtcblx0fVxuXHQmLS1hbnN3ZXIge1xuXHRcdGZvbnQtc2l6ZToxZW07XG5cdH1cbn1cbn1cblxuQG1lZGlhKG1heC13aWR0aDogNTUwcHgpIHtcblx0LmFwcC10cmFuc2xhdG9ye1xuXHQmLS1jb250YWluZXIge1xuXHRcdHdpZHRoOjM1MHB4O1xuXHR9XG5cblx0Ji0tdHJhbnNsYXRlIHtcblx0XHRmb250LXNpemU6IDFlbTtcblx0fVxuXHRcblx0Ji0taW5wdXQge1xuXHRcdHdpZHRoOjE2ZW07XG5cdH0gXG5cdCYtLWZvcm0ge1xuXHRcdHdpZHRoOjMwMHB4O1xuXHRcdGJvcmRlci1yaWdodDogbm9uZTtcblx0fVxuXHQmLS10ZXh0IHtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHR9XG5cdCYtLWFuc3dlciB7XG5cdCBcdHBhZGRpbmc6MC44ZW0gMWVtOyBcblx0XHRib3JkZXItdG9wOjFweCBzb2xpZCBncmF5OyBcblx0fVxufVxuXG59XG5cblxuXG4uYmFsbCB7XG5cdHdpZHRoOjEyMHB4O1xuXHRoZWlnaHQ6MTIwcHg7XG5cdGxpbmUtaGVpZ2h0OjUwcHg7XG5cdGJvcmRlcjo1cHggc29saWQgcHVycGxlO1xuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcblx0YW5pbWF0aW9uOiBjb21iaW5lZCA1cyBsaW5lYXIgaW5maW5pdGU7XG5cdGxlZnQ6MDtcblx0dG9wOjA7IFxufVxuXG5cblxuQGtleWZyYW1lcyBjb21iaW5lZCB7XG4xNiUsIDQ4JSwgNzglICB7XG5cdHRvcDogMjgwcHg7XG5cdGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xufVxuMzIlIHtcblx0dG9wOiA1MHB4O1xuXHRhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xufVxuNjIlIHtcblx0dG9wOiAxMjBweDtcblx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcblx0b3BhY2l0eTowLjg7XG59XG44MiUge1xuXHR0b3A6IDEyMHB4O1xuXHRhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuXHRvcGFjaXR5OjAuNjtcbn1cbjkwJSB7XG5cdHRvcDogMTIwcHg7XG5cdGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG5cdG9wYWNpdHk6MDtcbn1cblxuMTAwJSB7XG5cdHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG5cdHRvcDogMTYwcHg7XG5cdGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuXHRsZWZ0OjEwMCU7XG5cdG9wYWNpdHk6MDtcbn1cbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcFwiKTtcbi5hcHAtdHJhbnNsYXRvciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5hcHAtdHJhbnNsYXRvci0tY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG59XG4uYXBwLXRyYW5zbGF0b3ItLXRyYW5zbGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xuICBwYWRkaW5nOiAxZW07XG4gIGZvbnQtc2l6ZTogMS40ZW07XG59XG4uYXBwLXRyYW5zbGF0b3ItLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFwcC10cmFuc2xhdG9yLS1sYW5nIHtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzUwNGU0ZTtcbn1cbi5hcHAtdHJhbnNsYXRvci0taW5wdXQge1xuICB3aWR0aDogMTZlbTtcbiAgcGFkZGluZzogMC44ZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4uYXBwLXRyYW5zbGF0b3ItLWZvcm0ge1xuICB3aWR0aDogNDAwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uYXBwLXRyYW5zbGF0b3ItLWFycm93cyB7XG4gIGNvbG9yOiAjNTA0ZTRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYXBwLXRyYW5zbGF0b3ItLWFycm93czpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5hcHAtdHJhbnNsYXRvci0tYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmFwcC10cmFuc2xhdG9yLS1hbnN3ZXIge1xuICBwYWRkaW5nOiAwLjhlbTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgaGVpZ2h0OiAzZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpmb2N1cyxcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6YWN0aXZlIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDAwcyBlYXNlLWluLW91dCAwcztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5OHB4KSB7XG4gIC5hcHAtdHJhbnNsYXRvci0tY29udGFpbmVyIHtcbiAgICB3aWR0aDogNjAwcHg7XG4gIH1cbiAgLmFwcC10cmFuc2xhdG9yLS10cmFuc2xhdGUge1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGZvbnQtc2l6ZTogMS4yO1xuICB9XG4gIC5hcHAtdHJhbnNsYXRvci0taW5wdXQge1xuICAgIHdpZHRoOiAxMWVtO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgfVxuICAuYXBwLXRyYW5zbGF0b3ItLWZvcm0ge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuICAuYXBwLXRyYW5zbGF0b3ItLWFuc3dlciB7XG4gICAgcGFkZGluZzogMWVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFwcC10cmFuc2xhdG9yLS1jb250YWluZXIge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgfVxuICAuYXBwLXRyYW5zbGF0b3ItLWlucHV0IHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuICAuYXBwLXRyYW5zbGF0b3ItLWZvcm0ge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxuICAuYXBwLXRyYW5zbGF0b3ItLWFuc3dlciB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xuICAuYXBwLXRyYW5zbGF0b3ItLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICB9XG4gIC5hcHAtdHJhbnNsYXRvci0tdHJhbnNsYXRlIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxuICAuYXBwLXRyYW5zbGF0b3ItLWlucHV0IHtcbiAgICB3aWR0aDogMTZlbTtcbiAgfVxuICAuYXBwLXRyYW5zbGF0b3ItLWZvcm0ge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIH1cbiAgLmFwcC10cmFuc2xhdG9yLS10ZXh0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5hcHAtdHJhbnNsYXRvci0tYW5zd2VyIHtcbiAgICBwYWRkaW5nOiAwLjhlbSAxZW07XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XG4gIH1cbn1cbi5iYWxsIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDEyMHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgYm9yZGVyOiA1cHggc29saWQgcHVycGxlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFuaW1hdGlvbjogY29tYmluZWQgNXMgbGluZWFyIGluZmluaXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbkBrZXlmcmFtZXMgY29tYmluZWQge1xuICAxNiUsIDQ4JSwgNzglIHtcbiAgICB0b3A6IDI4MHB4O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICB9XG4gIDMyJSB7XG4gICAgdG9wOiA1MHB4O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIH1cbiAgNjIlIHtcbiAgICB0b3A6IDEyMHB4O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG4gIDgyJSB7XG4gICAgdG9wOiAxMjBweDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuICA5MCUge1xuICAgIHRvcDogMTIwcHg7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdG9wOiAxNjBweDtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn0iXX0= */"]
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
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/action/dictionary.action.ts":
  /*!***************************************************!*\
    !*** ./src/app/store/action/dictionary.action.ts ***!
    \***************************************************/

  /*! exports provided: getWordsFromLS, setWordsFromLS, removeWordFromDictionary, changeWordStatus, getAudioSrc, setAudioSrc */

  /***/
  function srcAppStoreActionDictionaryActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getWordsFromLS", function () {
      return getWordsFromLS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setWordsFromLS", function () {
      return setWordsFromLS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "removeWordFromDictionary", function () {
      return removeWordFromDictionary;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "changeWordStatus", function () {
      return changeWordStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAudioSrc", function () {
      return getAudioSrc;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setAudioSrc", function () {
      return setAudioSrc;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var getWordsFromLS = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Dictionary] get words from LS');
    var setWordsFromLS = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Dictionary] set words from LS', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var removeWordFromDictionary = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Dictionary] remove word from dictionary', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var changeWordStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Dictionary] change status word', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var getAudioSrc = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Dictionary] get audio src', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var setAudioSrc = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Dictionary] set audio src', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/store/action/game.action.ts":
  /*!*********************************************!*\
    !*** ./src/app/store/action/game.action.ts ***!
    \*********************************************/

  /*! exports provided: setGameStatus, getNewQuestion, setNewQuestion */

  /***/
  function srcAppStoreActionGameActionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setGameStatus", function () {
      return setGameStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getNewQuestion", function () {
      return getNewQuestion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setNewQuestion", function () {
      return setNewQuestion;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var setGameStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Game] set game status', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var getNewQuestion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Game] get words for game');
    var setNewQuestion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Game] set words for game', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/store/action/profile.actions.ts":
  /*!*************************************************!*\
    !*** ./src/app/store/action/profile.actions.ts ***!
    \*************************************************/

  /*! exports provided: saveProfileUser, setProfileUser, getProfileUserFromLS, getRivalProfile, setRivalProfile */

  /***/
  function srcAppStoreActionProfileActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "saveProfileUser", function () {
      return saveProfileUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setProfileUser", function () {
      return setProfileUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getProfileUserFromLS", function () {
      return getProfileUserFromLS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRivalProfile", function () {
      return getRivalProfile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setRivalProfile", function () {
      return setRivalProfile;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var saveProfileUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] save profile user', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var setProfileUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] set profile user', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var getProfileUserFromLS = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] get profile user from LS');
    var getRivalProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] get profile rival');
    var setRivalProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] set profile rival', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
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
  "./src/app/store/effect/dictionary.effect.ts":
  /*!***************************************************!*\
    !*** ./src/app/store/effect/dictionary.effect.ts ***!
    \***************************************************/

  /*! exports provided: DictionaryEffects */

  /***/
  function srcAppStoreEffectDictionaryEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DictionaryEffects", function () {
      return DictionaryEffects;
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


    var _action_dictionary_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../action/dictionary.action */
    "./src/app/store/action/dictionary.action.ts");
    /* harmony import */


    var src_app_components_game_service_data_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/components/game/service/data-game.service */
    "./src/app/components/game/service/data-game.service.ts");
    /* harmony import */


    var src_app_components_game_service_audio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/game/service/audio.service */
    "./src/app/components/game/service/audio.service.ts");

    var DictionaryEffects = function DictionaryEffects(actions$, dataGameService, audioService) {
      var _this9 = this;

      _classCallCheck(this, DictionaryEffects);

      this.actions$ = actions$;
      this.dataGameService = dataGameService;
      this.audioService = audioService;
      this.getWordsFromLS$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this9.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_dictionary_action__WEBPACK_IMPORTED_MODULE_3__["getWordsFromLS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function () {
          return _this9.dataGameService.loadWordList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (dictionary) {
            return Object(_action_dictionary_action__WEBPACK_IMPORTED_MODULE_3__["setWordsFromLS"])({
              dictionary: dictionary
            });
          })
          /* 	catchError(() => of({ type: '[Todo] Todos Loaded Error' })) */
          );
        }));
      });
      this.removeWord$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this9.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_dictionary_action__WEBPACK_IMPORTED_MODULE_3__["removeWordFromDictionary"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) {
          return _this9.dataGameService.removeWordFromDictionary(action.word).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (dictionary) {
            return Object(_action_dictionary_action__WEBPACK_IMPORTED_MODULE_3__["setWordsFromLS"])({
              dictionary: dictionary
            });
          }));
        }));
      });
      this.playAudio$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this9.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_dictionary_action__WEBPACK_IMPORTED_MODULE_3__["getAudioSrc"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) {
          return _this9.audioService.getAudio(action.word.englishWord).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return Object(_action_dictionary_action__WEBPACK_IMPORTED_MODULE_3__["setAudioSrc"])({
              word: action.word,
              src: data.location
            });
          }));
        }));
      });
    };

    DictionaryEffects.ɵfac = function DictionaryEffects_Factory(t) {
      return new (t || DictionaryEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_components_game_service_data_game_service__WEBPACK_IMPORTED_MODULE_4__["DataGameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_components_game_service_audio_service__WEBPACK_IMPORTED_MODULE_5__["AudioService"]));
    };

    DictionaryEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DictionaryEffects,
      factory: DictionaryEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DictionaryEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: src_app_components_game_service_data_game_service__WEBPACK_IMPORTED_MODULE_4__["DataGameService"]
        }, {
          type: src_app_components_game_service_audio_service__WEBPACK_IMPORTED_MODULE_5__["AudioService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/effect/game.effect.ts":
  /*!*********************************************!*\
    !*** ./src/app/store/effect/game.effect.ts ***!
    \*********************************************/

  /*! exports provided: GameEffects */

  /***/
  function srcAppStoreEffectGameEffectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GameEffects", function () {
      return GameEffects;
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


    var _action_game_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../action/game.action */
    "./src/app/store/action/game.action.ts");
    /* harmony import */


    var src_app_components_game_service_data_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/game/service/data-game.service */
    "./src/app/components/game/service/data-game.service.ts");

    var GameEffects = function GameEffects(actions$, dataGameService) {
      var _this10 = this;

      _classCallCheck(this, GameEffects);

      this.actions$ = actions$;
      this.dataGameService = dataGameService;
      this.getNewQuestion$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this10.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_game_action__WEBPACK_IMPORTED_MODULE_4__["getNewQuestion"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function () {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(1).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            var word = _this10.dataGameService.getRandomWord();

            var answers = _this10.dataGameService.getRandomAnswers(word);

            return Object(_action_game_action__WEBPACK_IMPORTED_MODULE_4__["setNewQuestion"])({
              word: word,
              answers: answers
            });
          }));
        }));
      });
    };

    GameEffects.ɵfac = function GameEffects_Factory(t) {
      return new (t || GameEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_components_game_service_data_game_service__WEBPACK_IMPORTED_MODULE_5__["DataGameService"]));
    };

    GameEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GameEffects,
      factory: GameEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: src_app_components_game_service_data_game_service__WEBPACK_IMPORTED_MODULE_5__["DataGameService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store/effect/profile.effects.ts":
  /*!*************************************************!*\
    !*** ./src/app/store/effect/profile.effects.ts ***!
    \*************************************************/

  /*! exports provided: ProfileEffects */

  /***/
  function srcAppStoreEffectProfileEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileEffects", function () {
      return ProfileEffects;
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


    var _action_profile_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../action/profile.actions */
    "./src/app/store/action/profile.actions.ts");
    /* harmony import */


    var src_app_components_profile_service_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/profile/service/profile.service */
    "./src/app/components/profile/service/profile.service.ts");

    var ProfileEffects = function ProfileEffects(actions$, profileService) {
      var _this11 = this;

      _classCallCheck(this, ProfileEffects);

      this.actions$ = actions$;
      this.profileService = profileService;
      this.saveProfileUser$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this11.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_profile_actions__WEBPACK_IMPORTED_MODULE_4__["saveProfileUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this11.profileService.saveProfile(action.profile.nickname, action.profile.id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return Object(_action_profile_actions__WEBPACK_IMPORTED_MODULE_4__["getProfileUserFromLS"])({});
          }));
        }));
      });
      this.getProfileUserFromLS$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this11.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_profile_actions__WEBPACK_IMPORTED_MODULE_4__["getProfileUserFromLS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function () {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this11.profileService.getProfileFromLS()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (profile) {
            return Object(_action_profile_actions__WEBPACK_IMPORTED_MODULE_4__["setProfileUser"])({
              profile: profile
            });
          }));
        }));
      });
      this.getRivalProfile$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this11.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_profile_actions__WEBPACK_IMPORTED_MODULE_4__["getRivalProfile"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function () {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this11.profileService.getRandomUser()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (profile) {
            return Object(_action_profile_actions__WEBPACK_IMPORTED_MODULE_4__["setRivalProfile"])({
              profile: profile
            });
          }));
        }));
      });
    };

    ProfileEffects.ɵfac = function ProfileEffects_Factory(t) {
      return new (t || ProfileEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_components_profile_service_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]));
    };

    ProfileEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProfileEffects,
      factory: ProfileEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: src_app_components_profile_service_profile_service__WEBPACK_IMPORTED_MODULE_5__["ProfileService"]
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
      var _this12 = this;

      _classCallCheck(this, TranslateEffects);

      this.actions$ = actions$;
      this.dataService = dataService;
      this.translate$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this12.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_action_translate_action__WEBPACK_IMPORTED_MODULE_4__["translate"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (action) {
          return _this12.dataService.translateWord(action.word, action.lang).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            return Object(_action_translate_action__WEBPACK_IMPORTED_MODULE_4__["resultTranslate"])({
              wordTranslate: data.translate
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


    var _state_translate_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./state/translate.state */
    "./src/app/store/state/translate.state.ts");
    /* harmony import */


    var _reducer_translate_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./reducer/translate.reducer */
    "./src/app/store/reducer/translate.reducer.ts");
    /* harmony import */


    var _reducer_dictionary_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./reducer/dictionary.reducer */
    "./src/app/store/reducer/dictionary.reducer.ts");
    /* harmony import */


    var _state_dictionary_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./state/dictionary.state */
    "./src/app/store/state/dictionary.state.ts");
    /* harmony import */


    var _state_game_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./state/game.state */
    "./src/app/store/state/game.state.ts");
    /* harmony import */


    var _reducer_game_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./reducer/game.reducer */
    "./src/app/store/reducer/game.reducer.ts");
    /* harmony import */


    var _state_profile_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./state/profile.state */
    "./src/app/store/state/profile.state.ts");
    /* harmony import */


    var _reducer_profile_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./reducer/profile.reducers */
    "./src/app/store/reducer/profile.reducers.ts");

    var reducer = (_reducer = {}, _defineProperty(_reducer, _state_translate_state__WEBPACK_IMPORTED_MODULE_0__["featureKeyTranslate"], _reducer_translate_reducer__WEBPACK_IMPORTED_MODULE_1__["StateReducerTranslate"]), _defineProperty(_reducer, _state_dictionary_state__WEBPACK_IMPORTED_MODULE_3__["featureKeyDictionary"], _reducer_dictionary_reducer__WEBPACK_IMPORTED_MODULE_2__["StateReducerDictionary"]), _defineProperty(_reducer, _state_game_state__WEBPACK_IMPORTED_MODULE_4__["featureKeyGame"], _reducer_game_reducer__WEBPACK_IMPORTED_MODULE_5__["StateReducerGame"]), _defineProperty(_reducer, _state_profile_state__WEBPACK_IMPORTED_MODULE_6__["featureKeyProfile"], _reducer_profile_reducers__WEBPACK_IMPORTED_MODULE_7__["StateReducerProfile"]), _reducer);
    /***/
  },

  /***/
  "./src/app/store/reducer/dictionary.reducer.ts":
  /*!*****************************************************!*\
    !*** ./src/app/store/reducer/dictionary.reducer.ts ***!
    \*****************************************************/

  /*! exports provided: dictionaryReducer, StateReducerDictionary */

  /***/
  function srcAppStoreReducerDictionaryReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dictionaryReducer", function () {
      return dictionaryReducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateReducerDictionary", function () {
      return StateReducerDictionary;
    });
    /* harmony import */


    var _state_dictionary_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../state/dictionary.state */
    "./src/app/store/state/dictionary.state.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _action_dictionary_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../action/dictionary.action */
    "./src/app/store/action/dictionary.action.ts");

    var dictionaryReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_state_dictionary_state__WEBPACK_IMPORTED_MODULE_0__["initialState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_dictionary_action__WEBPACK_IMPORTED_MODULE_2__["setWordsFromLS"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        dictionary: action.dictionary
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_dictionary_action__WEBPACK_IMPORTED_MODULE_2__["changeWordStatus"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        dictionary: state.dictionary.map(function (item) {
          if (item.id === action.word.id) {
            return Object.assign(Object.assign({}, item), {
              isLoading: action.isLoading
            });
          }

          return item;
        })
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_dictionary_action__WEBPACK_IMPORTED_MODULE_2__["setAudioSrc"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        srcAudio: {
          src: action.src,
          word: action.word
        }
      });
    }));

    function StateReducerDictionary(state, action) {
      return dictionaryReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/store/reducer/game.reducer.ts":
  /*!***********************************************!*\
    !*** ./src/app/store/reducer/game.reducer.ts ***!
    \***********************************************/

  /*! exports provided: gameReducer, StateReducerGame */

  /***/
  function srcAppStoreReducerGameReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "gameReducer", function () {
      return gameReducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateReducerGame", function () {
      return StateReducerGame;
    });
    /* harmony import */


    var _state_game_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../state/game.state */
    "./src/app/store/state/game.state.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _action_game_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../action/game.action */
    "./src/app/store/action/game.action.ts");

    var gameReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_state_game_state__WEBPACK_IMPORTED_MODULE_0__["initialState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_game_action__WEBPACK_IMPORTED_MODULE_2__["setGameStatus"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        gameStatus: action.gameStatus
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_game_action__WEBPACK_IMPORTED_MODULE_2__["setNewQuestion"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        word: action.word,
        answers: action.answers
      });
    }));

    function StateReducerGame(state, action) {
      return gameReducer(state, action);
    }
    /***/

  },

  /***/
  "./src/app/store/reducer/profile.reducers.ts":
  /*!***************************************************!*\
    !*** ./src/app/store/reducer/profile.reducers.ts ***!
    \***************************************************/

  /*! exports provided: profileReducer, StateReducerProfile */

  /***/
  function srcAppStoreReducerProfileReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "profileReducer", function () {
      return profileReducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateReducerProfile", function () {
      return StateReducerProfile;
    });
    /* harmony import */


    var _state_profile_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../state/profile.state */
    "./src/app/store/state/profile.state.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _action_profile_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../action/profile.actions */
    "./src/app/store/action/profile.actions.ts");

    var profileReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_state_profile_state__WEBPACK_IMPORTED_MODULE_0__["initialState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_profile_actions__WEBPACK_IMPORTED_MODULE_2__["setProfileUser"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        userProfile: action.profile
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_action_profile_actions__WEBPACK_IMPORTED_MODULE_2__["setRivalProfile"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        rivalProfile: action.profile
      });
    }));

    function StateReducerProfile(state, action) {
      return profileReducer(state, action);
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
        wordTranslate: action.wordTranslate
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
  "./src/app/store/selectors/dictionary.selectors.ts":
  /*!*********************************************************!*\
    !*** ./src/app/store/selectors/dictionary.selectors.ts ***!
    \*********************************************************/

  /*! exports provided: selectStateDictionary, selectDictionary, selectDictionaryCount, selectSrcAudio */

  /***/
  function srcAppStoreSelectorsDictionarySelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectStateDictionary", function () {
      return selectStateDictionary;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectDictionary", function () {
      return selectDictionary;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectDictionaryCount", function () {
      return selectDictionaryCount;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectSrcAudio", function () {
      return selectSrcAudio;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _state_dictionary_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../state/dictionary.state */
    "./src/app/store/state/dictionary.state.ts");

    var selectStateDictionary = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_state_dictionary_state__WEBPACK_IMPORTED_MODULE_1__["featureKeyDictionary"]); // tslint:disable-next-line: max-line-length

    var selectDictionary = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateDictionary, function (state) {
      return state.dictionary;
    }); // tslint:disable-next-line: max-line-length

    var selectDictionaryCount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateDictionary, function (state) {
      return state.dictionary.length;
    });
    var selectSrcAudio = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateDictionary, function (state) {
      return state.srcAudio;
    });
    /***/
  },

  /***/
  "./src/app/store/selectors/game.selectors.ts":
  /*!***************************************************!*\
    !*** ./src/app/store/selectors/game.selectors.ts ***!
    \***************************************************/

  /*! exports provided: selectGameFeature, selectStatusGame, selectWord, selectAnswers */

  /***/
  function srcAppStoreSelectorsGameSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectGameFeature", function () {
      return selectGameFeature;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectStatusGame", function () {
      return selectStatusGame;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectWord", function () {
      return selectWord;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAnswers", function () {
      return selectAnswers;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _state_game_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../state/game.state */
    "./src/app/store/state/game.state.ts");

    var selectGameFeature = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_state_game_state__WEBPACK_IMPORTED_MODULE_1__["featureKeyGame"]);
    var selectStatusGame = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectGameFeature, function (state) {
      return state.gameStatus;
    });
    var selectWord = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectGameFeature, function (state) {
      return state.word;
    });
    var selectAnswers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectGameFeature, function (state) {
      return state.answers;
    });
    /***/
  },

  /***/
  "./src/app/store/selectors/profile.selectors.ts":
  /*!******************************************************!*\
    !*** ./src/app/store/selectors/profile.selectors.ts ***!
    \******************************************************/

  /*! exports provided: selectStateProfile, selectRivalProfile, selectUserProfile */

  /***/
  function srcAppStoreSelectorsProfileSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectStateProfile", function () {
      return selectStateProfile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectRivalProfile", function () {
      return selectRivalProfile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectUserProfile", function () {
      return selectUserProfile;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _state_profile_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../state/profile.state */
    "./src/app/store/state/profile.state.ts");

    var selectStateProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_state_profile_state__WEBPACK_IMPORTED_MODULE_1__["featureKeyProfile"]);
    var selectRivalProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateProfile, function (state) {
      return state.rivalProfile;
    });
    var selectUserProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateProfile, function (state) {
      return state.userProfile;
    });
    /***/
  },

  /***/
  "./src/app/store/selectors/translate.selectors.ts":
  /*!********************************************************!*\
    !*** ./src/app/store/selectors/translate.selectors.ts ***!
    \********************************************************/

  /*! exports provided: selectStateTranslate, selectWordTranslate, selectWord, selectError */

  /***/
  function srcAppStoreSelectorsTranslateSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectStateTranslate", function () {
      return selectStateTranslate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectWordTranslate", function () {
      return selectWordTranslate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectWord", function () {
      return selectWord;
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

    var selectWordTranslate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateTranslate, function (state) {
      return state.wordTranslate;
    }); // tslint:disable-next-line: max-line-length

    var selectWord = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateTranslate, function (state) {
      return state.word;
    });
    var selectError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectStateTranslate, function (state) {
      return state.error;
    });
    /***/
  },

  /***/
  "./src/app/store/state/dictionary.state.ts":
  /*!*************************************************!*\
    !*** ./src/app/store/state/dictionary.state.ts ***!
    \*************************************************/

  /*! exports provided: featureKeyDictionary, initialState */

  /***/
  function srcAppStoreStateDictionaryStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "featureKeyDictionary", function () {
      return featureKeyDictionary;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });

    var featureKeyDictionary = 'DICTIONARY';
    var initialState = {
      dictionary: [],
      srcAudio: {}
    };
    /***/
  },

  /***/
  "./src/app/store/state/game.state.ts":
  /*!*******************************************!*\
    !*** ./src/app/store/state/game.state.ts ***!
    \*******************************************/

  /*! exports provided: featureKeyGame, initialState */

  /***/
  function srcAppStoreStateGameStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "featureKeyGame", function () {
      return featureKeyGame;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony import */


    var src_app_components_game_word_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/components/game/word.model */
    "./src/app/components/game/word.model.ts");

    var featureKeyGame = 'GAME';
    var initialState = {
      gameStatus: 'profile',
      word: new src_app_components_game_word_model__WEBPACK_IMPORTED_MODULE_0__["Word"](),
      answers: []
    };
    /***/
  },

  /***/
  "./src/app/store/state/profile.state.ts":
  /*!**********************************************!*\
    !*** ./src/app/store/state/profile.state.ts ***!
    \**********************************************/

  /*! exports provided: featureKeyProfile, initialState */

  /***/
  function srcAppStoreStateProfileStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "featureKeyProfile", function () {
      return featureKeyProfile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony import */


    var src_app_components_profile_profile_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/components/profile/profile.model */
    "./src/app/components/profile/profile.model.ts");

    var featureKeyProfile = 'PROFILE';
    var initialState = {
      userProfile: new src_app_components_profile_profile_model__WEBPACK_IMPORTED_MODULE_0__["Profile"](),
      rivalProfile: new src_app_components_profile_profile_model__WEBPACK_IMPORTED_MODULE_0__["Profile"]()
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
      word: '',
      wordTranslate: [],
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
      production: false,
      locales: ['en', 'ru'],
      defaultLocale: 'ru'
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