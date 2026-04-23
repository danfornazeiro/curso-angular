import { AsyncPipe, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-template-control-flow',
  imports: [AsyncPipe, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './template-control-flow.component.html',
  styleUrl: './template-control-flow.component.css'
})
export class TemplateControlFlowComponent {
  public isTrue: boolean = true;
  public itens = [{ name: 'Nelson Fornazeiro'}];
  public itensNew: Array<{ name: string }> = [];
  public switchValue = "A";
  public loadingData$: Observable<string[]> = of([
    'Data 1',
    'Data 2',
    'Data 3'
  ]).pipe(delay(3000));

  public trackByFn(index: number) {
    return index;
  }

  public addNewName(value: string) {
    this.itens.push({ name: value });
  }

}
