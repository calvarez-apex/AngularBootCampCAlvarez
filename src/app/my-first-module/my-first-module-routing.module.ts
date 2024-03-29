import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFirstComponentComponent } from '../components/my-first-component/my-first-component.component';

const routes: Routes = [
  { path: 'myFirstComponent', component: MyFirstComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFirstModuleRoutingModule { }
