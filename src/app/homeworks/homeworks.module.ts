import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworksRoutingModule } from './homeworks-routing.module';
import { AttributeDirectivesComponent } from '../components/homework/attribute-directives/attribute-directives.component';


@NgModule({
  declarations: [
    AttributeDirectivesComponent
  ],
  imports: [
    CommonModule,
    HomeworksRoutingModule
  ]
})
export class HomeworksModule { }
