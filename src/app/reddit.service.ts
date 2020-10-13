import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post,Posts} from './interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  apiUrl: 'https://www.reddit.com/r/aww/.json';
  constructor(private http:HttpClient) { }

  getPost(){
    return this.http.get<Post>('https://www.reddit.com/r/aww/.json');
  }
  getPosts(){
    return this.http.get<Posts>('https://www.reddit.com/r/aww/.json');
  }

}
