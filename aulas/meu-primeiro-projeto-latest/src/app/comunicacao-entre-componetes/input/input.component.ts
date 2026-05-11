import tr from '@angular/common/locales/tr';
import { Component, Input, signal } from '@angular/core';

function toUpperCase(value: string) {
  return value.toUpperCase();
}

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  public name = signal('Sem dados');

  @Input({
    //alias: 'abacaxi'
    required: true,
    transform: toUpperCase
    //transform: (value: string) => value.toUpperCase()
  //}) public name: string = 'Sem dados';
  }) set inputName(value: string) {
    this.name.set(value);
  }
}
