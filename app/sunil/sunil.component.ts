import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-sunil',
  templateUrl: './sunil.component.html',
  styleUrls: ['./sunil.component.css']
})
export class SunilComponent implements OnInit {

  // @Input()age:number;
  @Input()record;
     store;




  constructor() { }

  ngOnInit() {

    // console.log("coming from parent",this.age);
    //  console.log('employee record coming from  parent object',this.record);
     var store= this.record
   console.log('employee record coming from  parent object',store);
  
     
  }



}
