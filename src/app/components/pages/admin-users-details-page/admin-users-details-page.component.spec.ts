import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersDetailsPageComponent } from './admin-users-details-page.component';

describe('AdminUsersDetailsPageComponent', () => {
  let component: AdminUsersDetailsPageComponent;
  let fixture: ComponentFixture<AdminUsersDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminUsersDetailsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminUsersDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
