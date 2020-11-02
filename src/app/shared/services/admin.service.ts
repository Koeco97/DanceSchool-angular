import {Injectable} from '@angular/core'
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Dance, Group, Person, Lesson } from './../interfaces';

@Injectable({
    providedIn: 'root'
})
export class AdminService{
    constructor(private http: HttpClient){}

    saveDance(dance: Dance): Observable<Dance>{
        return this.http.post<Dance>('/api/dances', dance)
    }

    changeProfile(person: Person) : Observable<Person>{
        return this.http.put<Person>('/api/persons/'+localStorage.getItem("e-mail"), person)
    }

    changeRole(id, role): Observable<Object>{
        return this.http.put('/api/admin/'+id+"/"+role, "")
    }

    saveGroup(group: Group): Observable<Group>{
        return this.http.post<Group>('/api/groups', group)
    }

    saveLesson(lesson: Lesson): Observable<Lesson>{
        return this.http.post<Lesson>('/api/admin/lessons/new', lesson)
    }

    redirectLesson(lessonId:Number, teacherId:Number){
        return this.http.put('/api/admin/lessons/'+lessonId+'/redirect/'+teacherId, "")
    }

    deleteLesson(lessonId:Number){
        return this.http.delete('/api/admin/lessons/'+lessonId)
    }

    deleteDance(danceId:Number){
        return this.http.delete('/api/dances/'+danceId)
    }

    deleteGroup(groupId:Number){
        return this.http.delete('/api/groups/'+groupId)
    }
 }
