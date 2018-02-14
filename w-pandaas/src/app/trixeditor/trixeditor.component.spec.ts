import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrixeditorComponent } from './trixeditor.component';

describe('TrixeditorComponent', () => {
  let component: TrixeditorComponent;
  let fixture: ComponentFixture<TrixeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrixeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrixeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
