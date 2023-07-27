import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  
  loginForm = new FormGroup({
    'email': new FormControl('',Validators.required),
    'password': new FormControl('',Validators.required),
  })
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(){
    console.log(this.loginForm.value);
     alert("Login Successfull");
  }
}
