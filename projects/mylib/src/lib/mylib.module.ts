import { NgModule } from '@angular/core';
import { MylibComponent } from './mylib.component';
import { Ng5SliderModule } from 'ng5-slider';


@NgModule({
  declarations: [MylibComponent],
  imports: [
    Ng5SliderModule
  ],
  exports: [MylibComponent]
})
export class MylibModule { }
