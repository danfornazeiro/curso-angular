import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TesteComponent } from '../../teste/teste.component';

@Component({
  selector: 'app-new-component',
  imports: [CommonModule, TesteComponent],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.css'
})
export class NewComponentComponent {
  public name: string = 'Nelson Fornazeiro, o bravo!';
}
