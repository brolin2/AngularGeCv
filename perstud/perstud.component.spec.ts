import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerstudComponent } from './perstud.component';

describe('PerstudComponent', () => {
  let component: PerstudComponent;
  let fixture: ComponentFixture<PerstudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerstudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerstudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
