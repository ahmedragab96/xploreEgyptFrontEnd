import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsCRUDComponent } from './trips.component';

describe('TripsCRUDComponent', () => {
  let component: TripsComponent;
  let fixture: ComponentFixture<TripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
