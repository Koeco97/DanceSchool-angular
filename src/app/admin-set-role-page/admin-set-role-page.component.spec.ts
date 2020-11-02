import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSetRolePageComponent } from './admin-set-role-page.component';

describe('AdminSetRolePageComponent', () => {
  let component: AdminSetRolePageComponent;
  let fixture: ComponentFixture<AdminSetRolePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSetRolePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSetRolePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
