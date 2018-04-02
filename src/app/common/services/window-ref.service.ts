import { Injectable } from '@angular/core';

@Injectable()
export class WindowRef {

  // noinspection JSMethodCanBeStatic
  get window(): Window {
    return window;
  }

}
