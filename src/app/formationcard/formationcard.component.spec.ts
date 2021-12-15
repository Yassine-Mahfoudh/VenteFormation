import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationcardComponent } from './formationcard.component';

describe('FormationcardComponent', () => {
  let component: FormationcardComponent;
  let fixture: ComponentFixture<FormationcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
