import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
  ) { }

  setBaseUrl(url: string): HttpService {
    this.apiBaseUrl = url;
    return this;
  }

  async get<T>(uri: string, data: any = null) {
    const options = {
      params: null,
      headers: await this.buildHeaders(),
    };

    if (data !== null) {
      options.params = data;
    }

    return this.http.get<T>(`${this.apiBaseUrl}${uri}`, options).toPromise();
  }

  async post<T>(uri: string, data: any = null) {
    const options = {
      headers: await this.buildHeaders(),
    };

    return this.http.post<T>(`${this.apiBaseUrl}${uri}`, data, options).toPromise();
  }

  private async buildHeaders(): Promise<Record<string, any>> {
    const accessToken = await this.storageService.getData('accessToken');
    const headers: any = {};

    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }

    return {
      ...headers
    };
  }
}
