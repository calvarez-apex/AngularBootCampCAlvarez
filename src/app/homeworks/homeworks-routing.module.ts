import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeDirectivesComponent } from '../components/homework/attribute-directives/attribute-directives.component';

const routes: Routes = [
  { path: 'attribute-directives', component: AttributeDirectivesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeworksRoutingModule { }
