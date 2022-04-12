import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ServiceComponent } from './components/service/service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ListProfileComponent } from './components/list-profile/list-profile.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'course',component:ListCourseComponent},
  {path:'service',component:ServiceComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  { path:'profiles', component:ListProfileComponent },
  {path:'profiles/pid',component:ProfileDetailsComponent}  ,

  {path:'**',component:NotfoundComponent}

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
