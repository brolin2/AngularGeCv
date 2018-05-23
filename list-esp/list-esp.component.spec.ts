import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEspComponent } from './list-esp.component';

describe('ListEspComponent', () => {
  let component: ListEspComponent;
  let fixture: ComponentFixture<ListEspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
