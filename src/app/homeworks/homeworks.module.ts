import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworksRoutingModule } from './homeworks-routing.module';
import { MaterialUIComponent } from '../components/homework/material-ui/material-ui.component';


@NgModule({
  declarations: [
    MaterialUIComponent
  ],
  imports: [
    CommonModule,
    HomeworksRoutingModule
  ]
})
export class HomeworksModule { }
