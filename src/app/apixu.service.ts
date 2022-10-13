import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApixuService {
  constructor(private http: HttpClient) { }

  getWeather(location) {
    return this.http.get(
      `http://api.weatherstack.com/current?access_key=33f96cd433b577d49cfd92cd5423626c&query=` +
      location
    );
  }
}
