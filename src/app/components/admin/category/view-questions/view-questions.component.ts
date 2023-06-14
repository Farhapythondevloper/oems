import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/Question-service/question.service';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  quizid:any;
  quizTitle:any;
  getAllQuestions:any;

  constructor(private quetionService:QuestionService, private activeRoute:ActivatedRoute,private router:Router ){}
  
  ngOnInit(): void {

    this.activeRoute.params.subscribe(
      (res:any) => {console.log(res);
        this.quizid = res.id;
        this.quizTitle = res.title;
      }
    );


    
  }

  getAllQuestionData(){
    this.quetionService.getAllQuestionByQuizId(this.quizid).subscribe(
      (res:any)=>{console.log(res);
        this.getAllQuestions = res;
      }
    )
  }

}
