import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  msg:string;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login(username: string, password: string)
  {
// this.router.navigate(['product/laptop']);
var output = this.authService.checkusernameandpassword(username,password);
if (output == true) {
  this.router.navigate(['product/laptop']);
}
else{
  this.msg = 'Invalid username or password'
}
  }
}
