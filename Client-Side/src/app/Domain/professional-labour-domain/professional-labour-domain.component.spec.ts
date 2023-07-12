import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalLabourDomainComponent } from './professional-labour-domain.component';

describe('ProfessionalLabourDomainComponent', () => {
  let component: ProfessionalLabourDomainComponent;
  let fixture: ComponentFixture<ProfessionalLabourDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalLabourDomainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalLabourDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
