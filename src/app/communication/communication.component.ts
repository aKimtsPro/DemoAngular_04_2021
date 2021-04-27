import { Component, OnInit } from '@angular/core';
import { NumberService } from '../services/number.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit {

  inputValue: string;
  listNom: string[] = [];

  constructor(private service: NumberService) { }

  ngOnInit(): void {
  }

  onAdd(toAdd: string){

    console.log(toAdd);
    this.listNom.push(toAdd);
  }

  dec(){
    this.service.decrement();
  }

}
