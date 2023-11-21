import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RacesComponent } from './races.component';

@Component({
  selector: 'ns-root',
  template: `
  <h1>PonyRacer</h1>
  <ns-races (newRaceAvailable)="onNewRace($event)"></ns-races>
  `,
  standalone: true,
  imports: [
    RacesComponent
  ]
  // imports: [CommonModule, RouterOutlet],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css',
})
export class AppComponent {

  onNewRace(race: string): void {
    alert(race);
    
  }
}
