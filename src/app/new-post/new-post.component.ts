import { Component, OnInit } from '@angular/core';
import { Category } from '../category/category.model';
import { Post } from '../post/post.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { CategoryService } from '../category.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
  providers: [CategoryService],
})
export class NewPostComponent implements OnInit {
  categoryObject;
  id: string;

  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.id = urlParameters['id'];
    });
    this.categoryService.getCategory(this.id).subscribe(subscribedCategory => { this.categoryObject = subscribedCategory });
  }

  newPost(newPostText) {
    let post: Post = new Post(newPostText.value, this.id);
    this.categoryService.savePost(post);
  }


}
