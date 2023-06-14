import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';
import { CategoryService } from 'src/app/services/Category-service/category.service';
import { QuizService } from 'src/app/services/Quiz-Service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  updateQuizForm: FormGroup = new FormGroup({
    "quiz_id":new FormControl(null, [Validators.required]),
    "title": new FormControl(null, [Validators.required]),
    "description": new FormControl(null,[Validators.required]) ,
    "maxMarks": new FormControl(null,[Validators.required]) ,
    "numberOfQuestions": new FormControl(null,[Validators.required]) ,
    "active": new FormControl(null,[Validators.required]) ,
    "category_id": new FormControl(null,[Validators.required]) ,

  })

  quizId :any;
  getQuiz: any;
  getAllCategory:any;
  



constructor(private quizService: QuizService, private categoryService: CategoryService, private activatedRoute: ActivatedRoute, private router:Router){

}
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (res:any)=>{console.log(res.id);
      this.quizId = res.id;
      }
    );

    this.quizService.getQuizesById(this.quizId).subscribe(
      (res:any)=>{console.log(res);
        this.getQuiz = res;
      }
    );
    this.categoryService.getAllCategory().subscribe(
      (res:any)=>{console.log(res);
        this.getAllCategory= res;
      }
    )
    
  }

  updateformData(){
    console.log(this.updateQuizForm.value);

    let setUpdateData={

    "quiz_id": this.quizId,
    "title": this.updateQuizForm.value.title, 
    "description":this.updateQuizForm.value.description  ,
    "maxMarks": this.updateQuizForm.value.maxMarks ,
    "numberOfQuestions":this.updateQuizForm.value.numberOfQuestions  ,
    "active": this.updateQuizForm.value.active ,
    "category":{"category_id":this.updateQuizForm.value.category_id}  ,

    }

    this.quizService.updateQuiz(setUpdateData).subscribe(
      (res:any)=>{console.log(res);
        Swal.fire({
          title:`${res.title}`,
          text:'Quiz Update Successfully',
          icon:'success',
        })
        this.router.navigate(['admin-dash/all-quizes'])
      }
    )
    
  }

}
