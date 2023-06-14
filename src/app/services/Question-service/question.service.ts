import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public getAllQuestionByQuizId(quiz_id:any){
    return this.http.get(`${baseUrl}question/quiz/all/`+ quiz_id)
  }

  public addQuestions(data:any){
    return this.http.post(`${baseUrl}question/`,data);
  }
}
