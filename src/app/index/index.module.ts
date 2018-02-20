import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from 'app/index/index.component';
import { IndexRoutingModule } from 'app/index/index-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
  ],
  providers: [
  ],
  declarations: [ IndexComponent ]
})
export class IndexModule { }
