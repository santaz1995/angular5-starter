import { Component } from '@angular/core';
import { ngIfAnimation } from 'app/common/animations/ngIf.animation';

@Component({
  templateUrl: 'portfolio.component.html',
  animations: [ngIfAnimation]
})
export class PortfolioComponent {

  public filterSetting = 'all';

  public filters(filterSetting: string = 'all') {
    this.filterSetting = filterSetting;
  }
}
