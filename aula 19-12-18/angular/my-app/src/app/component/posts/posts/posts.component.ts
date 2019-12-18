import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/posts/post';
import { PostService } from 'src/app/service/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  //Atributos
  posts: Array<Post> = new Array<Post>();

  //Construtor
  constructor(private postService: PostService) { }

  //É chamado assim que baixar todos os componentes e serviços na maquina do usuario;
  ngOnInit() {
  }
  //Começa a minha aplicação
  findAllPost() {
    this.postService.getAll().subscribe((postOut: Post[]) => {
      this.posts = postOut;
    });
  }

  btnPostsClick() {
    this.findAllPost();
  }

  post: Post = new Post(0, 0, '', '');
  id:number;
  show:boolean

  btnClick(){
    this.postService.getById(this.id).subscribe((postOut: Post)=>{
      this.post = postOut;
      this.show = true;
    })
  }
  idNull(){
    this.postService.getById(this.id).subscribe((postOut: Post)=>{
      this.id = null;
      this.show = false;
    })
  }
}
  