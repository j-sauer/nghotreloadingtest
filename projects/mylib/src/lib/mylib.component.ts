import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
  selector: 'lib-mylib',
  template: `
    <p>
      <ng5-slider value="5" [options]="options"></ng5-slider>
    </p>
  `,
  styles: [
  ]
})
export class MylibComponent implements OnInit {

  options: Options = {
    floor: 0,
    ceil: 250
  };

  constructor() { }

  ngOnInit(): void {
  }

}
