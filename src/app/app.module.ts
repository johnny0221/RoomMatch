import { BrowserModule } from '@angular/platform-browser';
// primeNg Module
import {ButtonModule} from 'primeng/button';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './LandingPage/LandingPage.component';

@NgModule({
   declarations: [
      AppComponent,
      LandingPageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ButtonModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
