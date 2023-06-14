import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/Category-service/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  addcategoryForm: FormGroup = new FormGroup({

    "title": new FormControl(null,[Validators.required]),
    "description": new FormControl(null,[Validators.required])
  })
  

  constructor(private categoryService:CategoryService, private router:Router){}

  sendcategory(){
    console.log(this.addcategoryForm.value);
    this.categoryService.addCategory(this.addcategoryForm.value).subscribe(
      (res:any)=>{console.log(res);
        Swal.fire({
          title:`${res.title}`,
          text:'Category added Successfully',
          icon:'success'
        })
        this.router.navigate(['admin-dash/allcategory'])
      },
      
    )
  }

}
