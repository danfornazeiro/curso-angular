import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, registerLocaleData, UpperCasePipe } from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { CustomStringPipe } from '../../../pipes/custom-string.pipe';

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    JsonPipe,
    AsyncPipe,
    DecimalPipe,
    CurrencyPipe,
    PercentPipe,
    CustomStringPipe
  ], // na forma antica era o CommonModule
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.css'
})
export class AngularPipesComponent {
  public date = signal(new Date());
  public json = signal({
    name: "Nelson Fornazeiro",
    age: 40,
    city: "São Paulo"
  });

  public loadingData$: Observable<string[]> = of ([
    "Angular",
    "React",
    "Vue"
  ]).pipe(delay(3000));
}
