import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelvozilaComponent } from './modelvozila.component';

describe('ModelvozilaComponent', () => {
  let component: ModelvozilaComponent;
  let fixture: ComponentFixture<ModelvozilaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelvozilaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelvozilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
