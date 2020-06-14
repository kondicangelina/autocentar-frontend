import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KategorijavozilaDialogComponent } from './kategorijavozila-dialog.component';

describe('KategorijavozilaDialogComponent', () => {
  let component: KategorijavozilaDialogComponent;
  let fixture: ComponentFixture<KategorijavozilaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KategorijavozilaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KategorijavozilaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
