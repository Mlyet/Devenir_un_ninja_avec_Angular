import { Component, OnInit } from "@angular/core";
import { RaceModel } from "../Model/race.model";
import { CommonModule } from "@angular/common";



@Component({
    selector: 'ns-races',
    templateUrl: './races.component.html',
    standalone: true,
    imports: [CommonModule]
})

export class RacesComponent implements OnInit {
  races!: RaceModel[];
  ngOnInit(): void {
    this.races = [{ name: 'London' }, { name: 'Lyon' }]
  }

}