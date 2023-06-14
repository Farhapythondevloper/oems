

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
public loginStatusSubject=new Subject<Boolean>();

// use This function to genrate token
public genrateToken(data:any){
  return this.http.post(`${baseUrl}generate-token`,data)
}


// login user can set token in localstorage
  public loginUser(token: any){
  return localStorage.setItem('token',token)
}

// log in user can set token inlocalStroage
// public setToken(token:any){
//   return localStorage.setItem('token',token)
// }

//check if user is log in or not 
public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == null || tokenStr =='' || tokenStr == undefined){
      return false;
  
    }
    else{
      return true;
  
    }
  
  }
// get token to use multiple times wherever we want
public getToken(){
  return localStorage.getItem('token')
}


// it will show the details of current loggedin user
public getCurrentUser(){
  return this.http.get(`${baseUrl}current-user`)
}
 
//data wich we get from current user that we store in local storage and convert that into string format
public setUser(user:any){
  return localStorage.setItem('user',JSON.stringify(user))
  
}

//it will clear data (token and user data)from local storaSge
public logout(){
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return true;
}

// if user data is not null  to return data into JSON Format else logout
getUser(){
 let userStr=localStorage.getItem('user');
 if (userStr!=null){
  return JSON.parse(userStr)
 }
 else{
  this.logout;
  return null;
 }
}

//to check the user role that it is Admin Or Normal User
public getUserRole(){
  let user=this.getUser();
  return user.authorities[0].authority;
}

public saveUser(data:any){
  return this.http.post(`${baseUrl}user/`,data)

}

}