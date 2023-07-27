import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import {delay} from 'rxjs/operators'

@Component({
  selector: 'app-pipedemoreal',
  templateUrl: './pipedemoreal.component.html',
  styleUrls: ['./pipedemoreal.component.css']
})
export class PipedemorealComponent implements OnInit {
  myObservable: any;
  presentDate = new Date();
  price: number=5000;
  jsonData = { id :'one',name:'Codemind'}

  digits: number = 100;
  constructor() { }

  ngOnInit() {
    this.myObservable = of('Some text').pipe(delay(3000));

    console.log(this.digits.toString().length);
  }

}
