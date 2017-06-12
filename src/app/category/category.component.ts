import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [
    new Category("Category 1"),
    new Category("Category 2"),
    new Category("Category 3"),
    new Category("Category 4"),
  ];

  constructor() { }

  ngOnInit() {
  }

}
