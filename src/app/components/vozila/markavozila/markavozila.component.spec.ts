import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkavozilaComponent } from './markavozila.component';

describe('MarkavozilaComponent', () => {
  let component: MarkavozilaComponent;
  let fixture: ComponentFixture<MarkavozilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkavozilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkavozilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
