import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  userName ;
  constructor(private utilityService: UtilityService ) {
    this.utilityService.userName.subscribe(res =>{
      this.userName = res;
    })
   }

  ngOnInit() {
  }

  updateUserName(uname){
  
    this.utilityService.userName.next(uname.value);
  }
}
