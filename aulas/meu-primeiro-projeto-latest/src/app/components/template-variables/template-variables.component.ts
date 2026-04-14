import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NewComponentComponent } from '../new-component/new-component.component';

@Component({
  selector: 'app-template-variables',
  imports: [NewComponentComponent],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.css'
})
export class TemplateVariablesComponent implements AfterViewInit {
  @ViewChild('name') nameInput!: ElementRef | undefined;
  @ViewChild('h3') nameH3!: ElementRef | undefined;

  @ViewChild(NewComponentComponent) public childComponent!: NewComponentComponent;

  ngAfterViewInit(): void {
    console.log(this.nameInput?.nativeElement.value);
    console.log(this.nameH3?.nativeElement.innerText);
    console.log(this.childComponent.name);
  }

}
