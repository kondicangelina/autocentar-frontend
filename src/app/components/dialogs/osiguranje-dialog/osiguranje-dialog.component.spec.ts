import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsiguranjeDialogComponent } from './osiguranje-dialog.component';

describe('OsiguranjeDialogComponent', () => {
  let component: OsiguranjeDialogComponent;
  let fixture: ComponentFixture<OsiguranjeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsiguranjeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsiguranjeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
