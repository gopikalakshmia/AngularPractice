import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Iuser } from 'src/app/interfaces/iuser';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
users:Iuser[]=[];
  constructor(private userservice:UserService) {
    
    this.getuser();
   }

  ngOnInit(): void {
    
  }
  getuser(){
    this.userservice.getUser().subscribe(
      (users)=>{this.users=users},
      (err)=>console.log(err),
      ()=>console.log("done")
    ); 
  }
  

}
