import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Output('out')
  addEvent = new EventEmitter<string>();

  toAdd: string;

  constructor() { }

  ngOnInit(): void {
  }

  addNom(){
    this.addEvent.emit( this.toAdd );
  }

}
