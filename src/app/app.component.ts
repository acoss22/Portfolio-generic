import { Component } from '@angular/core';
import { Job } from '../app/job';
import { ExperienceService } from '../app/experience.service';
import { JOBS } from './jobs';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  selectedJob: Job;
  jobs = JOBS;

  constructor(private experienceService: ExperienceService) { }

  showMenu() {

    let isOpen = document.getElementById('nav-burguer').style.display;
    if (isOpen == 'none') {
      document.getElementById('nav-burguer').style.display = 'block';


    } else {
      // document.getElementById('content').style.marginTop = 'auto';
      document.getElementById('nav-burguer').style.display = 'none';
    }
  }

  onSelect(job: Job) {
    this.selectedJob = job;
  }

  getExperience() {
    this.experienceService.getExperience().subscribe(jobs => this.jobs);

  }


  ngOnInit() {
    document.getElementById('nav-burguer').style.display = 'none';
    this.selectedJob=this.jobs[0];
  }




}
