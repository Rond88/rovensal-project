import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchUnrouted } from './product-search-unrouted';

describe('ProductSearchUnrouted', () => {
  let component: ProductSearchUnrouted;
  let fixture: ComponentFixture<ProductSearchUnrouted>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSearchUnrouted]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSearchUnrouted);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
