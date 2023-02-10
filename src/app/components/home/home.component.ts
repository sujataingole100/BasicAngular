import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private accountSer:LoginService) { }

  ngOnInit(): void {
    this.loadCustomer();
  }
  loadCustomer() {
    this.accountSer.getAllCustomer().subscribe((result: any) => {
      debugger;
    })
  }
}
