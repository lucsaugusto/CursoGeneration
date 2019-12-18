import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './component/comments/comments/comments.component';
import { PostsComponent } from './component/posts/posts/posts.component';
import { UsersComponent } from './component/users/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'comments', component: CommentsComponent},
  { path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
