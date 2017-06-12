import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[];

  constructor() { }

  ngOnInit() {
  }

  save(category: Category) {
    this.categories.push(category)
  }

  toggleDisplay(category) {
    if (category.display === true) {
      category.display = false;
    } else {
      category.display = true;
    }
  }

  togglePostDisplay(post) {
    if (post.display === true) {
      post.display = false;
    } else {
      post.display = true;
    }
  }

}
