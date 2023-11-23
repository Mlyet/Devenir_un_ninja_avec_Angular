import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoniesModel } from '../Model/ponies.model';

@Component({
  selector: 'ns-pony',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pony.component.html',
  styleUrl: './pony.component.css'
})
export class PonyComponent {
  @Input({required: true})pony!: PoniesModel;

  @Output() ponySelected = new EventEmitter<PoniesModel>();

  selectPony(): void {
    // console.log('this.pony');
    this.ponySelected.emit(this.pony);
    
  }
}
