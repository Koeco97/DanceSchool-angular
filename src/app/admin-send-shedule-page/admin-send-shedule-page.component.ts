import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subscription } from 'rxjs';
import { AdminService } from './../shared/services/admin.service';
import { Report } from './../shared/interfaces';

@Component({
  selector: 'app-admin-send-shedule-page',
  templateUrl: './admin-send-shedule-page.component.html',
  styleUrls: ['./admin-send-shedule-page.component.css']
})
export class AdminSendShedulePageComponent implements OnInit {
  aSub: Subscription;
  lessons: Report[]=[];

  constructor(private adminService: AdminService,
              private http:HttpClient) { }

 

  ngOnDestroy(){
    if (this.aSub){
      this.aSub.unsubscribe()
    }
  }

  ngOnInit(): void {
    this.aSub=this.http.get<Report[]>('/api/admin/lessons/new').subscribe(
      data=>{this.lessons=data;
    console.log(this.lessons)})
  }


  onSubmit(){
    console.log("here");
    this.http.get('/api/admin/shedule').subscribe(
      data=>{alert("shedule has been successfully sent");})
  }
}

