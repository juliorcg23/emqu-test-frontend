import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { LoginService } from 'src/app/services/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private navController: NavController,
  ) {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.email,
          Validators.required,
        ]
      ],
      password: [
        '',
        [
          Validators.required,
        ]
      ]
    });
  }

  ngOnInit() {
  }

  async login() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      const credentials = {
        email: this.loginForm.get('email').value,
        password: this.loginForm.get('password').value,
      };
      const loggedIn = await this.loginService.login(credentials);

      if (loggedIn) {
        this.navController.navigateRoot('/app');
      }
    }
  }

}
