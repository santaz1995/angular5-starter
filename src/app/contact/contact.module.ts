import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from 'app/contact/contact.component';
import { ContactRouting } from 'app/contact/contact.routing';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorMessageModule } from 'app/common/components/form-error-message/form-error-message.module';
import { ApiFeedbackService } from 'app/common/services/data/api-feedback.service';

@NgModule({
  imports: [
    CommonModule,
    ContactRouting,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    ReactiveFormsModule,



    FormErrorMessageModule,
  ],
  declarations: [
    ContactComponent
  ],
  providers: [
    ApiFeedbackService,
  ]
})
export class ContactModule { }
