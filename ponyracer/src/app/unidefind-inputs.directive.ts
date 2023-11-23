import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[nsUnidefindInputs]',
  standalone: true
})
export class UnidefindInputsDirective  implements OnInit{
  @Input({required: true})pony!: string;

  ngOnInit(): void {
    console.log(`inputs are $(this.poney)`);
  }
    

  

}
