import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeatherImageComponent} from "./weather-image/weather-image.component";
import { WeatherCardComponent } from './weather-card/weather-card.component';
import {MaterialComponentsModule} from "../material-module";


@NgModule({
  declarations: [
    WeatherImageComponent,
    WeatherCardComponent],
  imports: [
    CommonModule,
    MaterialComponentsModule
  ],
  exports: [
    WeatherImageComponent, WeatherCardComponent]
})
export class WeatherComponentsModule {
}
