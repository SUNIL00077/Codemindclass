import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loginForm = new FormGroup({
    'userName': new FormControl('',Validators.required),
    'email': new FormControl('',Validators.required),
    'password': new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit() {
  }
  OnSubmit(){
    console.log(this.loginForm.value);
     alert("Login Successfull");
  }
}

