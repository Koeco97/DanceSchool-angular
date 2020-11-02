import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { from, Subscription, throwError } from 'rxjs';
import {AuthService} from '../shared/services/auth.service'
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  form: FormGroup
  aSub: Subscription

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']){
        //you can enter the system
      }
      else if (params['accessDenied']){
        //you have to authorize
      }
    })
  }

  ngOnDestroy() {
    if (this.aSub){
      this.aSub.unsubscribe()
    }
  }

  redirect(){
    if(this.auth.isAdmin())
        this.router.navigate(['admin/start']);
    else if(this.auth.isClient())
        this.router.navigate(['client/start']);
    else if(this.auth.isTeacher())
        this.router.navigate(['teacher/start']);
  }

  onSubmit(){
    this.form.disable()
    this.aSub = this.auth.login(this.form.value)
    .pipe(catchError(error => {
      console.warn('error')
      this.form.enable()
      return throwError(error)
    }))
    .subscribe(
      () => {
      console.log("User is logged in");
      this.redirect()}
    )
  }

}
