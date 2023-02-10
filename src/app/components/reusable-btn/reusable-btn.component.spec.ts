import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableBtnComponent } from './reusable-btn.component';

describe('ReusableBtnComponent', () => {
  let component: ReusableBtnComponent;
  let fixture: ComponentFixture<ReusableBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
