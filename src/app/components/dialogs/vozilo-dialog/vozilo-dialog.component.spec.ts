import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoziloDialogComponent } from './vozilo-dialog.component';

describe('VoziloDialogComponent', () => {
  let component: VoziloDialogComponent;
  let fixture: ComponentFixture<VoziloDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoziloDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoziloDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
