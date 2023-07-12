import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilledLabourDomainComponent } from './skilled-labour-domain.component';

describe('SkilledLabourDomainComponent', () => {
  let component: SkilledLabourDomainComponent;
  let fixture: ComponentFixture<SkilledLabourDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkilledLabourDomainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkilledLabourDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
