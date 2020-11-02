import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherLessonsPageComponent } from './teacher-lessons-page.component';

describe('TeacherLessonsPageComponent', () => {
  let component: TeacherLessonsPageComponent;
  let fixture: ComponentFixture<TeacherLessonsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherLessonsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherLessonsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
