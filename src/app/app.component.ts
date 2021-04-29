import { Component } from '@angular/core';
import { NumberService } from './services/number.service';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo Angular';
  nbr;

  constructor (private service: NumberService, private sService: SessionService){

    service.onNbrChanged.subscribe( ( value ) => this.nbr = value );

  }

  isLogged(){
    return this.sService.isLogged();
  }

  logout(){
    this.sService.logout();
  }
}
