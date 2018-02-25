import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from 'app/contact/contact.component';
import { ContactRouting } from 'app/contact/contact.routing';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from 'app/common/services/contact.service';

@NgModule({
  imports: [
    CommonModule,
    ContactRouting,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    ReactiveFormsModule,
  ],
  declarations: [
    ContactComponent
  ],
  providers: [
    ContactService,
  ]
})
export class ContactModule { }
