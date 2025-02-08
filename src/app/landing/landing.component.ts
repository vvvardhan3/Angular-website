import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
// import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';

@Component({
  selector: 'app-landing',
  imports: [ContactComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  
}
