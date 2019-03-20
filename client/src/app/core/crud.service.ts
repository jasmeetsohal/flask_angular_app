import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Employee } from './crud-model';

const baseUrl ="http://localhost:5000";
@Injectable({
    providedIn:'root'
})
export class CRUDService {

    constructor(
        private http: HttpClient) { }
    
    public query(): Observable<Employee[]>{
        return this.http.get<Employee[]>(`${baseUrl}/read`);
    }

    public save(emp:Employee): Observable<Employee>{
        return this.http.post<Employee>(`${baseUrl}/create`,emp);
    }

    public find(id:String): Observable<Employee>{
        return this.http.get<Employee>(`${baseUrl}/find/${id}`);
    }

    public update(id:String,emp:Employee):Observable<Employee>{
        return this.http.put<Employee>(`${baseUrl}/update/${id}`,emp);
    }

    public delete(id:String):Observable<Employee>{
        return this.http.delete<Employee>(`${baseUrl}/delete/${id}`);
    }
}