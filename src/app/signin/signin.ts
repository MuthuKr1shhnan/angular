import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signin.html',
  styleUrls: ['./signin.css']
})
export class SigninComponent {
  formData = {
    email: '',
    password: ''
  };

  errorEmail = false;
  errorPassword = false;

  handleSubmit() {
    const { email, password } = this.formData;

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.errorEmail = !emailRegex.test(email);

    // Password validation (minimum 6 characters)
    this.errorPassword = !password || password.length < 6;

    if (!this.errorEmail && !this.errorPassword) {
      console.log('Sign-in data:', this.formData);
      alert('Sign-in successful!');
      this.formData = { email: '', password: '' };
    }
  }
}