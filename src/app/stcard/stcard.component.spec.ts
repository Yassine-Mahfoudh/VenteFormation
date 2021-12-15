import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StcardComponent } from './stcard.component';

describe('StcardComponent', () => {
  let component: StcardComponent;
  let fixture: ComponentFixture<StcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
