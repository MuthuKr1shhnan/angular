import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class SignupComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    age: '',
    password: '',
    confirmPassword:'',
  };

  errorName = false;
  errorEmail = false;
  errorPhone = false;
  errorAge = false;
  errorPassword = false;
  errorConfirmPassword = false;


  handleSubmit() {
    const { name, email, phone, age, password, confirmPassword } = this.formData;

    // Name validation
    this.errorName = !name.trim();

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.errorEmail = !emailRegex.test(email);

    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    this.errorPhone = !phoneRegex.test(phone);

    // Age validation
    const ageNumber = parseInt(age);
    this.errorAge = isNaN(ageNumber) || ageNumber <= 0 || ageNumber > 120;

    if (!this.errorName && !this.errorEmail && !this.errorPhone && !this.errorAge) {
      console.log('Form submitted:', this.formData);
      alert('Registration successful!');
      this.formData = { name: '', email: '', phone: '', age: '', password:'', confirmPassword:'',};
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    this.errorPassword = !passwordRegex.test(password);
    this.errorConfirmPassword = password !== confirmPassword;
  }
}