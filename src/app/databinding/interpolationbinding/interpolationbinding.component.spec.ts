import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationbindingComponent } from './interpolationbinding.component';

describe('InterpolationbindingComponent', () => {
  let component: InterpolationbindingComponent;
  let fixture: ComponentFixture<InterpolationbindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterpolationbindingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolationbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
