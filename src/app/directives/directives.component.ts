import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  nbr: number = 0;
  toAdd: string;
  names: string[] = [
    "pol",
    "luc",
    "marie",
    "dominique"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addName(truc){
    this.names.push( this.toAdd );
    console.log(truc);
  }

  onBlur(event){
    console.log(event);
  }

}
