import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './LandingPage/LandingPage.component';
import { HomeComponent } from './Home/Home.component';


export const routes: Routes = [
  {path: '', component: LandingPageComponent },
  {path: 'home', component: HomeComponent}
];

