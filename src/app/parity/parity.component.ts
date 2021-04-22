import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parity',
  templateUrl: './parity.component.html',
  styleUrls: ['./parity.component.css']
})
export class ParityComponent implements OnInit {

  nbr: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) =>  this.nbr = params["nbr"]);
  }

}
