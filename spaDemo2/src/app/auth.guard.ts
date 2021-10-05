import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class authGuard{
    canLoad():boolean{
        return confirm("do you want to enter into lazily loaded module ?");
    }
}