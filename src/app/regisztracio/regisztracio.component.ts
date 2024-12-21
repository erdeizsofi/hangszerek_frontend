import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {JwtstoreService} from '../jwtstore.service';
import {LayoutComponent} from '../layout/layout.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-regisztracio',
  imports: [ReactiveFormsModule, LayoutComponent],
  templateUrl: './regisztracio.component.html',
  styleUrl: './regisztracio.component.css'
})
export class RegisztracioComponent {
  regisztracioForm = new FormGroup({
    nev: new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ]),
    passwordAgain: new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ]),
    admin: new FormControl(false)
  });

  constructor(private http: HttpClient, private jwt: JwtstoreService, private router: Router) {
  }

  onSubmit() {
    if (this.regisztracioForm.valid) {
      const nev = this.regisztracioForm.controls.nev.value;
      const email = this.regisztracioForm.controls.email.value;
      const admin = this.regisztracioForm.controls.admin.value;
      const j1 = this.regisztracioForm.controls.password.value;
      const j2 = this.regisztracioForm.controls.passwordAgain.value;
      if (j1 === j2) {
        this.http.post("http://localhost:8080/auth/regisztracio", {
          nev: nev,
          email: email,
          jelszo: j1,
          admin: admin,
        }, { responseType: 'text' }).subscribe(val => {
          console.log("Got token");
          this.jwt.token = val;
          this.router.navigate(['/hangszerek']);
        });
      } else {
        alert("Próbáld meg öcsi kétszer ugyanazt beírni, tudom nagyon nehez de na szurkolok a maminak")
      }
    }
  }
}
