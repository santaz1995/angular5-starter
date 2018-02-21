import { Component } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';


@Component({
  templateUrl: 'index.component.html',
})
export class IndexComponent {

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


}
