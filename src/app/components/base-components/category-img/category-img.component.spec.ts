import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryImgComponent } from './category-img.component';

describe('CategoryImgComponent', () => {
  let component: CategoryImgComponent;
  let fixture: ComponentFixture<CategoryImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryImgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
