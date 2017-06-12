import { Component, OnInit } from '@angular/core';
import { Category } from '../category/category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css'],
  providers: [CategoryService],
})
export class NewCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
  }

  save(title) {
    let category: Category = new Category(title.value);
    this.categoryService.save(category);
  }

}
