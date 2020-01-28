import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminadddetailsComponent } from './adminadddetails/adminadddetails.component';
import { AdmindocuploadComponent } from './admindocupload/admindocupload.component';


const routes: Routes = [
  
    { path:"home", component:HomeComponent},
    { path:"login", component:LoginComponent},
    { path:"createaccount",component:CreateaccountComponent},
    { path:"userlogin",component:UserloginComponent},
    { path:"adminlogin",component:AdminloginComponent},
    { path:"adminadddetails",component:AdminadddetailsComponent},
    { path:"admindocupload",component:AdmindocuploadComponent}
  
] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
