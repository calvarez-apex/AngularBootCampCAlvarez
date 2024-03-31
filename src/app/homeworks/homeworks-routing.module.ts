import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Example2Component } from '../components/homework/example2/example2.component';

const routes: Routes = [
  { path: 'example2', component: Example2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeworksRoutingModule { }
