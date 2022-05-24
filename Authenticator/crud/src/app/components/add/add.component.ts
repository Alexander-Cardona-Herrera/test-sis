import { Component, OnInit } from '@angular/core';
import { ConectionService, User } from '../../services/conection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  user: User = {
    name:'',
    email:'',
    password:'',
  };

  constructor(private ConectionService: ConectionService, private router: Router) { }

  ngOnInit(): void {
  }

  add() {
    this.ConectionService.addUser(this.user).subscribe();
    this.router.navigate(['/home']);
  }

}
