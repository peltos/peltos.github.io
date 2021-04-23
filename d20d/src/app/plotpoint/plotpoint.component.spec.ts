import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotpointComponent } from './plotpoint.component';

describe('PlotpointComponent', () => {
  let component: PlotpointComponent;
  let fixture: ComponentFixture<PlotpointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotpointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
