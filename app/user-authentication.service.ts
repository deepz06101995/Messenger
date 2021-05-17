import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  constructor() { }

  verifyLogin(){

    // sessionStorage.setItem('isLoggedIn', "Y");

    var isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if(isLoggedIn == "Y"){
      return true;
    } else{
      return false;
    }

  }

  logInUser(user_name,password){
    sessionStorage.setItem("isLoggedIn","Y");
    sessionStorage.setItem("current_user_name",user_name);
    sessionStorage.setItem("current_user_password",password);
  }

  getUserDetail(){
    return {
      "user_name":sessionStorage.getItem('current_user_name'),
      "user_password":sessionStorage.getItem('current_user_password'),
    }
  }

  logOutUser(){
    sessionStorage.setItem("isLoggedIn","N");
    sessionStorage.setItem("current_user_name","");
    sessionStorage.setItem("current_user_password","");
  }

}
