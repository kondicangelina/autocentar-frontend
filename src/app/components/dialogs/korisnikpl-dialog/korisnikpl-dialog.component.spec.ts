import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikplDialogComponent } from './korisnikpl-dialog.component';

describe('KorisnikplDialogComponent', () => {
  let component: KorisnikplDialogComponent;
  let fixture: ComponentFixture<KorisnikplDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorisnikplDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikplDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
