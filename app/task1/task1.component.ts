import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  people : any[] = [
    {
      "name": 'Jack',
      "country": 'UK'
    },
    {
      "name": 'Sumit',
      "country": 'USA'
    },
    {
      "name": 'Anup',
      "country": 'HK'
    },
    {
      "name": 'Dnyanesh',
      "country": 'UK'
    },
    {
      "name": 'Codemind',
      "country": 'USA'
    }
  ]




  // country=[
  //   "india",
  // ] 
  // state=[
  //   "Maharastra",
  // ]
  //   dist=[
  //     "solapur", 
  //   ]
  //  village=[
  //   "Dhayti"
  //  ]
    
  

  constructor() { }

  ngOnInit() {
  }

}
