import { Component, OnInit } from '@angular/core';

import { AuthService } from './../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
Username1:string;
Password1:string;
  constructor(private afAuth: AuthService) {

  }

  ngOnInit() {
  }

  information;
  login() {
   
    this.afAuth.login();
  }
  loginWithAccount()
    {
alert("Login bằng goggle đi cho lẹ .. rảnh vl .cái này làm cho đep thôi .");
    }
  
  
}
