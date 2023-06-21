import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public getAllQuizData(){
    return this.http.get(`${baseUrl}quiz/`)
  }

  public addQuizes(data:any){
    return this.http.post(`${baseUrl}quiz/`,data)

  }

  public deleteQuizesById(quiz_id:any){
    return this.http.delete(`${baseUrl}quiz/`+quiz_id)

  }

  public getQuizesById(quiz_id:any){
    return this.http.get(`${baseUrl}quiz/`+quiz_id)
  }

  public updateQuiz(data:any){
    return this.http.put(`${baseUrl}quiz/`,data)
  }

  public getActiveQuiz(){
    return this.http.get(`${baseUrl}quiz/active`)
  }

  public getActiveQuizByCategoryId(category_id:any){
    return this.http.get(`${baseUrl}quiz/category/active/` + category_id)

  }
}
