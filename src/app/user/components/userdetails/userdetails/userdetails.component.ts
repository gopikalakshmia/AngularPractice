import { UserService } from 'src/app/services/user.service';
import { Iuser } from './../../../../interfaces/iuser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
user:any;
posts:any;
  constructor(private activate:ActivatedRoute,private userdervice:UserService) { 
    this.getUderById();
  }

  ngOnInit(): void {
  }
  getUderById(){
     this.activate.params.subscribe(
       (params)=>{
        this.userdervice.getUserById(params['id']).subscribe(
          (user)=>this.user=user
        )
       }
     );
   }
   createUser(){
     this.userdervice.createUser(this.user).subscribe(
       (result)=>alert("new user created"+ result.id),
       (err)=>console.log(err),
       ()=>console.log("done")
     );
   }

   updateUser(){
     this.user.name="sam kroger";
     this.userdervice.updateUser(this.user).subscribe(
      (result)=>alert("user updated"),
       (err)=>console.log(err),
       ()=>console.log("done")
     );
   }
   deleteUser(){
     this.userdervice.deleteUser(this.user.id).subscribe(
      (result)=>alert("user deleted"),
       (err)=>console.log(err),
       ()=>console.log("done")
     );
   }
   getUserPosts(){
     this.posts=this.userdervice.getUserByPost(this.user.id);
   }

}
