import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/Category-service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent  implements OnInit {

  updateCategoryForm: FormGroup = new FormGroup({
    "category_id":new FormControl(null,[Validators.required]),
    "title": new FormControl(null,[Validators.required]),
    "description": new FormControl(null,[Validators.required])
  })

  category_id:any;

  constructor(private categoryService:CategoryService, private activatedRoute: ActivatedRoute, private router:Router){
  
  }
  ngOnInit(): void {
     this.activatedRoute.params.subscribe(
      (res:any)=>{console.log(res.id);
        this.category_id=res.id;
      }
    );
     this.categoryService.getCategoryDataById(this.category_id).subscribe(
      (res:any)=>{console.log(res);
      this.updateCategoryForm.setValue(res);
    }
    )
    
  }

  

  updateCategoryData(){
    console.log(this.updateCategoryForm.value);
    this.categoryService.updateCategory(this.updateCategoryForm.value).subscribe(
      (res:any)=>{console.log(res);
        Swal.fire({
          title:`${res.title}`,
          text:'category Updated Successfuly',
          icon:'success'
        })
      this.router.navigate(['admin-dash/allcategory'])
      }
    )
  }


}

