import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jeans',
  templateUrl: './jeans.component.html',
  styles: [
  ]
})
export class JeansComponent implements OnInit {
  message:string;

  constructor() {
     this.message = "Jeans !!!";
   }

  ngOnInit(): void {
  }

}
