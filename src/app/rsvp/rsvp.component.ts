import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.scss',
})
export class RsvpComponent implements OnInit {
  rsvpForm!: FormGroup;
  isSubmitting = false;
  submissionSuccess = false;
  submissionError = false;

  events = ['Horseback Riding', 'Petting Zoo']; // List of events to toggle

  showPlusOne = false; // Toggle state for +1 invitation

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.rsvpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[- +()0-9]+$')]],
      attending: ['yes', Validators.required],
      address: ['', Validators.required],
      zipcode: ['', Validators.required],

      plusOne: [false], // Toggle field

      plusOneName: ['', Validators.required],
      plusOneEmail: ['', [Validators.required, Validators.email]],
      plusOnePhone: [
        '',
        [Validators.required, Validators.pattern('^[- +()0-9]+$')],
      ],
      plusOneAddress: ['', Validators.required],
      plusOneZipcode: ['', Validators.required],

      events: this.fb.array([]), // Array for event toggles
      events1: this.fb.array([]), // Array for event toggles
    });

    // Listen to the toggle state and clear fields when unchecked
    this.rsvpForm.get('plusOne')?.valueChanges.subscribe((value) => {
      this.showPlusOne = value;
      if (!value) {
        this.rsvpForm.patchValue({
          plusOneName: '',
          plusOneEmail: '',
          plusOnePhone: '',
          plusOneAddress: '',
          plusOneZipcode: '',
          events1: '',
        });
      }
    });
  }

  // Getter for easier access to the events form array
  get eventsFormArray(): FormArray {
    return this.rsvpForm.get('events') as FormArray;
  }

  get eventsFormArray1(): FormArray {
    return this.rsvpForm.get('events1') as FormArray;
  }

  toggleEvent(event: string): void {
    const eventArray = this.eventsFormArray;
    const index = eventArray.value.indexOf(event);

    if (index === -1) {
      eventArray.push(this.fb.control(event));
    } else {
      eventArray.removeAt(index);
    }
  }

  toggleEvent1(event: string): void {
    const eventArray = this.eventsFormArray1;
    const index = eventArray.value.indexOf(event);

    if (index === -1) {
      eventArray.push(this.fb.control(event));
    } else {
      eventArray.removeAt(index);
    }
  }

  sendRSVP(): void {
    if (this.rsvpForm.invalid) {
      this.rsvpForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submissionSuccess = false;
    this.submissionError = false;

    emailjs
      .send(
        'service_k3b7cqo', // Replace with your EmailJS Service ID
        'template_xhhcq09', // Replace with your EmailJS Template ID
        this.rsvpForm.value, // Form data
        'cgRNJs5QV1wtHDGE0' // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log(
            'Email sent successfully:',
            response.status,
            response.text
          );
          this.isSubmitting = false;
          this.submissionSuccess = true;
          this.rsvpForm.reset({ attending: 'yes', plusOne: false }); // Reset form with default value
        },
        (error) => {
          console.error('Email sending failed:', error);
          this.isSubmitting = false;
          this.submissionError = true;
        }
      );
  }
}
