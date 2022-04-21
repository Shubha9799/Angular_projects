import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTicketComponent } from './create-ticket/create-ticket.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:'login',component:LoginComponent},
  {path:'create-ticket',component:CreateTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
