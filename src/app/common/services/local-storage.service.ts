import { Injectable } from '@angular/core';
import { WindowRef } from 'app/common/services/window-ref.service';

@Injectable()
export class LocalStorageService {

  constructor(private windowRef: WindowRef) {}

  public get(key: string): any {
    return JSON.parse(this.windowRef.window.localStorage.getItem(key));
  }

  public set(key: string, value: any) {
    this.windowRef.window.localStorage.setItem(key, JSON.stringify(value));
  }

  public remove(key: string) {
    this.windowRef.window.localStorage.removeItem(key);
  }
}
