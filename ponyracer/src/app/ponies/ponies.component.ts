import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoniesModel } from '../Model/ponies.model';

@Component({
  selector: 'ns-ponies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ponies.component.html',
  styleUrl: './ponies.component.css'
})
export class PoniesComponent {
  // ponies!: PoniesModel[];

  ponies: Array<PoniesModel> = [{ name: 'Rainbow Dash' }, { name: 'Pinkie Pie' }];
  

  refreshPonies(): void {
    
    this.ponies = [{ name: 'Fluttershy' }, { name: 'Rarity' }];
    console.log(this.ponies);
  }
}
