import { Injectable, NgZone } from '@angular/core';
import { Credentials, AuthResponse } from 'src/app/dtos/credentials.dto';
import { HttpService } from '../http.service';
import { StorageService } from '../storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
  ) { }

  async login(credentials: Credentials): Promise<boolean> {
    try {
      const { data } = await this.httpService.post<AuthResponse>('auth/token', credentials);

      await this.storageService.setData('accessToken', data.token);
      await this.storageService.setData('email', data.email);

      return true;
    }
    catch (ex) {
      return false;
    }
  }

  async isLoggedIn(): Promise<boolean> {
    const accessToken = await this.storageService.getData('accessToken');

    return accessToken !== undefined && accessToken !== null;
  }


  async isGuest(): Promise<boolean> {
    return !(await this.isLoggedIn());
  }
}
