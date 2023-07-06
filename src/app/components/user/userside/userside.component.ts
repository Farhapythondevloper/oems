import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/Category-service/category.service';
import { LoginService } from 'src/app/services/loginservice/login.service';

@Component({
  selector: 'app-userside',
  templateUrl: './userside.component.html',
  styleUrls: ['./userside.component.css']
})
export class UsersideComponent implements OnInit {


  constructor(private categoryService:CategoryService, private loginService:LoginService, private router:Router){}

  allCategory:any;

  ngOnInit(): void {

    this.categoryService.getAllCategory().subscribe(
      (res:any) => {console.log(res);
      this.allCategory = res;}
      
    )
    
  }
  
}
