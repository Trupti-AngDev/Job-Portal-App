import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaborCriteriaComponent } from './labor-criteria.component';

describe('LaborCriteriaComponent', () => {
  let component: LaborCriteriaComponent;
  let fixture: ComponentFixture<LaborCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaborCriteriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaborCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
