import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { JobDetailComponent } from './Components/job-detail/job-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutmeComponent } from './Components/aboutme/aboutme.component';
import { FirstsectionComponent } from './Components/firstsection/firstsection.component';
import { AsideComponent } from './Components/aside/aside.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContactComponent } from './Components/contact/contact.component';
import { MailComponent } from './Components/mail/mail.component';
import { HeaderComponent } from './Components/header/header.component';
import { LinksComponent } from './Components/links/links.component';
import { AboutComponent } from './Components/about/about.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { EmailComponent } from './Components/email/email.component';

import { ProjectsComponent } from './Components/projects/projects.component';
import { ProjDetailComponent } from './Components/proj-detail/proj-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    JobDetailComponent,
    NavbarComponent,
    AboutmeComponent,
    FirstsectionComponent,
    AsideComponent,
    FooterComponent,
    ContactComponent,
    MailComponent, HeaderComponent, LinksComponent, AboutComponent, ExperienceComponent, EmailComponent, ProjectsComponent, ProjDetailComponent
  ],
  imports: [

    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
