import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaAppComponent } from './toda-app.component';

describe('TodaAppComponent', () => {
  let component: TodaAppComponent;
  let fixture: ComponentFixture<TodaAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
