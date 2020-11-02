import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateDancePageComponent } from './admin-create-dance-page.component';

describe('AdminCreateDancePageComponent', () => {
  let component: AdminCreateDancePageComponent;
  let fixture: ComponentFixture<AdminCreateDancePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateDancePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateDancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
