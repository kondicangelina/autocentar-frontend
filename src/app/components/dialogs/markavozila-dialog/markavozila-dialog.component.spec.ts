import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkavozilaDialogComponent } from './markavozila-dialog.component';

describe('MarkavozilaDialogComponent', () => {
  let component: MarkavozilaDialogComponent;
  let fixture: ComponentFixture<MarkavozilaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkavozilaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkavozilaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
