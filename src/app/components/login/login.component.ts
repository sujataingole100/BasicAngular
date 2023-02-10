import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginObj: any
  constructor(private accountSer: LoginService, private route: Router) {
    this.loginObj = {
      EmailId: '',
      Password: ''
    }
  }

  ngOnInit(): void {

  }
  OnLogin() {
    this.accountSer.OnLogin(this.loginObj).subscribe((result: any) => {
      localStorage.setItem('token', result.token);
      this.route.navigateByUrl('/home')
    })
  }


}
