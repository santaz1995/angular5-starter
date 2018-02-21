import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from 'app/index/index.component';
import { IndexRoutingModule } from 'app/index/index-routing.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  imports: [
    CommonModule,
    SwiperModule,
    IndexRoutingModule,
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  declarations: [ IndexComponent ]
})
export class IndexModule { }
