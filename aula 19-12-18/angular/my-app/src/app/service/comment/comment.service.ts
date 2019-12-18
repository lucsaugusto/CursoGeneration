import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }
  
  getAll(){
    return this.http.get("https://jsonplaceholder.typicode.com/comments");
  }

  getById(id: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/comments/${id}`);
  }
}

