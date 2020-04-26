import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  signup = {
    username: '',
    password: '',
    password2: ''
  }
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSignUp(): void {
    this.userService.SignUp(this.signup)
  }

}
