
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomdirectiveComponent } from './components/customdirective/customdirective.component';



@NgModule({
  declarations: [
    CustomdirectiveComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports:[CustomdirectiveComponent],
})
export class DirectiveModule { 
  
}
