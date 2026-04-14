import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponentComponent],
  template: `
  <h1>Meu Primeiro Projeto Angular</h1>
  <h2>Components</h2>
  <app-new-component />
  `
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
