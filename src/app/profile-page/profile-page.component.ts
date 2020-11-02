import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { AdminService } from './../shared/services/admin.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Person } from './../shared/interfaces';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  form:FormGroup;
  aSub: Subscription;
  sex = ["man", "woman"];
  selectedSex=this.sex[0];

  constructor(private adminService: AdminService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
    first_name: new FormControl(null, [Validators.required]),
    second_name: new FormControl(null, [Validators.required]),
    last_name: new FormControl(null, [Validators.required]),
    birthday: new FormControl,
    sex: new FormControl,
    phone_number: new FormControl
    });
  }

  ngOnDestroy(){
    if (this.aSub){
      this.aSub.unsubscribe()
    }
  }

  addSexToSelect(value){
    this.selectedSex=value;
  }

  onSubmit(){
    this.form.disable()
    const person = {
      id: null,
      first_name: this.form.value.first_name,
      second_name: this.form.value.second_name,
      last_name: this.form.value.last_name,
      birthday: this.form.value.birthday,
      sex: this.form.value.sex,
      e_mail: localStorage.getItem("e-mail"),
      phone_number: this.form.value.phone_number,
      role: localStorage.getItem("role")
    }
    console.log(person);
    this.aSub = this.adminService.changeProfile(person).subscribe(
      error => {
        console.warn('error')
        this.form.enable()
      })
  }
}


