
import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import { LoginPageComponent } from './login-page/login-page.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { ClientLayoutComponent } from './shared/layouts/client-layout/client-layout.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AdminLayoutComponent } from './shared/layouts/admin-layout/admin-layout.component';
import { TeacherLayoutComponent } from './shared/layouts/teacher-layout/teacher-layout.component';
import { AdminGuard } from './shared/classes/admin.guard'
import { ClientGuard } from './shared/classes/client.guard'
import { TeacherGuard } from './shared/classes/teacher.guard'
import {AdminCreateGroupPageComponent} from './admin-create-group-page/admin-create-group-page.component'
import {AdminCreateDancePageComponent} from './admin-create-dance-page/admin-create-dance-page.component'
import {ProfilePageComponent} from './profile-page/profile-page.component'
import {AdminSetRolePageComponent} from './admin-set-role-page/admin-set-role-page.component'
import {AdminCreateLessonPageComponent} from './admin-create-lesson-page/admin-create-lesson-page.component'
import {AdminSendShedulePageComponent} from './admin-send-shedule-page/admin-send-shedule-page.component'
import {TeacherLessonsPageComponent} from './teacher-lessons-page/teacher-lessons-page.component'
import {AdminDeclinedLessonsPageComponent} from './admin-declined-lessons-page/admin-declined-lessons-page.component'
import {ShedulePageComponent} from './shedule-page/shedule-page.component'
import {ClientJoinGroupPageComponent} from './client-join-group-page/client-join-group-page.component'
import {StartPageComponent} from './start-page/start-page.component'
import {DancesComponent} from './dances/dances.component'
import {GroupsComponent} from './groups/groups.component'
import {TeachersComponent} from './teachers/teachers.component'

const routes: Routes = [
  {path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent}
    ]
  },
  {path: 'admin', component: AdminLayoutComponent, canActivate: [AdminGuard], children: [
    {path: 'start', component: StartPageComponent},
    {path: 'newgroup', component: AdminCreateGroupPageComponent},
    {path: 'newdance', component: AdminCreateDancePageComponent},
    {path: 'profile', component: ProfilePageComponent},
    {path: 'setrole', component: AdminSetRolePageComponent},
    {path: 'newlesson', component: AdminCreateLessonPageComponent},
    {path: 'notify', component: AdminSendShedulePageComponent},
    {path: 'declined', component: AdminDeclinedLessonsPageComponent},
    {path: 'schedule', component: ShedulePageComponent},
    {path: 'dances', component: DancesComponent},
    {path: 'groups', component: GroupsComponent},
    {path: 'teachers', component: TeachersComponent}
  ]
  },
  {path: 'client', component: ClientLayoutComponent, canActivate: [ClientGuard], children: [
    {path: 'start', component: StartPageComponent},
    {path: 'profile', component: ProfilePageComponent},
    {path: 'schedule', component: ShedulePageComponent},
    {path: 'joingroup', component: ClientJoinGroupPageComponent}
  ]
  },
  {path: 'teacher', component: TeacherLayoutComponent, canActivate: [TeacherGuard], children: [
    {path: 'start', component: StartPageComponent},
    {path: 'profile', component: ProfilePageComponent},
    {path: 'lessons', component: TeacherLessonsPageComponent},
    {path: 'schedule', component: ShedulePageComponent}
  ]
  }
]

@NgModule({
  imports:[
RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{

}