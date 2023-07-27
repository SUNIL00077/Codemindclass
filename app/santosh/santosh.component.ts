import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-santosh',
  templateUrl: './santosh.component.html',
  styleUrls: ['./santosh.component.css']
})
export class SantoshComponent implements OnInit {

// @Input()myinputMsg:string;
@Output()myOutput:EventEmitter<string>= new EventEmitter();
outputMessage:string='I am child component.';

  constructor() { }



  ngOnInit() {

    // console.log( 'This is coming from parent',this.myinputMsg);
  }

  sendValues(){
    this.myOutput.emit(this.outputMessage);
  }
  // name="Santosh Devkate";
  // age="27";
  //  image='nature image.jpg';
  // sendvalues(){
  //   this.myOutput.EventEmitter
  }





