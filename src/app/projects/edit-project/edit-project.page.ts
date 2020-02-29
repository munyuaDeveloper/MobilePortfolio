import { ProjectsService } from './../../services/projects.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.page.html',
  styleUrls: ['./edit-project.page.scss'],
})
export class EditProjectPage implements OnInit {

  project_id: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _service: ProjectsService) { }

  ngOnInit() {
    this.project_id = this._route.snapshot.paramMap.get('project_id');
    console.log(this.project_id);
  }

  deleteProject(){
    this._service.delete_project(this.project_id);
    this._router.navigate(['/home'])
  }
}
