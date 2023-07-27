import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { LaptopComponent } from './laptop/laptop.component';
import { TabletComponent } from './tablet/tablet.component';
import { TvComponent } from './tv/tv.component';
import { RouterModule, Routes } from '@angular/router';
import { UtilityModule } from '../appModules/utility.module';


const prodRoutes : Routes = [
  {path:'product',  children:[
    {path:'',component:ProductComponent},
    {path:'laptop',component:LaptopComponent},
    {path:'tablet',component:TabletComponent},
    {path:'tv',component:TvComponent},


  ]},
]


@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
    TabletComponent,
    TvComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),

    UtilityModule,
  ],
  exports:  [
    RouterModule
  ],
})
export class ProductModule { }
