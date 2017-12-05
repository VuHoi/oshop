import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQuatityComponent } from './product-quatity.component';

describe('ProductQuatityComponent', () => {
  let component: ProductQuatityComponent;
  let fixture: ComponentFixture<ProductQuatityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductQuatityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductQuatityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
