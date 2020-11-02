import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSendShedulePageComponent } from './admin-send-shedule-page.component';

describe('AdminSendShedulePageComponent', () => {
  let component: AdminSendShedulePageComponent;
  let fixture: ComponentFixture<AdminSendShedulePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSendShedulePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSendShedulePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
