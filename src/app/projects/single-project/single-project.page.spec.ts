import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProjectPage } from './single-project.page';

describe('SingleProjectPage', () => {
  let component: SingleProjectPage;
  let fixture: ComponentFixture<SingleProjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleProjectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
