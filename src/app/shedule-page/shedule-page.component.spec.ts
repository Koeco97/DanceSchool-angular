import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShedulePageComponent } from './shedule-page.component';

describe('ShedulePageComponent', () => {
  let component: ShedulePageComponent;
  let fixture: ComponentFixture<ShedulePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShedulePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShedulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
