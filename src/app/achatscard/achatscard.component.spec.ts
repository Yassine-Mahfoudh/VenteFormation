import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchatscardComponent } from './achatscard.component';

describe('AchatscardComponent', () => {
  let component: AchatscardComponent;
  let fixture: ComponentFixture<AchatscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchatscardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchatscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
