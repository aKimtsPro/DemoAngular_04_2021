import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  private nbr: number = 19;
  onNbrChanged : BehaviorSubject<number> = new BehaviorSubject<number>( this.nbr );

  constructor() { }

  increment(){
    this.nbr++;
    this.onNbrChanged.next( this.nbr );
  }

  decrement(){
    this.nbr--;
    this.onNbrChanged.next( this.nbr );
  }
}
