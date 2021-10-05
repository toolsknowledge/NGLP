import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'polo',
  templateUrl: './polo.component.html',
  styles: [
  ]
})
export class PoloComponent implements OnInit {

  message:string;


  constructor() { 
    this.message = "Polo !!!";
  }

  ngOnInit(): void {
  }

}
