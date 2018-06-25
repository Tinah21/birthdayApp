import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { BookingComponent } from './component/booking/booking.component';
import { BookingdetailsComponent } from './component/bookingdetails/bookingdetails.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    BookingdetailsComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
    RouterModule.forRoot([
      {
        path:''
      }
    ])

  
  ]
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 
}

