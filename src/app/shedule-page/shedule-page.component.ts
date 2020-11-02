import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subscription } from 'rxjs';
import { Report } from './../shared/interfaces';

@Component({
  selector: 'app-shedule-page',
  templateUrl: './shedule-page.component.html',
  styleUrls: ['./shedule-page.component.css']
})
export class ShedulePageComponent implements OnInit {
    aSub: Subscription;
    lessons: Report[]=[];
    sorts = [{"name":"begin", "value":"sortByBegin"},
            {"name":"length", "value":"sortByLength"},
            {"name":"dance", "value":"sortByDance"},
            {"name":"teacher", "value":"sortByTeacher"}];
  
    constructor(private http:HttpClient) { }
  
    ngOnDestroy(){
      if (this.aSub){
        this.aSub.unsubscribe()
      }
    }
  
    ngOnInit(): void {
      this.aSub=this.http.get<Report[]>('/api/schedule/sortByBegin').subscribe(
        data=>{this.lessons=data;
      console.log(this.lessons)})
    }

    addSortToSelected(value): void{
      let request = "/api/schedule/"+value
      this.aSub=this.http.get<Report[]>(request).subscribe(
        data=>{this.lessons=data;
      console.log(this.lessons)})
    }
  }
  
  
