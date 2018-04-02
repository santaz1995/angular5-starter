import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { LocalStorageService } from 'app/common/services/local-storage.service';

@Injectable()
export class AuthenticationService {

  private jwt: string;

  constructor(private localStorageService: LocalStorageService) { }

  public setToken(token: string) {
    this.localStorageService.set('jwt', token);
  }

  public removeToken() {
    this.localStorageService.remove('jwt');
  }

  public getToken(): string {
    return this.localStorageService.get('jwt');
  }

  public isAuthenticated(): any {
    return tokenNotExpired(null, this.getToken());
  }

  public hasToken(): boolean {
    return !!this.localStorageService.get('jwt');
  }
}
