import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/Quiz-Service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-quizes',
  templateUrl: './all-quizes.component.html',
  styleUrls: ['./all-quizes.component.css']
})
export class AllQuizesComponent implements OnInit {
  
  getAllQuizes:any;

  constructor(private quiqService:QuizService){}
  ngOnInit(): void {

    this.getAllQuizData();
  }

  getAllQuizData(){
    this.quiqService.getAllQuizData().subscribe(
      (res:any) => {console.log(res);
      this.getAllQuizes = res;
      
      }
    )
  }

  deleteQuizeById(quiz_id:any){

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
        this.quiqService.deleteQuizesById(quiz_id).subscribe(
          (res:any) => {console.log(res);
            this.getAllQuizes = res;
          }
        )
      }
    })


   
  }

}
