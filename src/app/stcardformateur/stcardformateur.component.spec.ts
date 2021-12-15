import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StcardformateurComponent } from './stcardformateur.component';

describe('StcardformateurComponent', () => {
  let component: StcardformateurComponent;
  let fixture: ComponentFixture<StcardformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StcardformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StcardformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
