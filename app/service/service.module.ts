import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceComponent } from './service.component';
import { Service2Component } from './service2/service2.component';

import { RouterModule, Routes } from '@angular/router';
import { Service1Component } from './service1/service1.component';
import { UtilityModule } from '../appModules/utility.module';

const prodRoutes : Routes = [
  {path:'service',  children:[
    {path:'',component:ServiceComponent},
    {path:'service1',component:Service1Component},
    {path:'service2',component:Service2Component},

  ]},
]



@NgModule({
  declarations: [
    ServiceComponent,
    Service2Component,
    Service1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),

    UtilityModule,
  ],
  
  exports:  [
    RouterModule
  ]
})
export class ServiceModule { }
