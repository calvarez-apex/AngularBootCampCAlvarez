import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Example3Component } from '../components/homework/example3/example3.component';

const routes: Routes = [
  { path: 'example3', component: Example3Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeworksRoutingModule { }
