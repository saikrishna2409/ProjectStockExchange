import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminadddetailsComponent } from './adminadddetails/adminadddetails.component';
import { AdmindocuploadComponent } from './admindocupload/admindocupload.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UpdateuserComponent } from './updateuser/updateuser.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateaccountComponent,
    UserloginComponent,
    AdminloginComponent,
    AdminadddetailsComponent,
    AdmindocuploadComponent,
    ViewusersComponent,
    UpdateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
