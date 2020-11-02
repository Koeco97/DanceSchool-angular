
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminService } from './../shared/services/admin.service';
import { Person } from './../shared/interfaces';

@Component({
  selector: 'app-admin-set-role-page',
  templateUrl: './admin-set-role-page.component.html',
  styleUrls: ['./admin-set-role-page.component.css']
})
export class AdminSetRolePageComponent implements OnInit {
  form:FormGroup;
  aSub: Subscription;
  roles = [{"name":"Admin", "value":"ROLE_ADMIN"},
            {"name":"Teacher", "value":"ROLE_TEACHER"},
            {"name":"Client", "value":"ROLE_CLIENT"}];
  selectedRole=this.roles[0].name;
  selectedRoleValue;
  selectedPerson: Person;
  currentRole:String;
  persons: Person[]=[];

  constructor(private adminService: AdminService,
              private http:HttpClient) { }

 

  ngOnDestroy(){
    if (this.aSub){
      this.aSub.unsubscribe()
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      role: new FormControl(null, [Validators.required]),
      person: new FormControl(null, [Validators.required])
    })
    this.aSub=this.http.get<Person[]>('/api/persons').subscribe(
      data=>{this.persons=data['persons'];
             this.selectedPerson = this.persons[0];
             this.currentRole = this.selectedPerson.role;
    console.log(this.persons)})
  }

  addRoleToSelected(value){
    this.selectedRoleValue=value;
  }

  addPersonToSelected(value){
    this.selectedPerson=value;
  }

  onSubmit(){
    console.log(this.selectedRoleValue);
    console.log(this.selectedPerson.id);
    this.form.disable()
    this.aSub = this.adminService.changeRole(this.selectedPerson.id, this.selectedRoleValue).subscribe(
      error => {
        console.warn('error')
        this.form.enable()
      })
  }

}
