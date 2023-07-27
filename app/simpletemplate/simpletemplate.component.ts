import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-simpletemplate',
  templateUrl: './simpletemplate.component.html',
  styleUrls: ['./simpletemplate.component.css']
})
export class SimpletemplateComponent implements OnInit {

  submitted:boolean=false;
  formData={
   username:'',
   email:'',
   course:'',
   gender:'',
  }


  defaultGender='Male'
 defaultValue="Angular"
 genders=[
  { id:'1', value:'Male'},
  { id: '2', value:'Female'}
 ]
  constructor() { }

  ngOnInit() {}

  OnSubmit(form:NgForm){
  //   console.log(form.value.course);
  // console.log(form.value.userDetail.email)

  this.submitted = true;
  this.formData.username = form.value.userDetail.username;
  this.formData.email = form.value.userDetail.email;
  this.formData.course = form.value.course;
  this.formData.gender = form.value.gender;
  console.log('formData', this.formData)
  }
  
}