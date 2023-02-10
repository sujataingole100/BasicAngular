import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassPresentationComponent } from './ng-class-presentation.component';

describe('NgClassPresentationComponent', () => {
  let component: NgClassPresentationComponent;
  let fixture: ComponentFixture<NgClassPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgClassPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgClassPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
