import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientApiComponent } from './http-client-api.component';

describe('HttpClientApiComponent', () => {
  let component: HttpClientApiComponent;
  let fixture: ComponentFixture<HttpClientApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpClientApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpClientApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
