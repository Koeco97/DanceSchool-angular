import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { AdminService } from './../shared/services/admin.service';
import { Subscription, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Group, Person } from '../shared/interfaces';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-client-join-group-page',
  templateUrl: './client-join-group-page.component.html',
  styleUrls: ['./client-join-group-page.component.css']
})
export class ClientJoinGroupPageComponent implements OnInit {
    form:FormGroup;
    aSub: Subscription;
    groups: Group[]=[];
    selectedGroupId: Number;
  
    constructor(private adminService: AdminService,
                private router: Router,
                private http: HttpClient,) { }
  
    ngOnInit(): void {
      this.form = new FormGroup({
        group: new FormControl(null, [Validators.required])})
        this.aSub=this.http.get<Group[]>('/api/groups').subscribe(
          data=>{this.groups=data;})
    }
  
    ngOnDestroy(){
      if (this.aSub){
        this.aSub.unsubscribe()
      }
    }
  
    addGroupToSelected(value){
     this.selectedGroupId=value;
    }
  
    onSubmit(){
      this.form.disable()
    this.aSub = this.http.put('/api/clients/'+localStorage.getItem('e-mail')+"/join/"+this.selectedGroupId, "")
    .subscribe(
      error => {
        console.warn('error')
        this.form.enable()
      })
    }
  }
  
  