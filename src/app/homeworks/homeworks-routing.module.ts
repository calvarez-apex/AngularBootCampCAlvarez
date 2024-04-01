import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Example4Component } from '../components/homework/example4/example4.component';

const routes: Routes = [
  { path: 'example4', component: Example4Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeworksRoutingModule { }
