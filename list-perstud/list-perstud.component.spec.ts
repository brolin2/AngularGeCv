import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPerstudComponent } from './list-perstud.component';

describe('ListPerstudComponent', () => {
  let component: ListPerstudComponent;
  let fixture: ComponentFixture<ListPerstudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPerstudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPerstudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
