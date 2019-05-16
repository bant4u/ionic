import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemopagePage } from './demopage.page';

describe('DemopagePage', () => {
  let component: DemopagePage;
  let fixture: ComponentFixture<DemopagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemopagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemopagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
