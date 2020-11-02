import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateLessonPageComponent } from './admin-create-lesson-page.component';

describe('AdminCreateLessonPageComponent', () => {
  let component: AdminCreateLessonPageComponent;
  let fixture: ComponentFixture<AdminCreateLessonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCreateLessonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreateLessonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
