import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addremovearray',
  templateUrl: './addremovearray.component.html',
  styleUrls: ['./addremovearray.component.css']
})
export class AddremovearrayComponent implements OnInit {

  users=[];
  constructor() { }

  ngOnInit() {
  }


  OnCreateUser(uname){
    this.users.push({
      name:uname.value
    })
  }
  RemoveUser(){
    this.users.splice(this.users.length-1);
  }

  RemoveItem(item){
this.users.splice(item,1);
  }
}
