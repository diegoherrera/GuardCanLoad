import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcountryComponent } from './editcountry.component';

describe('EditcountryComponent', () => {
  let component: EditcountryComponent;
  let fixture: ComponentFixture<EditcountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
