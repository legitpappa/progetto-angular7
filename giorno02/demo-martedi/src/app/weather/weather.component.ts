import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { WeatherData } from '../models/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weatherData: WeatherData;
  iconURL = 'https://openweathermap.org/img/w/';
  position: Position;
  constructor(private weather: WeatherService) {
    navigator.geolocation.getCurrentPosition((position) => {

      this.weather.getWeather(position.coords.latitude, position.coords.longitude).subscribe((x: WeatherData) => {
        this.weatherData = x;
        this.iconURL += `${x.weather[0].icon}.png`;
        console.log(position.coords);
        this.position = position;
      });
    });

  }



}
