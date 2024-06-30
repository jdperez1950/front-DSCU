import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGovCoComponent } from './nav-gov-co.component';

describe('NavGovCoComponent', () => {
  let component: NavGovCoComponent;
  let fixture: ComponentFixture<NavGovCoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavGovCoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavGovCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
