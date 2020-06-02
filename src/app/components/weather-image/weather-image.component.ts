import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'wapi-weather-image',
  templateUrl: './weather-image.component.html',
  styleUrls: ['./weather-image.component.scss']
})
export class WeatherImageComponent implements OnInit {

  @Input()
  imageName: string;

  constructor() { }

  ngOnInit(): void {
  }

  imagePath(): string {
    if (this.imageName) {
      return `assets/images/${this.imageName}@2x.png`
    }
    return ``
  }
}
