import { Component, OnInit } from '@angular/core';
import { NumberService } from '../services/number.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private service: NumberService) { }

  ngOnInit(): void {
  }

  inc(){
    this.service.increment();
  }

}
