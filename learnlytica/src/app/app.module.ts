import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatDialogModule } from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { CourseComponent } from './components/course/course.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { AddressComponent } from './components/address/address.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContainerComponent,
    ListCourseComponent,
    CourseComponent,
    ServiceComponent,
    ContactComponent,
    NotfoundComponent,
    HomeComponent,
    AddressComponent,
    LoginComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule
  

  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
