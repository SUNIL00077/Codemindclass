import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import {delay} from 'rxjs/operators'

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {
  myObservable: any;
  presentDate = new Date();
  price: number=5000;
  jsonData = { id :'one',name:'Codemind'}
  constructor() { }

  ngOnInit() {
    this.myObservable = of('Some text').pipe(delay(3000));
  }

}
