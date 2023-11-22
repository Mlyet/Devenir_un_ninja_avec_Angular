import { Component } from '@angular/core';
import { RacesComponent } from './races/races.component';
import { PoniesComponent } from './ponies/ponies.component';



@Component({
  selector: 'ns-root',
  standalone: true,
  imports: [
    RacesComponent,
    PoniesComponent
  ],
  // imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css',
})
export class AppComponent {}
