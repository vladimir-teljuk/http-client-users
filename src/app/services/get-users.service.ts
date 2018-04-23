import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class GetUsersService {

    constructor(private http: HttpClient) {
    }

    public getUsers(count: number): Observable<any> {
        return this.http.get(`https://randomuser.me/api/?results=${count}`);
    }
}
