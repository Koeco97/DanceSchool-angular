import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subscription } from 'rxjs';
import { Report, Person, LessonRow } from './../shared/interfaces';
import { AdminService } from './../shared/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-declined-lessons-page',
  templateUrl: './admin-declined-lessons-page.component.html',
  styleUrls: ['./admin-declined-lessons-page.component.css']
})
export class AdminDeclinedLessonsPageComponent implements OnInit {
  aSub: Subscription;
  lessons: Report[]=[];
  teachers: Person[]=[];
  clickedLesson: Report = null;
  clickedRowToRedirect: LessonRow[]=[];
  toDoLessonsId: Number[] = [];
  


  constructor(private adminService: AdminService,
              private http:HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.aSub=this.http.get<Report[]>('/api/admin/lessons/declined').subscribe(
      data=>{
        this.lessons=data;
      })
      this.aSub=this.http.get<Person[]>('/api/teachers').subscribe(
        data=>{
          this.teachers=data;
        })
  }

  ngOnDestroy(){
    if (this.aSub){
      this.aSub.unsubscribe()
    }
  }

  addTeacherIdToSelected(value){
    if(this.clickedLesson.teacher_id == value){
      alert("The teacher declined this lesson, choose another teacher!")
    }
    let lessonRow: LessonRow = {
      lesson_id: this.clickedLesson.id, 
      current_teacher_id: this.clickedLesson.teacher_id,
      teacher_id: value
    }
    this.clickedRowToRedirect.push(lessonRow)
  }

  rowClicked(lesson:Report){
    this.clickedLesson = lesson;
  }

  redirectLesson(){
    if(this.clickedRowToRedirect.length==0){
      alert("You have to choose a teacher to redirect!")
    }
    this.clickedRowToRedirect.sort((obj1, obj2)=>{
      if(obj1.lesson_id > obj2.lesson_id){
        return 1;
      }
      if(obj1.lesson_id < obj2.lesson_id){
        return -1;
      }
      return 0
    })
    this.toDoLessonsId.sort()
    if(this.clickedRowToRedirect.length != this.toDoLessonsId.length){
      alert("number of selected teachers must be equal to number of selected lessons!")
    }
    else{
      for(let i = 0; i < this.toDoLessonsId.length; i++){
        if(this.toDoLessonsId[i] == this.clickedRowToRedirect[i].lesson_id){
          this.aSub = this.adminService.redirectLesson(this.clickedRowToRedirect[i].lesson_id, this.clickedRowToRedirect[i].teacher_id).subscribe(
            () => {
              this.router.navigate(['/admin/declined'], {
                queryParams: {
                  registered: true
                }
              })
            },
            error => {
              console.warn('error')
            })
        }
        else(alert("unknown error (lesson id: "+this.clickedRowToRedirect[i].lesson_id+")"))
      }
    }
  }

  checkBoxClicked(){
    if(this.toDoLessonsId.includes(this.clickedLesson.id)){
      let index = this.toDoLessonsId.indexOf(this.clickedLesson.id)
      this.toDoLessonsId.splice(index, 1)
    }
    else{
      this.toDoLessonsId.push(this.clickedLesson.id);
    }
  }

  deleteLesson(){
    console.log(this.toDoLessonsId);
    for(let i = 0; i < this.toDoLessonsId.length; i++){
      this.aSub = this.adminService.deleteLesson(this.toDoLessonsId[i]).subscribe(
        () => {
          this.router.navigate(['/admin/declined'], {
            queryParams: {
              registered: true
            }
          })
        },
        error => {
          console.warn('error')
        })
    }
  }

  onSubmit(){
    /*console.log(this.lessons)
    this.aSub = this.teacherService.saveStatus(this.lessons).subscribe(
      error => {
        console.warn('error')
      })*/
  }
}
