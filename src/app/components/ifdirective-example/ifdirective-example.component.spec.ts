import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfdirectiveExampleComponent } from './ifdirective-example.component';

describe('IfdirectiveExampleComponent', () => {
  let component: IfdirectiveExampleComponent;
  let fixture: ComponentFixture<IfdirectiveExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfdirectiveExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfdirectiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
