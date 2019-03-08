import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private selectedQuestions = new Subject<any>();
  questionSelected = this.selectedQuestions.asObservable();

  private selectedQuiz = new Subject<any>();
  quizSelected = this.selectedQuiz.asObservable();

  constructor(private http: HttpClient) { }

  postQuestion(question){
    this.http.post('https://localhost:44325/api/questions', question).subscribe(res => {
      console.log(res);
    });    
  }

  getQuestions(){
    return this.http.get('https://localhost:44325/api/questions');
  }

  getQuizzes(){
    return this.http.get('https://localhost:44325/api/quizzes');
  }

  putQuestion(question){
    this.http.put(`https://localhost:44325/api/questions/${question.id}`, question).subscribe(res => {
      console.log(res);
    });  
  }

  postQuiz(quiz){
    this.http.post('https://localhost:44325/api/quizzes', quiz).subscribe(res => {
      console.log(res);
    });    
  }

  putQuiz(quiz){
    this.http.put(`https://localhost:44325/api/quizs/${quiz.id}`, quiz).subscribe(res => {
      console.log(res);
    });  
  }

  getQuiz(){
    return this.http.get('https://localhost:44325/api/quizzes');
  }


  selectQuestion(question){
    this.selectedQuestions.next(question);
  }

  selectQuizzes(quiz){
    this.selectedQuiz.next(quiz);
  }
}
