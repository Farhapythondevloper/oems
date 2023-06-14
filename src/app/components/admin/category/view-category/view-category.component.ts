import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/Category-service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
 
  constructor(private categoryService:CategoryService, private router:Router){}
  
  categoryData:any;
  
  ngOnInit(): void {

    this.getAllCategoryDate()
   
  }

  getAllCategoryDate(){
    this.categoryService.getAllCategory().subscribe(
      (res)=>{console.log(res);
      this.categoryData = res;
    }
    )
  }

  deleteCategoryData(category_id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(

          'Deleted!',
          'Your file has been deleted.',
          'success'
        );

        this.categoryService.deleteCategoryById(category_id).subscribe(
          (res)=>{console.log(res);
          this.getAllCategoryDate()
          }
        )
      }
    })
    
  }

  
}
