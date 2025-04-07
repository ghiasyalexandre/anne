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
      song: [''],
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
        'service_k3b7cqo', // Replace with your EmailJS Service ID
        'template_xhhcq09', // Replace with your EmailJS Template ID
        this.requestForm.value, // Form data
        'cgRNJs5QV1wtHDGE0' // Replace with your EmailJS User ID
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
