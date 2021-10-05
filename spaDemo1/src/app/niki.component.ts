import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'niki',
  templateUrl: './niki.component.html',
  styles: [
  ]
})
export class NikiComponent implements OnInit {

  message:string;

  constructor() {
    this.message = "Niki !!!";
   }

  ngOnInit(): void {
  }

}
