import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LogoutComponent } from './logout/logout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ViewdetailsComponent } from './viewdetails/viewdetails.component';

const routes: Routes = [{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'home',component:HomeComponent},
{path:'aboutus',component:AboutusComponent},
{path:'contactus',component:ContactusComponent},
{path:'logout',component:LogoutComponent},
{path:'welcome',component:WelcomeComponent},
{path:'studentdetails',component:StudentdetailsComponent},
{path:'adminpage',component:AdminpageComponent},
{path:'viewdetails',component:ViewdetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
