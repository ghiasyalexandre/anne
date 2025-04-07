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
  selector: 'app-requests',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss',
})
export class RequestsComponent {
  requestForm!: FormGroup;
  isSubmitting = false;
  submissionSuccess = false;
  submissionError = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.requestForm = this.fb.group({
      name: ['', Validators.required],
      request: ['', [Validators.required]],
    });
  }

  sendRequest(): void {
    if (this.requestForm.invalid) {
      this.requestForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submissionSuccess = false;
    this.submissionError = false;

    emailjs
      .send(
        'service_0vugl7r', // Replace with your EmailJS Service ID
        'template_mzaa01h', // Replace with your EmailJS Template ID
        this.requestForm.value, // Form data
        'l7BZNQP3cx-sa0HX1' // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log(
            'Request sent successfully:',
            response.status,
            response.text
          );
          this.isSubmitting = false;
          this.submissionSuccess = true;
        },
        (error) => {
          console.error('Email sending failed:', error);
          this.isSubmitting = false;
          this.submissionError = true;
        }
      );
  }
}
