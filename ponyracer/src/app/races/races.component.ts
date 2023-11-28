import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestService } from "../test.service";
import { RaceModel } from "../Model/race.model";



@Component({
    selector: 'ns-races',
    providers: [{provide: TestService}],
    templateUrl: './races.component.html',
    standalone: true,
    imports: [CommonModule]
})

export class RacesComponent implements OnInit{
  races!: Array<RaceModel>
  constructor (private testService : TestService) {}
  ngOnInit(): void {
    this.races = this.testService.list();
    
  }

}