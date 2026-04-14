import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template-variables/template-variables.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NewComponentComponent,
    TemplateBindingComponent,
    TemplateVariablesComponent
  ],
  template: `
  <h1>Meu Primeiro Projeto Angular</h1>

  <app-template-binding />
  <app-template-variables />
  `
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
