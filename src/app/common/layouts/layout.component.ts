import { Component } from '@angular/core';

@Component({
  templateUrl: 'layout.component.html'
})
export class LayoutComponent {

  public isShowMenu: boolean;

  public toggleMenu() {
    this.isShowMenu = !this.isShowMenu;
  }
}
