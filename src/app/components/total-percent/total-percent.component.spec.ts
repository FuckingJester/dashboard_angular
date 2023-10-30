import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPercentComponent } from './total-percent.component';

describe('TotalPercentComponent', () => {
  let component: TotalPercentComponent;
  let fixture: ComponentFixture<TotalPercentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalPercentComponent]
    });
    fixture = TestBed.createComponent(TotalPercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
