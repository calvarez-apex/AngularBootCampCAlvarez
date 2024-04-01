import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeworksRoutingModule } from './homeworks-routing.module';
import { Example4Component } from '../components/homework/example4/example4.component';


@NgModule({
  declarations: [
    Example4Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeworksRoutingModule
  ]
})
export class HomeworksModule { }
