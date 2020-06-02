import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForecastDetailsRoutingModule} from "./forecast-details-routing.module";
import {ForecastDetailsComponent} from "./forecast-details.component";
import {MaterialComponentsModule} from "../material-module";
import {WeatherComponentsModule} from "../components/weather-components.module";



@NgModule({
  declarations: [ForecastDetailsComponent],
  imports: [
    CommonModule,
    ForecastDetailsRoutingModule,
    MaterialComponentsModule,
    WeatherComponentsModule
  ]
})
export class ForecastDetailsModule { }
