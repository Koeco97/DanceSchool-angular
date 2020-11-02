import { Component, OnInit } from '@angular/core';
  import {HttpClient} from '@angular/common/http'
  import { Subscription } from 'rxjs';
  import { Group } from './../shared/interfaces';
  import { Router } from '@angular/router';
  import { AdminService } from './../shared/services/admin.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {
    aSub: Subscription;
    groups: Group[]=[];
    clickedGroup: Group = null;
    deleteGroupId: Number[] = [];
  
    constructor(private http:HttpClient,
                private router:Router,
                private adminService: AdminService) { }
  
    ngOnDestroy(){
      if (this.aSub){
        this.aSub.unsubscribe()
      }
    }
  
    ngOnInit(): void {
      this.aSub=this.http.get<Group[]>('/api/groups').subscribe(
        data=>{this.groups=data;
      console.log(this.groups)})
    }
  
    rowClicked(dance:Group){
      this.clickedGroup = dance;
    }
  
    checkBoxClicked(){
      if(this.deleteGroupId.includes(this.clickedGroup.id)){
        let index = this.deleteGroupId.indexOf(this.clickedGroup.id)
        this.deleteGroupId.splice(index, 1)
      }
      else{
        this.deleteGroupId.push(this.clickedGroup.id);
      }
    }
  
    addGroup(){
      this.router.navigate(['/admin/newgroup'])
    }
  
    deleteGroup(){
      if(this.deleteGroupId.length==0){
        alert('group is not selected!')
      }
      for(let i = 0; i < this.deleteGroupId.length; i++){
        this.aSub = this.adminService.deleteGroup(this.deleteGroupId[i]).subscribe(
          () => {
            this.aSub=this.http.get<Group[]>('/api/groups').subscribe(
            data=>{this.groups=data;})
          },
          error => {
            console.warn('error')
          })
      }
    }
  }
  