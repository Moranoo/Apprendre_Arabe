import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicLetterComponent } from './arabic-letter.component';

describe('ArabicLetterComponent', () => {
  let component: ArabicLetterComponent;
  let fixture: ComponentFixture<ArabicLetterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArabicLetterComponent]
    });
    fixture = TestBed.createComponent(ArabicLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
