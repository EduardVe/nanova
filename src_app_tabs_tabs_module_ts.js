"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 4787:
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab2Page": () => (/* binding */ Tab2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _E_IonicWorkSpace_ionic_neo_venezuela_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab2.page.html */ 2040);
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab2.page.scss */ 282);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let Tab2Page = class Tab2Page {
    constructor() { }
    listen() {
        const music = new Audio('../../assets/buble.wav');
        music.play();
        // music.loop =true;
        // music.playbackRate = 2;
        // music.pause();
    }
};
Tab2Page.ctorParameters = () => [];
Tab2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab2',
        template: _E_IonicWorkSpace_ionic_neo_venezuela_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], Tab2Page);



/***/ }),

/***/ 5257:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tab2_tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tab2/tab2.page */ 4787);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 3278);





const routes = [
    {
        path: '',
        component: _tab2_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page
    },
    {
        path: 'about',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage, //Devolver este será el home
        // component: Tab2Page,
    },
    {
        path: 'tab1',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab1/tab1.module */ 4265)).then(m => m.Tab1PageModule)
    },
    {
        path: 'catalogo',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab2_tab2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab2/tab2.module */ 4250)).then(m => m.Tab2PageModule)
    },
    {
        path: 'favoritos',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab3_tab3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab3/tab3.module */ 7586)).then(m => m.Tab3PageModule)
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 9483:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 5257);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 3278);
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.module */ 207);








let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule,
            _header_header_module__WEBPACK_IMPORTED_MODULE_2__.HeaderModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 3278:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _E_IonicWorkSpace_ionic_neo_venezuela_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tabs.page.html */ 8711);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 5066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);




let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _E_IonicWorkSpace_ionic_neo_venezuela_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabsPage);



/***/ }),

/***/ 2040:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab2/tab2.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header></app-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <!-- <ion-title size=\"large\">Tab 2</ion-title> -->\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-content>\r\n    <div style=\"margin: 1em 1em -1em 1em\">\r\n      <!-- <h1 style=\"display: inline-block;\">Jeans ...</h1> -->\r\n      <!-- <p style=\"text-align: justify; font-family: sans-serif; color: gray;\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde excepturi est quos voluptate cum, nam repellat, consectetur tempore autem.</p> -->\r\n    </div>\r\n\r\n    <!-- <div style=\"text-align: -webkit-center\">\r\n      <ion-card style=\"    width: 90%;\r\n      z-index: 1000;\r\n      background: white;\r\n      border-radius: 50% 50% 0 0;\r\n      box-shadow: rgb(0 0 0 / 20%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 20%) -1px -3px 5px 0px;\r\n      position: absolute;\r\n    bottom: -7em;\">\r\n        <ion-tabs> -->\r\n\r\n        <!-- <ion-row>\r\n          <ion-col size=\"6\">\r\n            <div>\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z\"/></svg>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <div class=\"content-svg\">\r\n              <ion-icon name=\"heart\" style=\"color: red; font-size: 3em\"></ion-icon>\r\n            </div>      \r\n          </ion-col>\r\n        </ion-row> -->\r\n        <!-- </ion-tabs>       -->\r\n      <!-- </ion-card>\r\n    </div> -->\r\n\r\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n        <ion-slide>\r\n          <img height=\"500\" width=\"500\" src=\"../../assets/articulos/body1.jpg\">\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <img height=\"500\" width=\"500\" src=\"../../assets/articulos/body2.jpg\">\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <img height=\"500\" width=\"500\" src=\"../../assets/articulos/body3.jpg\">\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <img height=\"500\" width=\"500\" src=\"../../assets/articulos/body4.jpg\">\r\n        </ion-slide>        \r\n      </ion-slides>\r\n\r\n      <ion-row style=\"text-align: center; position: relative; top: -3em; z-index: 1001;\">\r\n        <ion-col size=\"6\">\r\n          <div style=\"position: relative;\r\n          top: 1em;\">\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z\"/></svg>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <audio src='../../assets/buble.wav'></audio>\r\n          <div class=\"content-svg\" (click)=\"listen()\">\r\n            <ion-icon name=\"heart\" style=\"color: red; font-size: 3em\"></ion-icon>\r\n          </div>      \r\n        </ion-col>\r\n      </ion-row>\r\n\r\n\r\n    <div style=\"margin: 1em 1em -1em 1em\">\r\n      <!-- <h1 style=\"display: inline-block;\">Jeans ...</h1>\r\n      <p style=\"text-align: justify; font-family: sans-serif; color: gray;\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde excepturi est quos voluptate cum, nam repellat, consectetur tempore autem.</p> -->\r\n    </div>\r\n\r\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n        <ion-slide>\r\n          <img height=\"500\" width=\"500\" src=\"../../assets/articulos/pant1.jpg\">\r\n        </ion-slide>\r\n        <ion-slide>\r\n          <img height=\"500\" width=\"500\" src=\"../../assets/articulos/pant2.jpg\">\r\n        </ion-slide>\r\n    </ion-slides>\r\n\r\n    <ion-row style=\"text-align: center; position: relative; top: -3em; z-index: 1001;\">\r\n      <ion-col size=\"6\">\r\n        <div style=\"position: relative;\r\n        top: 1em;\">\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z\"/></svg>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <div class=\"content-svg\">\r\n          <ion-icon name=\"heart\" style=\"color: red; font-size: 3em\"></ion-icon>\r\n        </div>      \r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n      <ion-slide>\r\n        <img height=\"500\" width=\"500\" src=\"../../assets/articulos/pant_nac1.jpg\">\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <img height=\"500\" width=\"500\" src=\"../../assets/articulos/pant_nac2.jpg\">\r\n      </ion-slide>\r\n      <ion-slide>\r\n        <img height=\"500\" width=\"500\" src=\"../../assets/articulos/pant_nac3.jpg\">\r\n      </ion-slide>\r\n  </ion-slides>\r\n\r\n  <ion-row style=\"text-align: center; position: relative; top: -3em; z-index: 1001;\">\r\n    <ion-col size=\"6\">\r\n      <div style=\"position: relative;\r\n      top: 1em;\">\r\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M5 7c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5zm11.122 12.065c-.073.301-.122.611-.122.935 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-1.165 0-2.204.506-2.935 1.301l-5.488-2.927c-.23.636-.549 1.229-.943 1.764l5.488 2.927zm7.878-15.065c0-2.209-1.791-4-4-4s-4 1.791-4 4c0 .324.049.634.122.935l-5.488 2.927c.395.535.713 1.127.943 1.764l5.488-2.927c.731.795 1.77 1.301 2.935 1.301 2.209 0 4-1.791 4-4z\"/></svg>\r\n      </div>\r\n    </ion-col>\r\n    <ion-col size=\"6\">\r\n      <div class=\"content-svg\">\r\n        <ion-icon name=\"heart\" style=\"color: red; font-size: 3em\"></ion-icon>\r\n      </div>      \r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  </ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 8711:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tabs/tabs.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("Home Oficial\r\n\r\n<!-- <ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\">\r\n\r\n    <ion-tab-button tab=\"tab2\">\r\n      <ion-icon name=\"ellipse\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab3\">\r\n      <ion-icon name=\"heart\" style=\"color: red\"></ion-icon>\r\n    </ion-tab-button>\r\n\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs> -->\r\n");

/***/ }),

/***/ 282:
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "ion-slides {\n  height: 90%;\n}\n\n.content-svg:active {\n  transform: translateY(-4px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksMkJBQUE7QUFDSiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbi5jb250ZW50LXN2ZzphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xyXG59Il19 */";

/***/ }),

/***/ 5066:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map