import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { BlogComponent } from './blog/blog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone   : true,
  imports      : [ RouterOutlet,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    ResumeComponent,
    BlogComponent]
})


export class AppComponent {
  title = 'portfolio';
}
