import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck, AfterContentInit,AfterContentChecked,
AfterViewInit , AfterViewChecked ,OnDestroy{

@Input() name:string;

counter;
num:number= 1 ;
  
  constructor() { 
    console.log('constructor called');
  }
  ngOnDestroy(): void {
   console.log('ngOnDestroy called')
  }
  ngAfterViewChecked(): void {
   console.log('ngAfterviewchecked called')
  }
  ngAfterViewInit(): void {
   console.log('ngAfterViewInit called')
  }
  ngAfterContentChecked(): void {
   console.log('ngafterContentChecked called')
  }
  ngAfterContentInit(): void {
   console.log('ngAfterContentInit called')
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called')

    console.log(changes);
}

  ngOnInit() {
    console.log('onInit called');
  }

     Counter =setInterval(() =>{
    this.num =this.num+1 ;
    console.log(this.num);
  },1000)
}