import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable()
export class AppConfig {

  private backendURL: string = environment.backendUrl;
  private frontendURL: string = environment.frontendUrl;

  /**
   * Get backend Url
   * @returns {string}
   */
  public getBackendURL(): string {
    return this.backendURL;
  }

  /**
   * Get frontend Url
   * @returns {string}
   */
  public getFrontendURL(): string {
    return this.frontendURL;
  }
}
