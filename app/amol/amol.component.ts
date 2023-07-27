import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amol',
  templateUrl: './amol.component.html',
  styleUrls: ['./amol.component.css']
})
export class AmolComponent implements OnInit {

  title = 'Address of Friends';
  address : address[] =[
    { Id:1,name:'amol', country:'India', state:'up',dist:'ub'},
  {Id:2,name:'santosh', country:'India',state:'mh', dist:'solapur'},
  {Id:3,name:'kalom', country:'India', state:'karnataka', dist:'salgar'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
class address {
  Id:number;
  name:string;
  country:string;
  state:string;
  dist:string
}