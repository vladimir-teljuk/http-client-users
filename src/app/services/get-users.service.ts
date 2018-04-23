import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetUsersService {

    constructor(private http: HttpClient) {
    }

    public getUsers(count: number) {
        return this.http.get(`https://randomuser.me/api/?results=${count}`);
    }
}
