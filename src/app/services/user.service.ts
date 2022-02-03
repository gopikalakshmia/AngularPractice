
import { Iuser } from './../interfaces/iuser';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 
  }

  getUser():Observable <Iuser[]>{
    return this.http.get<Iuser[]>("https://jsonplaceholder.typicode.com/users");

  }
   getUserById(id:number):Observable<Iuser>{
     return this.http.get<Iuser>("https://jsonplaceholder.typicode.com/users/"+id);
   }
   createUser(user:Iuser):Observable<Iuser>{
     return this.http.post<Iuser>("https://jsonplaceholder.typicode.com/users",user);
   }
   updateUser(user:Iuser){
     return this.http.put("https://jsonplaceholder.typicode.com/users",user);
   }
   deleteUser(id:number){
     return this.http.delete("https://jsonplaceholder.typicode.com/users/"+id);
   }
   getUserByPost(id:number){
     let params=new HttpParams().set("postId",id);
     return this.http.get("https://jsonplaceholder.typicode.com/comments",{params})
   }
}
