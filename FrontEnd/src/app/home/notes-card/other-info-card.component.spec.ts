import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInfoCardComponent } from './other-info-card.component';

describe('OtherInfoCardComponent', () => {
  let component: OtherInfoCardComponent;
  let fixture: ComponentFixture<OtherInfoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherInfoCardComponent]
    });
    fixture = TestBed.createComponent(OtherInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
