import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  rememberMe: boolean;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  loginAction(e) {
    const payload = {
      name: this.username,
      password: this.password
    }
    this.loginService.getLoginAccess(payload).subscribe(response => {
      console.log(JSON.stringify(response));
    });
  }

}
