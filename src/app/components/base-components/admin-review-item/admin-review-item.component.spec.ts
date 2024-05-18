import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReviewItemComponent } from './admin-review-item.component';

describe('AdminReviewItemComponent', () => {
  let component: AdminReviewItemComponent;
  let fixture: ComponentFixture<AdminReviewItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminReviewItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminReviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
