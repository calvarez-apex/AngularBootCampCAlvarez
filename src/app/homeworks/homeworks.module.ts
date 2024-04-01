import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworksRoutingModule } from './homeworks-routing.module';
import { CustomDirectiveComponent } from '../components/homework/custom-directive/custom-directive.component';
import { CapitalizeDirective } from '../directives/capitalize.directive';


@NgModule({
  declarations: [
    CustomDirectiveComponent,
    CapitalizeDirective
  ],
  imports: [
    CommonModule,
    HomeworksRoutingModule
  ]
})
export class HomeworksModule { }
