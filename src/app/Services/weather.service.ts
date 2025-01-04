// src/app/Services/weather.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.weatherapi.com/v1';
  private apiKey = '486230af6cbc4c219c0130154240812';

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string): Observable<any> {
    const currentWeather_url = `${this.apiUrl}/current.json?key=${this.apiKey}&q=${city}&aqi=no`;// API-URL mit Parameter
    return this.http.get(currentWeather_url);
  }
  getForecastWeather(city: string): Observable<any> {
    const forecastWeather_url = `${this.apiUrl}/forecast.json?key=${this.apiKey}&q=${city}&days=3&aqi=no&alerts=no&lang=de`;
    return this.http.get(forecastWeather_url);
  }


}
