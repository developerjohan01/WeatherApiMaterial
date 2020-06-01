import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForecastListRoutingModule} from "./forecast-list-routing.module";
import {MaterialComponentsModule} from "../material-module";
import {ForecastListComponent} from "./forecast-list.component";

@NgModule({
  declarations: [
    ForecastListComponent
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    ForecastListRoutingModule
  ]
})
export class ForecastListModule {
}
