import { BrowserModule } from '@angular/platform-browser';
// primeNg Module
import { NgModule } from '@angular/core';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
// Component Module
import { LandingPageModule } from './LandingPage/LandingPage.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './Home/Home.module';
@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      LandingPageModule,
      HomeModule,
      BrowserAnimationsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
