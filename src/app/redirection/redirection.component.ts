import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redirection',
  templateUrl: './redirection.component.html',
  styleUrls: ['./redirection.component.css']
})
export class RedirectionComponent implements OnInit {

  checkParity: number = 0;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onClick(){
    // this.router.navigateByUrl('/parity/'+this.checkParity);
    this.router.navigate( ['parity', this.checkParity] );
  }

}
