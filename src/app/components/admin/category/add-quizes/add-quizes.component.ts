import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/Category-service/category.service';
import { QuizService } from 'src/app/services/Quiz-Service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quizes',
  templateUrl: './add-quizes.component.html',
  styleUrls: ['./add-quizes.component.css']
})
export class AddQuizesComponent implements OnInit {

  QuizDataForm: FormGroup = new FormGroup({
    "title": new FormControl(null, [Validators.required]),
    "description": new FormControl(null,[Validators.required]) ,
    "maxMarks": new FormControl(null,[Validators.required]) ,
    "numberOfQuestions": new FormControl(null,[Validators.required]) ,
    "active": new FormControl(null,[Validators.required]) ,
    "category_id": new FormControl(null,[Validators.required]) ,

  })

  getCategoryData:any;

  constructor(private quizService:QuizService, private categoryService:CategoryService, private router:Router ){}
  
  ngOnInit(): void {

    this.categoryService.getAllCategory().subscribe(
      (res:any)=>{console.log(res);
      this.getCategoryData = res;
      }
    )
    
  }

  

  addQuizData(){
    console.log(this.QuizDataForm.value);

    let addQuizessdata={

      "title": this.QuizDataForm.value.title,
    "description": this.QuizDataForm.value.description,
    "maxMarks": this.QuizDataForm.value.maxMarks,
    "numberOfQuestions": this.QuizDataForm.value.numberOfQuestions,
    "active": this.QuizDataForm.value.active,
    "category": {'category_id': this.QuizDataForm.value.category_id}
   

    }

    this.quizService.addQuizes(addQuizessdata).subscribe(
      (res:any)=>{console.log(res);
        Swal.fire({
          title:`${res.title}`,
          text:'Quiz Added',
          icon:'success'

        });

        this.router.navigate(['admin-dash/all-quizes'])

        
      }
    )
  }

}
