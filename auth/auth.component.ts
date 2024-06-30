import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CoverImgComponent } from '../shared/components/cover-img/cover-img.component';
import {MatButtonModule} from '@angular/material/button';
import { FormGroup, FormBuilder,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [MatInputModule,MatCheckboxModule,CoverImgComponent,MatButtonModule,ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isBeneficiary = true;
  loginForm:any= FormGroup;

  setBeneficiary(value: boolean) {
    this.isBeneficiary = value;
  }

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      alert(`Usuario: ${formData.username}, Contraseña: ${formData.password}, Recordarme: ${formData.rememberMe}`);
      this.loginForm.reset();
    }
  }
}
