import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworksRoutingModule } from './homeworks-routing.module';
import { Example2Component } from '../components/homework/example2/example2.component';


@NgModule({
  declarations: [
    Example2Component
  ],
  imports: [
    CommonModule,
    HomeworksRoutingModule
  ]
})
export class HomeworksModule { }
