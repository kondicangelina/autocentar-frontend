import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipvozilaComponent } from './tipvozila.component';

describe('TipvozilaComponent', () => {
  let component: TipvozilaComponent;
  let fixture: ComponentFixture<TipvozilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipvozilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipvozilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
