import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/Quiz-Service/quiz.service';

@Component({
  selector: 'app-loadquizes',
  templateUrl: './loadquizes.component.html',
  styleUrls: ['./loadquizes.component.css']
})
export class LoadquizesComponent implements OnInit {

  constructor(private quizService:QuizService, private activateRoute:ActivatedRoute){}
  
  categoryId:any;
  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      (res:any) => {console.log(res.category_id);
        this.categoryId = res.category_id;

        if(this.categoryId == 0){
          this.quizService.getActiveQuiz().subscribe(
            (res:any) => {console.log(res);
            }
          )

        }
        else{
          this.quizService.getActiveQuizByCategoryId(this.categoryId).subscribe(
            (res:any) => {console.log(res);
            }

          )

        }
      }
    )
    
  }

}
