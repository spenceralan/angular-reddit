import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';
import { Post } from '../post/post.model';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService],
})
export class CategoryComponent implements OnInit {

  categories = this.categoryService.getCategories();

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit() {
  }

  addPostPage(category) {
    this.router.navigate(['category', category.$key]);
  }

  toggleDisplay(category) {
    if (category.display === true) {
      category.display = false;
    } else {
      category.display = true;
    }
    console.log(category.$key);
  }

  togglePostDisplay(post) {
    if (post.display === true) {
      post.display = false;
    } else {
      post.display = true;
    }
  }

}
