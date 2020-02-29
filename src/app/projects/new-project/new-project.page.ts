import { ProjectsService } from '../../services/projects.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.page.html',
  styleUrls: ['./new-project.page.scss'],
})
export class NewProjectPage implements OnInit {
  project_title: string;
  project_date: any;
  project_desc: string;
  record = {};
  constructor(private _projectService: ProjectsService) { }

  ngOnInit() {
  }
  CreateProject() {
    this.record['project_title'] = this.project_title;
    this.record['project_date'] = this.project_date;
    this.record['project_desc'] = this.project_desc;
    this._projectService.create_project(this.record).then(resp => {
      this.project_title = '';
      this.project_date = '';
      this.project_desc = '';
  
    })
      .catch(error => {
        console.log(error);
      });
  }
}
