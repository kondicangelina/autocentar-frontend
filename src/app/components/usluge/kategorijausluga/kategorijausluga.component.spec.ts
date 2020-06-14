import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijauslugaComponent } from './kategorijausluga.component';

describe('KategorijauslugaComponent', () => {
  let component: KategorijauslugaComponent;
  let fixture: ComponentFixture<KategorijauslugaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorijauslugaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijauslugaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
