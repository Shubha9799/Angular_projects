import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { ListCourseComponent } from './components/list-course/list-course.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
  {path:'course',component:ListCourseComponent},
  {path:'service',component:ServiceComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
