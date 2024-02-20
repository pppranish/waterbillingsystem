import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  clicked = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email :['',[Validators.required , Validators.email]],
      password: ['', Validators.required]
    });
  }
  onClickBeforeSubmit(){
    this.clicked = true;

  }
  login() {
   

    

    if (this.loginForm.valid) {
      // Handle login logic
    }
  }
}
