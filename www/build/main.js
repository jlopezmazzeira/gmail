webpackJsonp([4],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EnviadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_correos_correos__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__correo_correo__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nuevocorreo_nuevocorreo__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EnviadosPage = /** @class */ (function () {
    function EnviadosPage(navCtrl, navParams, _cp, modalCtrl, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cp = _cp;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        //this.listaDeCorreos = this._cp.enviados;
    }
    //Este método se usa para cargar cosas antes de la página
    EnviadosPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('correosEnviados').then(function (correosEnviados) {
            if (correosEnviados == null) {
                _this.listaDeCorreos = [];
                _this._cp.enviados = [];
            }
            else {
                _this.listaDeCorreos = correosEnviados;
                _this._cp.enviados = _this.listaDeCorreos;
            }
        }).catch(function (error) { console.log(error); });
    };
    EnviadosPage.prototype.verCorreo = function (correo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__correo_correo__["a" /* CorreoPage */], correo);
    };
    EnviadosPage.prototype.nuevoCorreo = function () {
        var modal = this.modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_4__nuevocorreo_nuevocorreo__["a" /* NuevocorreoPage */], { tipo: 'Nuevo Correo', correo: '' });
        modal.present();
    };
    EnviadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-enviados',template:/*ion-inline-start:"/var/www/html/gmail/src/pages/enviados/enviados.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Correo Enviados</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <button ion-item\n            *ngFor="let correo of listaDeCorreos"\n            (click)="verCorreo(correo)"\n            detail-none>\n      <ion-avatar item-left>\n        <img [src]="\'../../assets/imagenes/\' + correo.para.charAt(0).toLowerCase() + \'.gif\'">\n      </ion-avatar>\n      <h2>{{ correo.para }}</h2>\n      <h3>{{ correo.asunto }}</h3>\n      <p>{{ correo.mensaje }}</p>\n    </button>\n  </ion-list>\n  <ion-fab right bottom>\n    <button ion-fab color="danger" (click)="nuevoCorreo()">\n      <ion-icon name="create"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/gmail/src/pages/enviados/enviados.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_correos_correos__["a" /* CorreosProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_correos_correos__["a" /* CorreosProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]) === "function" && _e || Object])
    ], EnviadosPage);
    return EnviadosPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=enviados.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_correos_correos__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__correo_correo__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nuevocorreo_nuevocorreo__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InboxPage = /** @class */ (function () {
    function InboxPage(navCtrl, navParams, _cp, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cp = _cp;
        this.modalCtrl = modalCtrl;
        this.listaCorreo = this._cp.lista;
    }
    InboxPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InboxPage');
    };
    InboxPage.prototype.verCorreo = function (correo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__correo_correo__["a" /* CorreoPage */], correo);
    };
    InboxPage.prototype.nuevoCorreo = function () {
        var modal = this.modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_4__nuevocorreo_nuevocorreo__["a" /* NuevocorreoPage */], { tipo: 'Nuevo Correo', correo: '' });
        modal.present();
    };
    InboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inbox',template:/*ion-inline-start:"/var/www/html/gmail/src/pages/inbox/inbox.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-buttons left>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Inbox</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <button ion-item\n            *ngFor="let correo of listaCorreo"\n            (click)="verCorreo(correo)"\n            detail-none>\n      <ion-avatar item-left>\n        <img [src]="\'../../assets/imagenes/\' + correo.nombre.charAt(0).toLowerCase() + \'.gif\'">\n      </ion-avatar>\n      <h2>{{ correo.nombre }}</h2>\n      <h3>{{ correo.asunto }}</h3>\n      <p>{{ correo.mensaje }}</p>\n    </button>\n  </ion-list>\n  <ion-fab right bottom>\n    <button ion-fab color="danger" (click)="nuevoCorreo()">\n      <ion-icon name="create"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/gmail/src/pages/inbox/inbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_correos_correos__["a" /* CorreosProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], InboxPage);
    return InboxPage;
}());

//# sourceMappingURL=inbox.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/correo/correo.module": [
		278,
		3
	],
	"../pages/enviados/enviados.module": [
		279,
		2
	],
	"../pages/inbox/inbox.module": [
		280,
		1
	],
	"../pages/nuevocorreo/nuevocorreo.module": [
		281,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastProvider = /** @class */ (function () {
    function ToastProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
        console.log('Hello ToastProvider Provider');
    }
    ToastProvider.prototype.crearMensaje = function (mensaje) {
        var toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    ToastProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ToastProvider);
    return ToastProvider;
}());

//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_inbox_inbox__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_correo_correo__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_nuevocorreo_nuevocorreo__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_correos_correos__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_toast_toast__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_enviados_enviados__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//Storage









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_inbox_inbox__["a" /* InboxPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_correo_correo__["a" /* CorreoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_nuevocorreo_nuevocorreo__["a" /* NuevocorreoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_enviados_enviados__["a" /* EnviadosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/correo/correo.module#CorreoPageModule', name: 'CorreoPage', segment: 'correo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/enviados/enviados.module#EnviadosPageModule', name: 'EnviadosPage', segment: 'enviados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inbox/inbox.module#InboxPageModule', name: 'InboxPage', segment: 'inbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevocorreo/nuevocorreo.module#NuevocorreoPageModule', name: 'NuevocorreoPage', segment: 'nuevocorreo', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_inbox_inbox__["a" /* InboxPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_correo_correo__["a" /* CorreoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_nuevocorreo_nuevocorreo__["a" /* NuevocorreoPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_enviados_enviados__["a" /* EnviadosPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__providers_correos_correos__["a" /* CorreosProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_toast_toast__["a" /* ToastProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_inbox_inbox__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_enviados_enviados__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { HomePage } from '../pages/home/home';


var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl) {
        this.menuCtrl = menuCtrl;
        //rootPage:any = HomePage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_inbox_inbox__["a" /* InboxPage */];
        this.inboxPage = __WEBPACK_IMPORTED_MODULE_4__pages_inbox_inbox__["a" /* InboxPage */];
        this.enviadosPage = __WEBPACK_IMPORTED_MODULE_5__pages_enviados_enviados__["a" /* EnviadosPage */];
        this.noLeidos = 5;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.irAPagina = function (pagina) {
        console.log(pagina);
        this.menu.setRoot(pagina);
        this.menuCtrl.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('nav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "menu", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/html/gmail/src/app/app.html"*/'<ion-menu [content]="nav">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menú</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="irAPagina(inboxPage)" detail-none>\n        <ion-icon name="mail" item-left></ion-icon>\n        Inbox\n        <ion-badge item-right color="dark">{{ noLeidos }}</ion-badge>\n      </button>\n      <button ion-item (click)="irAPagina(enviadosPage)" detail-none>\n        <ion-icon name="send" item-left></ion-icon>\n        Enviados</button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<ion-nav [root]="rootPage" #nav></ion-nav>\n'/*ion-inline-end:"/var/www/html/gmail/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/var/www/html/gmail/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/gmail/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevocorreoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_correos_correos__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NuevocorreoPage = /** @class */ (function () {
    function NuevocorreoPage(navCtrl, navParams, viewCtrl, _tp, _cp, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._tp = _tp;
        this._cp = _cp;
        this.storage = storage;
        this.nombre = 'Jesús López';
        this.de = 'jesus.lopez@gmail.com';
        this.para = '';
        this.asunto = '';
        this.nuevoCorreo = '';
        this.tipo = navParams.get('tipo');
        this.correo = navParams.get('correo');
        if (this.tipo = 'Replay') {
            this.para = this.correo.direccion;
            this.asunto = 'Re: ' + this.correo.asunto;
        }
        if (this.tipo = 'Forward') {
            this.asunto = this.correo.asunto;
        }
    }
    NuevocorreoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevocorreoPage');
    };
    NuevocorreoPage.prototype.cerrar = function () {
        this.viewCtrl.dismiss();
    };
    NuevocorreoPage.prototype.enviarCorreo = function () {
        var correo = {
            nombre: this.nombre,
            de: this.de,
            para: this.para,
            asunto: this.asunto,
            mensaje: this.nuevoCorreo,
            fecha: new Date()
        };
        this._cp.enviados.push(correo);
        this.storage.set('correosEnviados', this._cp.enviados)
            .then()
            .catch(function (error) { console.log(error); });
        console.log('Mensaje enviado', correo);
        this.viewCtrl.dismiss();
        this._tp.crearMensaje('Correo enviado');
    };
    NuevocorreoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nuevocorreo',template:/*ion-inline-start:"/var/www/html/gmail/src/pages/nuevocorreo/nuevocorreo.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>{{tipo}}</ion-title>\n    <ion-buttons left>\n      <button icon-only ion-button (click)="cerrar()">\n        <ion-icon name="md-arrow-round-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons right>\n      <button icon-only ion-button (click)="enviarCorreo()">\n        <ion-icon name="md-send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label>De: {{ de }}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Para:</ion-label>\n      <ion-input type="email" [(ngModel)]="para"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-input placeholder="Asunto" type="text" [(ngModel)]="asunto"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-textarea rows="10" placeholder="Componer correo" type="text"\n    [(ngModel)]="nuevoCorreo"\n  ></ion-textarea>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/gmail/src/pages/nuevocorreo/nuevocorreo.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_toast_toast__["a" /* ToastProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_correos_correos__["a" /* CorreosProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_correos_correos__["a" /* CorreosProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _f || Object])
    ], NuevocorreoPage);
    return NuevocorreoPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=nuevocorreo.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorreosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CorreosProvider = /** @class */ (function () {
    function CorreosProvider() {
        this.lista = [
            {
                nombre: 'Carlos Ortega',
                direccion: 'carlos@ibm.com',
                asunto: 'Bienvenido!',
                mensaje: "Bienvenido al curso de Ionic 2 en Español!! Praesent in leo ac erat pulvinar molestie a quis ligula. Curabitur ac sollicitudin erat, vel suscipit turpis. Sed accumsan nisi id felis pretium porttitor. Nulla suscipit gravida dolor vel condimentum.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent suscipit dolor turpis, sit amet mollis sapien suscipit a. Duis bibendum sodales ligula quis hendrerit. <br />Ut quis augue mi. Donec vulputate dictum metus convallis tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis venenatis tortor et volutpat. Morbi quis neque tellus. <br /><br />Praesent turpis sapien, tincidunt non est non, luctus ornare sem. Donec tincidunt lacus sit amet turpis porta volutpat.",
                fecha: 'Lunes, Febrero 6 2017'
            },
            {
                nombre: 'Felipe Flores',
                direccion: 'fflores@google.com',
                asunto: 'Hola!',
                mensaje: 'Sed accumsan nisi id felis pretium porttitor. Nulla suscipit gravida dolor vel condimentum.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent suscipit dolor turpis, sit amet mollis sapien suscipit a. Duis bibendum sodales ligula quis hendrerit',
                fecha: 'Lunes, Enero 16 2017'
            },
            {
                nombre: 'Andres Alvarez',
                direccion: 'andres.alvarez@twitter.com',
                asunto: 'Fiesta!',
                mensaje: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac dapibus odio, sit amet faucibus tellus. <br /> Donec at condimentum sapien. <br /><br />Aliquam consectetur mi non dolor porta faucibus. Aliquam a est non quam finibus dictum egestas in purus. Donec id diam neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas interdum lectus ac ex consectetur placerat. <br />Phasellus vitae malesuada est, eget iaculis ipsum. Fusce elit magna, varius nec sem eu, convallis rutrum mi. <br />Donec ligula metus, vulputate porttitor est maximus, tempus consectetur est. <br />Praesent rutrum est quis pellentesque placerat. ',
                fecha: 'Lunes, Enero 15 2017'
            },
            {
                nombre: 'José Jaramillo',
                direccion: 'jjaramillo@apple.com',
                asunto: 'Nuevo curso de programación',
                mensaje: 'Revisa la página www.aprende-facilmente.com regularmente',
                fecha: 'Lunes, Enero 8 2017'
            },
            {
                nombre: 'Roberto Rodriguez',
                direccion: 'roberto@rodriguez.com',
                asunto: 'Feliz Año!!!!',
                mensaje: 'Espero que la hayas pasado bien en tus vacaciones y te deseamos un muy buen 2017!',
                fecha: 'Lunes, Enero 2 2017'
            }
        ];
        this.enviados = [];
    }
    CorreosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CorreosProvider);
    return CorreosProvider;
}());

//# sourceMappingURL=correos.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CorreoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevocorreo_nuevocorreo__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CorreoPage = /** @class */ (function () {
    function CorreoPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.correoActual = {};
        this.correoActual = this.navParams.data;
    }
    CorreoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CorreoPage');
    };
    CorreoPage.prototype.mostrarModal = function (tipo) {
        var modal = this.modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_2__nuevocorreo_nuevocorreo__["a" /* NuevocorreoPage */], { tipo: tipo, correo: this.correoActual });
        modal.present();
    };
    CorreoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-correo',template:/*ion-inline-start:"/var/www/html/gmail/src/pages/correo/correo.html"*/'<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Correo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2>{{ correoActual.asunto }}</h2>\n  <hr>\n  <ion-item>\n    <ion-avatar item-left>\n      <img [src]="\'../../assets/imagenes/\' + correoActual.nombre.charAt(0).toLowerCase() + \'.gif\'">\n    </ion-avatar>\n    <h2>{{ correoActual.nombre }}</h2>\n    <h3>{{ correoActual.fecha }}</h3>\n  </ion-item>\n  <p [innerHTML]="correoActual.mensaje"></p>\n  <hr>\n  <ion-row>\n    <ion-col>\n        <button ion-button clear (click)="mostrarModal(\'Replay\')">\n          <div>\n            <ion-icon name="ios-undo-outline"></ion-icon>\n            <br>\n            <label>Replay</label>\n          </div>\n        </button>\n    </ion-col>\n    <ion-col>\n        <button ion-button clear (click)="mostrarModal(\'Replay All\')">\n          <div>\n            <ion-icon name="ios-undo-outline"></ion-icon>\n            <ion-icon name="ios-undo-outline"></ion-icon>\n            <br>\n            <label>Replay All</label>\n          </div>\n        </button>\n    </ion-col>\n    <ion-col>\n        <button ion-button clear (click)="mostrarModal(\'Forward\')">\n          <div>\n            <ion-icon name="ios-redo-outline"></ion-icon>\n            <br>\n            <label>Forward</label>\n          </div>\n        </button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/var/www/html/gmail/src/pages/correo/correo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], CorreoPage);
    return CorreoPage;
}());

//# sourceMappingURL=correo.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map