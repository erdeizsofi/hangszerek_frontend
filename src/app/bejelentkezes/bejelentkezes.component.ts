import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {JwtstoreService} from '../jwtstore.service';
import {LayoutComponent} from '../layout/layout.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bejelentkezes',
  imports: [LayoutComponent, ReactiveFormsModule],
  templateUrl: './bejelentkezes.component.html',
  styleUrl: './bejelentkezes.component.css'
})
export class BejelentkezesComponent {
  regisztracioForm = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ]),
  });

  constructor(private http: HttpClient, private jwt: JwtstoreService, private router: Router) {
  }

  onSubmit() {
    if (this.regisztracioForm.valid) {
      const email = this.regisztracioForm.controls.email.value;
      const j1 = this.regisztracioForm.controls.password.value;

        this.http.post("http://localhost:8080/auth/bejelentkezes", {
          email: email,
          jelszo: j1,
        }, { responseType: 'text' }).subscribe(val => {
          console.log("Got token");
          this.jwt.token = val;
          this.router.navigate(['/hangszerek']);
        });
    }
  }

}
