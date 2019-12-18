import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/service/comment/comment.service';
import { Comment } from 'src/app/model/comments/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

    //Atributos
    comments: Array<Comment> = new Array<Comment>();

    //Construtor
    constructor(private commentService: CommentService) { }
  
    //É chamado assim que baixar todos os componentes e serviços na maquina do usuario;
    ngOnInit() {
    }
    //Começa a minha aplicação
    findAllComment() {
      this.commentService.getAll().subscribe((commentOut: Comment[]) => {
        this.comments = commentOut;
      });
    }
  
    btnCommentsClick() {
      this.findAllComment();
    }
  
    comment: Comment = new Comment(0, 0, '', '', '');
    id:number;
    show:boolean
  
    btnClick(){
      this.commentService.getById(this.id).subscribe((commentOut: Comment)=>{
        this.comment = commentOut;
        this.show = true;
      })
    }
    idNull(){
      this.commentService.getById(this.id).subscribe((commentOut: Comment)=>{
        this.id = null;
        this.show = false;
      })
    }
  }