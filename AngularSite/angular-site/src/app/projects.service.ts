import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './projects.interface';

@Injectable({
 providedIn: 'root',
})
export class ProjectService {
 private baseUrl = 'https://masonclark.us';

constructor(private http: HttpClient) {}

getProjects(): Observable<Project[]> {
 return this.http.get<Project[]>(`${this.baseUrl}/projects`);
 }
}

