import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijauslugaDialogComponent } from './kategorijausluga-dialog.component';

describe('KategorijauslugaDialogComponent', () => {
  let component: KategorijauslugaDialogComponent;
  let fixture: ComponentFixture<KategorijauslugaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorijauslugaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijauslugaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
