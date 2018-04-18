webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'root', component: __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\n    min-height: 70px;\n}\n.navbar-brand {\n    margin-left: 0 !important;\n    margin-right: 50px;\n    padding: 0;\n    line-height: 70px;\n}\n.navbar-brand img {\n    display: inline;\n    padding-right: 15px;\n    margin-right: 15px;\n    border-right: 1px solid #fff;\n}\n.fa, .glyphicon, li {\n    color: #f5f5f5;\n    font-size: 1em;\n    cursor: pointer;\n}\nli button {\n    padding: 15px;\n    color: #000;\n}\n.nav > li > a {\n    padding: 25px 25px 20px 25px;\n}\n.nav > li > a:hover, .nav > li > a:active {\n    color: #fff;\n    border-bottom: 5px solid #46850f;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container\">\n      <div class=\"collapse navbar-collapse\" id=\"app-collapse\">\n        <ul class=\"nav navbar-nav\">\n          <li>\n            <a [routerLink]=\"['/']\">Home</a>\n          </li>\n          <!-- <li>\n            <a [routerLink]=\"['/demo/emotion-recognition']\">Emotion</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/demo/face-detection']\">Face Detection</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/demo/face-verification']\">Face Verification</a>\n          </li> -->\n          <li>\n            <a [routerLink]=\"['/demo/analyze-image']\">Super Hero Analysis</a>\n          </li>\n          <!-- <li>\n            <a [routerLink]=\"['/demo/read-text']\">Text Recognition</a>\n          </li>\n          <li>\n            <a [routerLink]=\"['/demo/analyze-text']\">Text Analysis</a>\n          </li> -->\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Cognitive Services App';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__ = __webpack_require__("./src/app/demo/demo.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__["a" /* DemoModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cognitive-services/cognitive-services.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CognitiveServicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/cognitive-services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__face_data_service__ = __webpack_require__("./src/app/cognitive-services/face-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vision_data_service__ = __webpack_require__("./src/app/cognitive-services/vision-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__text_data_service__ = __webpack_require__("./src/app/cognitive-services/text-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CognitiveServicesModule = /** @class */ (function () {
    function CognitiveServicesModule() {
    }
    CognitiveServicesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_3__face_data_service__["a" /* FaceDataService */],
                __WEBPACK_IMPORTED_MODULE_4__vision_data_service__["a" /* VisionDataService */],
                __WEBPACK_IMPORTED_MODULE_5__text_data_service__["a" /* TextDataService */]
            ]
        })
    ], CognitiveServicesModule);
    return CognitiveServicesModule;
}());



/***/ }),

/***/ "./src/app/cognitive-services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.apiServer = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiServer;
    }
    DataService.prototype.get = function (url, key, responseType) {
        var _this = this;
        if (responseType === void 0) { responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Json; }
        var promise = new Promise(function (resolve, reject) {
            var options = null;
            if (key) {
                options = _this.setRequestOptions(key, false, responseType);
            }
            return _this.http.get(url, options).toPromise()
                .then(function (response) {
                if (responseType === __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Json) {
                    resolve(response.json());
                }
                else if (responseType === __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].ArrayBuffer) {
                    resolve(response.arrayBuffer());
                }
                else if (responseType === __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Blob) {
                    resolve(response.blob());
                }
            })
                .catch(function (reason) {
                var errMsg = _this.logError(reason);
                reject(errMsg);
            });
        });
        return promise;
    };
    DataService.prototype.postTextData = function (url, body, key, responseType) {
        var _this = this;
        if (responseType === void 0) { responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Json; }
        var promise = new Promise(function (resolve, reject) {
            var options = _this.setRequestOptions(key, true, responseType, 'text');
            return _this._post(url, body, options, resolve, reject);
        });
        return promise;
    };
    DataService.prototype.postFormData = function (url, body, key, responseType, extraHeaders) {
        var _this = this;
        if (responseType === void 0) { responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Json; }
        var promise = new Promise(function (resolve, reject) {
            var options = _this.setRequestOptions(key, true, responseType, 'form', extraHeaders);
            return _this._post(url, body, options, resolve, reject);
        });
        return promise;
    };
    DataService.prototype.postBinaryData = function (url, body, key, responseType) {
        var _this = this;
        if (responseType === void 0) { responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Json; }
        var promise = new Promise(function (resolve, reject) {
            var options = _this.setRequestOptions(key, true, responseType, 'binary');
            return _this._post(url, body, options, resolve, reject);
        });
        return promise;
    };
    DataService.prototype.postAudioData = function (url, body, key, responseType) {
        var _this = this;
        if (responseType === void 0) { responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Json; }
        var promise = new Promise(function (resolve, reject) {
            var options = _this.setRequestOptions(key, true, responseType, 'audio');
            return _this._post(url, body, options, resolve, reject);
        });
        return promise;
    };
    DataService.prototype.post = function (url, body, key, responseType) {
        var _this = this;
        if (responseType === void 0) { responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Json; }
        var promise = new Promise(function (resolve, reject) {
            var options = _this.setRequestOptions(key, true, responseType);
            return _this._post(url, body, options, resolve, reject);
        });
        return promise;
    };
    DataService.prototype.postWithMore = function (url, body, key) {
        var _this = this;
        var options = this.setRequestOptions(key, true);
        var promise = new Promise(function (resolve, reject) {
            _this.http.post(url, body, options).toPromise()
                .then(function (response) {
                if (response.status === 202) {
                    var operationLocation_1 = response.headers.get('Operation-Location');
                    if (!operationLocation_1) {
                        reject('No Operation-Location header found');
                    }
                    var interval_1 = setInterval(function () {
                        _this.http.get(operationLocation_1, options).toPromise()
                            .then(function (response2) {
                            var operationResult = response2.json();
                            if (operationResult.status === 'Succeeded') {
                                clearInterval(interval_1);
                                resolve(JSON.parse(operationResult.processingResult));
                            }
                        })
                            .catch(function (reason) {
                            var errMsg = _this.logError(reason);
                            clearInterval(interval_1);
                            reject(errMsg);
                        });
                    }, 5000);
                }
                else {
                    resolve(response.json());
                }
            })
                .catch(function (reason) {
                var errMsg = _this.logError(reason);
                reject(errMsg);
            });
        });
        return promise;
    };
    DataService.prototype._post = function (url, body, options, resolve, reject) {
        var _this = this;
        return this.http.post(url, body, options).toPromise()
            .then(function (response) {
            var contentType = response.headers.get('Content-Type');
            if (contentType.indexOf('json') > -1) {
                resolve(response.json());
            }
            else {
                var data = new Uint8Array(response.arrayBuffer());
                var blob = new Blob([data], { type: contentType });
                resolve(blob);
            }
        })
            .catch(function (reason) {
            var errMsg = _this.logError(reason);
            reject(errMsg);
        });
    };
    DataService.prototype.setRequestOptions = function (key, post, responseType, contentType, extraHeaders) {
        if (responseType === void 0) { responseType = __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Json; }
        if (contentType === void 0) { contentType = 'json'; }
        var headersSet = false;
        var headers = extraHeaders ? extraHeaders : new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        if (post) {
            switch (contentType) {
                case 'binary':
                    headers.append('Content-Type', 'application/octet-stream');
                    break;
                case 'text':
                    headers.append('Content-Type', 'text/plain');
                    break;
                case 'form':
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    break;
                case 'audio':
                    headers.append('Content-Type', 'audio/wav; codec="audio/pcm"; samplerate=16000');
                    break;
                default:
                    headers.append('Content-Type', 'application/json');
            }
            headersSet = true;
        }
        else {
            if (responseType === __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* ResponseContentType */].Blob) {
                headers.append('Content-Type', 'application/x-www-form-urlencoded');
                headersSet = true;
            }
        }
        if (key) {
            headers.append('Ocp-Apim-Subscription-Key', key);
            headers.append('Prediction-Key', key);
            headersSet = true;
        }
        return headersSet ? {
            responseType: responseType,
            headers: headers
        } : null;
    };
    DataService.prototype.logError = function (error) {
        var errMsg = error.message ? error.message :
            error._body && error._body.code ? error._body.code + " - " + error._body.message :
                error._body && error._body.error ? error._body.error.code + " - " + error._body.error.message :
                    error.status ? error.status + " - " + error.statusText : 'Error calling API';
        console.log(error);
        return errMsg;
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/cognitive-services/face-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaceDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/cognitive-services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FaceDataService = /** @class */ (function (_super) {
    __extends(FaceDataService, _super);
    function FaceDataService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.key = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiKeys.face;
        return _this;
    }
    FaceDataService.prototype.detect = function (imageUrlOrData) {
        var url = this.apiServer + "/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=true&returnFaceAttributes=age,gender,smile,facialHair,headPose,glasses";
        if (typeof imageUrlOrData === 'string') {
            var body = { url: imageUrlOrData };
            return this.post(url, body, this.key);
        }
        else {
            return this.postBinaryData(url, imageUrlOrData, this.key);
        }
    };
    FaceDataService.prototype.detectEmotion = function (imageUrlOrData) {
        // Detect human faces in an image and returns face locations, and optionally with faceIds, landmarks, and attributes.
        var url = this.apiServer + "/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=emotion";
        if (typeof imageUrlOrData === 'string') {
            var body = { url: imageUrlOrData };
            return this.post(url, body, this.key);
        }
        else {
            return this.postBinaryData(url, imageUrlOrData, this.key);
        }
    };
    FaceDataService.prototype.verify = function (faceId1, faceId2) {
        // Verify whether two faces belong to a same person or whether one face belongs to a person.
        var url = this.apiServer + "/face/v1.0/verify";
        var body = { faceId1: faceId1, faceId2: faceId2 };
        return this.post(url, body, this.key);
    };
    FaceDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], FaceDataService);
    return FaceDataService;
}(__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]));



/***/ }),

/***/ "./src/app/cognitive-services/text-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/cognitive-services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TextDataService = /** @class */ (function (_super) {
    __extends(TextDataService, _super);
    function TextDataService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.key = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiKeys.textAnalytics;
        return _this;
    }
    TextDataService.prototype.analyzeSentiment = function (text) {
        var url = this.apiServer + "/text/analytics/v2.0/sentiment";
        var body = { documents: [{ id: '1', text: text }] };
        return this.post(url, body, this.key);
    };
    TextDataService.prototype.analyzeLanguage = function (text) {
        var url = this.apiServer + "/text/analytics/v2.0/languages";
        var body = { documents: [{ id: '1', numberOfLanguagesToDetect: '1', text: text }] };
        return this.post(url, body, this.key);
    };
    TextDataService.prototype.analyzeKeyPhrases = function (text, language) {
        var url = this.apiServer + "/text/analytics/v2.0/keyPhrases";
        var body = { documents: [{ id: '1', text: text, language: language }] };
        return this.post(url, body, this.key);
    };
    TextDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], TextDataService);
    return TextDataService;
}(__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]));



/***/ }),

/***/ "./src/app/cognitive-services/vision-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisionDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("./src/app/cognitive-services/data.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VisionDataService = /** @class */ (function (_super) {
    __extends(VisionDataService, _super);
    function VisionDataService() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.key = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].apiKeys.computerVision;
        return _this;
    }
    VisionDataService.prototype.analyze = function (imageUrlOrData) {
        // const url = `${this.apiServer}/vision/v1.0/analyze?visualFeatures=Categories,Tags,Description,Faces,ImageType,Color,Adult`;
        var url = this.apiServer + "/customvision/v1.1/Prediction/4ec6a3ac-1f8c-4a84-911a-b2a6b018a4e0/url?iterationId=ed9e4537-cbac-4e18-9b3e-1988a9490cde";
        if (typeof imageUrlOrData === 'string') {
            var body = { url: imageUrlOrData };
            return this.post(url, body, this.key);
        }
        else {
            return this.postBinaryData(url, imageUrlOrData, this.key);
        }
    };
    VisionDataService.prototype.ocr = function (imageUrlOrData) {
        var url = this.apiServer + "/vision/v1.0/ocr";
        if (typeof imageUrlOrData === 'string') {
            var body = { url: imageUrlOrData };
            return this.post(url, body, this.key);
        }
        else {
            return this.postBinaryData(url, imageUrlOrData, this.key);
        }
    };
    VisionDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], VisionDataService);
    return VisionDataService;
}(__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]));



/***/ }),

/***/ "./src/app/demo/cognitive-services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CognitiveServicesComponent; });
var CognitiveServicesComponent = /** @class */ (function () {
    function CognitiveServicesComponent() {
        this.errorMessage = '';
    }
    return CognitiveServicesComponent;
}());



/***/ }),

/***/ "./src/app/demo/computer-vision/computer-vision-analyze-image/computer-vision-analyze-image.component.css":
/***/ (function(module, exports) {

module.exports = "h2, h4 {\n    text-align: center;\n}\n.image-features {\n    background-color:rgba(255,255,255,0.4);\n    position:absolute;\n    text-align: center;\n    font-weight: bold;\n    font-size: 12px;\n    color: black;\n}\n.result-section table {\n    background-color:white;\n}\n.result-label {\n    width:50px;\n}\n.result-description {\n    width:70%;\n}\n.result-color-box {\n    width:20px;\n    height:20px;\n    border-style:solid;\n    border-color:black;\n}\n.filmstrip-row {\n    margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/demo/computer-vision/computer-vision-analyze-image/computer-vision-analyze-image.component.html":
/***/ (function(module, exports) {

module.exports = "<app-hero-banner [apiTitle]='apiTitle' [apiDescription]='apiDescription'>\n</app-hero-banner>\n<div class=\"container\">\n    <div class=\"col-xs-12\" (window:resize)=\"onResize($event)\">\n        <!-- <div class=\"row top-padding\">\n            <h2>Who's that hero?</h2>\n        </div>\n        <div class=\"row api-description bottom-padding\">\n            Enter an image URL of a super hero below and we will tell you if the hero is from the DC or Marvel universe, and which hero we think it is...\n        </div> -->\n        <div style=\"height:20px\"></div>\n        <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6\">\n                <div class=\"img_container\">\n                    <img [src]=\"selectedImageUrl\" alt=\"Selected Image\" class=\"selected-image\" (load)=\"selectedImageLoaded($event)\" />\n                    <div *ngFor=\"let faceRectangle of faceRectangles\" [style.top]=\"faceRectangle.percentTop + '%'\" [style.left]=\"faceRectangle.percentLeft +'%'\"\n                        [style.width]=\"faceRectangle.percentWidth + '%'\" [style.height]=\"faceRectangle.percentHeight + '%'\" class=\"face-rectangle\">\n                    </div>\n                    <div *ngFor=\"let faceRectangle of faceRectangles; let i = index\" class=\"face-rectangle image-features\" [style.top]=\"(faceRectangle.percentTop + faceRectangle.percentHeight) + '%'\"\n                        [style.left]=\"faceRectangle.percentLeft +'%'\" [style.min-width]=\"faceRectangle.percentWidth + '%'\">\n                        <span *ngIf=\"imageFeatures.faces && imageFeatures.faces[i]\">{{imageFeatures.faces[i].gender}}, age:{{imageFeatures.faces[i].age}}</span>\n                    </div>\n                </div>\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" data-defaultValue=\"Image URL\" [(ngModel)]=\"internetImageUrl\" />\n\n                    <div class=\"input-group-btn\">\n                        <button class=\"btn btn-default\" type=\"button\" (click)=\"onInternetUrlSelected()\">\n                            <span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\"></span>\n                        </button>\n                        <!-- <label class=\"btn btn-default\" type=\"button\">\n                            <span class=\"glyphicon glyphicon-folder-open\"></span>\n                            <input type=\"file\" (change)=\"onFilesSelected($event)\" accept=\"image/bmp,image/jpeg,image/png,image/gif\" style=\"font-size: 50px;width: 120px;opacity: 0;filter:alpha(opacity=0);position: relative;top: -40px;left: -20px\"\n                            />\n                        </label> -->\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n                <div class=\"demo-codes detection-demo-codes result-section\">\n                    <h1 class=\"text-info display-middle\" *ngIf=\"isLoading\">\n                        <i class=\"glyphicon glyphicon-refresh spinning\"></i>\n                    </h1>\n                    <div *ngIf=\"!isLoading\">\n                        <div class=\"btn-group btn-group-justified\" role=\"group\">\n                            <div class=\"btn-group\" role=\"group\">\n                                <button class=\"btn btn-info\" [ngClass]=\"{'active': !showJSON }\" (click)=\"toggleJSON(false)\">Results</button>\n                            </div>\n                            <div class=\"btn-group\" role=\"group\">\n                                <button class=\"btn btn-info\" [ngClass]=\"{'active': showJSON }\" (click)=\"toggleJSON(true)\">JSON</button>\n                            </div>\n                        </div>\n                        <pre class=\"code\" [hidden]=\"!showJSON\">{{ imageFeatures | json }}</pre>\n                        <h4 [hidden]=\"showJSON\">Image Features</h4>\n                        <table class=\"table table-bordered\" [hidden]=\"showJSON\">\n                            <thead>\n\n                                <tr>\n                                    <td>Tag</td>\n                                    <td>Probability</td>\n                                </tr>\n                            </thead>\n                            <tbody>\n\n                                <tr *ngFor=\"let prediction of imageFeatures.Predictions\">\n                                    <td style=\"text-transform: uppercase\">\n                                        {{prediction.Tag}}\n                                    </td>\n                                    <td>\n                                        {{prediction.Probability | percent}}\n                                    </td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row filmstrip-row bottom-padding\">\n            <div *ngFor=\"let imagePath of imageList\" class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2 filmstrip\">\n                <img [src]=\"imagePath\" (click)=\"selectStockImage(imagePath)\" [ngClass]=\"imagePath === internetImageUrl ? 'selected' : ''\"\n                />\n            </div>\n        </div>\n\n        <br>\n        <div class=\"row\"><br>\n            <h2>What did we learn?</h2>\n            <h3>more training...</h3>\n            <p>Some interesting \"statistics:\"</p>\n            <ul>\n                <li><strong>The FLASH</strong>: Has a 71% confidence of being <em>SPIDERMAN</em></li>\n                <li><strong>SPIDERMAN</strong>: Has a 10% confidence of being <em>The FLASH</em> and 100% confidence of being a <strong>DC HERO</strong></li>\n                <li><strong>Chris Evans</strong> is <em>WONDER WOMAN</em></li>\n                <li>When <strong>The FLASH</strong> and <strong>SUPERMAN</strong> race, audiences mostly see <em>The Flash</em></li>\n                <li>Dragonball Z's <strong>Goku</strong> is a <em>DC HERO</em></li>\n            </ul>\n        </div>\n\n        <div class=\"row\">\n            <p style=\"text-align:center\">Made by <a href=\"https://github.com/azanebrain\">azanebrain</a> &amp; <a href=\"https://github.com/golfergeek\">golfergeek</a> at the NGConf2018 AI Hackathon hosted by Microsoft</p>\n        </div>\n\n        <!-- <div class=\"row\">\n            <h2>Want to build this?</h2>\n        </div>\n        <div class=\"row row-size2\">\n            <h2>\n                <a class=\"button button-secondary button-primary\" href=\"https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/quickstarts/javascript#AnalyzeImage\">\n                    Documentation</a>\n            </h2>\n        </div> -->\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/computer-vision/computer-vision-analyze-image/computer-vision-analyze-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComputerVisionAnalyzeImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vision_vision_component__ = __webpack_require__("./src/app/demo/vision/vision.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cognitive_services_vision_data_service__ = __webpack_require__("./src/app/cognitive-services/vision-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComputerVisionAnalyzeImageComponent = /** @class */ (function (_super) {
    __extends(ComputerVisionAnalyzeImageComponent, _super);
    function ComputerVisionAnalyzeImageComponent(sanitizer, titleService, visionDataService) {
        var _this = _super.call(this, sanitizer) || this;
        _this.sanitizer = sanitizer;
        _this.titleService = titleService;
        _this.visionDataService = visionDataService;
        _this.errorMessage = '';
        _this.showJSON = false;
        _this.apiTitle = 'Computer Vision API - Analyze Image';
        _this.apiDescription = 'Extract rich information from images to categorize and process visual data—and protect your users from unwanted content.';
        _this.titleService.setTitle('Analyze Image');
        return _this;
    }
    ComputerVisionAnalyzeImageComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        this.imageList = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].objectImageUrls;
        this.internetImageUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].objectImageUrls[0];
        this.onInternetUrlSelected();
    };
    ComputerVisionAnalyzeImageComponent.prototype.bestDescription = function () {
        if (!this.imageFeatures || !this.imageFeatures.description) {
            return null;
        }
        return this.imageFeatures.description.captions.reduce(function (prev, current) {
            return (prev.confidence > current.confidence) ? prev : current;
        });
    };
    ComputerVisionAnalyzeImageComponent.prototype.highConfidenceTags = function () {
        return this.imageFeatures.tags.filter(function (tag) {
            return tag.confidence >= 0.5;
        }).map(function (tag) {
            return tag.name;
        }).join(', ');
    };
    ComputerVisionAnalyzeImageComponent.prototype.lowConfidenceTags = function () {
        return this.imageFeatures.tags.filter(function (tag) {
            return tag.confidence < 0.5;
        }).map(function (tag) {
            return tag.name;
        }).join(', ');
    };
    ComputerVisionAnalyzeImageComponent.prototype.toggleJSON = function (b) {
        this.showJSON = b;
    };
    ComputerVisionAnalyzeImageComponent.prototype.onResize = function () {
        this.clearFaces();
        this.processFaces();
    };
    ComputerVisionAnalyzeImageComponent.prototype.refreshDetection = function () {
        var _this = this;
        this.clearFaces();
        this.errorMessage = '';
        if (!this.selectedImageUrl) {
            this.errorMessage = 'Please provide a valid URL';
        }
        else {
            this.isLoading = true;
            this.visionDataService.analyze(this.selectedImageUrl)
                .then(function (imageFeatures) {
                _this.imageFeatures = imageFeatures;
                _this.isLoading = false;
                _this.processFaces();
            })
                .catch(function (error) {
                _this.errorMessage = error;
                _this.isLoading = false;
            });
        }
    };
    ComputerVisionAnalyzeImageComponent.prototype.processFile = function (result) {
        var _this = this;
        this.isLoading = true;
        this.visionDataService.analyze(result)
            .then(function (imageFeatures) {
            _this.imageFeatures = imageFeatures;
            _this.isLoading = false;
            _this.processFaces();
        })
            .catch(function (error) {
            _this.errorMessage = error;
            _this.isLoading = false;
        });
    };
    ComputerVisionAnalyzeImageComponent.prototype.processFaces = function () {
        var _this = this;
        if (!this.selectedImage) {
            return;
        }
        if (this.imageFeatures.faces) {
            this.imageFeatures.faces.forEach(function (face) {
                _this.faceRectangles.push(_this.processFaceRectangle(face.faceRectangle));
            });
        }
    };
    ComputerVisionAnalyzeImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-computer-vision-analyze-image',
            template: __webpack_require__("./src/app/demo/computer-vision/computer-vision-analyze-image/computer-vision-analyze-image.component.html"),
            styles: [__webpack_require__("./src/app/demo/computer-vision/computer-vision-analyze-image/computer-vision-analyze-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__cognitive_services_vision_data_service__["a" /* VisionDataService */]])
    ], ComputerVisionAnalyzeImageComponent);
    return ComputerVisionAnalyzeImageComponent;
}(__WEBPACK_IMPORTED_MODULE_2__vision_vision_component__["a" /* VisionComponent */]));



/***/ }),

/***/ "./src/app/demo/computer-vision/computer-vision-read-text/computer-vision-read-text.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\n    text-align: center\n}\n.filmstrip-row {\n    margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/demo/computer-vision/computer-vision-read-text/computer-vision-read-text.component.html":
/***/ (function(module, exports) {

module.exports = "<app-hero-banner [apiTitle]='apiTitle' [apiDescription]='apiDescription'>\n</app-hero-banner>\n<div class=\"container\">\n    <div class=\"col-xs-12\">\n        <div class=\"row top-padding\">\n            <h2>Read Text in Images</h2>\n        </div>\n        <div class=\"row api-description bottom-padding\">\n            Optical Character Recognition (OCR) detects text in an image and extracts the recognized words into a machine-readable character\n            stream. Analyze images to detect embedded text, generate character streams and enable searching. Allow users\n            to take photos of text instead of copying to save time and effort.\n        </div>\n        <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6\">\n                <div class=\"img_container\">\n                    <img [src]=\"selectedImageUrl\" alt=\"Selected Image\" class=\"selected-image\" />\n                </div>\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" data-defaultValue=\"Image URL\" [(ngModel)]=\"internetImageUrl\" />\n\n                    <div class=\"input-group-btn\">\n                        <button class=\"btn btn-default\" type=\"button\" (click)=\"onInternetUrlSelected()\">\n                            <span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\"></span>\n                        </button>\n                        <label class=\"btn btn-default\" type=\"button\">\n                            <span class=\"glyphicon glyphicon-folder-open\"></span>\n                            <input type=\"file\" (change)=\"onFilesSelected($event)\" accept=\"image/bmp,image/jpeg,image/png,image/gif\" style=\"font-size: 50px;width: 120px;opacity: 0;filter:alpha(opacity=0);position: relative;top: -40px;left: -20px\"\n                            />\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n                <div class=\"demo-codes detection-demo-codes\">\n                    <h1 class=\"text-info display-middle\" *ngIf=\"isLoading\">\n                        <i class=\"glyphicon glyphicon-refresh spinning\"></i>\n                    </h1>\n                    <div *ngIf=\"!isLoading\">\n                        <div class=\"btn-group btn-group-justified\" role=\"group\">\n                            <div class=\"btn-group\" role=\"group\">\n                                <button class=\"btn btn-info\" [ngClass]=\"{'active': !showJSON }\" (click)=\"toggleJSON(false)\">Results</button>\n                            </div>\n                            <div class=\"btn-group\" role=\"group\">\n                                <button class=\"btn btn-info\" [ngClass]=\"{'active': showJSON }\" (click)=\"toggleJSON(true)\">JSON</button>\n                            </div>\n                        </div>\n                        <pre class=\"code\" [hidden]=\"!showJSON\">{{ ocrResult | json }}</pre>\n                        <pre class=\"code\" [hidden]=\"showJSON\">{{ textResult }}</pre>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row filmstrip-row\">\n            <div *ngFor=\"let imagePath of imageList\" class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2 filmstrip\">\n                <img [src]=\"imagePath\" (click)=\"selectStockImage(imagePath)\" [ngClass]=\"imagePath === internetImageUrl ? 'selected' : ''\"\n                />\n            </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <h2>Want to build this?</h2>\n        </div>\n        <div class=\"row row-size2\">\n            <h2>\n                <a class=\"button button-secondary button-primary\" href=\"https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/quickstarts/javascript#OCR\">\n                    Documentation</a>\n            </h2>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/demo/computer-vision/computer-vision-read-text/computer-vision-read-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComputerVisionReadTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vision_vision_component__ = __webpack_require__("./src/app/demo/vision/vision.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cognitive_services_vision_data_service__ = __webpack_require__("./src/app/cognitive-services/vision-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ComputerVisionReadTextComponent = /** @class */ (function (_super) {
    __extends(ComputerVisionReadTextComponent, _super);
    function ComputerVisionReadTextComponent(sanitizer, titleService, visionDataService) {
        var _this = _super.call(this, sanitizer) || this;
        _this.sanitizer = sanitizer;
        _this.titleService = titleService;
        _this.visionDataService = visionDataService;
        _this.isLoading = true;
        _this.errorMessage = '';
        _this.showJSON = false;
        _this.apiTitle = 'Computer Vision API - Read Text';
        _this.apiDescription = 'Extract rich information from images to categorize and process visual data—and protect your users from unwanted content.';
        _this.titleService.setTitle('Read Text');
        return _this;
    }
    ComputerVisionReadTextComponent.prototype.ngOnInit = function () {
        this.imageList = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].textImageUrls;
        this.internetImageUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].textImageUrls[0];
        this.onInternetUrlSelected();
    };
    ComputerVisionReadTextComponent.prototype.toggleJSON = function (b) {
        this.showJSON = b;
    };
    ComputerVisionReadTextComponent.prototype.refreshDetection = function () {
        var _this = this;
        this.errorMessage = '';
        if (!this.selectedImageUrl) {
            this.errorMessage = 'Please provide a valid URL';
        }
        else {
            this.isLoading = true;
            this.visionDataService.ocr(this.selectedImageUrl)
                .then(function (ocrResult) {
                _this.processResult(ocrResult);
                _this.isLoading = false;
            })
                .catch(function (error) {
                _this.errorMessage = error;
                _this.isLoading = false;
            });
        }
    };
    ComputerVisionReadTextComponent.prototype.processFile = function (result) {
        var _this = this;
        this.isLoading = true;
        this.visionDataService.ocr(result)
            .then(function (ocrResult) {
            _this.processResult(ocrResult);
            _this.isLoading = false;
        })
            .catch(function (error) {
            _this.errorMessage = error;
            _this.isLoading = false;
        });
    };
    ComputerVisionReadTextComponent.prototype.processResult = function (result) {
        var plainText = '';
        if (result.regions != null) {
            for (var i = 0; i < result.regions.length; i++) {
                for (var j = 0; j < result.regions[i].lines.length; j++) {
                    for (var k = 0; k < result.regions[i].lines[j].words.length; k++) {
                        plainText += result.regions[i].lines[j].words[k].text + ' ';
                    }
                    plainText += '\n';
                }
                plainText += '\n';
            }
        }
        else {
            plainText += 'empty.';
        }
        this.textResult = plainText;
        this.ocrResult = result;
    };
    ComputerVisionReadTextComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-computer-vision-read-text',
            template: __webpack_require__("./src/app/demo/computer-vision/computer-vision-read-text/computer-vision-read-text.component.html"),
            styles: [__webpack_require__("./src/app/demo/computer-vision/computer-vision-read-text/computer-vision-read-text.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__cognitive_services_vision_data_service__["a" /* VisionDataService */]])
    ], ComputerVisionReadTextComponent);
    return ComputerVisionReadTextComponent;
}(__WEBPACK_IMPORTED_MODULE_2__vision_vision_component__["a" /* VisionComponent */]));



/***/ }),

/***/ "./src/app/demo/demo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emotion_emotion_recognition_component__ = __webpack_require__("./src/app/demo/emotion/emotion-recognition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__face_face_detection_face_detection_component__ = __webpack_require__("./src/app/demo/face/face-detection/face-detection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__face_face_verification_face_verification_component__ = __webpack_require__("./src/app/demo/face/face-verification/face-verification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__computer_vision_computer_vision_read_text_computer_vision_read_text_component__ = __webpack_require__("./src/app/demo/computer-vision/computer-vision-read-text/computer-vision-read-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__computer_vision_computer_vision_analyze_image_computer_vision_analyze_image_component__ = __webpack_require__("./src/app/demo/computer-vision/computer-vision-analyze-image/computer-vision-analyze-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__text_text_analysis_text_analysis_component__ = __webpack_require__("./src/app/demo/text/text-analysis/text-analysis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("./src/app/demo/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: 'demo',
        children: [
            {
                path: 'emotion-recognition',
                component: __WEBPACK_IMPORTED_MODULE_2__emotion_emotion_recognition_component__["a" /* EmotionRecognitionComponent */]
            },
            {
                path: 'face-detection',
                component: __WEBPACK_IMPORTED_MODULE_3__face_face_detection_face_detection_component__["a" /* FaceDetectionComponent */]
            },
            {
                path: 'face-verification',
                component: __WEBPACK_IMPORTED_MODULE_4__face_face_verification_face_verification_component__["a" /* FaceVerificationComponent */]
            },
            {
                path: 'analyze-image',
                component: __WEBPACK_IMPORTED_MODULE_6__computer_vision_computer_vision_analyze_image_computer_vision_analyze_image_component__["a" /* ComputerVisionAnalyzeImageComponent */]
            },
            {
                path: 'read-text',
                component: __WEBPACK_IMPORTED_MODULE_5__computer_vision_computer_vision_read_text_computer_vision_read_text_component__["a" /* ComputerVisionReadTextComponent */]
            },
            {
                path: 'analyze-text',
                component: __WEBPACK_IMPORTED_MODULE_7__text_text_analysis_text_analysis_component__["a" /* TextAnalysisComponent */]
            }
        ]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */]
    }
];
var DemoRoutingModule = /** @class */ (function () {
    function DemoRoutingModule() {
    }
    DemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
        })
    ], DemoRoutingModule);
    return DemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/demo/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__emotion_emotion_recognition_component__ = __webpack_require__("./src/app/demo/emotion/emotion-recognition.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_hero_banner_hero_banner_component__ = __webpack_require__("./src/app/demo/shared/hero-banner/hero-banner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demo_routing_module__ = __webpack_require__("./src/app/demo/demo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cognitive_services_cognitive_services_module__ = __webpack_require__("./src/app/cognitive-services/cognitive-services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__face_face_viewer_face_viewer_component__ = __webpack_require__("./src/app/demo/face/face-viewer/face-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__face_face_detection_face_detection_component__ = __webpack_require__("./src/app/demo/face/face-detection/face-detection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__face_face_verification_face_verification_component__ = __webpack_require__("./src/app/demo/face/face-verification/face-verification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__computer_vision_computer_vision_read_text_computer_vision_read_text_component__ = __webpack_require__("./src/app/demo/computer-vision/computer-vision-read-text/computer-vision-read-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__computer_vision_computer_vision_analyze_image_computer_vision_analyze_image_component__ = __webpack_require__("./src/app/demo/computer-vision/computer-vision-analyze-image/computer-vision-analyze-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__text_text_analysis_text_analysis_component__ = __webpack_require__("./src/app/demo/text/text-analysis/text-analysis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("./src/app/demo/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_7__cognitive_services_cognitive_services_module__["a" /* CognitiveServicesModule */], __WEBPACK_IMPORTED_MODULE_6__demo_routing_module__["a" /* DemoRoutingModule */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__emotion_emotion_recognition_component__["a" /* EmotionRecognitionComponent */],
                __WEBPACK_IMPORTED_MODULE_8__face_face_viewer_face_viewer_component__["a" /* FaceViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_9__face_face_detection_face_detection_component__["a" /* FaceDetectionComponent */],
                __WEBPACK_IMPORTED_MODULE_10__face_face_verification_face_verification_component__["a" /* FaceVerificationComponent */],
                __WEBPACK_IMPORTED_MODULE_5__shared_hero_banner_hero_banner_component__["a" /* HeroBannerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__computer_vision_computer_vision_read_text_computer_vision_read_text_component__["a" /* ComputerVisionReadTextComponent */],
                __WEBPACK_IMPORTED_MODULE_12__computer_vision_computer_vision_analyze_image_computer_vision_analyze_image_component__["a" /* ComputerVisionAnalyzeImageComponent */],
                __WEBPACK_IMPORTED_MODULE_13__text_text_analysis_text_analysis_component__["a" /* TextAnalysisComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */]]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./src/app/demo/emotion/emotion-recognition.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\n    text-align: center;\n}\n.container {\n    padding-bottom: 50px;\n}\n.top-emotion {\n    position:absolute;\n    text-align: center;\n    font-weight: bold;\n    font-size: 12px;\n    color: black;\n}\n.filmstrip-row {\n    margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/demo/emotion/emotion-recognition.component.html":
/***/ (function(module, exports) {

module.exports = "<app-hero-banner [apiTitle]='apiTitle' [apiDescription]='apiDescription'>\n</app-hero-banner>\n<div class=\"container\">\n    <div class=\"col-xs-12\" (window:resize)=\"onResize($event)\">\n        <div class=\"row\">\n            <h2>Recognize Emotions in Images</h2>\n        </div>\n        <div class=\"row api-description\">\n            Emotion Detection is part of the Face Detection API and provides an analysis of the predicted emotions expressed in each\n            face within the frame. The emotions currently enabled are: happiness, surprise, neutral, anger, contempt, disgust,\n            fear, and sadness.\n            <br>\n            <br>To try out the Emotion Detection API, please click the image samples below to generate example results.\n        </div>\n        <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6\">\n                <div class=\"img_container\">\n                    <img [src]=\"selectedImageUrl\" alt=\"Selected Image\" class=\"selected-image\" (load)=\"selectedImageLoaded($event)\" />\n                    <div *ngFor=\"let faceRectangle of faceRectangles; let i = index\" [style.top]=\"faceRectangle.percentTop + '%'\" [style.left]=\"faceRectangle.percentLeft +'%'\"\n                        [style.width]=\"faceRectangle.percentWidth + '%'\" [style.height]=\"faceRectangle.percentHeight + '%'\" [style.color]=\"emotionColor(topEmotion(i),true)\"\n                        class=\"face-rectangle\">\n                    </div>\n                    <div class=\"top-emotion\" *ngFor=\"let faceRectangle of faceRectangles; let i = index\" [style.background-color]=\"emotionColor(topEmotion(i),false)\"\n                        [style.top]=\"(faceRectangle.percentTop + faceRectangle.percentHeight) + '%'\" [style.left]=\"faceRectangle.percentLeft +'%'\"\n                        [style.min-width]=\"faceRectangle.percentWidth + '%'\">\n                        <span>{{topEmotion(i)}}</span>\n                    </div>\n                </div>\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" data-defaultValue=\"Image URL\" [(ngModel)]=\"internetImageUrl\" />\n\n                    <div class=\"input-group-btn\">\n                        <button class=\"btn btn-default\" type=\"button\" (click)=\"onInternetUrlSelected()\">\n                            <span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\"></span>\n                        </button>\n                        <label class=\"btn btn-default\" type=\"button\">\n                            <span class=\"glyphicon glyphicon-folder-open\"></span>\n                            <input type=\"file\" (change)=\"onFilesSelected($event)\" accept=\"image/bmp,image/jpeg,image/png,image/gif\" style=\"font-size: 50px;width: 120px;opacity: 0;filter:alpha(opacity=0);position: relative;top: -40px;left: -20px\"\n                            />\n                        </label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-6\">\n                <div class=\"demo-codes detection-demo-codes\">\n                    <h1 class=\"text-info display-middle\" *ngIf=\"isLoading\">\n                        <i class=\"glyphicon glyphicon-refresh spinning\"></i>\n                    </h1>\n                    <div *ngIf=\"!isLoading\">\n                        <pre class=\"code\">Number of faces: {{ emotions ? emotions.length : 0 }}&#10;{{ emotions | json }}</pre>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row filmstrip-row\">\n            <div *ngFor=\"let imagePath of imageList\" class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2 filmstrip\">\n                <img (click)=\"selectStockImage(imagePath)\" [src]=\"imagePath\" [ngClass]=\"imagePath === internetImageUrl ? 'selected' : ''\"\n                />\n            </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <h2>Want to build this?</h2>\n        </div>\n        <div class=\"row row-size2\">\n            <h2>\n                <a class=\"button button-secondary button-primary\" href=\"https://docs.microsoft.com/en-us/azure/cognitive-services/emotion/quickstarts/javascript\">\n                    Documentation</a>\n            </h2>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/demo/emotion/emotion-recognition.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmotionRecognitionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vision_vision_component__ = __webpack_require__("./src/app/demo/vision/vision.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cognitive_services_face_data_service__ = __webpack_require__("./src/app/cognitive-services/face-data.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmotionRecognitionComponent = /** @class */ (function (_super) {
    __extends(EmotionRecognitionComponent, _super);
    function EmotionRecognitionComponent(sanitizer, titleService, faceDataService) {
        var _this = _super.call(this, sanitizer) || this;
        _this.sanitizer = sanitizer;
        _this.titleService = titleService;
        _this.faceDataService = faceDataService;
        _this.apiTitle = 'Emotion Recognition API';
        _this.apiDescription = 'Analyze faces to detect a range of feelings and personalize your app\'s responses.';
        _this.titleService.setTitle('Emotion Recognition');
        return _this;
    }
    EmotionRecognitionComponent.prototype.ngOnInit = function () {
        this.imageList = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].emotionImageUrls;
        this.internetImageUrl = this.imageList[0];
        this.onInternetUrlSelected();
    };
    EmotionRecognitionComponent.prototype.topEmotion = function (index) {
        try {
            var emotion = this.emotions[index];
            var maxValue = 0;
            var maxKey = '';
            for (var prop in emotion.scores) {
                if (emotion.scores.hasOwnProperty(prop)) {
                    if (emotion.scores[prop] > maxValue) {
                        maxValue = emotion.scores[prop];
                        maxKey = prop;
                    }
                }
            }
            return maxKey;
        }
        catch (err) {
            return '';
        }
    };
    EmotionRecognitionComponent.prototype.emotionColor = function (emotionName, opaque) {
        var opacity = opaque ? '1' : '.3';
        switch (emotionName) {
            case 'anger': return "rgba(255,0,0," + opacity + ")";
            case 'contempt': return "rgba(233,150,122," + opacity + ")";
            case 'disgust': return "rgba(153,50,204," + opacity + ")";
            case 'fear': return "rgba(0,0,0," + opacity + ")";
            case 'happiness': return "rgba(255,215,0," + opacity + ")";
            case 'neutral': return "rgba(128,128,128," + opacity + ")";
            case 'sadness': return "rgba(65,105,225," + opacity + ")";
            case 'surprise': return "rgba(255,69,0," + opacity + ")";
        }
        return "rgba(255,255,255," + opacity + ")";
    };
    EmotionRecognitionComponent.prototype.refreshDetection = function () {
        var _this = this;
        this.clearFaces();
        this.errorMessage = '';
        if (!this.isLoading) {
            if (!this.selectedImageUrl) {
                this.errorMessage = 'Please provide a valid URL';
            }
            else {
                this.isLoading = true;
                this.faceDataService.detectEmotion(this.selectedImageUrl)
                    .then(function (faces) {
                    _this.parseResult(faces);
                })
                    .catch(function (error) {
                    _this.errorMessage = error;
                    _this.isLoading = false;
                });
            }
        }
    };
    EmotionRecognitionComponent.prototype.processFile = function (result) {
        var _this = this;
        this.isLoading = true;
        this.faceDataService.detectEmotion(result)
            .then(function (faces) {
            _this.parseResult(faces);
        })
            .catch(function (error) {
            _this.errorMessage = error;
            _this.isLoading = false;
        });
    };
    EmotionRecognitionComponent.prototype.onResize = function () {
        this.clearFaces();
        this.processFaces();
    };
    EmotionRecognitionComponent.prototype.parseResult = function (faces) {
        var _this = this;
        this.emotions = [];
        faces.forEach(function (face) {
            _this.emotions.push({
                faceRectangle: face.faceRectangle,
                scores: face.faceAttributes.emotion
            });
        });
        this.isLoading = false;
        this.processFaces();
    };
    EmotionRecognitionComponent.prototype.processFaces = function () {
        var _this = this;
        if (!this.selectedImage) {
            return;
        }
        (this.emotions || []).forEach(function (emotion) {
            _this.faceRectangles.push(_this.processFaceRectangle(emotion.faceRectangle));
        });
    };
    EmotionRecognitionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-emotion-recognition',
            template: __webpack_require__("./src/app/demo/emotion/emotion-recognition.component.html"),
            styles: [__webpack_require__("./src/app/demo/emotion/emotion-recognition.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */],
            __WEBPACK_IMPORTED_MODULE_4__cognitive_services_face_data_service__["a" /* FaceDataService */]])
    ], EmotionRecognitionComponent);
    return EmotionRecognitionComponent;
}(__WEBPACK_IMPORTED_MODULE_2__vision_vision_component__["a" /* VisionComponent */]));



/***/ }),

/***/ "./src/app/demo/face/face-detection/face-detection.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\n    text-align: center;\n}\n.filmstrip-row {\n    margin-top: 20px;\n}\n"

/***/ }),

/***/ "./src/app/demo/face/face-detection/face-detection.component.html":
/***/ (function(module, exports) {

module.exports = "<app-hero-banner [apiTitle]='apiTitle' [apiDescription]='apiDescription'>\n</app-hero-banner>\n<div class=\"container\">\n    <div class=\"col-xs-12\">\n        <div class=\"row\">\n            <h2>Face Detection</h2>\n        </div>\n        <div class=\"row api-description\">\n            Detecting faces in images is the first step to a number of exciting facial recognition and emotion-prediction tasks. For\n            example, enabling a 1-1 in-store experience for loyal customers, powering apps that utilize a mobile camera,\n            or improving log-in security for known customers.\n            <br>\n            <br>The Face Detection API enables you to detect one or more faces in an image, along with selected attributes such\n            as predicted age, gender, and the presence of other facial features. 27 landmark positions are also recorded\n            for each face identified.\n        </div>\n        <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n        <div class=\"row\">\n            <app-face-viewer (faceDetected)=\"onFaceDetected('1', $event)\" (faceError)=\"onError($event)\"></app-face-viewer>\n            <div class=\"col-xs-12 col-sm-6\">\n                <div class=\"demo-codes detection-demo-codes\">\n                    <h1 class=\"text-info display-middle\" *ngIf=\"isLoading\">\n                        <i class=\"glyphicon glyphicon-refresh spinning\"></i>\n                    </h1>\n                    <div *ngIf=\"!isLoading\">\n                        <pre class=\"code\">Number of faces: {{ faces ? faces.length : 0 }}&#10;{{ faces | json }}</pre>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row filmstrip-row\">\n            <div *ngFor=\"let imagePath of imageList\" class=\"col-xs-6 col-sm-4 col-md-3 col-lg-2 filmstrip\">\n                <img [src]=\"imagePath\" (click)=\"selectImage(imagePath)\" [ngClass]=\"imagePath === selectedImagePath ? 'selected' : ''\" />\n            </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <h2>Want to build this?</h2>\n        </div>\n        <div class=\"row row-size2\">\n            <h2>\n                <a class=\"button button-secondary button-primary\" href=\"https://docs.microsoft.com/en-us/azure/cognitive-services/face/quickstarts/javascript#Detect\">\n                    Documentation</a>\n            </h2>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/demo/face/face-detection/face-detection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaceDetectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__face_viewer_face_viewer_component__ = __webpack_require__("./src/app/demo/face/face-viewer/face-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cognitive_services_face_data_service__ = __webpack_require__("./src/app/cognitive-services/face-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cognitive_services_component__ = __webpack_require__("./src/app/demo/cognitive-services.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FaceDetectionComponent = /** @class */ (function (_super) {
    __extends(FaceDetectionComponent, _super);
    function FaceDetectionComponent(titleService, faceDataService) {
        var _this = _super.call(this) || this;
        _this.titleService = titleService;
        _this.faceDataService = faceDataService;
        _this.faces = [];
        _this.apiTitle = 'Facial Recognition API';
        _this.apiDescription = 'Detect human faces and compare similar ones, organize people into groups according to visual similarity, and identify previously tagged people in images.';
        _this.titleService.setTitle('Face Detection');
        return _this;
    }
    FaceDetectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imageList = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].faceImageUrls;
        this.selectImage(this.imageList[0]);
        this.viewerComponent.imageSelected.subscribe(function (e) {
            _this.selectedImagePath = e.imagePath;
        });
    };
    FaceDetectionComponent.prototype.selectImage = function (imagePath) {
        this.errorMessage = '';
        this.viewerComponent.selectStockImage(imagePath);
    };
    FaceDetectionComponent.prototype.onFaceDetected = function (faceViewerId, faces) {
        this.faces = faces;
    };
    FaceDetectionComponent.prototype.onError = function (errorMessage) {
        this.errorMessage = errorMessage;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__face_viewer_face_viewer_component__["a" /* FaceViewerComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__face_viewer_face_viewer_component__["a" /* FaceViewerComponent */])
    ], FaceDetectionComponent.prototype, "viewerComponent", void 0);
    FaceDetectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-face-detection',
            template: __webpack_require__("./src/app/demo/face/face-detection/face-detection.component.html"),
            styles: [__webpack_require__("./src/app/demo/face/face-detection/face-detection.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__cognitive_services_face_data_service__["a" /* FaceDataService */]])
    ], FaceDetectionComponent);
    return FaceDetectionComponent;
}(__WEBPACK_IMPORTED_MODULE_5__cognitive_services_component__["a" /* CognitiveServicesComponent */]));



/***/ }),

/***/ "./src/app/demo/face/face-verification/face-verification.component.css":
/***/ (function(module, exports) {

module.exports = ".component-container {\n    background-color: #fafafa;\n    padding-top:35px;\n    padding-bottom:50px;\n}\nh2 {\n    text-align: center;\n}\n.result-row {\n    margin-top: 20px;\n}\n.result-row img {\n    padding: 0;\n}\n.verification-box {\n    border: 1px solid black;\n    height: 95px;\n    padding: 5px;\n}\n"

/***/ }),

/***/ "./src/app/demo/face/face-verification/face-verification.component.html":
/***/ (function(module, exports) {

module.exports = "<app-hero-banner [apiTitle]='apiTitle' [apiDescription]='apiDescription'>\n</app-hero-banner>\n<div class=\"component-container\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <h2>Face Verification</h2>\n        </div>\n        <div class=\"row api-description\">\n            Check the likelihood that two faces belong to the same person. The API will return a confidence score about how likely it\n            is that the two faces belong to one person.\n        </div>\n        <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n        <div class=\"row\">\n            <app-face-viewer #fvc1 (faceDetecting)=\"onFaceDetecting()\" (faceError)=\"onError($event)\"></app-face-viewer>\n            <app-face-viewer #fvc2 (faceDetecting)=\"onFaceDetecting()\" (faceError)=\"onError($event)\"></app-face-viewer>\n        </div>\n        <div class=\"row result-row\">\n            <div class=\"col-xs-12\">\n                <div class=\"verification-box\">\n                    <span>Verification Result:</span>\n                    <br/>\n                    <span>{{ verificationStatus }}</span>\n                    <br/>\n                    <span>{{ resultStatus }}</span>\n                </div>\n            </div>\n        </div>\n        <div class=\"row result-row\">\n            <div *ngFor=\"let imagePair of imagePairs\" class=\"col-xs-4\">\n                <div class=\"row\" (click)=\"selectImagePair(imagePair)\" class=\"image-pair\" [ngClass]=\"imagePair.image1 === selectedImagePair.image1 && imagePair.image2 === selectedImagePair.image2 ? 'selected' : ''\">\n                    <img [src]=\"imagePair.image1\" class=\"col-xs-6\" />\n                    <img [src]=\"imagePair.image2\" class=\"col-xs-6\" />\n                </div>\n            </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <h2>Want to build this?</h2>\n        </div>\n        <div class=\"row row-size2\">\n            <h2>\n                <a class=\"button button-secondary button-primary\" href=\"https://docs.microsoft.com/en-us/azure/cognitive-services/face/quickstarts/javascript#Identify\">\n                    Documentation</a>\n            </h2>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/demo/face/face-verification/face-verification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaceVerificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__face_viewer_face_viewer_component__ = __webpack_require__("./src/app/demo/face/face-viewer/face-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cognitive_services_face_data_service__ = __webpack_require__("./src/app/cognitive-services/face-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cognitive_services_component__ = __webpack_require__("./src/app/demo/cognitive-services.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FaceVerificationComponent = /** @class */ (function (_super) {
    __extends(FaceVerificationComponent, _super);
    function FaceVerificationComponent(titleService, faceDataService) {
        var _this = _super.call(this) || this;
        _this.titleService = titleService;
        _this.faceDataService = faceDataService;
        _this.apiTitle = 'Facial Recognition API';
        _this.apiDescription = 'Detect human faces and compare similar ones, organize people into groups according to visual similarity, and identify previously tagged people in images.';
        _this.titleService.setTitle('Face Verification');
        return _this;
    }
    FaceVerificationComponent.prototype.onFaceDetecting = function () {
        this.errorMessage = '';
    };
    FaceVerificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imagePairs = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].faceImagePairs;
        this.selectImagePair(this.imagePairs[0]);
        this.viewerComponent1.imageSelected.subscribe(function (e) {
            _this.selectedImagePair = { image1: e.imagePath, image2: _this.selectedImagePair.image2 };
        });
        this.viewerComponent1.faceDetected.subscribe(function (faces) {
            if (_this.validateFace(faces)) {
                _this.faceId1 = faces[0].faceId;
                _this.verifyFaces();
            }
        });
        this.viewerComponent2.imageSelected.subscribe(function (e) {
            _this.selectedImagePair = { image1: _this.selectedImagePair.image1, image2: e.imagePath };
        });
        this.viewerComponent2.faceDetected.subscribe(function (faces) {
            if (_this.validateFace(faces)) {
                _this.faceId2 = faces[0].faceId;
                _this.verifyFaces();
            }
        });
    };
    FaceVerificationComponent.prototype.selectImagePair = function (imagePair) {
        this.selectedImagePair = imagePair;
        this.viewerComponent1.selectStockImage(imagePair.image1);
        this.viewerComponent2.selectStockImage(imagePair.image2);
    };
    FaceVerificationComponent.prototype.validateFace = function (faces) {
        if (faces.length === 0) {
            this.verificationStatus = 'No faces detected. Please choose an image containing one face.';
            return false;
        }
        else if (faces.length > 1) {
            this.verificationStatus = 'More than one face detected. Please choose an image containing only one face.';
            return false;
        }
        return true;
    };
    FaceVerificationComponent.prototype.verifyFaces = function () {
        var _this = this;
        if (this.faceId1 && this.faceId2) {
            this.faceDataService.verify(this.faceId1, this.faceId2).then(function (result) {
                if (result.isIdentical) {
                    _this.verificationStatus = 'The two faces belong to the same person.';
                }
                else {
                    _this.verificationStatus = 'The two faces belong to different people.';
                }
                _this.resultStatus = "Confidence is " + result.confidence;
            })
                .catch(function (error) {
                _this.errorMessage = error;
            });
        }
    };
    FaceVerificationComponent.prototype.onError = function (errorMessage) {
        this.errorMessage = errorMessage;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('fvc1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__face_viewer_face_viewer_component__["a" /* FaceViewerComponent */])
    ], FaceVerificationComponent.prototype, "viewerComponent1", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('fvc2'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__face_viewer_face_viewer_component__["a" /* FaceViewerComponent */])
    ], FaceVerificationComponent.prototype, "viewerComponent2", void 0);
    FaceVerificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-face-verification',
            template: __webpack_require__("./src/app/demo/face/face-verification/face-verification.component.html"),
            styles: [__webpack_require__("./src/app/demo/face/face-verification/face-verification.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__cognitive_services_face_data_service__["a" /* FaceDataService */]])
    ], FaceVerificationComponent);
    return FaceVerificationComponent;
}(__WEBPACK_IMPORTED_MODULE_5__cognitive_services_component__["a" /* CognitiveServicesComponent */]));



/***/ }),

/***/ "./src/app/demo/face/face-viewer/face-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-6\" (window:resize)=\"onResize($event)\">\n    <div class=\"img_container\">\n        <img [src]=\"selectedImageUrl\" alt=\"Selected Image\" class=\"selected-image\" (load)=\"selectedImageLoaded($event)\" />\n        <div *ngFor=\"let faceRectangle of faceRectangles\" [style.top]=\"faceRectangle.percentTop + '%'\" [style.left]=\"faceRectangle.percentLeft +'%'\"\n            [style.width]=\"faceRectangle.percentWidth + '%'\" [style.height]=\"faceRectangle.percentHeight + '%'\" class=\"face-rectangle\">\n        </div>\n        <div *ngFor=\"let faceLandmark of faceLandmarks\" title=\"{{ faceLandmark.name }}\" style.top=\"{{ faceLandmark.style.percentTop }}%\"\n            style.left=\"{{ faceLandmark.style.percentLeft }}%\" class=\"face-landmark\" [ngClass]=\"isFaceLandmarksEnabled ? '' : 'hidden'\"></div>\n    </div>\n    <div class=\"input-group\">\n        <div class=\"input-group-btn\">\n            <button class=\"btn btn-default\" type=\"button\" title=\"Toggle Face Landmarks\" (click)=\"toggleFaceLandmarks()\">\n                <span class=\"glyphicon\" [ngClass]=\"isFaceLandmarksEnabled ? 'glyphicon-eye-open' : 'glyphicon-eye-close'\" aria-hidden=\"true\"></span>\n            </button>\n        </div>\n\n        <input type=\"text\" class=\"form-control\" data-defaultValue=\"Image URL\" [(ngModel)]=\"internetImageUrl\" />\n\n        <div class=\"input-group-btn\">\n            <button class=\"btn btn-default\" type=\"button\" (click)=\"onInternetUrlSelected()\">\n                <span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\"></span>\n            </button>\n            <label class=\"btn btn-default\" type=\"button\">\n                <span class=\"glyphicon glyphicon-folder-open\"></span>\n                <input type=\"file\" (change)=\"onFilesSelected($event)\" accept=\"image/bmp,image/jpeg,image/png,image/gif\"\n                       style=\"font-size: 50px;width: 120px;opacity: 0;filter:alpha(opacity=0);position: relative;top: -40px;left: -20px\" />\n            </label>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/demo/face/face-viewer/face-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaceViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vision_vision_component__ = __webpack_require__("./src/app/demo/vision/vision.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cognitive_services_face_data_service__ = __webpack_require__("./src/app/cognitive-services/face-data.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FaceViewerComponent = /** @class */ (function (_super) {
    __extends(FaceViewerComponent, _super);
    function FaceViewerComponent(sanitizer, faceDataService) {
        var _this = _super.call(this, sanitizer) || this;
        _this.sanitizer = sanitizer;
        _this.faceDataService = faceDataService;
        _this.faceDetecting = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        _this.faceDetected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        _this.faceError = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        _this.isFaceLandmarksEnabled = true;
        _this.faces = [];
        _this.faceLandmarks = [];
        return _this;
    }
    FaceViewerComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        this.onInternetUrlSelected();
    };
    FaceViewerComponent.prototype.clearFaceLandmarks = function () {
        this.faceLandmarks = [];
    };
    FaceViewerComponent.prototype.toggleFaceLandmarks = function () {
        this.isFaceLandmarksEnabled = !this.isFaceLandmarksEnabled;
    };
    FaceViewerComponent.prototype.refreshDetection = function () {
        var _this = this;
        this.clearFaces();
        this.errorMessage = '';
        this.clearFaceLandmarks();
        this.faceDetecting.emit();
        if (!this.selectedImageUrl) {
            this.errorMessage = 'Please provide a valid URL';
        }
        else {
            this.isLoading = true;
            this.faceDataService.detect(this.selectedImageUrl)
                .then(function (faces) {
                _this.faces = faces;
                _this.isLoading = false;
                _this.processFaces();
            })
                .catch(function (error) {
                _this.errorMessage = error;
                _this.isLoading = false;
                _this.faceError.emit(_this.errorMessage);
            });
        }
    };
    FaceViewerComponent.prototype.processFile = function (result) {
        var _this = this;
        this.isLoading = true;
        this.clearFaceLandmarks();
        this.faceDataService.detect(result)
            .then(function (faces) {
            _this.faces = faces;
            _this.isLoading = false;
            _this.processFaces();
        })
            .catch(function (error) {
            _this.errorMessage = error;
            _this.isLoading = false;
            _this.faceError.emit(_this.errorMessage);
        });
    };
    FaceViewerComponent.prototype.onResize = function () {
        this.clearFaces();
        this.clearFaceLandmarks();
        this.processFaces();
    };
    FaceViewerComponent.prototype.processFaces = function () {
        var _this = this;
        if (!this.selectedImage) {
            return;
        }
        if (this.faces) {
            this.faces.forEach(function (face) {
                _this.faceIds.push(face.faceId);
                _this.faceRectangles.push(_this.processFaceRectangle(face.faceRectangle));
                for (var faceLandmark in face.faceLandmarks) {
                    if (face.faceLandmarks.hasOwnProperty(faceLandmark)) {
                        var faceLandmarkStyle = {
                            percentTop: (face.faceLandmarks[faceLandmark].y * _this.imagePosition.scale + _this.selectedImage.offsetTop) /
                                _this.imagePosition.container.clientHeight * 100,
                            percentLeft: (face.faceLandmarks[faceLandmark].x * _this.imagePosition.scale + _this.selectedImage.offsetLeft) /
                                _this.imagePosition.container.clientWidth * 100
                        };
                        _this.faceLandmarks.push({
                            name: faceLandmark,
                            style: faceLandmarkStyle
                        });
                    }
                }
            });
            this.faceDetected.emit(this.faces);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], FaceViewerComponent.prototype, "faceDetecting", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], FaceViewerComponent.prototype, "faceDetected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], FaceViewerComponent.prototype, "faceError", void 0);
    FaceViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-face-viewer',
            template: __webpack_require__("./src/app/demo/face/face-viewer/face-viewer.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_3__cognitive_services_face_data_service__["a" /* FaceDataService */]])
    ], FaceViewerComponent);
    return FaceViewerComponent;
}(__WEBPACK_IMPORTED_MODULE_2__vision_vision_component__["a" /* VisionComponent */]));



/***/ }),

/***/ "./src/app/demo/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-hero-banner [apiTitle]='apiTitle' [apiDescription]='apiDescription'>\n</app-hero-banner>\n<div>\n    <h1>Welcome to the ng-ai starter project!</h1>\n    <br>\n    <h4>For a small, concise example of using Artificial Intelligence (AI) with Angular check out this\n        <a href=\"https://stackblitz.com/edit/ng-ai-hack-demo\">Stackblitz demo</a> (also embedded below).\n    </h4>\n    <h5>\n        Otherwise, click on an item from the navigation bar above to learn more about that service and see a demonstration of its\n        use.\n    </h5>\n    <hr>\n\n    <iframe src=\"https://stackblitz.com/edit/ng-ai-hack-demo?embed=1&file=app/app.component.ts\" width=\"100%\" height=\"1080px\"></iframe>\n\n</div>"

/***/ }),

/***/ "./src/app/demo/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.apiTitle = 'Home';
        this.apiDescription = '';
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/demo/home/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/demo/shared/hero-banner/hero-banner.component.css":
/***/ (function(module, exports) {

module.exports = ".hero-banner__content {\n    margin-top: 71px;\n}\n.hero-banner-container {\n    min-height: 315px;\n    height: 315px;\n}\n"

/***/ }),

/***/ "./src/app/demo/shared/hero-banner/hero-banner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hero-banner-container row\">\n    <div class=\"hero-banner__content-container\">\n        <div class=\"hero-banner__content container col-md-6\">\n            <h1 class=\"text--light text--lg text--white\">\n                Who's that hero?\n                <!-- {{apiTitle}} -->\n            </h1>\n            <p class=\"text--semilight text--sm text--white\">\n                <!-- {{apiDescription}} -->\n                Enter an image URL of a super hero below and we will tell you if the hero is from the DC or Marvel universe, and which hero\n                we think it is...\n            </p>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/shared/hero-banner/hero-banner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroBannerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroBannerComponent = /** @class */ (function () {
    function HeroBannerComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HeroBannerComponent.prototype, "apiTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], HeroBannerComponent.prototype, "apiDescription", void 0);
    HeroBannerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hero-banner',
            template: __webpack_require__("./src/app/demo/shared/hero-banner/hero-banner.component.html"),
            styles: [__webpack_require__("./src/app/demo/shared/hero-banner/hero-banner.component.css")]
        })
    ], HeroBannerComponent);
    return HeroBannerComponent;
}());



/***/ }),

/***/ "./src/app/demo/text/text-analysis/text-analysis.component.css":
/***/ (function(module, exports) {

module.exports = "h2 {\n    text-align: center;\n}\n.input-section {\n    height: 240px;\n}\n.output-section {\n    height: 240px;\n}\n.input-section textarea {\n    height:200px;\n    width:100%;\n}\n.code {\n    background-color: antiquewhite;\n}\n.fa-smile-o, .fa-frown-o {\n    color:darkslategrey;\n}\ntable {\n    background-color:white;\n}\n.result-label {\n    width:50px;\n}\n"

/***/ }),

/***/ "./src/app/demo/text/text-analysis/text-analysis.component.html":
/***/ (function(module, exports) {

module.exports = "<app-hero-banner [apiTitle]='apiTitle' [apiDescription]='apiDescription'>\n</app-hero-banner>\n<div class=\"container\">\n    <div class=\"col-lg-12\">\n        <div class=\"row\">\n            <h2>Sentiment Analysis</h2>\n        </div>\n        <div class=\"row api-description\">\n            Sentiment analysis is a method to understand the mood and connotations associated text, especially with user-generated content.\n            In the marketing context, there are many applications such as understanding user reviews, or understanding user\n            sentiment related to specific products or brands in general.\n            <br>\n            <br>The Sentiment Analysis API will take a string of text as input, and return a numeric score on a scale of 0 to\n            1. The score is calculated based on n-grams, features from part-of-speech tagging, and word embeddings.\n        </div>\n        <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"input-section\">\n                    <textarea [(ngModel)]=\"textToAnalyze\"></textArea>\n                    <button class=\"btn btn-wide btn-info pull-right\" (click)=\"analyzeText()\">Analyze</button>\n                </div>\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"demo-codes detection-demo-codes output-section\">\n                    <h1 class=\"text-info display-middle\" *ngIf=\"isLoading\">\n                        <i class=\"glyphicon glyphicon-refresh spinning\"></i>\n                    </h1>\n                    <div *ngIf=\"!isLoading\">\n                        <div class=\"btn-group btn-group-justified\" role=\"group\">\n                            <div class=\"btn-group\" role=\"group\">\n                                <button class=\"btn btn-info\" [ngClass]=\"{'active': !showJSON }\" (click)=\"toggleJSON(false)\">Results</button>\n                            </div>\n                            <div class=\"btn-group\" role=\"group\">\n                                <button class=\"btn btn-info\" [ngClass]=\"{'active': showJSON }\" (click)=\"toggleJSON(true)\">JSON</button>\n                            </div>\n                        </div>\n                        <pre class=\"code\" [hidden]=\"!showJSON\">Sentiment: \n                            {{ sentiment | json }} \n                            \n                            Language: \n                            {{ languageDetect | json }}\n                            \n                            Key Phrases:\n                            {{ languageKeyPhrases | json }}\n                            </pre>\n\n                        <table class=\"table table-bordered\" [hidden]=\"showJSON\">\n                            <tr>\n                                <td class=\"result-label\">Sentiment:</td>\n                                <td>\n                                    <div class=\"progress\">\n                                        <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" [style.width]=\"score()\">{{score()}}\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"result-label\">Language:</td>\n                                <td>\n                                    {{detectedLanguage}}\n                                </td>\n                            </tr>\n                            <tr>\n                                <td class=\"result-label\">Key Phrases:</td>\n                                <td>\n                                    {{keyPhrases}}\n                                </td>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div>\n            <button class=\"btn btn-wide btn-info\" (click)=\"insertEnglishPositiveText()\">Sample English (Positive)</button>\n            <button class=\"btn btn-wide btn-info\" (click)=\"insertEnglishNegativeText()\">Sample English (Negative)</button>\n            <button class=\"btn btn-wide btn-info\" (click)=\"insertSpanishPositiveText()\">Sample Spanish (Positive)</button>\n            <button class=\"btn btn-wide btn-info\" (click)=\"insertSpanishNegativeText()\">Sample Spanish (Negative)</button>\n        </div>\n        <br>\n        <div class=\"row\">\n            <h2>Want to build this?</h2>\n        </div>\n        <div class=\"row row-size2\">\n            <h2>\n                <a class=\"button button-secondary button-primary\" href=\"https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/overview\">\n                    Documentation</a>\n            </h2>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/demo/text/text-analysis/text-analysis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextAnalysisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cognitive_services_component__ = __webpack_require__("./src/app/demo/cognitive-services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cognitive_services_text_data_service__ = __webpack_require__("./src/app/cognitive-services/text-data.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TextAnalysisComponent = /** @class */ (function (_super) {
    __extends(TextAnalysisComponent, _super);
    function TextAnalysisComponent(titleService, textDataService) {
        var _this = _super.call(this) || this;
        _this.titleService = titleService;
        _this.textDataService = textDataService;
        _this.analysisText = '';
        _this.sampleEnglishPositiveText = 'I had a wonderful experience! The rooms were wonderful and the staff were helpful.';
        _this.sampleEnglishNegativeText = 'I had a terrible time at the hotel. The staff were rude and the food was awful.';
        _this.sampleSpanishPositiveText = 'Los caminos que llevan hasta Monte Rainier son espectaculares y hermosos.';
        _this.sampleSpanishNegativeText = 'La carretera estaba atascada. Había mucho tráfico el día de ayer.';
        _this.textToAnalyze = '';
        _this.detectedLanguageISOName = '';
        _this.detectedLanguage = '';
        _this.showJSON = false;
        _this.apiTitle = 'Text Analytics API';
        _this.apiDescription = 'Detect sentiment, key phrases, topics, and language from your text.';
        _this.titleService.setTitle('Text Analytics');
        return _this;
    }
    TextAnalysisComponent.prototype.ngOnInit = function () {
        this.textToAnalyze = this.sampleEnglishPositiveText;
        this.isLoading = false;
    };
    TextAnalysisComponent.prototype.analyzeText = function () {
        this.refreshDetection();
    };
    TextAnalysisComponent.prototype.insertEnglishPositiveText = function () {
        this.textToAnalyze = this.sampleEnglishPositiveText;
        this.refreshDetection();
    };
    TextAnalysisComponent.prototype.insertEnglishNegativeText = function () {
        this.textToAnalyze = this.sampleEnglishNegativeText;
        this.refreshDetection();
    };
    TextAnalysisComponent.prototype.insertSpanishPositiveText = function () {
        this.textToAnalyze = this.sampleSpanishPositiveText;
        this.refreshDetection();
    };
    TextAnalysisComponent.prototype.insertSpanishNegativeText = function () {
        this.textToAnalyze = this.sampleSpanishNegativeText;
        this.refreshDetection();
    };
    TextAnalysisComponent.prototype.toggleJSON = function (b) {
        this.showJSON = b;
    };
    TextAnalysisComponent.prototype.score = function () {
        return this.sentiment && this.sentiment.documents.length > 0 ?
            (Math.round(this.sentiment.documents[0].score * 100)).toString() + '%' : '';
    };
    TextAnalysisComponent.prototype.refreshDetection = function () {
        var _this = this;
        this.sentiment = null;
        this.isLoading = true;
        this.analysisText = '';
        this.detectedLanguageISOName = '';
        this.detectedLanguage = '';
        if (this.textToAnalyze.trim().length === 0) {
            this.errorMessage = 'Enter text to analyze';
            this.isLoading = false;
            this.analysisText = '';
        }
        else {
            this.textDataService.analyzeSentiment(this.textToAnalyze)
                .then(function (sentiment) {
                _this.sentiment = sentiment;
            })
                .catch(function (error) {
                _this.errorMessage = error;
                _this.isLoading = false;
                return;
            });
            this.textDataService.analyzeLanguage(this.textToAnalyze)
                .then(function (languageDetect) {
                _this.languageDetect = languageDetect;
                if (_this.languageDetect.documents.length > 0) {
                    if (_this.languageDetect.documents[0].detectedLanguages.length > 0) {
                        _this.detectedLanguageISOName = _this.languageDetect.documents[0].detectedLanguages[0].iso6391Name;
                        _this.detectedLanguage = _this.languageDetect.documents[0].detectedLanguages[0].name;
                        _this.textDataService.analyzeKeyPhrases(_this.textToAnalyze, _this.detectedLanguageISOName)
                            .then(function (languageKeyPhrases) {
                            _this.languageKeyPhrases = languageKeyPhrases;
                            _this.keyPhrases = languageKeyPhrases.documents[0].keyPhrases;
                        })
                            .catch(function (error) {
                            _this.errorMessage = error;
                            _this.isLoading = false;
                            return;
                        });
                    }
                }
            })
                .catch(function (error) {
                _this.errorMessage = error;
                _this.isLoading = false;
                return;
            });
            this.isLoading = false;
        }
    };
    TextAnalysisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-text-analysis',
            template: __webpack_require__("./src/app/demo/text/text-analysis/text-analysis.component.html"),
            styles: [__webpack_require__("./src/app/demo/text/text-analysis/text-analysis.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* Title */],
            __WEBPACK_IMPORTED_MODULE_3__cognitive_services_text_data_service__["a" /* TextDataService */]])
    ], TextAnalysisComponent);
    return TextAnalysisComponent;
}(__WEBPACK_IMPORTED_MODULE_2__cognitive_services_component__["a" /* CognitiveServicesComponent */]));



/***/ }),

/***/ "./src/app/demo/vision/vision.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ImageSelectedEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cognitive_services_component__ = __webpack_require__("./src/app/demo/cognitive-services.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageSelectedEvent = /** @class */ (function () {
    function ImageSelectedEvent() {
    }
    return ImageSelectedEvent;
}());

var VisionComponent = /** @class */ (function (_super) {
    __extends(VisionComponent, _super);
    function VisionComponent(sanitizer) {
        var _this = _super.call(this) || this;
        _this.sanitizer = sanitizer;
        _this.imageSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        _this.faceRectangles = [];
        _this.faceIds = [];
        return _this;
    }
    VisionComponent.prototype.clearFaces = function () {
        this.faceRectangles = [];
    };
    VisionComponent.prototype.onInternetUrlSelected = function () {
        this.errorMessage = '';
        this.selectedImageUrl = this.internetImageUrl;
        this.imageSelected.emit({ imagePath: this.internetImageUrl });
        this.refreshDetection();
    };
    VisionComponent.prototype.selectStockImage = function (imagePath) {
        if (!this.isLoading) {
            this.errorMessage = '';
            this.selectedImageUrl = imagePath;
            this.internetImageUrl = imagePath;
            this.imageSelected.emit({ imagePath: this.internetImageUrl });
            this.refreshDetection();
        }
    };
    VisionComponent.prototype.onFilesSelected = function (event) {
        var _this = this;
        this.errorMessage = '';
        var file = event.target.files[0];
        var url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
        this.selectedImageUrl = url;
        this.internetImageUrl = '';
        this.clearFaces();
        var fileReader = new FileReader();
        fileReader.onloadend = function () {
            _this.processFile(fileReader.result);
        };
        fileReader.readAsArrayBuffer(file);
        event.target.value = '';
    };
    VisionComponent.prototype.onFilesClicked = function (event) {
        event.target.value = '';
    };
    VisionComponent.prototype.selectedImageLoaded = function (event) {
        this.selectedImage = event.target;
        this.imagePosition = {
            container: this.selectedImage.parentElement,
            scale: this.selectedImage.width / this.selectedImage.naturalWidth
        };
    };
    VisionComponent.prototype.processFaceRectangle = function (faceRectangle) {
        var top = (faceRectangle.top * this.imagePosition.scale + this.selectedImage.offsetTop) /
            this.imagePosition.container.clientHeight * 100;
        var left = (faceRectangle.left * this.imagePosition.scale + this.selectedImage.offsetLeft) /
            this.imagePosition.container.clientWidth * 100;
        var width = (faceRectangle.width * this.imagePosition.scale) /
            this.imagePosition.container.clientWidth * 100;
        var height = (faceRectangle.height * this.imagePosition.scale) /
            this.imagePosition.container.clientHeight * 100;
        var faceRectangleStyle = {
            percentTop: top,
            percentLeft: left,
            percentWidth: width,
            percentHeight: height
        };
        return faceRectangleStyle;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], VisionComponent.prototype, "imageSelected", void 0);
    return VisionComponent;
}(__WEBPACK_IMPORTED_MODULE_1__cognitive_services_component__["a" /* CognitiveServicesComponent */]));



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// tslint:max-line-length
var environment = {
    production: false,
    apiServer: 'https://southcentralus.api.cognitive.microsoft.com',
    apiKeys: {
        computerVision: '0427ac6c10ef4564b4883f704b708740',
        face: '',
        textAnalytics: ''
    },
    faceImageUrls: [
        'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-1.jpg',
        'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-2.jpg',
        'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-3.jpg',
        'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-4.jpg',
        'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-5.jpg',
        'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-6.jpg'
    ],
    faceImagePairs: [
        {
            image1: 'https://ia.media-imdb.com/images/M/MV5BMjIyMDI4MzY0OV5BMl5BanBnXkFtZTgwMDYyODgxMzE@._V1_SY1000_CR0,0,1480,1000_AL_.jpg',
            image2: 'https://ia.media-imdb.com/images/M/MV5BMTkxNzAwODEzN15BMl5BanBnXkFtZTYwMDIzODM2._V1_.jpg'
        },
        {
            image1: 'https://ia.media-imdb.com/images/M/MV5BYzcxZDliNzgtYjQ0NS00MDI0LTkzMDctMjUwMDhhODg4YTFiXkEyXkFqcGdeQXVyMjE5MzM3MjA@._V1_.jpg',
            image2: 'https://ia.media-imdb.com/images/M/MV5BMjA5ODgwNzA1NV5BMl5BanBnXkFtZTcwNDA0MzYyNw@@._V1_.jpg'
        },
        {
            image1: 'https://ia.media-imdb.com/images/M/MV5BMjA1NDM0MDc3NF5BMl5BanBnXkFtZTYwOTA4MDU2._V1_.jpg',
            image2: 'https://ia.media-imdb.com/images/M/MV5BMTI4ODEzNzkzM15BMl5BanBnXkFtZTYwMjczMTQ2._V1_.jpg'
        }
    ],
    emotionImageUrls: [
        'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-1.jpg',
        'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-2.jpg',
        'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-3.jpg',
        'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-4.jpg',
        'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-5.jpg',
        'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-6.jpg'
    ],
    textImageUrls: [
        'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-1.jpg',
        'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-2.jpg',
        'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-3.jpg',
        'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-4.jpg',
        'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-5.jpg',
        'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-6.jpg'
    ],
    objectImageUrls: [
        'http://d1466nnw0ex81e.cloudfront.net/n_iv/600/3180776.jpg',
        'http://vignette.wikia.nocookie.net/spiderman/images/e/ea/Spidey_1.png/revision/latest?cb=20140816173914',
        'http://www.writeups.org/wp-content/uploads/Superman-Robot-DC-Comics.jpg',
        'http://img.wennermedia.com/social/rs-239344-chris-evans.jpg',
        'https://www.wikihow.com/images/8/84/Draw-Wonder-Woman-Step-18.jpg',
        'https://vignette.wikia.nocookie.net/ironman/images/5/59/Robert-Downey-Jr-Tony-Stark-Iron-Man-3-Marvel-Disney.jpg/revision/latest?cb=20130611164804',
        'https://i.ytimg.com/vi/4KtJ9pQVLSU/maxresdefault.jpg',
        'https://vignette.wikia.nocookie.net/deathbattlefanon/images/2/20/C0A9B238-91F6-46AA-ABDC-3FC720228C25.png/revision/latest?cb=20171104014554',
        'http://livekindlyproduction-8u6efaq1lwo6x9a.stackpathdns.com/wp-content/uploads/2017/11/deadpool-2.jpg',
    ]
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map