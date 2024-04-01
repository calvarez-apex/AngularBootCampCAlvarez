import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeworksRoutingModule } from './homeworks-routing.module';
import { PipesComponent } from '../components/homework/pipes/pipes.component';
import { MyCurrencyPipe } from '../pipes/my-currency.pipe';
import { MyCapitalizedPipe } from '../pipes/my-capitalized.pipe';


@NgModule({
  declarations: [
    PipesComponent,
    MyCurrencyPipe,
    MyCapitalizedPipe
  ],
  imports: [
    CommonModule,
    HomeworksRoutingModule
  ]
})
export class HomeworksModule { }
