import { Component } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ngIfAnimation } from 'app/common/animations/ngIf.animation';

@Component({
  templateUrl: 'index.component.html',
  animations: [ngIfAnimation]
})
export class IndexComponent {

  public portfolioType = 'all';

  public experienceType: string;

  /**
   * Config for slider
   */
  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    observer: true,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  };

  /**
   * ChooseTabsExperience
   */
  public chooseExperience(experienceType: string) {
    this.experienceType = experienceType;
  }

  /**
   * Filters for portfolio type
   * @param {string} portfolioType
   */
  public filterPortfolioType(portfolioType: string = 'all') {
    this.portfolioType = null;
    setTimeout(() => {
      this.portfolioType = portfolioType;
    }, 270);
  }
}
