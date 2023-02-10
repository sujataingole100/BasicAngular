import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayNSingleBindingComponent } from './two-way-nsingle-binding.component';

describe('TwoWayNSingleBindingComponent', () => {
  let component: TwoWayNSingleBindingComponent;
  let fixture: ComponentFixture<TwoWayNSingleBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayNSingleBindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayNSingleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
