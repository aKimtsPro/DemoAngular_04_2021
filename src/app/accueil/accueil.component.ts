import { Component, OnInit } from '@angular/core';
import { NumberService } from '../services/number.service';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(private service: NumberService, private sService: SessionService) { }

  ngOnInit(): void {
  }

  inc(){
    this.service.increment();
  }

  isLogged(){
    return this.sService.isLogged();
  }

  getUserInfo(){
    return this.sService.getUserInfo();
  }

}
