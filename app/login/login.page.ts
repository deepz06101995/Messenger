import { UserAuthenticationService } from './../user-authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user_name;
  public password;

  constructor(
    private router:Router,
    private userauth: UserAuthenticationService
  ) { }

  ngOnInit() {
  }

  logginUser(){
    this.userauth.logInUser(this.user_name,this.password);
    this.router.navigate(["home"]);
  }

}
