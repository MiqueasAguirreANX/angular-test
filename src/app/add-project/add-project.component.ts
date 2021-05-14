import { ProjectService } from './../project.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.less'],
  providers: [ProjectService]
})
export class AddProjectComponent implements OnInit {

  addForm = this.formBuilder.group({
    name: '',
    description: '',
    manager: '',
    assignedTo: '',
    status: ''
  });

  constructor(public formBuilder: FormBuilder, public projectService: ProjectService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    // Validate the Form
    let { name, description, manager, assignedTo, status } = this.addForm.value
    if (name && name !== "") {
      if (description && description !== "") {
        if (manager && manager !== "") {
          if (assignedTo && assignedTo !== "") {
            if (status && status !== "") {
              let values = this.addForm.value;
              let date = new Date();
              values.createdAt = `${date.getFullYear()}-${(date.getMonth()+1) > 9 ? (date.getMonth()+1): "0" + (date.getMonth()+1) }-${ date.getDate() > 9 ? date.getDate(): "0" + date.getDate()}`
              this.projectService.addProject(values).subscribe(res=>{
                console.log(res);
                alert('Project Added');
                this.addForm.reset();
              });
            } else { alert("Invalid Data")}
          } else { alert("Invalid Data")}
        } else { alert("Invalid Data")}
      } else { alert("Invalid Data")}
    } else { alert("Invalid Data")}
  }
}
