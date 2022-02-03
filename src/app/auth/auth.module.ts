import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    BlogComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BlogComponent,
    AboutComponent,
    HomeComponent
  ]
})
export class AuthModule { }
