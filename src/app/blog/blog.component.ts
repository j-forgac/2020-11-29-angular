import { Component, OnInit } from '@angular/core';
import {BlogPost} from './BlogPost';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  title = '';
  text = '';
  blogPosts: BlogPost[] = [];

  constructor() { }

  ngOnInit(): void {

  }

  addBlogPost(): void {
    console.log(this.title);
    console.log(this.text);
    this.blogPosts.push(new BlogPost(this.title, this.text));
  }

}
