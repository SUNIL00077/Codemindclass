import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

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
