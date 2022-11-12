import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private readonly apiBaseUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient
  ) { }

  get<T>(uri: string, data: any = null) {
    const options = {
      params: null,
    };

    if (data !== null) {
      options.params = data;
    }

    return this.http.get<T>(`${this.apiBaseUrl}${uri}`, options);
  }

  post<T>(uri: string, data: any = null) {
    return this.http.post<T>(`${this.apiBaseUrl}${uri}`, data);
  }
}
