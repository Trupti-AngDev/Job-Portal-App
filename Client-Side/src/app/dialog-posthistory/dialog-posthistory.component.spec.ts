import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPosthistoryComponent } from './dialog-posthistory.component';

describe('DialogPosthistoryComponent', () => {
  let component: DialogPosthistoryComponent;
  let fixture: ComponentFixture<DialogPosthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogPosthistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogPosthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
