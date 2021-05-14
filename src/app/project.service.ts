import { Project } from './project';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  readonly API = "http://localhost:3000/projects";

  projects: Project[] = []

  constructor(private http: HttpClient) { 
    this.getProjects().subscribe(res => {
      this.projects = (<any>res).data;
    })
  }

  getProjects() {
    return this.http.get(this.API);
  }

  getProject(id: number) {
    return this.http.get(this.API + `/${id}`);
  }

  editProject(id: number, project: any) {
    return this.http.patch(this.API + `/${id}`, project);
  }

  addProject(project: any) {
    return this.http.post(this.API, project);
  }

  deleteProject(id: number) {
    return this.http.delete(this.API + `/${id}`);
  }
}
