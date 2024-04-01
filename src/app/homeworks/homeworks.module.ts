import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeworksRoutingModule } from './homeworks-routing.module';
import { DataBindingComponent } from '../components/homework/data-binding/data-binding.component';


@NgModule({
  declarations: [
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeworksRoutingModule
  ]
})
export class HomeworksModule { }
