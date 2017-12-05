webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin-orders/admin-orders.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-orders/admin-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Orders Manegement</h1>\n\n<ng-container class=\"row col-10\" *ngIf=\" orders$ | async as orders\">\n  <table  class=\"table\">\n    <thead>\n        <tr>\n            \n           <th >Customer</th>\n          \n           <th class=\"text-center\">Date</th>\n           <th class=\"text-center\">Detail</th>\n         </tr>\n    </thead>\n    <tbody >\n        <tr *ngFor=\"let item of orders \">\n           <td > {{item.shipping.name}}</td>\n           <td class=\"text-center\"> {{item.datePlaced |date:'fullDate'}}</td>\n           <td class=\"text-center\"><button class=\"btn btn-primary\" [routerLink]=\"['/detail',item.$key]\">View</button></td>\n          </tr>\n    </tbody>\n  </table>\n  </ng-container>"

/***/ }),

/***/ "../../../../../src/app/admin/admin-orders/admin-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_order_service__ = __webpack_require__("../../../../../src/app/service/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminOrdersComponent = (function () {
    function AdminOrdersComponent(orderService) {
        this.orderService = orderService;
        this.orders$ = this.orderService.getOrders();
    }
    AdminOrdersComponent.prototype.ngOnInit = function () {
    };
    AdminOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-orders',
            template: __webpack_require__("../../../../../src/app/admin/admin-orders/admin-orders.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-orders/admin-orders.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_order_service__["a" /* OrderService */]])
    ], AdminOrdersComponent);
    return AdminOrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-products/admin-products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-products/admin-products.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    <a routerLink=\"/admin/products/new/\" class=\"btn btn-primary\">New Product</a>\n</p>\n\n\n<p>\n    <input #query (keyup)=\"filter(query.value)\" type=\"text\" class=\"form-control\" placeholder=\"Search...\">\n</p>\n<!-- \n<data-table [items]=\"items\" [itemCount]=\"itemCount\" (reload)=\"reloadItem($event)\">\n    <data-table-column [property]=\"'title'\" [header]=\"'Title'\" [sorttable]=\"true\" [resizeable]=\"true\">\n    </data-table-column>\n        <data-table-column [property]=\"'price'\" [header]=\"'Price'\" [sorttable]=\"true\" [resizeable]=\"true\">\n            <ng-template #dataTableCell let-item=\"item\">\n                {{product.price|currency:'USD' true}}\n            </ng-template>\n        </data-table-column>\n   \n    <data-table-column [property]=\"'$key'\">\n        <ng-template #dataTableCell let-item=\"product\">\n            <a [routerLink]=\"['/admin/products/',item.$key]\">edit</a>\n        </ng-template>\n    </data-table-column>\n</data-table> -->\n<table class=\"table\">\n    <thead>\n        <tr>\n            <th>Title</th>\n            <th>Price</th>\n            <th></th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let p of filterProduct\">\n            <td>{{p.title}}</td>\n            <td>{{p.price}}</td>\n            <td ><a [routerLink]=\"['/admin/products/',p.$key]\">edit</a></td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/admin/admin-products/admin-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_product_service__ = __webpack_require__("../../../../../src/app/service/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { DataTableResource } from 'angular-4-data-table';
var AdminProductsComponent = (function () {
    // items:any[];
    // itemCount:number;
    function AdminProductsComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.subscription = this.productService.getAll().subscribe(function (p) {
            _this.filterProduct = _this.products = p;
            _this.initializeTable(_this.products);
        });
    }
    AdminProductsComponent.prototype.reloadItem = function (params) {
        // if(!this.tableResource)return;
        // this.tableResource.query(params).then(items=>this.items=items);
    };
    AdminProductsComponent.prototype.initializeTable = function (products) {
        // this.tableResource=new DataTableResource(this.products);
        // this.tableResource.query({offset:0}).then(items=>this.items=items);
        // this.tableResource.count().then(count=>this.itemCount=count);
    };
    AdminProductsComponent.prototype.filter = function (query) {
        this.filterProduct = (query) ?
            this.products.filter(function (p) { return p.title.toLowerCase().includes(query.toLowerCase()); }) : this.products;
    };
    AdminProductsComponent.prototype.ngOnInit = function () {
    };
    AdminProductsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AdminProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-products',
            template: __webpack_require__("../../../../../src/app/admin/admin-products/admin-products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-products/admin-products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_product_service__["a" /* ProductService */]])
    ], AdminProductsComponent);
    return AdminProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/product-form/product-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/product-form/product-form.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-6\">\n      <form #f=\"ngForm\" (ngSubmit)=\"save(f.value)\">\n          <div class=\"form-group\">\n            <label for=\"title\">Title</label>\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\" id=\"basic-addon1\">@</span>\n              <input #title=\"ngModel\" [(ngModel)]=\"product.title\" type=\"text\" id=\"title\" name=\"title\"  class=\"form-control\" required>\n            </div>\n         \n            <div class=\"alert alert-danger\" *ngIf=\"title.touched && title.invalid\" > Title is required. </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"price\">Price</label>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\" id=\"basic-addon1\">$</span>\n                <input type=\"number\" id=\"price\" name=\"price\" #price=\"ngModel\" [(ngModel)]=\"product.price\" required  class=\"form-control\" [min]=\"0\">\n              </div>\n         \n              <div class=\"alert alert-danger\" *ngIf=\"price.touched && price.invalid\" > \n                <div *ngIf=\"price.errors.required\">Price is required. </div>\n                <div *ngIf=\"price.errors.min\">Price should be 0 or higher. </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"category\">Category</label>\n                <select type=\"text\" id=\"category\" name=\"category\" #category=\"ngModel\" [(ngModel)]=\"product.category\" required class=\"form-control\">\n                  <option value=\"\"></option>\n                  <option *ngFor=\"let c of category$|async\" [value]=\"c.$key\">{{c.name}}</option>\n                </select>\n                <div class=\"alert alert-danger\" *ngIf=\"category.touched && category.invalid\" > Image Url is required. </div>\n                \n              </div>\n              <div class=\"form-group\">\n                  <label for=\"ImageUrl\">Image Url</label>\n                  <input type=\"text\" id=\"ImageUrl\" name=\"ImageUrl\" #ImageUrl=\"ngModel\" [(ngModel)]=\"product.ImageUrl\" required url class=\"form-control\" >\n                  <div class=\"alert alert-danger\" *ngIf=\"ImageUrl.touched && ImageUrl.invalid\" > \n                    <div *ngIf=\"ImageUrl.errors.required\" >Image Url is required.</div> \n                    <div *ngIf=\"ImageUrl.errors.url\" >Please enter a valid Url.</div> \n                  </div>\n                  \n                </div>\n            \n              <button class=\"btn btn-primary\">save</button>\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"delete()\">delete</button>\n        </form>\n  </div>\n  <div class=\"col-md-6\">\n      <app-product-card [product]=\"product\" [show-actions]=\"false\"></app-product-card>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/admin/product-form/product-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_category_service__ = __webpack_require__("../../../../../src/app/service/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_product_service__ = __webpack_require__("../../../../../src/app/service/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductFormComponent = (function () {
    function ProductFormComponent(route, router, categoryService, productService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.categoryService = categoryService;
        this.productService = productService;
        this.product = {};
        this.category$ = categoryService.getCategory();
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id)
            this.productService.getProduct(this.id).take(1).subscribe(function (p) { return _this.product = p; });
    }
    ProductFormComponent.prototype.save = function (product) {
        if (this.id)
            this.productService.updateProduct(this.id, product);
        else
            this.productService.create(product);
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent.prototype.delete = function () {
        if (!confirm("Are you sure you want to  delete this product  ?")) {
            return;
        }
        this.productService.deleteProduct(this.id);
        this.router.navigate(['/admin/products']);
    };
    ProductFormComponent.prototype.ngOnInit = function () {
    };
    ProductFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-form',
            template: __webpack_require__("../../../../../src/app/admin/product-form/product-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/product-form/product-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__service_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_3__service_product_service__["a" /* ProductService */]])
    ], ProductFormComponent);
    return ProductFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n  \n      \n  \n    <bs-navbar></bs-navbar>\n      <main role=\"main\" class=\"container\">\n  \n        <router-outlet></router-outlet>\n  \n      </main><!-- /.container -->\n  \n  \n  \n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
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
    function AppComponent(userService, afAuth, router) {
        this.userService = userService;
        this.afAuth = afAuth;
        this.router = router;
        afAuth.user$.subscribe(function (user) {
            if (user) {
                userService.save(user);
                var returnUrl = localStorage.getItem('returnUrl');
                router.navigateByUrl(returnUrl);
            }
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bs_navbar_bs_navbar_component__ = __webpack_require__("../../../../../src/app/bs-navbar/bs-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shopping_card_shopping_card_component__ = __webpack_require__("../../../../../src/app/shopping-card/shopping-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__check_out_check_out_component__ = __webpack_require__("../../../../../src/app/check-out/check-out.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__order_success_order_success_component__ = __webpack_require__("../../../../../src/app/order-success/order-success.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_admin_products_admin_products_component__ = __webpack_require__("../../../../../src/app/admin/admin-products/admin-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_admin_orders_admin_orders_component__ = __webpack_require__("../../../../../src/app/admin/admin-orders/admin-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__my_order_my_order_component__ = __webpack_require__("../../../../../src/app/my-order/my-order.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__service_auth_gaurd_service__ = __webpack_require__("../../../../../src/app/service/auth-gaurd.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__service_admin_auth_guard_service__ = __webpack_require__("../../../../../src/app/service/admin-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__admin_product_form_product_form_component__ = __webpack_require__("../../../../../src/app/admin/product-form/product-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__service_category_service__ = __webpack_require__("../../../../../src/app/service/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__service_product_service__ = __webpack_require__("../../../../../src/app/service/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__products_product_filter_product_filter_component__ = __webpack_require__("../../../../../src/app/products/product-filter/product-filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__product_card_product_card_component__ = __webpack_require__("../../../../../src/app/product-card/product-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__service_shopping_cart_service__ = __webpack_require__("../../../../../src/app/service/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__product_quatity_product_quatity_component__ = __webpack_require__("../../../../../src/app/product-quatity/product-quatity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__service_order_service__ = __webpack_require__("../../../../../src/app/service/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__cart_summary_cart_summary_component__ = __webpack_require__("../../../../../src/app/cart-summary/cart-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__shipping_form_shipping_form_component__ = __webpack_require__("../../../../../src/app/shipping-form/shipping-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__detail_order_detail_order_component__ = __webpack_require__("../../../../../src/app/detail-order/detail-order.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































// import { DataTableModule } from 'angular-4-data-table';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__bs_navbar_bs_navbar_component__["a" /* BsNavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_10__shopping_card_shopping_card_component__["a" /* ShoppingCardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__check_out_check_out_component__["a" /* CheckOutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__order_success_order_success_component__["a" /* OrderSuccessComponent */],
                __WEBPACK_IMPORTED_MODULE_14__admin_admin_products_admin_products_component__["a" /* AdminProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__admin_admin_orders_admin_orders_component__["a" /* AdminOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_18__my_order_my_order_component__["a" /* MyOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_23__admin_product_form_product_form_component__["a" /* ProductFormComponent */],
                __WEBPACK_IMPORTED_MODULE_28__products_product_filter_product_filter_component__["a" /* ProductFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_29__product_card_product_card_component__["a" /* ProductCardComponent */],
                __WEBPACK_IMPORTED_MODULE_31__product_quatity_product_quatity_component__["a" /* ProductQuatityComponent */],
                __WEBPACK_IMPORTED_MODULE_33__cart_summary_cart_summary_component__["a" /* CartSummaryComponent */],
                __WEBPACK_IMPORTED_MODULE_34__shipping_form_shipping_form_component__["a" /* ShippingFormComponent */],
                __WEBPACK_IMPORTED_MODULE_35__detail_order_detail_order_component__["a" /* DetailOrderComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_26_ng2_validation__["CustomFormsModule"],
                // DataTableModule,
                __WEBPACK_IMPORTED_MODULE_17__angular_router__["c" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
                    { path: 'shopping-cart', component: __WEBPACK_IMPORTED_MODULE_10__shopping_card_shopping_card_component__["a" /* ShoppingCardComponent */] },
                    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_35__detail_order_detail_order_component__["a" /* DetailOrderComponent */] },
                    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_9__product_product_component__["a" /* ProductComponent */] },
                    { path: 'check-out', component: __WEBPACK_IMPORTED_MODULE_11__check_out_check_out_component__["a" /* CheckOutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__service_auth_gaurd_service__["a" /* AuthGaurdService */]] },
                    { path: 'order-success/:id', component: __WEBPACK_IMPORTED_MODULE_12__order_success_order_success_component__["a" /* OrderSuccessComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__service_auth_gaurd_service__["a" /* AuthGaurdService */]] },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */] },
                    { path: 'admin/admin-orders', component: __WEBPACK_IMPORTED_MODULE_15__admin_admin_orders_admin_orders_component__["a" /* AdminOrdersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__service_auth_gaurd_service__["a" /* AuthGaurdService */], __WEBPACK_IMPORTED_MODULE_22__service_admin_auth_guard_service__["a" /* AdminAuthGuardService */]] },
                    { path: 'admin/products', component: __WEBPACK_IMPORTED_MODULE_14__admin_admin_products_admin_products_component__["a" /* AdminProductsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__service_auth_gaurd_service__["a" /* AuthGaurdService */], __WEBPACK_IMPORTED_MODULE_22__service_admin_auth_guard_service__["a" /* AdminAuthGuardService */]] },
                    { path: 'my-order', component: __WEBPACK_IMPORTED_MODULE_18__my_order_my_order_component__["a" /* MyOrderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__service_auth_gaurd_service__["a" /* AuthGaurdService */]] },
                    { path: 'admin/products/new', component: __WEBPACK_IMPORTED_MODULE_23__admin_product_form_product_form_component__["a" /* ProductFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__service_auth_gaurd_service__["a" /* AuthGaurdService */]] },
                    { path: 'admin/products/:id', component: __WEBPACK_IMPORTED_MODULE_23__admin_product_form_product_form_component__["a" /* ProductFormComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__service_auth_gaurd_service__["a" /* AuthGaurdService */]] },
                ]),
                __WEBPACK_IMPORTED_MODULE_13__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_19__service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_20__service_auth_gaurd_service__["a" /* AuthGaurdService */],
                __WEBPACK_IMPORTED_MODULE_21__service_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_22__service_admin_auth_guard_service__["a" /* AdminAuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_24__service_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_27__service_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_30__service_shopping_cart_service__["a" /* ShoppingCartService */],
                __WEBPACK_IMPORTED_MODULE_32__service_order_service__["a" /* OrderService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/bs-navbar/bs-navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".scale{\r\n    width:50px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bs-navbar/bs-navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<nav class=\"navbar navbar-expand-md navbar-light bg-light fixed-top \">\n \n\n  <a routerLink=\"/\" ><img class=\"navbar-brand scale\" src=\"assets\\content\\logo.jpg\" alt=\"logo ap cua toi\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/\" >Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" \n        routerLink=\"/shopping-cart\">\n        Shopping cart\n        <span *ngIf=\"cart$ |async as cart\" class=\"badge badge-warning badge-fill\"> {{cart.totalItemCount}} </span>\n      </a>\n      </li>\n    \n      \n    </ul>\n</div>\n\n    <ng-template #anonymousUser>\n        <a  class=\"nav-link \" routerLink=\"/login\">Login</a>\n    </ng-template>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n  \n      <div *ngIf=\"userApp  ; else anonymousUser\" ngbDropdown class=\"nav-item dropdown show\">\n          <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">{{ userApp.name}} </a>\n          <div ngbDropdownMenu class=\"dropdown-menu show\" aria-labelledby=\"dropdown01\">\n              <a class=\"dropdown-item\" routerLink=\"my-order\" >My orders</a>\n\n              <ng-container *ngIf=\"userApp.isAdmin\">\n            <a class=\"dropdown-item\" routerLink=\"admin/admin-orders\">Manage orders</a>\n            <a class=\"dropdown-item\" routerLink=\"admin/products\">Manage products</a>\n          </ng-container>\n            <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\n          </div>\n        </div>\n    </form>\n \n\n</nav>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/bs-navbar/bs-navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsNavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_shopping_cart_service__ = __webpack_require__("../../../../../src/app/service/shopping-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var BsNavbarComponent = (function () {
    function BsNavbarComponent(afAuth, shoppingCartService) {
        // this.afAuth.authState.subscribe(x =>
        this.afAuth = afAuth;
        this.shoppingCartService = shoppingCartService;
        //   this.user = x
        // );
    }
    BsNavbarComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.afAuth.appUser$.subscribe(function (x) { return _this.userApp = x; });
                        this.user$ = this.afAuth.user$;
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    BsNavbarComponent.prototype.logout = function () {
        // console.log(this.afAuth.auth.currentUser);
        this.afAuth.logout();
    };
    BsNavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bs-navbar',
            template: __webpack_require__("../../../../../src/app/bs-navbar/bs-navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/bs-navbar/bs-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__service_shopping_cart_service__["a" /* ShoppingCartService */]])
    ], BsNavbarComponent);
    return BsNavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cart-summary/cart-summary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center-img{\r\n    width:100px;height:100px; display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.a{\r\n    margin-top: -20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cart-summary/cart-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card a\" >\n    <img class=\"card-img-top center-img\"  src=\"assets\\content\\logo.jpg\"  alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Orders Summary</h4>\n      <p class=\"card-text\"> You have {{cart.totalItemCount}} items in your shop cart .</p>\n      <ul class=\"list-group\">\n        <li *ngFor=\"let item of cart.items\" class=\"list-group-item\">\n          {{item.quantity}} x {{item.title}}\n          <div class=\"float-right\">\n            {{item.totalPrice|currency:'USD':true}}\n          </div>\n        </li>\n        <li class=\"list-group-item\">\n          <b>Total </b>\n          <b class=\"float-right\">  {{cart.totalPrice|currency:'USD':true}}</b>\n        </li>\n      </ul>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/cart-summary/cart-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_shopping_cart__ = __webpack_require__("../../../../../src/app/models/shopping-cart.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartSummaryComponent = (function () {
    function CartSummaryComponent() {
    }
    CartSummaryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('cart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_shopping_cart__["a" /* ShoppingCart */])
    ], CartSummaryComponent.prototype, "cart", void 0);
    CartSummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'cart-summary',
            template: __webpack_require__("../../../../../src/app/cart-summary/cart-summary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cart-summary/cart-summary.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartSummaryComponent);
    return CartSummaryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/check-out/check-out.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/check-out/check-out.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Shipping</h1>\n<div class=\"row\" *ngIf=\"cart$|async as cart\">\n    <div class=\"col-md-6\">\n   <shipping-form [cart]=\"cart\"></shipping-form>\n        </div>\n    <div class=\"col-md-6\">\n    <cart-summary [cart]=\"cart\"></cart-summary>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/check-out/check-out.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckOutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_shopping_cart_service__ = __webpack_require__("../../../../../src/app/service/shopping-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var CheckOutComponent = (function () {
    function CheckOutComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    CheckOutComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CheckOutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-check-out',
            template: __webpack_require__("../../../../../src/app/check-out/check-out.component.html"),
            styles: [__webpack_require__("../../../../../src/app/check-out/check-out.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_shopping_cart_service__["a" /* ShoppingCartService */]])
    ], CheckOutComponent);
    return CheckOutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/detail-order/detail-order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imagecircle{\r\n  \r\n        border-radius: 50%;\r\n        width: 100px;\r\n        height: 100px;\r\n       \r\n    \r\n}\r\n\r\n.center-vehical{\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/detail-order/detail-order.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Order</h1>\n<div *ngIf=\"order$|async as order\">\n\n    <h4>Thông tin khách hàng : {{order.shipping.name}}</h4>\n    <p>Địa chỉ giao hàng : {{order.shipping.address}}</p>\n\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th>Product</th>\n                <th class=\"text-center\">Quantity</th>\n                <th class=\"text-center\">Price</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let item of order.items\" >\n                <td >\n                    <img class=\"imagecircle\" [src]=\"item.product.imageUrl\">\n                </td>\n                <td class=\"text-center center-vehical\">\n                    {{item.quantity}}\n                </td>\n                <td class=\"text-center center-vehical\">\n                    {{item.totalPrice |currency:'USD':true}}\n                </td>\n            </tr>\n        </tbody>\n    </table>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/detail-order/detail-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_order_service__ = __webpack_require__("../../../../../src/app/service/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var DetailOrderComponent = (function () {
    function DetailOrderComponent(route, orderService) {
        this.route = route;
        this.orderService = orderService;
        // console.log(this.order);
    }
    DetailOrderComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.id = this.route.snapshot.paramMap.get('id');
                // this.subscription= ( await this.orderService.getOrderByID(this.id)).subscribe(p=>this.order=p);
                this.order$ = this.orderService.getOrderByID(this.id);
                return [2 /*return*/];
            });
        });
    };
    DetailOrderComponent.prototype.ngOnDestroy = function () {
        // this.subscription.unsubscribe();
    };
    DetailOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detail-order',
            template: __webpack_require__("../../../../../src/app/detail-order/detail-order.component.html"),
            styles: [__webpack_require__("../../../../../src/app/detail-order/detail-order.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__service_order_service__["a" /* OrderService */]])
    ], DetailOrderComponent);
    return DetailOrderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-product></app-product>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: ' home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".center-img{\r\n    width:100px;height:100px; display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.a{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width:400px;\r\n    height:400px;\r\n}\r\n\r\n\r\n\r\n.button{\r\n    margin-top: 30px; \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"card a\" >\r\n        <img class=\"card-img-top center-img\"  src=\"assets\\content\\logo.jpg\"  alt=\"Card image cap\">\r\n        <div class=\"card-body\">\r\n                <div class=\"form-group\">\r\n                        <label for=\"Username\">Username</label>\r\n                        <div class=\"input-group\">\r\n                          <span class=\"input-group-addon\" id=\"basic-addon1\">@</span>\r\n                          <input #Username=\"ngModel\" [(ngModel)]=\"Username1\" type=\"text\" id=\"Username\" name=\"Username\"  class=\"form-control\" required>\r\n                        </div>\r\n                     \r\n                        <div class=\"alert alert-danger\" *ngIf=\"Username.touched && Username.invalid\" > Username is required. </div>\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                            <label for=\"Password\">Password</label>\r\n                            <div class=\"input-group\">\r\n                              <span class=\"input-group-addon\" id=\"basic-addon1\">*</span>\r\n                              <input #Password=\"ngModel\" [(ngModel)]=\"Password1\" type=\"password\" id=\"Password\" name=\"Password\"  class=\"form-control\" required>\r\n                            </div>\r\n                         \r\n                            <div class=\"alert alert-danger\" *ngIf=\"Password.touched && Password.invalid\" > Password is required. </div>\r\n                          </div>\r\n                          <button class=\"btn btn-primary float-left button\" (click)=\"loginWithAccount()\">Login With Account</button>\r\n                          \r\n                          <button class=\"btn btn-primary button float-right\" (click)=\"login()\">Login With Google</button>\r\n        </div>\r\n      \r\n      </div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(afAuth) {
        this.afAuth = afAuth;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.afAuth.login();
    };
    LoginComponent.prototype.loginWithAccount = function () {
        alert("Login bằng goggle đi cho lẹ .. rảnh vl .cái này làm cho đep thôi .");
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/orders.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Order; });
var Order = (function () {
    function Order(userID, shipping, shoppingCart) {
        this.userID = userID;
        this.shipping = shipping;
        this.datePlaced = new Date().getTime();
        this.items = shoppingCart.items.map(function (i) {
            return {
                product: {
                    title: i.title,
                    price: i.price,
                    imageUrl: i.imageUrl
                },
                quantity: i.quantity,
                totalPrice: i.totalPrice,
            };
        });
    }
    return Order;
}());



/***/ }),

/***/ "../../../../../src/app/models/shopping-cart-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartItems; });
var ShoppingCartItems = (function () {
    function ShoppingCartItems(init) {
        Object.assign(this, init);
    }
    Object.defineProperty(ShoppingCartItems.prototype, "totalPrice", {
        get: function () {
            return this.price * this.quantity;
        },
        enumerable: true,
        configurable: true
    });
    return ShoppingCartItems;
}());



/***/ }),

/***/ "../../../../../src/app/models/shopping-cart.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shopping_cart_items__ = __webpack_require__("../../../../../src/app/models/shopping-cart-items.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var ShoppingCart = (function () {
    function ShoppingCart(itemMap) {
        this.itemMap = itemMap;
        this.items = [];
        this.itemMap = itemMap || {};
        for (var productID in itemMap) {
            var item = itemMap[productID];
            // let x: ShoppingCartItems = new ShoppingCartItems();
            // Object.assign(x, item);            
            // x.$key = productID;
            this.items.push(new __WEBPACK_IMPORTED_MODULE_0__shopping_cart_items__["a" /* ShoppingCartItems */](__assign({}, item, { $key: productID })));
        }
    }
    Object.defineProperty(ShoppingCart.prototype, "ProductIDs", {
        get: function () {
            return Object.keys(this.itemMap);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShoppingCart.prototype, "totalItemCount", {
        get: function () {
            var count = 0;
            for (var productID in this.itemMap) {
                count += this.itemMap[productID].quantity;
            }
            return count;
        },
        enumerable: true,
        configurable: true
    });
    ShoppingCart.prototype.getQuantity = function (product) {
        var item = this.itemMap[product.$key];
        return item ? item.quantity : 0;
    };
    Object.defineProperty(ShoppingCart.prototype, "totalPrice", {
        get: function () {
            var sum = 0;
            for (var productID in this.items) {
                sum += this.items[productID].totalPrice;
            }
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    return ShoppingCart;
}());



/***/ }),

/***/ "../../../../../src/app/my-order/my-order.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/my-order/my-order.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Orders</h1>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Customer</th>\n      <th>Date</th>\n      <th></th>\n    </tr>\n  </thead> \n  <tbody>\n    <tr *ngFor=\"let order of orders$ | async\">\n      <td>{{ order.shipping.name }}</td>\n      <td>{{ order.datePlaced | date}}</td>\n      <td>\n        <a href=\"#\">View</a>\n      </td>\n    </tr>\n  </tbody> \n</table>"

/***/ }),

/***/ "../../../../../src/app/my-order/my-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_order_service__ = __webpack_require__("../../../../../src/app/service/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyOrderComponent = (function () {
    function MyOrderComponent(orderService, authService) {
        this.orderService = orderService;
        this.authService = authService;
    }
    MyOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.orders$ = this.authService.user$.switchMap(function (user) { return _this.orderService.getOrderByUser(user.uid); });
    };
    MyOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-order',
            template: __webpack_require__("../../../../../src/app/my-order/my-order.component.html"),
            styles: [__webpack_require__("../../../../../src/app/my-order/my-order.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */]])
    ], MyOrderComponent);
    return MyOrderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/order-success/order-success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/order-success/order-success.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  order-success works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/order-success/order-success.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSuccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderSuccessComponent = (function () {
    function OrderSuccessComponent() {
    }
    OrderSuccessComponent.prototype.ngOnInit = function () {
    };
    OrderSuccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-success',
            template: __webpack_require__("../../../../../src/app/order-success/order-success.component.html"),
            styles: [__webpack_require__("../../../../../src/app/order-success/order-success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OrderSuccessComponent);
    return OrderSuccessComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-card/product-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-footer{\r\n    padding:0px;\r\n   margin-left: -15px;\r\n   margin-right: -15px;\r\n}\r\n\r\n.card{\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.card-footer button{\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-card/product-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product.title\"\nclass=\"card\"  >\n  <img *ngIf=\"product.imageUrl\" class=\"card-img-top\" [src]=\"product.imageUrl\" alt=\"{{product.title}}\">\n  <div class=\"card-body\">\n    <h4 class=\"card-title\">{{product.title}}</h4>\n    <p class=\"card-text\">{{product.price|currency : 'USD':true}}</p>\n    <div *ngIf=\"showActions && shoppingCart\" class=\"card-footer\">\n    <button \n     *ngIf=\"shoppingCart.getQuantity(product)===0 ;else  updateQuantity\"\n      class=\"btn btn-primary btn-block\"\n      (click)=\"addToCart()\">Add to Cart</button>\n      <ng-template #updateQuantity>\n          <!-- no-gutters de remove margin -->\n<product-quatity [product]=\"product\" [shoping-cart]=\"shoppingCart\" ></product-quatity>\n      </ng-template>\n      \n  </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/product-card/product-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_shopping_cart_service__ = __webpack_require__("../../../../../src/app/service/shopping-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_shopping_cart__ = __webpack_require__("../../../../../src/app/models/shopping-cart.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductCardComponent = (function () {
    function ProductCardComponent(shoppingcartService) {
        this.shoppingcartService = shoppingcartService;
        this.showActions = true;
    }
    ProductCardComponent.prototype.addToCart = function () {
        this.shoppingcartService.addToCart(this.product);
    };
    ProductCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('product'),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('shoping-cart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_shopping_cart__["a" /* ShoppingCart */])
    ], ProductCardComponent.prototype, "shoppingCart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('show-actions'),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "showActions", void 0);
    ProductCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-card',
            template: __webpack_require__("../../../../../src/app/product-card/product-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-card/product-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_shopping_cart_service__["a" /* ShoppingCartService */]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-quatity/product-quatity.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-quatity/product-quatity.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"row no-gutters\">\n  <div class=\"col-2\">\n    <button (click)=\"removeFromCart()\" class=\"btn btn-secondary btn-block\">-</button>\n  </div>\n  <div class=\"col text-center\">\n    {{shoppingCart.getQuantity(product)}} in cart \n  </div>\n  <div class=\"col-2\">\n    <button (click)=\"addToCart()\" class=\"btn btn-secondary btn-block\">+</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/product-quatity/product-quatity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductQuatityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_shopping_cart_service__ = __webpack_require__("../../../../../src/app/service/shopping-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductQuatityComponent = (function () {
    function ProductQuatityComponent(shoppingcartService) {
        this.shoppingcartService = shoppingcartService;
    }
    ProductQuatityComponent.prototype.addToCart = function () {
        this.shoppingcartService.addToCart(this.product);
    };
    ProductQuatityComponent.prototype.removeFromCart = function () {
        this.shoppingcartService.removeFromCart(this.product);
    };
    ProductQuatityComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('product'),
        __metadata("design:type", Object)
    ], ProductQuatityComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('shoping-cart'),
        __metadata("design:type", Object)
    ], ProductQuatityComponent.prototype, "shoppingCart", void 0);
    ProductQuatityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product-quatity',
            template: __webpack_require__("../../../../../src/app/product-quatity/product-quatity.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-quatity/product-quatity.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_shopping_cart_service__["a" /* ShoppingCartService */]])
    ], ProductQuatityComponent);
    return ProductQuatityComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-3\">\n    <app-product-filter [category]=\"category\"></app-product-filter>\n  </div>\n  <div class=\"col\">\n    <div class=\"row\" >\n      <ng-container *ngFor=\"let p of filterProducts ; let i=index\">\n        <div class=\"col-6\">\n        <app-product-card [product]=\"p\" [shoping-cart]=\"cart\"></app-product-card>\n        </div>\n        <div *ngIf=\"(i+1)%2===0\" class=\"w-100\"></div>\n      </ng-container>\n     \n      \n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_product_service__ = __webpack_require__("../../../../../src/app/service/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_shopping_cart_service__ = __webpack_require__("../../../../../src/app/service/shopping-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ProductComponent = (function () {
    function ProductComponent(route, propductService, shoppingCartService) {
        var _this = this;
        this.route = route;
        this.propductService = propductService;
        this.shoppingCartService = shoppingCartService;
        this.products = [];
        this.filterProducts = [];
        this.propductService.getAll().switchMap(function (p) {
            _this.products = p;
            return _this.route.queryParamMap;
        })
            .subscribe(function (params) {
            _this.category = params.get("category");
            _this.filterProducts = (_this.category) ?
                _this.products.filter(function (p) { return p.category === _this.category; }) : _this.products;
        });
    }
    ProductComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.subscription = (_b.sent()).subscribe(function (cart) {
                            _this.cart = cart;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__service_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_4__service_shopping_cart_service__["a" /* ShoppingCartService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/products/product-filter/product-filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sticky-top{\r\n    top: 80px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-filter/product-filter.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"sticky-top\">\n<div class=\"list-group\">\n    <a class=\" list-group-item list-group-item-action  \" \n    [class.active]=\"!category\"\n    routerLink=\"/\"> All Categories</a>\n    <a  *ngFor=\"let c of category$|async\" \n    class=\"list-group-item list-group-item-action \"\n    routerLink=\"/\"\n    [queryParams]=\"{category :c.$key}\"\n    [class.active]=\"category === c.$key\"\n    >{{c.name}}</a>\n   \n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/products/product-filter/product-filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_category_service__ = __webpack_require__("../../../../../src/app/service/category.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductFilterComponent = (function () {
    function ProductFilterComponent(categoryService) {
        this.categoryService = categoryService;
        this.category$ = this.categoryService.getCategory();
    }
    ProductFilterComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('category'),
        __metadata("design:type", Object)
    ], ProductFilterComponent.prototype, "category", void 0);
    ProductFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-filter',
            template: __webpack_require__("../../../../../src/app/products/product-filter/product-filter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/product-filter/product-filter.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_category_service__["a" /* CategoryService */]])
    ], ProductFilterComponent);
    return ProductFilterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/admin-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminAuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminAuthGuardService = (function () {
    function AdminAuthGuardService(auth, userService) {
        this.auth = auth;
        this.userService = userService;
    }
    AdminAuthGuardService.prototype.canActivate = function () {
        return this.auth.appUser$.map(function (appUser) { return appUser.isAdmin; });
    };
    AdminAuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], AdminAuthGuardService);
    return AdminAuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/service/auth-gaurd.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGaurdService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGaurdService = (function () {
    function AuthGaurdService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGaurdService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.user$.map(function (user) {
            if (user)
                return true;
            _this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            return false;
        });
    };
    AuthGaurdService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AuthGaurdService);
    return AuthGaurdService;
}());



/***/ }),

/***/ "../../../../../src/app/service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(userService, afAuth, route) {
        this.userService = userService;
        this.afAuth = afAuth;
        this.route = route;
        this.user$ = this.afAuth.authState;
    }
    AuthService.prototype.login = function () {
        this.url = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        localStorage.setItem('returnUrl', this.url);
        this.afAuth.auth.signInWithRedirect(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider);
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    Object.defineProperty(AuthService.prototype, "appUser$", {
        get: function () {
            var _this = this;
            return this.user$.switchMap(function (user) {
                if (user)
                    return _this.userService.get(user.uid);
                else
                    return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].of(null);
            });
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/service/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryService = (function () {
    function CategoryService(db) {
        this.db = db;
    }
    CategoryService.prototype.getCategory = function () {
        return this.db.list('/categories', {
            query: {
                orderByChild: 'name'
            }
        });
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "../../../../../src/app/service/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_cart_service__ = __webpack_require__("../../../../../src/app/service/shopping-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var OrderService = (function () {
    function OrderService(db, shoppingCartService) {
        this.db = db;
        this.shoppingCartService = shoppingCartService;
    }
    OrderService.prototype.storeOrder = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.db.list('/orders').push(order)];
                    case 1:
                        result = _a.sent();
                        this.shoppingCartService.clearCart();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    OrderService.prototype.getOrders = function () {
        return this.db.list('/orders');
    };
    OrderService.prototype.getOrderByID = function (id) {
        return this.db.object('/orders/' + id);
    };
    OrderService.prototype.getOrderByUser = function (userID) {
        return this.db.list('/orders', {
            query: {
                orderByChild: 'userID',
                equalTo: userID
            }
        });
    };
    OrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__shopping_cart_service__["a" /* ShoppingCartService */]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "../../../../../src/app/service/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = (function () {
    function ProductService(db) {
        this.db = db;
    }
    ProductService.prototype.create = function (product) {
        return this.db.list('/products').push(product);
    };
    ProductService.prototype.getAll = function () {
        return this.db.list('/products');
    };
    ProductService.prototype.getProduct = function (productID) {
        return this.db.object('/products/' + productID);
    };
    ProductService.prototype.updateProduct = function (productID, product) {
        return this.db.object('/products/' + productID).update(product);
    };
    ProductService.prototype.deleteProduct = function (productID) {
        return this.db.object('/products/' + productID).remove();
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/service/shopping-cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_shopping_cart__ = __webpack_require__("../../../../../src/app/models/shopping-cart.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var ShoppingCartService = (function () {
    function ShoppingCartService(db) {
        this.db = db;
    }
    ShoppingCartService.prototype.create = function () {
        return this.db.list('/shopping-cart').push({
            dateCreateed: new Date().getTime()
        });
    };
    ShoppingCartService.prototype.getCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartID;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateaCartID()];
                    case 1:
                        cartID = _a.sent();
                        return [2 /*return*/, this.db.object('/shopping-cart/' + cartID).map(function (x) { return new __WEBPACK_IMPORTED_MODULE_4__models_shopping_cart__["a" /* ShoppingCart */](x.items); })];
                }
            });
        });
    };
    ShoppingCartService.prototype.getOrCreateaCartID = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartID, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cartID = localStorage.getItem("cartID");
                        if (cartID)
                            return [2 /*return*/, cartID];
                        return [4 /*yield*/, this.create()];
                    case 1:
                        result = _a.sent();
                        localStorage.setItem('cartID', result.key);
                        return [2 /*return*/, result.key];
                }
            });
        });
    };
    ShoppingCartService.prototype.addToCart = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.updateItemQuantity(product, 1);
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.removeFromCart = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.updateItemQuantity(product, -1);
                return [2 /*return*/];
            });
        });
    };
    ShoppingCartService.prototype.clearCart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cartID;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateaCartID()];
                    case 1:
                        cartID = _a.sent();
                        this.db.object('/shopping-cart/' + cartID + '/items/').remove();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService.prototype.updateItemQuantity = function (product, change) {
        return __awaiter(this, void 0, void 0, function () {
            var cartID, item$;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getOrCreateaCartID()];
                    case 1:
                        cartID = _a.sent();
                        item$ = this.db.object('/shopping-cart/' + cartID + '/items/' + product.$key);
                        item$.take(1).subscribe(function (item) {
                            var quantity = (item.quantity || 0) + change;
                            if (quantity === 0)
                                item$.remove();
                            else
                                item$.update({
                                    title: product.title,
                                    imageUrl: product.imageUrl,
                                    price: product.price,
                                    quantity: quantity
                                });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], ShoppingCartService);
    return ShoppingCartService;
}());



/***/ }),

/***/ "../../../../../src/app/service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__ = __webpack_require__("../../../../angularfire2/database-deprecated/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(db) {
        this.db = db;
    }
    UserService.prototype.save = function (user) {
        this.db.object('/users/' + user.uid).update({
            name: user.displayName,
            email: user.email
        });
    };
    UserService.prototype.get = function (uid) {
        return this.db.object('/users/' + uid);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/shipping-form/shipping-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".position {\r\n    position: relative;\r\n   left: 450px;\r\n    top: 30px;\r\n   \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shipping-form/shipping-form.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <form #f=\"ngForm\" (ngSubmit)=\"placeOrder()\">\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\" id=\"basic-addon1\"><img src=\"assets\\content\\user.ico\"></span>\n          <input #name=\"ngModel\" [(ngModel)]=\"shipping.name\" type=\"text\" id=\"name\" name=\"name\"  class=\"form-control\" required>\n        </div>\n     \n        <div class=\"alert alert-danger\" *ngIf=\"name.touched && name.invalid\" > Name is required. </div>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"Address\">Address</label>\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\" id=\"basic-addon1\"><img src=\"assets\\content\\home.jpg\"></span>\n            <input #Address=\"ngModel\" [(ngModel)]=\"shipping.address\" type=\"text\" id=\"Address\" name=\"Address\"  class=\"form-control\" required>\n          </div>\n       \n          <div class=\"alert alert-danger\" *ngIf=\"Address.touched && Address.invalid\" > Address is required. </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"City\">City</label>\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\" id=\"basic-addon1\"><img src=\"assets\\content\\city.png\"></span>\n              <input #City=\"ngModel\" [(ngModel)]=\"shipping.city\" type=\"text\" id=\"City\" name=\"City\"  class=\"form-control\" required>\n            </div>\n         \n            <div class=\"alert alert-danger\" *ngIf=\"City.touched && City.invalid\" > Name is required. </div>\n            <button class=\"btn btn-primary position\">Book</button>\n          </div>\n     \n        \n         \n         \n    </form>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/shipping-form/shipping-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_orders__ = __webpack_require__("../../../../../src/app/models/orders.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_shopping_cart__ = __webpack_require__("../../../../../src/app/models/shopping-cart.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_order_service__ = __webpack_require__("../../../../../src/app/service/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_shopping_cart_service__ = __webpack_require__("../../../../../src/app/service/shopping-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ShippingFormComponent = (function () {
    function ShippingFormComponent(router, authService, orderService, shoppingCartService) {
        this.router = router;
        this.authService = authService;
        this.orderService = orderService;
        this.shoppingCartService = shoppingCartService;
        this.shipping = {};
    }
    ShippingFormComponent.prototype.placeOrder = function () {
        return __awaiter(this, void 0, void 0, function () {
            var order, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        order = new __WEBPACK_IMPORTED_MODULE_1__models_orders__["a" /* Order */](this.userID, this.shipping, this.cart);
                        return [4 /*yield*/, this.orderService.storeOrder(order)];
                    case 1:
                        result = _a.sent();
                        this.router.navigate(['/order-success', result.key]);
                        return [2 /*return*/];
                }
            });
        });
    };
    ShippingFormComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // let cart$ = await this.shoppingCartService.getCart()
                // this.cartSubscription = cart$.subscribe(cart => this.cart = cart);
                this.userSubscription = this.authService.user$.subscribe(function (user) { return _this.userID = user.uid; });
                return [2 /*return*/];
            });
        });
    };
    ShippingFormComponent.prototype.ngOnDestroy = function () {
        // this.cartSubscription.unsubscribe();
        this.userSubscription.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('cart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_shopping_cart__["a" /* ShoppingCart */])
    ], ShippingFormComponent.prototype, "cart", void 0);
    ShippingFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'shipping-form',
            template: __webpack_require__("../../../../../src/app/shipping-form/shipping-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shipping-form/shipping-form.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__service_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_6__service_shopping_cart_service__["a" /* ShoppingCartService */]])
    ], ShippingFormComponent);
    return ShippingFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shopping-card/shopping-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\r\n    border-radius: 50%;\r\n    width: 100px;\r\n    height: 100px;\r\n   \r\n}\r\n\r\n.mar{\r\n    margin-left: 20px;\r\n}\r\n.center-vehical{\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopping-card/shopping-card.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Shopping Cart </h1>\n<ng-container class=\"row col-10\" *ngIf=\" cart$ | async as cart\">\n  <p>\n    You have {{cart.totalItemCount}} items in your shop cart .\n  </p>\n\n  <table class=\"table\">\n    <thead>\n      <tr>\n         \n        <th >Product</th>\n       \n        <th class=\"text-center\">Quantity</th>\n        <th class=\"text-center\">Price</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of cart.items \">\n        \n       \n        <td >\n            <img alt=\"Avatar\" [src]=\"item.imageUrl\">   <b class=\"mar\">{{item.title}}</b>  \n        </td>\n        <!-- <td>{{item.quantity}}</td> -->\n       <td class=\"center-vehical\" > <product-quatity [product]=\"item\"  [shoping-cart]=\"cart\" ></product-quatity></td>\n\n        <td  class=\"text-center center-vehical\">{{item.totalPrice |currency:'USD':true}}</td>\n       \n      </tr>\n    \n    </tbody>\n\n   <tfoot>\n     <tr>\n       <th></th>\n       <th></th>\n       <th class=\"text-center\"><b>{{cart.totalPrice |currency:'USD':true}}</b></th>\n     </tr>\n     <tr>\n      <th></th>\n      <th></th>\n      <th class=\"text-center\">\n        <button *ngIf=\"cart.items.length\" style=\"height:50px;width:100px\" (click)=\"shoppingCartService.clearCart()\" class=\"btn btn-danger btn-sm\">Clear Cart</button>\n        <button *ngIf=\"cart.items.length\" style=\"height:50px;width:100px\" routerLink=\"/check-out\"  class=\"btn btn-primary\">Check Out</button>\n        \n      </th>\n    </tr>\n   </tfoot>\n  </table>\n\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/shopping-card/shopping-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_shopping_cart_service__ = __webpack_require__("../../../../../src/app/service/shopping-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var ShoppingCardComponent = (function () {
    function ShoppingCardComponent(shoppingCartService) {
        this.shoppingCartService = shoppingCartService;
    }
    ShoppingCardComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.shoppingCartService.getCart()];
                    case 1:
                        _a.cart$ = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShoppingCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shopping-card',
            template: __webpack_require__("../../../../../src/app/shopping-card/shopping-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shopping-card/shopping-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_shopping_cart_service__["a" /* ShoppingCartService */]])
    ], ShoppingCardComponent);
    return ShoppingCardComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyB1lVis16tXKA75zANnRya_3h_e8HGuDW8",
        authDomain: "oshop-d06ba.firebaseapp.com",
        databaseURL: "https://oshop-d06ba.firebaseio.com",
        projectId: "oshop-d06ba",
        storageBucket: "oshop-d06ba.appspot.com",
        messagingSenderId: "414105756008"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map