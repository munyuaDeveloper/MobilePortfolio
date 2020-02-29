import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.page.html',
  styleUrls: ['./single-project.page.scss'],
})
export class SingleProjectPage implements OnInit {

  project_id: any;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    this.project_id = this._route.snapshot.paramMap.get('project_id')
    console.log(this.project_id);
    
  }

}
