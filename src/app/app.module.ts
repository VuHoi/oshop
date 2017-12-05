import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap"
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import { MyOrderComponent } from './my-order/my-order.component'
import { AuthService } from './service/auth.service';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { UserService } from './service/user.service';
import { AdminAuthGuardService } from './service/admin-auth-guard.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './service/category.service';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
import { ProductService } from './service/product.service';
import { ProductFilterComponent } from './products/product-filter/product-filter.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartService } from './service/shopping-cart.service';
import { ProductQuatityComponent } from './product-quatity/product-quatity.component';
import { OrderService } from './service/order.service';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import { DetailOrderComponent } from './detail-order/detail-order.component';
// import { DataTableModule } from 'angular-4-data-table';
@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductComponent,
    ShoppingCardComponent,
    CheckOutComponent,
    OrderSuccessComponent,
   
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    MyOrderComponent,
    ProductFormComponent,
    ProductFilterComponent,
    ProductCardComponent,
    ProductQuatityComponent,
    CartSummaryComponent,
    ShippingFormComponent,
    DetailOrderComponent,
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,

    CustomFormsModule,
    // DataTableModule,
    RouterModule.forRoot([
      {path :'',component :HomeComponent},
      {path :'shopping-cart',component :ShoppingCardComponent},
      {path :'detail/:id',component :DetailOrderComponent},
      {path :'products',component :ProductComponent},
      {path :'check-out',component :CheckOutComponent,canActivate:[AuthGaurdService] },
      {path :'order-success/:id',component :OrderSuccessComponent ,canActivate:[AuthGaurdService]},
      {path :'login',component :LoginComponent},
      {path :'admin/admin-orders',component :AdminOrdersComponent ,canActivate:[AuthGaurdService,AdminAuthGuardService]},
      {path :'admin/products',component :AdminProductsComponent ,canActivate:[AuthGaurdService,AdminAuthGuardService]},
      {path :'my-order',component :MyOrderComponent ,canActivate:[AuthGaurdService]},
      {path :'admin/products/new',component :ProductFormComponent ,canActivate:[AuthGaurdService]},
      {path :'admin/products/:id',component :ProductFormComponent ,canActivate:[AuthGaurdService]},
    ]),
    NgbModule.forRoot()
   
  ],
  providers: [
    AuthService,
    AuthGaurdService,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
