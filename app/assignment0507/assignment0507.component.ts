import { sanitizeIdentifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-assignment0507',
  templateUrl: './assignment0507.component.html',
  styleUrls: ['./assignment0507.component.css']
})
export class Assignment0507Component implements OnInit {
// str:any;
  

  // submit(value){
  //   this.str=value;
  // }
  myformname:FormGroup;
  prodocts:any [];
  constructor( ) {
    this.method();
   }

  ngOnInit() {
    
  }
  method(){
    this.myformname= new FormGroup({
      'StudeNtame': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'DOB': new FormControl(null,Validators.required),
      'MobileNo': new FormControl(null,Validators.required),
      'Parsentage': new FormControl(null,Validators.required),
      'Course': new FormControl(null,Validators.required),
      'Country': new FormControl('India'),
     'State': new FormControl('Maharashtra')

      

    })
  }
  OnSubmit(){
    console.log(this.myformname);
    
  }
}