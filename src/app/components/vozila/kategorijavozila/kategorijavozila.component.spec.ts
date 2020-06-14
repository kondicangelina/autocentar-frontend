import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijavozilaComponent } from './kategorijavozila.component';

describe('KategorijavozilaComponent', () => {
  let component: KategorijavozilaComponent;
  let fixture: ComponentFixture<KategorijavozilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorijavozilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijavozilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
