import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  location: string | any;
  weatherData: any;

  constructor(private http: HttpClient) { }

  fetchWeather() {
    const url = `http://localhost:5000/fetchWeather?location=${this.location}`;
    this.http.get(url).subscribe((data) => {
      console.log(data);
      this.weatherData = data;
    });
  }
}