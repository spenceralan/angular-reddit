export class Post {

  display: boolean = false;

  constructor(
    public title: string,
    public content: string,
    public user: string,
  ) { }

}
