import { Post } from '../post/post.model';

export class Category {

  display: boolean = false;
  posts: Post[];

  constructor(
    public title: string,
  ) { }

  savePost(post) {
    this.posts.push(post);
  }

}
