/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VerticleGridComponent } from './verticle-grid.component';

describe('VerticleGridComponent', () => {
  let component: VerticleGridComponent;
  let fixture: ComponentFixture<VerticleGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticleGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticleGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
