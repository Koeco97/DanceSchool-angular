import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeclinedLessonsPageComponent } from './admin-declined-lessons-page.component';

describe('AdminDeclinedLessonsPageComponent', () => {
  let component: AdminDeclinedLessonsPageComponent;
  let fixture: ComponentFixture<AdminDeclinedLessonsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDeclinedLessonsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeclinedLessonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
