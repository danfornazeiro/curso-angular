import { Component, signal } from '@angular/core';
import { InputAddItemComponent } from '../../../input-add-item/input-add-item.component';
import { IListItems } from '../../../input-add-item/interface/IListItems.interface';
import { InputListItemsComponent } from '../../components/input-list-items/input-list-items.component';
import { ELocalStorage } from '../../enums/ELocalStorage.enum';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [InputAddItemComponent, InputListItemsComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  public addItem = signal(true);

  #setListItems = signal<IListItems[]>(this.#parseItems());

  public getListItems = this.#setListItems.asReadonly();

  #parseItems(){
    return JSON.parse(localStorage.getItem(ELocalStorage.MY_LIST) || '[]');
  }

  public getInputAndAddItem(value: IListItems){
    localStorage.setItem(
      ELocalStorage.MY_LIST,
      JSON.stringify([...this.#setListItems(), value])
    );

    return this.#setListItems.set(this.#parseItems());
  }

  public deleteAllItems(){
    Swal.fire({
      title: "Tem certeza?",
      text: "Você não poderá reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, Delete tudo!"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem(ELocalStorage.MY_LIST);
        return this.#setListItems.set(this.#parseItems());
      }
    });
  }

  public listItemsStage(stage: 'pending' | 'completed') {
    return this.getListItems().filter((res: IListItems) => {
      if(stage === 'pending') return res.checked === false;
      if(stage === 'completed') return res.checked === true;
      return res;
    });
  }

  #updateLocalStorage(){
    return localStorage.setItem(ELocalStorage.MY_LIST, JSON.stringify(this.#setListItems()));
  }

  public updateItemCheckboxes(newItem: {id: string, checked: boolean}){
    this.#setListItems.update((oldValue: IListItems[]) => {
      oldValue.filter(res => {
        if (res.id === newItem.id) {
          res.checked = newItem.checked;
          return res;
        }
        return res;
      });
      return oldValue;
    });

    return this.#updateLocalStorage();
  }

  public updateItemText(newItem: {id: string, value: string}){
    console.log('newItem', newItem);
    this.#setListItems.update((oldValue: IListItems[]) => {
      oldValue.filter(res => {
        if (res.id === newItem.id) {
          res.value = newItem.value;
          return res;
        }
        return res;
      });
      return oldValue;
    });

    return this.#updateLocalStorage();
  }

  public deleteItem(deletedItem: {id: string}){
    Swal.fire({
      title: "Tem certeza?",
      text: "Você não poderá reverter isso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, Delete o item!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.#setListItems.update((oldValue: IListItems[]) => {
          return oldValue.filter(res => res.id !== deletedItem.id);
        });

        return this.#updateLocalStorage();
      }
    });
  }
}
