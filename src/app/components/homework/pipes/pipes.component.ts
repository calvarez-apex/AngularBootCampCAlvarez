import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  message: string  = 'currency format transformation using pipe';
  amount: number = 1234567.89
}
