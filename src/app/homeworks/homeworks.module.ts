import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworksRoutingModule } from './homeworks-routing.module';
import { StructuralDirectivesComponent } from '../components/homework/structural-directives/structural-directives.component';


@NgModule({
  declarations: [
    StructuralDirectivesComponent
  ],
  imports: [
    CommonModule,
    HomeworksRoutingModule
  ]
})
export class HomeworksModule { }
