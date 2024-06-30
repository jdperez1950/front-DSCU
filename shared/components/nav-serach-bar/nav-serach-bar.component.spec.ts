import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSerachBarComponent } from './nav-serach-bar.component';

describe('NavSerachBarComponent', () => {
  let component: NavSerachBarComponent;
  let fixture: ComponentFixture<NavSerachBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavSerachBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavSerachBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
