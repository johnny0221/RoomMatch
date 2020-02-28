
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplateComponent } from './template.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';


@NgModule({
    declarations: [
        TemplateComponent
    ],
    imports: [
        AngularMaterialModule,
        CommonModule,
        RouterModule,
    ],
    exports: [
        TemplateComponent
    ]
})

export class TemplateModule {}