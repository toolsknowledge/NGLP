import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pants',
  templateUrl: './pants.component.html',
  styles: [
  ]
})
export class PantsComponent implements OnInit {

  message:string;

  constructor() {
    this.message = "Pants !!!";
   }

  ngOnInit(): void {
  }

}
