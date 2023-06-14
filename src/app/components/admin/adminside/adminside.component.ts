import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/loginservice/login.service';

@Component({
  selector: 'app-adminside',
  templateUrl: './adminside.component.html',
  styleUrls: ['./adminside.component.css']
})
export class AdminsideComponent {

  constructor(private loginService:LoginService, private router:Router){}

  logout(){
    this.loginService.logout();
    this.router.navigate(['login']);
  }


}
