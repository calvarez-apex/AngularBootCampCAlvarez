import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example4',
  templateUrl: './example4.component.html',
  styleUrl: './example4.component.scss'
})
export class Example4Component {
  dataBinding: string = 'Hello World';

  alert(str: string){
    alert(str);
  }
}
