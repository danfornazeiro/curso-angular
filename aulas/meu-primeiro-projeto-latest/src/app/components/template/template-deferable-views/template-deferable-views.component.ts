import { Component } from '@angular/core';
import { NewComponentComponent } from "../../new-component/new-component.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-deferable-views',
  imports: [CommonModule, NewComponentComponent],
  templateUrl: './template-deferable-views.component.html',
  styleUrl: './template-deferable-views.component.css'
})
export class TemplateDeferableViewsComponent {
  public isTrue = false;
}
