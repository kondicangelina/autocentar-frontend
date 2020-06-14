import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistracijaDialogComponent } from './registracija-dialog.component';

describe('RegistracijaDialogComponent', () => {
  let component: RegistracijaDialogComponent;
  let fixture: ComponentFixture<RegistracijaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistracijaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistracijaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
