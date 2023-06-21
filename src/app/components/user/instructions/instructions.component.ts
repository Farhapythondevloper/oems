import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/Quiz-Service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  constructor(private quizService: QuizService, private activetedRoute:ActivatedRoute, private router:Router){}
  
  quizId:any;
  quizes:any;
  ngOnInit(): void {
    
    this.activetedRoute.params.subscribe(
      (res:any)=>{console.log(res.quiz_id);
        this.quizId = res.quiz_id;
      }
    );

    this.quizService.getQuizesById(this.quizId).subscribe(
      (res:any)=>{console.log(res);
       this.quizes = res;
      }
    )
  }

  startExam(){
    Swal.fire({
      title: 'Start Exam',
      text: "Are you sure want to start Exam",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Start'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate([`startexam/${this.quizId}`])
      }
    })
  }
   
  }