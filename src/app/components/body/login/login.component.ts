import { Component } from '@angular/core';
import { JantekService } from '../../../services/jantek.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string;
  password:string;

  constructor(
    private _jantekService: JantekService,
  ) {}

  onLogin() {
    this.username = (<HTMLInputElement>document.getElementById("Username")).value;
    this.password = (<HTMLInputElement>document.getElementById("Password")).value;
    this._jantekService.login(this.username, this.password);
  }

}
