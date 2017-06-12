import { Post } from '../post/post.model';

export class Category {

  display: boolean = false;

  constructor(
    public title: string,
    public posts: Post[],
  ) { }


}
