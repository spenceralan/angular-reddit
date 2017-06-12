import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';
import { Post } from '../post/post.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [
    new Category("Category 1", [new Post("Fancy Post", "This is a fancy post.", "fancyuser")]),
    new Category("Category 2", [new Post("Fancy Post", "This is a fancy post.", "fancyuser")]),
    new Category("Category 3", [new Post("Fancy Post", "This is a fancy post.", "fancyuser")]),
    new Category("Category 4", [new Post("Fancy Post", "This is a fancy post.", "fancyuser")]),
  ];
  display: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleDisplay(category) {
    if (category.display === true) {
      category.display = false;
    } else {
      category.display = true;
    }
  }

}
