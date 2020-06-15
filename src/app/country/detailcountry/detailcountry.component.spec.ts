import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcountryComponent } from './detailcountry.component';

describe('DetailcountryComponent', () => {
  let component: DetailcountryComponent;
  let fixture: ComponentFixture<DetailcountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailcountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
