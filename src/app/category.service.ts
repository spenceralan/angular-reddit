import { Injectable } from '@angular/core';
import { Category } from './category/category.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CategoryService {
  categories: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.categories = database.list('categories')
  }

  getCategories() {
    return this.categories;
  }

  save(category: Category) {
    console.log("worked")
    this.categories.push(category)
  }

}
