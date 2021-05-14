import { ProjectService } from './../project.service';
import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit {

  @Input() project: Project = {
    id: 0,
    name: '',
    description: '',
    createdAt: new Date(),
    manager: '',
    assignedTo: '',
    status: ''
  };

  @Input() id: number = 0;
  constructor(public projectService: ProjectService) { }

  ngOnInit(): void {
  }

  openCloseDrop(drop: any) {
    let isActive: boolean = false;
    for (let class_css of drop.className.split(" ")) {
      if (class_css === "is-active") {
        isActive = true;
      }
    }

    if (!isActive) {
      drop.className = "dropdown is-right is-active"
    } else {
      drop.className = "dropdown is-right"
    }
  }

  deleteItem(id: number) {
    this.projectService.deleteProject(id).subscribe(res=>{
      this.projectService.getProjects().subscribe(res1=>{
        this.projectService.projects = (<any>res1).data
        
      })
      window.alert("Project Deleted")
    })

    window.location.reload()
  }

}
