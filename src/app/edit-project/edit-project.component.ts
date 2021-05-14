import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.less']
})
export class EditProjectComponent implements OnInit {

  id: any;
  constructor(private route: ActivatedRoute, public formBuilder: FormBuilder, public projectService: ProjectService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.projectService.getProject(this.id).subscribe(res => {
      console.log(res)
      this.editForm.setValue({
        'name': (<any>res).data[0].name,
        'description': (<any>res).data[0].description,
        'manager': (<any>res).data[0].manager,
        'assignedTo': (<any>res).data[0].assignedTo,
        'status': (<any>res).data[0].status
      })
    })
  }

  editForm = this.formBuilder.group({
    name: '',
    description: '',
    manager: '',
    assignedTo: '',
    status: ''
  });

  onSubmit(): void {
    // Process checkout data here
    // Validate the Form
    let { name, description, manager, assignedTo, status } = this.editForm.value
    if (name && name !== "") {
      if (description && description !== "") {
        if (manager && manager !== "") {
          if (assignedTo && assignedTo !== "") {
            if (status && status !== "") {
              let values = this.editForm.value;
              let date = new Date();
              values.createdAt = `${date.getFullYear()}-${(date.getMonth()+1) > 9 ? (date.getMonth()+1): "0" + (date.getMonth()+1) }-${ date.getDate() > 9 ? date.getDate(): "0" + date.getDate()}`
              this.projectService.editProject(this.id, values).subscribe(res=>{
                console.log(res);
                alert('Project Updated');
                this.editForm.reset();
              });
            } else { alert("Invalid Data")}
          } else { alert("Invalid Data")}
        } else { alert("Invalid Data")}
      } else { alert("Invalid Data")}
    } else { alert("Invalid Data")}
  }
}
