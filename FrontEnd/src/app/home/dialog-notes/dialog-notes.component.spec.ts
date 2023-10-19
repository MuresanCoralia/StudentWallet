import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNotesComponent } from './dialog-notes.component';

describe('DialogNotesComponent', () => {
  let component: DialogNotesComponent;
  let fixture: ComponentFixture<DialogNotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogNotesComponent]
    });
    fixture = TestBed.createComponent(DialogNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
