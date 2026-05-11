import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  @Output() public outputName = new EventEmitter();

  public sendOutputName(){
    this.outputName.emit("Nelson Fornazeiro");
  }
}
