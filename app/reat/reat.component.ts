import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reat',
  templateUrl: './reat.component.html',
  styleUrls: ['./reat.component.css']
})
export class ReatComponent implements OnInit {
  // myReactform : FormGroup;
  loginForm=new FormGroup({
    user:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
  })

  loginUser(){
    console.warn(this.loginForm.value);
  }

  get user() {
     return this.loginForm.get('user')
  }

  get password(){
    return this.loginForm.get('password')
  }
  constructor() { }

  ngOnInit() {
  // this.createForm();
  }
//   createForm(){
//     this.myReactform = new FormGroup({
      
//       'username':new FormControl(null,Validators.required),
//       'email': new FormControl(null,Validators.required)
//     })
    
//   }
// OnSubmit(){
//   console.log(this.myReactform.value);
// }
}
