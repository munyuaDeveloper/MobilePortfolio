import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  projects: any;
  constructor(private _projectService: ProjectsService) { }

  ngOnInit() {
    this._projectService.read_project().subscribe(data => {

      this.projects = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          project_title: e.payload.doc.data()['project_title'],
          project_date: e.payload.doc.data()['project_date'],
          project_desc: e.payload.doc.data()['project_desc'],
        };
      });
      console.log(this.projects);
    });
  }


}
