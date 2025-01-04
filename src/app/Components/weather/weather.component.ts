import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../Services/weather.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  weatherData: any;
  city: string = 'Trier'; // Standardstadt
  roundedTemperature?: number;
  weatherIcon: string = "";


  constructor(private weatherService: WeatherService, private http: HttpClient) { }

  ngOnInit(): void {
    // this.fetchCurrentWeather(); // Wetterdaten abrufen, sobald die Komponente geladen wird
    this.fetchForecastWeather();
    console.log(this.weatherIcon);
  }

  fetchCurrentWeather(): void {
    this.weatherService.getCurrentWeather(this.city).subscribe(data => {
        this.weatherData = data;
        // console.log(this.weatherData);
    });
  }

  fetchForecastWeather(): void {
    this.weatherService.getForecastWeather(this.city).subscribe(data => {
        this.weatherData = data;
        console.log(this.weatherData);

        //korrektes Icon
        if (this.weatherData.current.cloud == 0) {
          this.weatherIcon = "sun";
        } 
        else if (this.weatherData.current.cloud > 50) {
          this.weatherIcon = "cloud"
        }
        else {
          this.weatherIcon = "sun_cloud";
        }
    });
  }
}
