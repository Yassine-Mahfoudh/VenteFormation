import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardformateurComponent } from './cardformateur.component';

describe('CardformateurComponent', () => {
  let component: CardformateurComponent;
  let fixture: ComponentFixture<CardformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
