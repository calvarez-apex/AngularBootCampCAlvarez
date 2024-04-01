import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructuralDirectivesComponent } from '../components/homework/structural-directives/structural-directives.component';

const routes: Routes = [
  { path: 'structural-directives', component: StructuralDirectivesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeworksRoutingModule { }
