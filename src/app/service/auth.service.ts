import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { appUser } from './../models/app-user';
import { UserService } from './user.service';
@Injectable()
export class AuthService {
  user$: Observable <firebase.User>;
  constructor(private userService:UserService, private afAuth : AngularFireAuth, private route:ActivatedRoute) { 
    this.user$= this.afAuth.authState;
  }

url
  login()
  {
   this.url= this.route.snapshot.queryParamMap.get('returnUrl')||'/';
   localStorage.setItem('returnUrl',this.url)
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider)
  }

  logout()
  {
    this.afAuth.auth.signOut();
  }

  get appUser$() :Observable<appUser>
  {
    return this.user$.switchMap(user=>{
      if(user) return this.userService.get(user.uid);
      else return Observable.of(null);
    });
  }
}
