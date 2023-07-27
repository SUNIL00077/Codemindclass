import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { resolve } from 'url';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  submitted:boolean = false;
  myReactiveForm:FormGroup;
  notAllowedNames = ['Codemind', 'Technology', ];
  constructor() { }

  ngOnInit() {
    this.createForm();
  }

  NaNames(control:FormControl){
    if(this.notAllowedNames.indexOf(control.value)!== -1)
    {
      return{'nameIsNotAllowed':true}       
    }
    return null;
  }

  NaEmails(control: FormControl): Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) =>{
      setTimeout(() => {
        if(control.value === 'codemindtechnology@gmail.com')
        {
          resolve({'emailNotAllowed': true})
        }
        else
        {
          resolve(null)
        }
      },5000);
    })
    return myResponse;
  }

  createForm(){
    this.myReactiveForm = new FormGroup({
      'userDetails':new FormGroup({
        'username':new FormControl(null,[Validators.required, this.NaNames.bind(this)]),
      'email': new FormControl(null,[Validators.required, Validators.email], this.NaEmails)
      }),
      'course' : new FormControl('Angular'),
      'skill':new FormArray([
        new FormControl(null,Validators.required)
      ])
    })
    
    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDetails': {
    //       'username': 'Codemind1122',

    //       'email':'dnyanesh@outlook.com'
    //     },
    //     'course':'HTML',
    //     'skill':['Azure204']
    //   })
    // },5000)

    setTimeout(() =>{
      this.myReactiveForm.patchValue({
        'userDetails':{
          'username':'Technology',
          'email':'techno@gmail.com'
        }
      })
    })
  }

  OnSubmit(){
    this.submitted = true;
    console.log(this.myReactiveForm)
    // this.myReactiveForm.reset();
  }
  Cancel(){
    
    this.myReactiveForm.reset()
    this.myReactiveForm = new FormGroup({
      'userDetails':new FormControl(),
        'username':new FormControl(),
      'email': new FormControl(null),
      })
      // 'course': new FormControl('Angular'),
      //   'skill': new FormControl(),
          
      this.submitted=true;
    }

  OnAddSkills(){
    (<FormArray> this.myReactiveForm.get('skill')).push(new FormControl(null,Validators.required))
  }
  
} 
