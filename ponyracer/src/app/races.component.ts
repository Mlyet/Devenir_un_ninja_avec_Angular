import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'ns-races',
    template: `
    <h2>Races</h2>
    <div (click)="onButtonClick($event)">
        <button>Click me!</button>
    </div>
    `,
    standalone: true,
})

export class RacesComponent {
    @Output() newRaceAvailable = new EventEmitter<string>(); 
    onButtonClick(event: Event) {
        event.preventDefault();
        event.stopPropagation();
        this.newRaceAvailable.emit("race1");
    }
}