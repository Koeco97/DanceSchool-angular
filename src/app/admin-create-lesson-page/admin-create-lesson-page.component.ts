import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { AdminService } from './../shared/services/admin.service';
import { Subscription, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Group, Person } from '../shared/interfaces';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-admin-create-lesson-page',
  templateUrl: './admin-create-lesson-page.component.html',
  styleUrls: ['./admin-create-lesson-page.component.css']
})
export class AdminCreateLessonPageComponent implements OnInit {
  form:FormGroup;
  aSub: Subscription;
  groups: Group[]=[];
  selectedGroup: Group;
  teachers: Person[]=[];
  selectedTeacher: Person;

  constructor(private adminService: AdminService,
              private router: Router,
              private http: HttpClient,) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      begin: new FormControl(null, [Validators.required]),
      end: new FormControl(null, [Validators.required]),
      group: new FormControl(null, [Validators.required]),
      teacher: new FormControl(null, [Validators.required])})
      this.aSub=this.http.get<Group[]>('/api/groups').subscribe(
        data=>{this.groups=data;
               this.selectedGroup = this.groups[0];})
      this.aSub=this.http.get<Person[]>('/api/teachers').subscribe(
        data=>{this.teachers=data;
                console.log(this.teachers)
               this.selectedTeacher = this.teachers[0];})
  }

  ngOnDestroy(){
    if (this.aSub){
      this.aSub.unsubscribe()
    }
  }

  addGroupToSelected(value){
    for (let i=0; i<this.groups.length; i++){
      if(this.groups[i].id == value){
        this.selectedGroup = this.groups[i]
      }
    }
    console.log(this.selectedGroup)
  }

  addTeacherToSelected(value){
    console.log(value)
    for (let i=0; i<this.teachers.length; i++){
      if(this.teachers[i].id == value){
        this.selectedTeacher = this.teachers[i]
      }
    }
    console.log(this.selectedTeacher)
  }

  onSubmit(){
    this.form.disable()
    console.log(this.form.value)
    console.log(this.selectedGroup)
    const lesson = {
      id: null,
      begin: this.form.value.begin,
      end: this.form.value.end,
      group: this.selectedGroup,
      teacher: this.selectedTeacher,
      status: null
    }
    this.aSub = this.adminService.saveLesson(lesson)
    .pipe(catchError(error => {
      console.warn("error")
      this.form.enable()
      return throwError(error)
    }))
    .subscribe(
      () => {
        alert("lesson is saved")
        this.form.enable()
      })
  }
}

