import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  canActivate():boolean{
    return confirm("do you want to enter into shirts page ?");
  }

  canDeactivate():boolean{
    return confirm("do you want to exit pants page ?");
  }


  canActivateChild():boolean{
    return confirm("do you want to enter into jeans page ?");
  }



}
