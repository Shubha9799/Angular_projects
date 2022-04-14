import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantNavbarComponent } from './resturant-navbar.component';

describe('ResturantNavbarComponent', () => {
  let component: ResturantNavbarComponent;
  let fixture: ComponentFixture<ResturantNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResturantNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
