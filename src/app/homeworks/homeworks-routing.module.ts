import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialUIComponent } from '../components/homework/material-ui/material-ui.component';

const routes: Routes = [
  { path: 'material-ui', component: MaterialUIComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeworksRoutingModule { }
