/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Lista_itemComponent } from './lista_item.component';

describe('Lista_itemComponent', () => {
  let component: Lista_itemComponent;
  let fixture: ComponentFixture<Lista_itemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lista_itemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lista_itemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
