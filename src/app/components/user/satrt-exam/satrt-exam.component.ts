import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/Question-service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-satrt-exam',
  templateUrl: './satrt-exam.component.html',
  styleUrls: ['./satrt-exam.component.css']
})
export class SatrtExamComponent implements OnInit{
  
  quizId:any;
  questions:any;

  timer:any;

  marksGot:any;
  correctAnswers:any;
  attempted:any

  isSubmit:Boolean = false;
  constructor(private activatedRoute:ActivatedRoute, private questionService:QuestionService){}
  
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (res:any)=>{console.log(res.quiz_id);
      this.quizId = res.quiz_id;
    }
    );

    this.questionService.getQuestionByQuizId(this.quizId).subscribe(
      (res:any)=>{console.log(res);
      this.questions = res;
      this.timer = this.questions.length*0.30*100;
      this.startTimer();
      
      }
    )
   
  }

  getFormatedTime(){
    let mm = Math.floor(this.timer/60);
    let ss = this.timer - mm*60;

    return `${mm}:${ss}`
  }

  startTimer(){
    let t = window.setInterval(
      ()=>{
        if(this.timer <= 0){
          clearInterval(t);

        }
        else{
          this.timer--

        }

      },
      1000
    )
  }

  submit(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't to End Exam!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit Exam'
    }).then((result) => {
      if (result.isConfirmed) {
        this.directSubmit(); // function call hoga
      }
    })
  
  }

  directSubmit(){
     this.questionService.directSubmit(this.questions).subscribe(
      (res:any)=>{console.log(res);
        this.isSubmit = true;
        this.marksGot = res.marksGot;
        this.correctAnswers = res.correctAnswers;
        this.attempted = res.attempted;
      }
     )
  }

  printResult(){
    window.print();
  }

}
