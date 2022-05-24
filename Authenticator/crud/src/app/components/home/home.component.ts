import { Component, OnInit } from '@angular/core';
import { ConectionService, User } from '../../services/conection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ListUsers: User[] = [];

  constructor(private ConectionService:ConectionService, private router: Router) { }

  ngOnInit(): void {
    this.listUsers();
  }


  listUsers()
  {
    this.ConectionService.getUsers().subscribe({
      next: (res=>{
        console.log(res),
        this.ListUsers = <any>res
      }),
      error: (err) => console.log(err)
    });
  }


  delete(id:number) {
    this.ConectionService.deleteUser(id).subscribe({
      next: (res) => {
        console.log(res)
        this.listUsers();
      },
      error: (err) => console.log(err)
    });
  }

  update(id:number){
    this.router.navigate(['/update/'+id]);
  }

}