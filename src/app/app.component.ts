import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-project';

  styles = "hover:text-blue-500 cursor-pointer"
}
