import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TemplateBindingComponent } from './components/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template-variables/template-variables.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferableViewsComponent } from './components/template/template-deferable-views/template-deferable-views.component';
import { SignalsComponent } from './components/signals/signals/signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TemplateBindingComponent,
    TemplateVariablesComponent,
    TemplateControlFlowComponent,
    TemplateDeferableViewsComponent,
    SignalsComponent
  ],
  template: `
  <!--<h1>Meu Primeiro Projeto Angular</h1>

  <app-template-binding />
  <app-template-variables />-->
  <h1>Curso de Angular</h1>

  <!--<app-template-control-flow /> -->
  <!--<app-template-deferable-views />-->
  <app-signals />
  `
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
