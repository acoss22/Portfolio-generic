import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/Models/job';
import { JOBS } from './../../Data/jobs';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  jobs = JOBS;
  selectedJob: Job;

  constructor() { }

 
  onSelect(job: Job) {
    this.selectedJob = job;
  }

  ngOnInit() {
    document.getElementById('nav-burguer').style.display = 'none';
    this.selectedJob = this.jobs[0];
  }

}
