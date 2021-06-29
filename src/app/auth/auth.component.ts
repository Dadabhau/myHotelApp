import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginmode = true;

  constructor(private authService: AuthService) {}

  onSwitchMode() {
    this.isLoginmode = !this.isLoginmode;
  }
  onSubmit(form: NgForm) {
    //console.log(form.value);

    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginmode) {
      //...
    } else {
      this.authService.signup(email, password).subscribe(
        (resData) => {
          console.log(resData);
        },
        (error) => {
          console.log(error);
        }
      );
    }

    form.reset();
  }
}
