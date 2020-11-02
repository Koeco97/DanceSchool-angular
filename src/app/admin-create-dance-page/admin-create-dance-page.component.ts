import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { AdminService } from './../shared/services/admin.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { Dance } from '../shared/interfaces';

@Component({
  selector: 'app-admin-create-dance-page',
  templateUrl: './admin-create-dance-page.component.html',
  styleUrls: ['./admin-create-dance-page.component.css']
})
export class AdminCreateDancePageComponent implements OnInit {
  form:FormGroup;
  aSub: Subscription;
  dances:Dance[]=[]

  constructor(private adminService: AdminService,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
    })
    this.aSub=this.http.get<Dance[]>('/api/dances').subscribe(
      data=>{this.dances=data;})
  }

  ngOnDestroy(){
    if (this.aSub){
      this.aSub.unsubscribe()
    }
  }

  onSubmit(){
    this.form.disable()
    console.log(this.form.value)
    let isCreated = false;
    for (let i=0; i<this.dances.length; i++){
      if (this.dances[i].name == this.form.value.name){
        isCreated = true;
        this.form.enable();
        alert("this dance already exists");
      }
    }
    if(!isCreated){
      this.aSub = this.adminService.saveDance(this.form.value).subscribe(
        () => {
          this.router.navigate(['/admin/dances'])
        },
        error => {
          console.warn('error')
          this.form.enable()
        })
    }
  }
}

