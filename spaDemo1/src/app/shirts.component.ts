import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shirts',
  templateUrl: './shirts.component.html',
  styles: [
  ]
})
export class ShirtsComponent implements OnInit {

  message:string;


  constructor() {
    this.message = "Shirts Soon....!";
   }

  ngOnInit(): void {
  }

}
