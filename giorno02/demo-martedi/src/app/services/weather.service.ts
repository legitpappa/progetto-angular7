import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private url = 'http://api.openweathermap.org/data/2.5/weather?APPID=xxxxxxxx&units=metric&lang=it';

  getWeather(lat: number, lon: number): Observable<WeatherData> {
    return this.http.get<WeatherData>(`${this.url}&lat=${lat}&lon=${lon}`);
  }

  constructor(private http: HttpClient) {
  }
}
