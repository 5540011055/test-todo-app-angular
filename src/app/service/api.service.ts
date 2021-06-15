import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})
export class ApiService {
  
  counter = 101;
  constructor(
    private http: HttpClient
  ) {
    //this.getData();
  }

  getDataTodo(): Observable<any>{
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.get<any>(url);
  }

  getDataPost(): Observable<any>{
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<any>(url);
  }

  postDataTodo() {
    this.counter++;
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const myPost = {
      user: 'me',
      id: this.counter,
      title: 'post number' + this.counter,
      body: ''
    }
    return this.http.post(url, myPost)
      .subscribe(
        (resp) => {
          console.log(resp);
          this.getDataTodo();
        }
      );
  }

}
