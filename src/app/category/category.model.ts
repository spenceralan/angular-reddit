import { Post } from '../post/post.model';

export class Category {

  display: boolean = false;
  posts: string[];

  constructor(
    public title: string,
  ) { }

}
