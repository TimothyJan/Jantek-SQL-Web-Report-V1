import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class JantekService {
  isAuthenticated: boolean = false;
  isAuthenticatedChange: Subject<boolean> = new Subject<boolean>();

  demoUsername:string = "jantek";
  demoPassword:string = "jantek";

  constructor(
    private _alertService: AlertService
    ) { }

  login(loginUsername: string, loginPassword: string): boolean {
    /* Check if user in database */
    if(loginUsername == this.demoUsername && loginPassword == this.demoPassword) {
      this.isAuthenticatedChange.next(true);
      this._alertService.openSnackBar("Login Successful");
      return true;
    }
    this._alertService.openSnackBar("Incorrect Login");
    return false;
  }
}
