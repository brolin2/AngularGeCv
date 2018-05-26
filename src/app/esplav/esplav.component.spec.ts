import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsplavComponent } from './esplav.component';

describe('EsplavComponent', () => {
  let component: EsplavComponent;
  let fixture: ComponentFixture<EsplavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsplavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsplavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
