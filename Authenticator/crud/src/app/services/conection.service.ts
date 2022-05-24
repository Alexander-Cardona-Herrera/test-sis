import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {

  url='http://localhost:3000/api';
  constructor(private http: HttpClient) { }


  //Get Users
  getUsers()
  {
    return this.http.get(this.url);
  }


  //Get a single User
  getUser(id:number){
    return this.http.get(this.url+'/'+id);
  }


  //Add new User
  addUser(user:User)
  {
    return this.http.post(this.url, user);
  }


  //Delete an User
  deleteUser(id:number){
    return this.http.delete(this.url+'/'+id);
  }

  //Update User
  updateUser(id:number, user:User){
    return this.http.put(this.url+'/'+id, user);
  }
}

export interface User{
  id?:number;
  name:string;
  email:string;
  password:string;
}
