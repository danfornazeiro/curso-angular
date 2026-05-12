import { ChangeDetectorRef, Component, ElementRef, EventEmitter, inject, Input, Output, ViewChild } from '@angular/core';
import { IListItems } from './interface/IListItems.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-input-add-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './input-add-item.component.html',
  styleUrl: './input-add-item.component.scss'
})
export class InputAddItemComponent {

  #cdr = inject(ChangeDetectorRef); //#cdr -> private, # -> campo privado, cdr -> change detector ref

  @ViewChild('inputText') public inputText!: ElementRef;

  @Input({required: true}) public inputListItems: IListItems[] = [];

  @Output() public outputAddListItens = new EventEmitter<IListItems>();

  public focusAndAddItem(value: string){
    if (value.trim()) {
      this.#cdr.detectChanges();
      this.inputText.nativeElement.value = '';

      const currentDate = new Date();
      const timeStamp = currentDate.getTime();
      const id = `ID ${timeStamp}`;

      this.outputAddListItens.emit({
        id,
        checked: false,
        value
      });

      return this.inputText.nativeElement.focus();
    }
  }
}
