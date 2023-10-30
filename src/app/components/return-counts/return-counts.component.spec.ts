import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnCountsComponent } from './return-counts.component';

describe('ReturnCountsComponent', () => {
  let component: ReturnCountsComponent;
  let fixture: ComponentFixture<ReturnCountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnCountsComponent]
    });
    fixture = TestBed.createComponent(ReturnCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
