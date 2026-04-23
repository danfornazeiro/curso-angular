import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  public firstName = signal('Nelson');
  public lastName = signal('Fornazeiro');

  public fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  public array = signal([1]);

  /*
    effect - raramente são necessarios na maioria dos codigos,
    mas podem ser uteis em circunstancias especificas.
    - Registro de dados sendo exibidos e quando eles mudam, seja para análise
      ou comoferramenta de depuração

    - manter os dados sincronizados com o windows.localstorage

    - Adicionando comportamento DO?M personalizado que não pode ser expresso com
    sintaxe de modelo

    - executar renderização personalizada em um canvas, biblioteca de gráficos ou outra
    bilblioteca de UI de terceiros
  */

  constructor() {
    effect(() => {
      console.log(this.firstName())
      console.log(this.array())
      console.log(this.firstName())
    })
  }


  public updateName(){
    return this.firstName.set('João');
  }

  public updateArray(){
    this.firstName.update(() => {return "João"})

    this.array.update((oldValue: Array<number>) => {
      console.log(oldValue)
     //return [...oldValue, 2] //... desestrutura o array e , 2 é o novo valor passado
      return [...oldValue, oldValue.length + 1] //... desestrutura o array e , 2 é o novo valor passado
    });
  }

}
