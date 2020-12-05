import { Component, Input, OnInit } from '@angular/core';
import { Project } from './../../Models/proj';

@Component({
  selector: 'app-proj-detail',
  templateUrl: './proj-detail.component.html',
  styleUrls: ['./proj-detail.component.css']
})
export class ProjDetailComponent implements OnInit {
  @Input() proj: Project;

  constructor() { }

  ngOnInit() {
  }

}
