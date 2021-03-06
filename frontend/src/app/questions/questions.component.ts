import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {

  question = {}
  
  questions

  constructor(private api: ApiService) {}
  // private api: ApiService
  ngOnInit() {
    this.api.getQuestions().subscribe(res => {this.questions = res});
  }

  // post = (question) => {
  //   this.api.postQuestion(question);
  // }

}
