import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { HomeComponent } from './Home.component';
import { TemplateModule } from '../template/template.module';



@NgModule({
  declarations: [
      HomeComponent
  ],
  imports: [
    TemplateModule
  ]
})
export class HomeModule { }
