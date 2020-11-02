import {Injectable} from '@angular/core'
import { from, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Report } from './../interfaces';

@Injectable({
    providedIn: 'root'
})
export class TeacherService{
    constructor(private http: HttpClient){}

    saveStatus(report: Report[]): Observable<Report[]>{
        return this.http.put<Report[]>('/api/teachers/lessons/status', report)
    }
 }
