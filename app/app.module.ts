import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SunilComponent } from './sunil/sunil.component';
import { AmolComponent } from './amol/amol.component';
import { SantoshComponent } from './santosh/santosh.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgclassComponent } from './ngclass/ngclass.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { Task1Component } from './task1/task1.component';
import { CustomDirective } from './custom.directive';
import { ChildComponent } from './child/child.component';
import { Assignment0507Component } from './assignment0507/assignment0507.component';
import { SimpletemplateComponent } from './simpletemplate/simpletemplate.component';
import { DrivenformComponent } from './drivenform/drivenform.component';
import { AddremovearrayComponent } from './addremovearray/addremovearray.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReatComponent } from './reat/reat.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { DigitcountPipe } from './pipes/digitcount.pipe';
import { PipedemorealComponent } from './pipes/pipedemoreal/pipedemoreal.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { FilterPipe } from './pipes/filter.pipe';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { LoginformComponent } from './loginform/loginform.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ServiceModule } from './service/service.module';
import { AuthsGuard } from './auths.guard';
import { AuthService } from './services/auth.service';
import { UtilityService } from './services/utility.service';
import { ProductModule } from './product/product.module';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeFormComponent } from './employee-details/employee-form/employee-form.component';
import { EmployeeService } from './services/employee.service';








@NgModule({
  declarations: [
    AppComponent,
    SunilComponent,
    AmolComponent,
    SantoshComponent,
    NgswitchComponent,
    NgclassComponent,
    NgforComponent,
    NgswitchComponent,
    Task1Component,
  
    ChildComponent,
    Assignment0507Component,
    SimpletemplateComponent,
    DrivenformComponent,
    AddremovearrayComponent,
    ReactiveComponent,
    ReatComponent,
    PipedemoComponent,
    DigitcountPipe,
    PipedemorealComponent,
    Comp1Component,
    Comp2Component,
    FilterPipe,
    Comp3Component,
    Comp4Component,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PagenotfoundComponent,
  
    LoginformComponent,
    LoginComponent,
    SignupComponent,
    EmployeeDetailsComponent,
    EmployeeFormComponent,
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    ServiceModule,
    ProductModule,
  
  ],
  providers: [AuthService, AuthsGuard,UtilityService,EmployeeService], 
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('AppModule called')
  }
 }
