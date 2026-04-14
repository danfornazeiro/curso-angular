import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  imports: [FormsModule,CommonModule, NgClass, NgStyle],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.css'
})
export class TemplateBindingComponent {
  public name: string = 'Nelson Fornazeiro';
  public age: number = 30;

  constructor() {
    setTimeout(() => {
      this.name = 'Maria Silva';
      this.age = 25;
    }, 1000);
  }

  public sum(): number {
    //return a + b;
    return this.age++;
  }

  public isDisabled: boolean = false;

  public sub(): number {
    //return a - b;
    return this.age--;
  }

  public onKeyDown(event: Event): void {
    console.log('Key down event:', event);
  }

  public onMouseMove(event: any): void {
    console.log('Mouse event:', event);
  }
}
