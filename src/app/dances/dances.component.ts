import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subscription } from 'rxjs';
import { Dance } from './../shared/interfaces';
import { Router } from '@angular/router';
import { AdminService } from './../shared/services/admin.service';

@Component({
  selector: 'app-dances',
  templateUrl: './dances.component.html',
  styleUrls: ['./dances.component.css']
})
export class DancesComponent implements OnInit {
  aSub: Subscription;
  dances: Dance[]=[];
  clickedDance: Dance = null;
  deleteDanceId: Number[] = [];

  constructor(private http:HttpClient,
              private router:Router,
              private adminService: AdminService) { }

  ngOnDestroy(){
    if (this.aSub){
      this.aSub.unsubscribe()
    }
  }

  ngOnInit(): void {
    this.aSub=this.http.get<Dance[]>('/api/dances').subscribe(
      data=>{this.dances=data;
    console.log(this.dances)})
  }

  rowClicked(dance:Dance){
    this.clickedDance = dance;
  }

  checkBoxClicked(){
    if(this.deleteDanceId.includes(this.clickedDance.id)){
      let index = this.deleteDanceId.indexOf(this.clickedDance.id)
      this.deleteDanceId.splice(index, 1)
    }
    else{
      this.deleteDanceId.push(this.clickedDance.id);
    }
  }

  addDance(){
    this.router.navigate(['/admin/newdance'])
  }

  deleteDance(){
    if(this.deleteDanceId.length==0){
      alert('dance is not selected!')
    }
    for(let i = 0; i < this.deleteDanceId.length; i++){
      this.aSub = this.adminService.deleteDance(this.deleteDanceId[i]).subscribe(
        () => {
          this.aSub=this.http.get<Dance[]>('/api/dances').subscribe(
            data=>{this.dances=data;})
        },
        error => {
          console.warn('error')
        })
    }
  }
}
