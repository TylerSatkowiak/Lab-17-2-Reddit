import { Component, Input, OnInit } from '@angular/core';
import {Post, Posts} from '../interfaces/post';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.css']
})
export class PostsViewComponent implements OnInit {
  posts: Posts;

  constructor(private rService: RedditService) { }

  ngOnInit(): void {
    debugger;
    this.rService.getPosts().subscribe(
      
      (data:Posts)=> this.posts = data
    );
  }

}
