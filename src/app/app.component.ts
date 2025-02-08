import { Component } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';



@Component({
  selector: 'app-root',
  imports: [LandingComponent,EducationComponent,ContactComponent,CertificationsComponent,ProjectsComponent,SkillsComponent,WorkExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';

  styles = "hover:text-blue-500 cursor-pointer"
}
