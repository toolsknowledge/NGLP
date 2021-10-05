import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kids',
  templateUrl: './kids.component.html',
  styles: [
  ]
})
export class KidsComponent implements OnInit {

  message:string;

  constructor() {
    this.message = "Kids !!!";
   }

  ngOnInit(): void {
  }

}
