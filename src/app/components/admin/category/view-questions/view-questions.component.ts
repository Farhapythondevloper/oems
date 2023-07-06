import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/Question-service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  quizid :any;
  quizTitle:any;
  getAllQuestions:any;
  

  constructor(private questionService:QuestionService, private activeRoute:ActivatedRoute,private router:Router ){}
  
  ngOnInit(): void {

   

    this.activeRoute.params.subscribe(
      (res:any) => {console.log(res);
        this.quizid = res.id;
        this.quizTitle = res.title;
      }
    );
    
    this.getAllQuestionData();

    
  }

  getAllQuestionData(){
    this.questionService.getAllQuestionByQuizId(this.quizid).subscribe(
      (res:any)=>{console.log(res);
        this.getAllQuestions = res;
      }
    )
  }

  deleteQuestionById(question_id:any){
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
        this.questionService.deleteQuestionById(question_id).subscribe(
          (res:any)=>{console.log(res);
          this.getAllQuestionData();
          }
        )
      }
    })

   

  }

}
