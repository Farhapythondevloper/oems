import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/loginservice/login.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
   
  userData : any;

  constructor(private loginService:LoginService){}

  ngOnInit(): void {

    this.userData = this.loginService.getUser()

  }
}
