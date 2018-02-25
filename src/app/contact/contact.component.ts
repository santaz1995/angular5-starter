import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactService } from 'app/common/services/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'contact.component.html',
})
export class ContactComponent {

  public zoom = 8;

  public markers: GoogleMapsMarket[] = [
    {
      lat: 50.059821,
      lng: 3.1995638,
      label: 'Home',
      draggable: true
    },
  ];

  public contactForm: FormGroup;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private contactService: ContactService) {
    this.createForm();
  }

  /**
   * Submit contact form
   */
  public submit(): void {
    this.contactService.sendEmail(this.contactForm.value).subscribe( () => {
      this.contactForm.reset();
      this.toastr.success('Success send message to our manager. Please wait for contact with manager', 'Success send message');
    }, (errorData) => {
    });
  }

  /**
   * Form contact
   */
  private createForm(): void {
    this.contactForm = this.fb.group({
      email: [null],
      title: [null],
      name: [null],
      message: [null],
    });
  }
}
/**
 TODO: ADD VALIDATION
 */
