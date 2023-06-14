import { Component , OnInit} from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/Question-service/question.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent  implements OnInit{

updateQuestionForm: FormGroup = new FormGroup({
    
    "content": new FormGroup(null,[Validators.required]),
    "option1": new FormGroup(null,[Validators.required]),
    "option2": new FormGroup(null,[Validators.required]),
    "option3": new FormGroup(null,[Validators.required]),
    "option4": new FormGroup(null,[Validators.required]),
    "answer": new FormGroup(null,[Validators.required]),
    

  });

  constructor(private questionService: QuestionService, private activatedRoute:ActivatedRoute, private router: Router){}

  questionId:any;
  quizTitle:any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (res:any)=>{console.log(res);
        this.questionId = res.id;
        this.quizTitle = res.title;
      }
    )
   
  }

  updateQuestionData(){
    console.log(this.updateQuestionForm.value);
    
  }

}
