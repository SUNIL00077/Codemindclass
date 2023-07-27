import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Top 3 bollywood Movies';
   name="sunil lengre";

  //  myInputMassage:string=" i am the parent component";
friendsAge:number= 24;
sunilInfo={
  firstname:"sunil",
  lastname:"lengare",
  qualification:"MSc micro",
  age:"24"
}

  
isBlue: boolean=true;

onShow() {
  alert('Hi everyone !!');
}

 

  onDivClick(){
    alert('onDi     vClick');
  }
show: boolean = true;

value:string;
appchildExist:boolean=true;

submit(){
  alert('okk thanks ');
}

GetChildData(sss){
  alert(sss);
  console.log(sss);
}

submitValue(val){
        this.value=val.value;
}

destroy(){
  this.appchildExist=false;
}

}


