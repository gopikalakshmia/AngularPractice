import { DirectiveModule } from './directive/directive.module';
import { CustomdirectiveComponent } from './directive/components/customdirective/customdirective.component';
import { UserdetailsComponent } from './user/components/userdetails/userdetails/userdetails.component';
import { UserlistComponent } from './user/components/userlist/userlist.component';
import { BlogComponent } from './auth/components/blog/blog.component';
import { AboutComponent } from './auth/components/about/about.component';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './auth/components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import {HttpClientModule} from '@angular/common/http';
import {AttributeDirective} from './custom-directive/attribute.directive';
import { AppenderpipesPipe } from './pipe/pipes/appenderpipes.pipe'

const routes=[
  {path:'',component:HomeComponent},
{path:'about',component:AboutComponent},
{path:'blog',component:BlogComponent},
{path:'userlist',component:UserlistComponent,
children:[
  {path:':id',component:UserdetailsComponent}]},
  {path:'directive',component:CustomdirectiveComponent},
{path:'**',component:HomeComponent,pathMatch:"full"}
]
@NgModule({
  declarations: [
    AppComponent,
    AttributeDirective,
    AppenderpipesPipe,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    UserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    DirectiveModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
