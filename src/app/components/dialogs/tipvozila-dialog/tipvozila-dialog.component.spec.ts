import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipvozilaDialogComponent } from './tipvozila-dialog.component';

describe('TipvozilaDialogComponent', () => {
  let component: TipvozilaDialogComponent;
  let fixture: ComponentFixture<TipvozilaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipvozilaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipvozilaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
