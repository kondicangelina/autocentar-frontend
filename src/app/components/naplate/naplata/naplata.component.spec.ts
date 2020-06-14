import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaplataComponent } from './naplata.component';

describe('NaplataComponent', () => {
  let component: NaplataComponent;
  let fixture: ComponentFixture<NaplataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaplataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaplataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
