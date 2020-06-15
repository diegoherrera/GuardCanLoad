import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoneditComponent } from './personedit.component';

describe('PersoneditComponent', () => {
  let component: PersoneditComponent;
  let fixture: ComponentFixture<PersoneditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoneditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
