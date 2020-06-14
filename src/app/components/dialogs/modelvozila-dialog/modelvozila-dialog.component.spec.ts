import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelvozilaDialogComponent } from './modelvozila-dialog.component';

describe('ModelvozilaDialogComponent', () => {
  let component: ModelvozilaDialogComponent;
  let fixture: ComponentFixture<ModelvozilaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelvozilaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelvozilaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
