import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { handleBackendErrors } from 'app/common/app-helpers';
import { NotificationsService } from 'angular2-notifications';
import { ApiFeedback } from 'app/common/entities/api-feedback';
import { ApiFeedbackService } from 'app/common/services/data/api-feedback.service';

@Component({
  templateUrl: 'contact.component.html',
})
export class ContactComponent {

  public contactForm: FormGroup;

  private handleBackendErrors = handleBackendErrors;

  constructor(private fb: FormBuilder,
              private feedbackService: ApiFeedbackService,
              private notification: NotificationsService) {
    this.createForm();
  }

  /**
   * Submit contact form
   */
  public submit(): void {
    this.feedbackService.sendEmail(this.contactForm.value as ApiFeedback).subscribe( () => {
      this.notification.success('Success', 'Success');
      this.contactForm.reset();
    }, (errorData) => {
      this.handleBackendErrors(this.contactForm, errorData.error.violations);
    });
  }

  /**
   * Form contact
   */
  private createForm(): void {
    this.contactForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required]),
    });
  }
}
