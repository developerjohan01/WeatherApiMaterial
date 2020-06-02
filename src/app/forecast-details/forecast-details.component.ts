import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Forecast} from "../models/forecast";

@Component({
  selector: 'app-forecast-details',
  templateUrl: './forecast-details.component.html',
  styleUrls: ['./forecast-details.component.scss']
})
export class ForecastDetailsComponent implements OnInit {

  forecast: Forecast

  constructor(
    private router: Router
  ) {
    console.log('constructor')
    const state = router.getCurrentNavigation().extras.state;
    if (state && state.forecast) {
      this.forecast = state.forecast;
      console.log(this.forecast)
    }

  }

  ngOnInit(): void {
  }

}
