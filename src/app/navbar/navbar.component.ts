import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
  constructor(private router: Router) {}

  ngDoCheck() {
   
    let currentNav = this.router.url;

    switch (currentNav) {
      case "/about":
        this.navigateToSection('about');
        break;
      case "/experience":
        this.navigateToSection('experience');
        break;
      case "/projects":
        this.navigateToSection('projects');
        break;
      case "/contact":
        this.navigateToSection('contact');
          break;
  
      default:
        this.navigateToSection('content');
        break;
    }
  }

  navigateToSection(sectionName : string){
    console.log(sectionName);
   let elementSection = document.getElementById(sectionName);
    elementSection.scrollIntoView();
  }

  navigateToAbout() {
    this.router.navigateByUrl("/about");
  }

  navigateToContact() {
    this.router.navigateByUrl("/contact");
  }
  navigateToExperience() {
    this.router.navigateByUrl("/experience");
  }
}
