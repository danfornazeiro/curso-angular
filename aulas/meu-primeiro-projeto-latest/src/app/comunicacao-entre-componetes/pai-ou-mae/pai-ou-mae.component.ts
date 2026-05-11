import { Component, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '../input/input.component';
import { OutputComponent } from '../output/output.component';

@Component({
  selector: 'app-pai-ou-mae',
  imports: [CommonModule, InputComponent, OutputComponent],
  templateUrl: './pai-ou-mae.component.html',
  styleUrl: './pai-ou-mae.component.css'
})
export class PaiOuMaeComponent {
  public name = signal("Nelson Aparecido Fornazeiro");
  public outputName = signal("Output: sem valor");
}
