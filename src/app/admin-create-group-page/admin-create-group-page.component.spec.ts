import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateGroupPageComponent } from './admin-create-group-page.component';

describe('AdminCreateGroupPageComponent', () => {
  let component: AdminCreateGroupPageComponent;
  let fixture: ComponentFixture<AdminCreateGroupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateGroupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateGroupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
