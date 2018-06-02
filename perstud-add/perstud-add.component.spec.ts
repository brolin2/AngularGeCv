import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerstudAddComponent } from './perstud-add.component';

describe('PerstudAddComponent', () => {
  let component: PerstudAddComponent;
  let fixture: ComponentFixture<PerstudAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerstudAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerstudAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
