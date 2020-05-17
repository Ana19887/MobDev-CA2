function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["episode-details-episode-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEpisodeDetailsEpisodeDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n   <ion-buttons slot=\"start\" defaultHref=\"/tabs/episodes\">\n    <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{episode?.title}}</ion-title>\n    <ion-buttons slot=\"end\">\n    <ion-button  (click)=\"unfavouriteEpisode()\" *ngIf=\"isFavourite\">\n    <ion-icon name=\"thumbs-up\" slot=\"icon-only\" ></ion-icon>\n    </ion-button>\n     <ion-button (click)=\"favouriteEpisode()\" *ngIf=\"!isFavourite\">\n      <ion-icon name=\"thumbs-down\" slot=\"icon-only\" ></ion-icon>\n    </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n<ion-card *ngIf=\"episode\" class=\"episode-card\">\n  <ion-card-header>Episode {{ episode.episode }}</ion-card-header>\n  \n    <ion-card-content>\n     Season: {{ episode.season }}\n    </ion-card-content>\n    <ion-card-content>\n    <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\n      Release Date: {{ episode.air_date }}\n    </ion-card-content>\n    <ion-card-content>\n    <ion-icon name=\"people\" slot=\"start\"></ion-icon>\n      Characters: {{ episode.characters }}\n      </ion-card-content>\n  \n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/episode-details/episode-details-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/episode-details/episode-details-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: EpisodeDetailsPageRoutingModule */

  /***/
  function srcAppPagesEpisodeDetailsEpisodeDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPageRoutingModule", function () {
      return EpisodeDetailsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _episode_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./episode-details.page */
    "./src/app/pages/episode-details/episode-details.page.ts");

    var routes = [{
      path: '',
      component: _episode_details_page__WEBPACK_IMPORTED_MODULE_3__["EpisodeDetailsPage"]
    }];

    var EpisodeDetailsPageRoutingModule = function EpisodeDetailsPageRoutingModule() {
      _classCallCheck(this, EpisodeDetailsPageRoutingModule);
    };

    EpisodeDetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EpisodeDetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/episode-details/episode-details.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/episode-details/episode-details.module.ts ***!
    \*****************************************************************/

  /*! exports provided: EpisodeDetailsPageModule */

  /***/
  function srcAppPagesEpisodeDetailsEpisodeDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPageModule", function () {
      return EpisodeDetailsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _episode_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./episode-details-routing.module */
    "./src/app/pages/episode-details/episode-details-routing.module.ts");
    /* harmony import */


    var _episode_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./episode-details.page */
    "./src/app/pages/episode-details/episode-details.page.ts");

    var EpisodeDetailsPageModule = function EpisodeDetailsPageModule() {
      _classCallCheck(this, EpisodeDetailsPageModule);
    };

    EpisodeDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _episode_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["EpisodeDetailsPageRoutingModule"]],
      declarations: [_episode_details_page__WEBPACK_IMPORTED_MODULE_6__["EpisodeDetailsPage"]]
    })], EpisodeDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/episode-details/episode-details.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/episode-details/episode-details.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEpisodeDetailsEpisodeDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".episode-card {\n  background: #b5f0d9;\n  border: 1px solid var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2UvTW9iRGV2LUNBMi9zcmMvYXBwL3BhZ2VzL2VwaXNvZGUtZGV0YWlscy9lcGlzb2RlLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9lcGlzb2RlLWRldGFpbHMvZXBpc29kZS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsMENBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VwaXNvZGUtZGV0YWlscy9lcGlzb2RlLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVwaXNvZGUtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogI2I1ZjBkOTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4iLCIuZXBpc29kZS1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2I1ZjBkOTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/episode-details/episode-details.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/episode-details/episode-details.page.ts ***!
    \***************************************************************/

  /*! exports provided: EpisodeDetailsPage */

  /***/
  function srcAppPagesEpisodeDetailsEpisodeDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodeDetailsPage", function () {
      return EpisodeDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/favourite.service */
    "./src/app/services/favourite.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");

    var EpisodeDetailsPage = /*#__PURE__*/function () {
      function EpisodeDetailsPage(activatedRoute, api, favouriteService) {
        _classCallCheck(this, EpisodeDetailsPage);

        this.activatedRoute = activatedRoute;
        this.api = api;
        this.favouriteService = favouriteService;
        this.isFavourite = false;
        this.episodeId = null;
      }

      _createClass(EpisodeDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
          this.api.getEpisode(this.episodeId).subscribe(function (res) {
            _this.episode = res[0];
          });
          this.favouriteService.isFavourite(this.episodeId).then(function (isFav) {
            _this.isFavourite = isFav;
          });
        }
      }, {
        key: "favouriteEpisode",
        value: function favouriteEpisode() {
          var _this2 = this;

          this.favouriteService.favouriteEpisode(this.episodeId).then(function () {
            _this2.isFavourite = true;
          });
        }
      }, {
        key: "unfavouriteEpisode",
        value: function unfavouriteEpisode() {
          var _this3 = this;

          this.favouriteService.unfavouriteEpisode(this.episodeId).then(function () {
            _this3.isFavourite = false;
          });
        }
      }]);

      return EpisodeDetailsPage;
    }();

    EpisodeDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__["FavouriteService"]
      }];
    };

    EpisodeDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-episode-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./episode-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episode-details/episode-details.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./episode-details.page.scss */
      "./src/app/pages/episode-details/episode-details.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _services_favourite_service__WEBPACK_IMPORTED_MODULE_1__["FavouriteService"]])], EpisodeDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=episode-details-episode-details-module-es5.js.map