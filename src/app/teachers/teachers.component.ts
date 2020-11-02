import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subscription } from 'rxjs';
import { Person } from './../shared/interfaces';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  aSub: Subscription;
  teachers: Person[]=[];

    
  constructor(private http:HttpClient) { }
    
  ngOnDestroy(){
    if (this.aSub){
      this.aSub.unsubscribe()
    }
  }
    
  ngOnInit(): void {
    this.aSub=this.http.get<Person[]>('/api/teachers').subscribe(
      data=>{this.teachers=data;})
  }
}
    
    
  