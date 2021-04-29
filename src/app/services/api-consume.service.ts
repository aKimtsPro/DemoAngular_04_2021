import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class ApiConsumeService {

  readonly API_URL = "https://jsonplaceholder.typicode.com";
  readonly CUSTOM_API_URL = "http://localhost:8082";

  constructor(private client: HttpClient) { }

  getTodos() : Observable<Todo[]>{
    return this.client.get( this.API_URL + '/todos' ) as Observable<Todo[]>;
  }

  postTodo( todo: Todo ): Observable<Todo>{
    return this.client.post( this.API_URL + "/todos", todo ) as Observable<Todo>;
  }

  getDemo(){
    return this.client.post( this.CUSTOM_API_URL + "/demo/truc/1", "mon message")
  }

}
