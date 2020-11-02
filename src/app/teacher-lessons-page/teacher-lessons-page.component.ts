import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subscription } from 'rxjs';
import { TeacherService } from './../shared/services/teacher.service';
import { Report } from './../shared/interfaces';

@Component({
  selector: 'app-teacher-lessons-page',
  templateUrl: './teacher-lessons-page.component.html',
  styleUrls: ['./teacher-lessons-page.component.css']
})
export class TeacherLessonsPageComponent implements OnInit {
  aSub: Subscription;
  lessons: Report[]=[];
  status = [{"name":"accept", "value":"accepted"},
            {"name":"decline", "value":"declined"}];
  clickedLesson = null;
  selectedStatus=this.status[0].name;
  selectedStatusValue;

  constructor(private teacherService: TeacherService,
              private http:HttpClient) { }

  ngOnDestroy(){
    if (this.aSub){
      this.aSub.unsubscribe()
    }
  }

  addStatusToSelected(value){
    this.clickedLesson.status=value;
    console.log(this.lessons);
  }

  rowClicked(lesson){
    this.clickedLesson = lesson;
  }

  ngOnInit(): void {
    this.aSub=this.http.get<Report[]>('/api/teachers/'+localStorage.getItem('e-mail')+'/lessons').subscribe(
      data=>{
        this.lessons=data;
        for(let i=0; i<this.lessons.length; i++){
          this.lessons[i].status="accepted";
        }
      })
  }

  onSubmit(){
    console.log(this.lessons)
    this.aSub = this.teacherService.saveStatus(this.lessons).subscribe(
      error => {
        console.warn('error')
      })
  }
}