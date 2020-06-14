import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenovnikDialogComponent } from './cenovnik-dialog.component';

describe('CenovnikDialogComponent', () => {
  let component: CenovnikDialogComponent;
  let fixture: ComponentFixture<CenovnikDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenovnikDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenovnikDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
