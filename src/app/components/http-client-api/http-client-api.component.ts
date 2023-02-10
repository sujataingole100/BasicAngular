import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-http-client-api',
  templateUrl: './http-client-api.component.html',
  styleUrls: ['./http-client-api.component.css'],
})
export class HttpClientApiComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {
  languagesList: any;
  LanguageTopic: any;
  showtable: boolean = false;
  addlanguageobj: any = {
    LanguageId: 0,
    Language: ''
  };
  alertType: string = 'error';
  constructor(private http: HttpClient, private langSer: LanguageService) {
    this.languagesList = [];
    this.LanguageTopic = [];
  }

  ngOnInit(): void {
    this.getlanguageslist();
    this.http.get('http://storeapi.gerasim.in/api/Interview/GetLanguageTopic').subscribe(result => {
      this.LanguageTopic = result;
    })
    setTimeout(() => {
      this.alertType = "success";
    }, 1000);
  }
  showtable2() {
    this.showtable = true;
  }
  hidetable2() {
    this.showtable = false;
  }
  getlanguageslist() {
    this.langSer.getlanguageslist().subscribe((data: any) => {
      this.languagesList = data;
    })
  }
  addLanguage() {
    this.langSer.addLanguage(this.addlanguageobj).subscribe((result: any) => {
      this.languagesList = result;
      this.getlanguageslist();
    })
  }
  ngOnChanges() {
    console.log("ngOnChanges");
  }
  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }
}
