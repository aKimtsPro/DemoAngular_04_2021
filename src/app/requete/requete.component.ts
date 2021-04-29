import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Todo } from '../models/todo.model';
import { ApiConsumeService } from '../services/api-consume.service';

@Component({
  selector: 'app-requete',
  templateUrl: './requete.component.html',
  styleUrls: ['./requete.component.css']
})
export class RequeteComponent implements OnInit {

  todos: Todo[] = [];
  todoForm: FormGroup;
  lastSentTodo: Todo = null;

  constructor(private apiService: ApiConsumeService, builder: FormBuilder) {
    this.todoForm = builder.group(
      {
        'userId':new FormControl(),
        'title': new FormControl(),
        'completed': new FormControl()
      }
    )
  }

  ngOnInit(): void {
  }

  onLoad(){
    this.apiService.getTodos().subscribe(
      (value) => {
        console.log("test 1");
        this.todos = value;
      },
      (err) => console.log(err),
      () => console.log('COMPLETED')
    )
    console.log("test 2")
    this.apiService.getDemo().subscribe((value) => console.log(value))
  }
  
  onSubmit(){
    const toPost = {
      userId: this.todoForm.value.userId,
      id: 0,
      title: this.todoForm.value.title,
      completed: this.todoForm.value.completed
    }

    this.apiService.postTodo( toPost )
              .subscribe( (value) => this.lastSentTodo = value );
  }

}
