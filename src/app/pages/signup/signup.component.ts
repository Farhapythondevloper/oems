import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginservice/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private loginService: LoginService, private router:Router){}

  signUpData=new FormGroup({
    username: new FormControl(null,[Validators.required]),
    password: new FormControl(null,[Validators.required ]),
    firstname: new FormControl(null,[Validators.required]),
    lastname: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required]),
    phone: new FormControl(null,[Validators.required]),
})

sendSignUpData(){
  console.log(this.signUpData.value);
  this.loginService.saveUser(this.signUpData.value).subscribe(
    (res:any)=>{console.log(res);
    this.router.navigate(['login'])
    }
  )

  

}
}
