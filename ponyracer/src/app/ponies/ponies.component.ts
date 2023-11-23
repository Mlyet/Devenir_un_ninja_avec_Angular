import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoniesModel } from '../Model/ponies.model';
import { PonyComponent } from '../pony/pony.component';

@Component({
  selector: 'ns-ponies',
  standalone: true,
  imports: [CommonModule, PonyComponent],
  templateUrl: './ponies.component.html',
  styleUrl: './ponies.component.css'
})
export class PoniesComponent {
  // ponies!: PoniesModel[];

  ponies: Array<PoniesModel> = [
    { id: 1, name: 'Rainbow Dash' },
    { id: 2, name: 'Pinkie Pie' },
    { id: 3, name: 'George' }
  ];

  betOnPony(pony: PoniesModel): void {
    console.log(pony);
    
  }
  
}
