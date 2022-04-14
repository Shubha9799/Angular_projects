import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material/material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { FoodSearchComponent } from './food-search/food-search.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeCardsComponent } from './home-cards/home-cards.component';
import { FooterComponent } from './footer/footer.component';
//import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ResturantsComponent } from './resturants/resturants.component';
import { UserAuthService } from './services/user-auth.service';
import { ResturantNavbarComponent } from './resturants/resturant-navbar/resturant-navbar.component';
import { AddressDeliverTimeService } from './services/address-deliver-time.service';
import { ResturantsDetailsService } from './services/resturants-details.service';
import { ResturantDetailsComponent } from './resturants/resturant-details/resturant-details.component';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleDateComponent } from './schedule-date/schedule-date.component';
import { SnackbarrService } from './services/snackbarr.service';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { FoodCardComponent } from './resturants/resturant-details/food-card/food-card.component';
import {NonVegFoodCardComponent} from './resturants/resturant-details/non-veg-food-card/non-veg-food-card.component'
  import { from } from 'rxjs';
import { CurrentOrderComponent } from './resturants/resturant-details/current-order/current-order.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FoodSearchComponent,
    HomeCardsComponent,
    FooterComponent,
    SigninComponent,
    HomeComponent,
    ResturantsComponent,
    ResturantNavbarComponent,
    ResturantDetailsComponent,
    ScheduleDateComponent,
    OrderHistoryComponent,
    OfferDetailsComponent,
    FoodCardComponent,
    NonVegFoodCardComponent,
    CurrentOrderComponent,
    PlaceOrderComponent,
    PageNotFoundComponent,
    AdminLoginComponent,
    DashboardComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //FontAwesomeModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
  ],
  providers: [
    MatDialog,
    UserAuthService,
    AddressDeliverTimeService,
    ResturantsDetailsService,
    SnackbarrService
  ],
  entryComponents: [
    ScheduleDateComponent,
    OrderHistoryComponent,
    OfferDetailsComponent,
    CurrentOrderComponent,
    PlaceOrderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}