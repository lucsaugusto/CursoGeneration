import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './component/posts/posts/posts.component';
import { TitleComponent } from './component/title/title.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommentsComponent } from './component/comments/comments/comments.component';
import { UsersComponent } from './component/users/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    TitleComponent,
    NavbarComponent,
    FooterComponent,
    CommentsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
