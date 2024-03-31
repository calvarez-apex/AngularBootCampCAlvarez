import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworksRoutingModule } from './homeworks-routing.module';
import { Example3Component } from '../components/homework/example3/example3.component';
import { CapitalizeDirective } from '../directives/capitalize.directive';


@NgModule({
  declarations: [
    Example3Component,
    CapitalizeDirective
  ],
  imports: [
    CommonModule,
    HomeworksRoutingModule
  ]
})
export class HomeworksModule { }
