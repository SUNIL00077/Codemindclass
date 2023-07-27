import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  title = 'Top 3 bollywood Movies';
  movies : Movie[] =[
    {title:'3 Idiots', director:'rajkumar', cast:'amir khan',releasedate:'2009'},
  {title:'lagaan', director:'ashutosh',cast:'amir khan', releasedate:'2020'},
  {title:'Tanhaji', director:'omraout', cast:'ajay', releasedate:'2020'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
class Movie {
  title:string;
  director:string;
  cast:string;
  releasedate:string
}