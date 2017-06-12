import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';
import { Post } from '../post/post.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService],
})
export class CategoryComponent implements OnInit {

  categories = this.categoryService.getCategories();

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
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
