import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  age: number = 89;
  classe: string = 'red';

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => this.classe = 'green', 5000);

  }

}
