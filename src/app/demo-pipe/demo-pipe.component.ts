import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.class';

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.css']
})
export class DemoPipeComponent implements OnInit {

  currentDate: Date;
  argent: number = 156;

  person: Person = {
    nom: 'luc',
    age: 45
  }

  nameList: string[] = [
    'luc',
    'marie',
    'pol',
    'dominique',
    'louise'
  ]

  constructor() { }

  ngOnInit(): void {
    setInterval(() => this.currentDate = new Date(), 1000);
  }

}
