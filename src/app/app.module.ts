import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { TokenInterceptor } from './shared/classes/token.Interceptor';
import { ClientLayoutComponent } from './shared/layouts/client-layout/client-layout.component';
import { AdminLayoutComponent } from './shared/layouts/admin-layout/admin-layout.component';
import { TeacherLayoutComponent } from './shared/layouts/teacher-layout/teacher-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AdminCreateGroupPageComponent } from './admin-create-group-page/admin-create-group-page.component';
import { AdminCreateDancePageComponent } from './admin-create-dance-page/admin-create-dance-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { AdminSetRolePageComponent } from './admin-set-role-page/admin-set-role-page.component';
import { AdminCreateLessonPageComponent } from './admin-create-lesson-page/admin-create-lesson-page.component';
import { AdminSendShedulePageComponent } from './admin-send-shedule-page/admin-send-shedule-page.component';
import { TeacherLessonsPageComponent } from './teacher-lessons-page/teacher-lessons-page.component';
import { AdminDeclinedLessonsPageComponent } from './admin-declined-lessons-page/admin-declined-lessons-page.component';
import { ShedulePageComponent } from './shedule-page/shedule-page.component';
import { ClientJoinGroupPageComponent } from './client-join-group-page/client-join-group-page.component';
import { jqxSchedulerModule } from 'jqwidgets-ng/jqxscheduler';
import { StartPageComponent } from './start-page/start-page.component';
import { DancesComponent } from './dances/dances.component';
import { GroupsComponent } from './groups/groups.component';
import { TeachersComponent } from './teachers/teachers.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    RegisterPageComponent,
    ClientLayoutComponent,
    AdminLayoutComponent,
    TeacherLayoutComponent,
    AdminCreateGroupPageComponent,
    AdminCreateDancePageComponent,
    ProfilePageComponent,
    AdminSetRolePageComponent,
    AdminCreateLessonPageComponent,
    AdminSendShedulePageComponent,
    TeacherLessonsPageComponent,
    AdminDeclinedLessonsPageComponent,
    ShedulePageComponent,
    ClientJoinGroupPageComponent,
    StartPageComponent,
    DancesComponent,
    GroupsComponent,
    TeachersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    jqxSchedulerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
