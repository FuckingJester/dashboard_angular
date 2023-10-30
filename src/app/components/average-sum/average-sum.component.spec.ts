import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageSumComponent } from './average-sum.component';

describe('AverageSumComponent', () => {
  let component: AverageSumComponent;
  let fixture: ComponentFixture<AverageSumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AverageSumComponent]
    });
    fixture = TestBed.createComponent(AverageSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
