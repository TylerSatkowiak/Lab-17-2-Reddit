import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PostViewComponent } from './post-view/post-view.component';
import { PostsViewComponent } from './posts-view/posts-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PostViewComponent,
    PostsViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
