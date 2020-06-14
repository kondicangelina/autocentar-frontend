import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KorisnikplComponent } from './korisnikpl.component';

describe('KorisnikplComponent', () => {
  let component: KorisnikplComponent;
  let fixture: ComponentFixture<KorisnikplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KorisnikplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KorisnikplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
