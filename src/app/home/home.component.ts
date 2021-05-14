import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  projects: Project[] = [];

  constructor(public projectService: ProjectService) { 
    this.projects = this.projectService.projects;
  }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(res=>{
      this.projects = (<any>res).data;
    });
  }

}
