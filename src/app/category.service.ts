import { Injectable } from '@angular/core';
import { Category } from './category/category.model';
import { Post } from './post/post.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CategoryService {
  categories: FirebaseListObservable<any[]>;
  posts: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.categories = database.list('categories');
    this.posts = database.list('posts');
  }

  getCategory(id) {
    return this.database.object('/categories/' + id);
  }

  getPostsByCategory(id) {
  }

  getCategories() {
    return this.categories;
  }

  save(category: Category) {
    this.categories.push(category);
  }

  savePost(post: Post) {
    this.posts.push(post);
    console.log(post);
  }

}
