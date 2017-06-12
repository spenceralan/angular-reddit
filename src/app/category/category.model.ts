import { Post } from '../post/post.model';

export class Category {

  constructor(
    public title: string,
    public posts: Post[],
  ) { }

}
