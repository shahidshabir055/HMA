import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataReadService } from './data-read.service';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // loginForm = new FormGroup();
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  emailId!: string;
  roles: string[] = [];
  errorMessage: any;
  successMessage: any;
  loginForm = this.formBuilder.group({
    emailId: ['', Validators.required, Validators.email],
    password: ['', Validators.required, Validators.minLength(6)],
  });
  constructor(private formBuilder: FormBuilder, private dataRead: DataReadService,
              private authService: AuthService, private tokenStorage: TokenStorageService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().email;
    }
  }
  login(): void {
    this.errorMessage = null;
    this.successMessage = null;
    this.dataRead.sendData(this.loginForm.value)
      .subscribe(
        (success) => { this.successMessage = success.message; },
        (error) => { this.errorMessage = error.error.message; }
      );
  }
  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        console.log(data);
        this.emailId = data.email;
        console.log(data.email);
        console.log(this.isLoggedIn);
        // this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
