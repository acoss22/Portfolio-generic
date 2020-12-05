import { Component, OnInit } from '@angular/core';
import {projects} from '../../Data/projs';
import { Project } from 'src/app/Models/proj';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects = projects;
  selectedProj: Project;

  constructor() { }

 
  onSelect(proj: Project) {
    this.selectedProj = proj;
  }

  ngOnInit() {
    document.getElementById('nav-burguer').style.display = 'none';
    this.selectedProj = this.projects[0];
  }
}
