import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.http.post('http://localhost:3000/feedback', this.form.value)
        .subscribe({
          next: (response) => {
            console.log('Form successfully submitted:', response);
            alert('Thank you for your feedback!');
            this.form.reset(); // Clears the form
          },
          error: (err) => {
            console.error('Error submitting form:', err);
          },
        });
    } else {
      console.error('Form is invalid');
    }
  }
}
