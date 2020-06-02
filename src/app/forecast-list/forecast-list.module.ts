import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForecastListRoutingModule} from "./forecast-list-routing.module";
import {MaterialComponentsModule} from "../material-module";
import {ForecastListComponent} from "./forecast-list.component";
import {WeatherComponentsModule} from "../components/weather-components.module";

@NgModule({
  declarations: [
    ForecastListComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    WeatherComponentsModule,
    ForecastListRoutingModule
  ]
})
export class ForecastListModule {
}
