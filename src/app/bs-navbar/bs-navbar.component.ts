import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../service/auth.service';
import { appUser } from './../models/app-user';
import { ShoppingCartService } from './../service/shopping-cart.service';
import { ShoppingCart } from '../models/shopping-cart';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  user$: Observable<firebase.User>;
  public userApp: appUser;
  cart$:Observable<ShoppingCart>;
  constructor(private afAuth: AuthService, private shoppingCartService: ShoppingCartService) {
    // this.afAuth.authState.subscribe(x =>

    //   this.user = x
    // );


  }

  async ngOnInit() {
    this.afAuth.appUser$.subscribe(x => this.userApp = x);
    this.user$ = this.afAuth.user$;
    this.cart$ = await this.shoppingCartService.getCart();
   
    
  

    
  }


  logout() {
    // console.log(this.afAuth.auth.currentUser);
    this.afAuth.logout();

  }
}
