import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/Category-service/category.service';

@Component({
  selector: 'app-userside',
  templateUrl: './userside.component.html',
  styleUrls: ['./userside.component.css']
})
export class UsersideComponent implements OnInit {


  constructor(private categoryService:CategoryService){}

  allCategory:any;

  ngOnInit(): void {

    this.categoryService.getAllCategory().subscribe(
      (res:any) => {console.log(res);
      this.allCategory = res;}
      
    )
    
  }
}
