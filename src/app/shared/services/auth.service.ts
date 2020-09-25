import {Injectable} from '@angular/core'
import { from, Observable } from 'rxjs';
import { User } from '../interfaces';
import {HttpClient} from '@angular/common/http'
import {tap} from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    private token = null
    private role = null

    constructor(private http: HttpClient){}

    register(user: User): Observable<User>{
        return this.http.post<User>('/api/signUp', user)
    }

    login(user: User): Observable<{token: string}>{
        return this.http.post<{token: string}>('/api/authenticate', user)
        .pipe(
            tap(
                ({token}) => {
                    localStorage.setItem('auth-token', token)  
                    this.setToken(token)  
                    this.setRole(token)
                    localStorage.setItem('role', this.getRole())
                }
            )
        )
    }

    setToken(token: string){
        this.token = token
    }

    getToken(): string{
        return this.token
    }

    isAuthenticated(): boolean{
        return !!this.token
    }

    logout(){
        this.setToken(null)
        localStorage.clear()
    }

    setRole(token: string){
        let jwt = token
        let jwtData = jwt.split('.')[1]
        let decodedJwtJsonData = window.atob(jwtData)
        let decodedJwtData = JSON.parse(decodedJwtJsonData)
        this.role = decodedJwtData.Role[0]
    }

    getRole(): string {
        return this.role
    }
}