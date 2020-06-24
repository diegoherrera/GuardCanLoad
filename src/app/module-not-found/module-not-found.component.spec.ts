import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleNotFoundComponent } from './module-not-found.component';

describe('ModuleNotFoundComponent', () => {
  let component: ModuleNotFoundComponent;
  let fixture: ComponentFixture<ModuleNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
