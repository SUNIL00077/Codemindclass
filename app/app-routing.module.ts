import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthsGuard } from './auths.guard';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginformComponent } from './loginform/loginform.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { ProductComponent } from './product/product.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { TvComponent } from './product/tv/tv.component';
import { ServiceComponent } from './service/service.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  
   {path:'product', canActivate:[AuthsGuard], loadChildren: './product/product.module#ProductModule' }
  
  
  // {path:'**', component: PagenotfoundComponent}



  // {path:'',redirectTo:'login' ,pathMatch:'full'},
  // {path:'login',component:LoginComponent},
  // {path:'loginform',component:LoginformComponent},
  // {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
    