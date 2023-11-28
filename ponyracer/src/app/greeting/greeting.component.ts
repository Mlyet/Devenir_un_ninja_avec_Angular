import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ns-greeting',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.css'
})
export class GreetingComponent {
asyncGreeting = new Promise(resolve => {
  window.setTimeout(() => resolve('hello'), 1000);
})
}
