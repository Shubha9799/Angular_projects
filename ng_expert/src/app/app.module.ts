import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegistrationComponent } from './registration/registration.component';
import { ListComponent } from './list/list.component';
import { IfComponent } from './if/if.component';
import { SwitchComponent } from './switch/switch.component';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ChildItemComponent } from './child-item/child-item.component';
import { ProfilListComponent } from './profil-list/profil-list.component';
import { ProfilComponent } from './profil/profil.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { ParentInfoComponent } from './parent-info/parent-info.component';
import { ChildInfoComponent } from './child-info/child-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent,
    RegistrationComponent,
    ListComponent,
    IfComponent,
    SwitchComponent,
    ParentListComponent,
    ChildItemComponent,
    ProfilListComponent,
    ProfilComponent,
    ContactListComponent,
    ContactComponent,
    ParentInfoComponent,
    ChildInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
