import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { LandingComponent } from './landing/landing.component';



@Component({
  selector: 'app-root',
  imports: [HeaderComponent,LandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';
}
