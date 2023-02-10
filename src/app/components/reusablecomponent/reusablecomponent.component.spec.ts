import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusablecomponentComponent } from './reusablecomponent.component';

describe('ReusablecomponentComponent', () => {
  let component: ReusablecomponentComponent;
  let fixture: ComponentFixture<ReusablecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusablecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusablecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
