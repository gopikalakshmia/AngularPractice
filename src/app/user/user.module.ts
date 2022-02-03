import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserdetailsComponent } from './components/userdetails/userdetails/userdetails.component';



@NgModule({
  declarations: [
    UserlistComponent,
    UserdetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[UserlistComponent,
    UserdetailsComponent],
})
export class UserModule { }
