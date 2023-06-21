import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/Question-service/question.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})


export class AddQuestionComponent implements OnInit {

  addQuestionForm:FormGroup=new FormGroup({
    "content":new FormControl(null,Validators.required),
    "option1":new FormControl(null,Validators.required),
    "option2":new FormControl(null,Validators.required),
    "option3":new FormControl(null,Validators.required),
    "option4":new FormControl(null,Validators.required),
    "answer":new FormControl(null,Validators.required),

  });

  quizId:any;
  quizTitle:any;

constructor(private questionService:QuestionService, private activeRoute:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      (res:any)=>{console.log(res);
      this.quizId=res.id;
      this.quizTitle=res.title;
      }
    );
  }
  addQuestions={
    "content":this.addQuestionForm.value.content,
    "option1":this.addQuestionForm.value.option1,
    "option2":this.addQuestionForm.value.option2,
    "option3":this.addQuestionForm.value.option3,
    "option4":this.addQuestionForm.value.option4,
    "answer":this.addQuestionForm.value.answer

  }
  addQuestionData(){
    console.log(this.addQuestionForm.value);
   let addQuestions={
      "content":this.addQuestionForm.value.content,
      "option1":this.addQuestionForm.value.option1,
      "option2":this.addQuestionForm.value.option2,
      "option3":this.addQuestionForm.value.option3,
      "option4":this.addQuestionForm.value.option4,
      "answer":this.addQuestionForm.value.answer,
      "quiz":{"quiz_id":this.quizId} 
  
    };
    this.questionService.addQuestions(addQuestions).subscribe(
      (res:any)=>{console.log(res);
      this.router.navigate([`admin-dash/view-question/${this.quizId}/${this.quizTitle}`])
      }
    )
  }
}