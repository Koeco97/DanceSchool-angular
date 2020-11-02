import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Dance, Group } from '../shared/interfaces';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AdminService } from './../shared/services/admin.service';

@Component({
  selector: 'app-admin-create-group-page',
  templateUrl: './admin-create-group-page.component.html',
  styleUrls: ['./admin-create-group-page.component.css']
})
export class AdminCreateGroupPageComponent implements OnInit {
  form:FormGroup;
  aSub: Subscription;
  levels = [{"level":"Beginner"},
            {"level":"Entermediate"},
            {"level":"Advanced"}];
  selectedLevel=this.levels[0].level;
  selectedDance: Dance;
  dances: Dance[]=[];
  groups: Group[]=[];

  constructor(private http: HttpClient,
              private adminService: AdminService,
              private router:Router) { }

  ngOnDestroy(){
    if (this.aSub){
      this.aSub.unsubscribe()
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      group_level: new FormControl(null, [Validators.required]),
      dance: new FormControl(null, [Validators.required])
    })
    this.aSub=this.http.get<Dance[]>('/api/dances').subscribe(
      data=>{this.dances=data;
             this.selectedDance = this.dances[0];})
    this.aSub=this.http.get<Group[]>('/api/groups').subscribe(
        data=>{this.groups=data;
      console.log(this.groups)})
  }

  addLevelToSelected(value){
    this.selectedLevel=value;
  }

  addDanceToSelected(value){
    this.selectedDance=value;
  }

  onSubmit(){
    console.log(this.selectedLevel)
    console.log(this.selectedDance);
    this.form.disable()
    const group = {
      id: null,
      group_level: this.form.value.group_level,
      dance: this.form.value.dance
    }
    let isCreated = false;
    for (let i=0; i<this.groups.length; i++){
      if (group.group_level == this.groups[i].group_level && this.form.value.dance.name == this.groups[i].dance.name){
        isCreated = true;
        this.form.enable();
        alert("this group already exists");
      }
    }
    if(!isCreated){
      this.aSub = this.adminService.saveGroup(group).subscribe(
        () => {this.router.navigate(['/admin/groups'])},
        error => {
          console.warn('error');
          this.form.enable()
        })
    }
  }

}
