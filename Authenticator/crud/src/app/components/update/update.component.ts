import { Component, OnInit } from '@angular/core';
import { ConectionService, User } from '../../services/conection.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  user: User = {
    name:'',
    email:'',
    password:''
  };

  constructor(private ConectionService: ConectionService,
              private router: Router,
              private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const user_id = this.activeRoute.snapshot.params['id'];
    console.log(user_id);
    if (user_id) {
      this.ConectionService.getUser(user_id).subscribe({
          next: (res: any) =>{ this.user = res[0];
          console.log(this.user)},
          error: (err) => console.log(err)
      });
    }
  }

  update() {
    console.log(this.user.id)
    this.ConectionService.updateUser(this.user.id!, this.user).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err)
    });
    this.router.navigate(['/home']);
  }

}
