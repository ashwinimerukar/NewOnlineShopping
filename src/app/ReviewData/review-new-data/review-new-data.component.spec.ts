import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewNewDataComponent } from './review-new-data.component';

describe('ReviewNewDataComponent', () => {
  let component: ReviewNewDataComponent;
  let fixture: ComponentFixture<ReviewNewDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewNewDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewNewDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
