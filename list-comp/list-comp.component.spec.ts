import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompComponent } from './list-comp.component';

describe('ListCompComponent', () => {
  let component: ListCompComponent;
  let fixture: ComponentFixture<ListCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
