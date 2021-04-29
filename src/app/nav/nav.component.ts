import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private sService: SessionService) { }

  ngOnInit(): void {
  }

  isLogged(){
    return this.sService.isLogged()
  }

}
