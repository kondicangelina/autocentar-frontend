import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaplataDialogComponent } from './naplata-dialog.component';

describe('NaplataDialogComponent', () => {
  let component: NaplataDialogComponent;
  let fixture: ComponentFixture<NaplataDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaplataDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaplataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
