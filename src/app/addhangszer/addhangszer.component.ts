import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {JwtstoreService} from '../jwtstore.service';
import {Router} from '@angular/router';
import {LayoutComponent} from '../layout/layout.component';

@Component({
  selector: 'app-addhangszer',
  imports: [ReactiveFormsModule, LayoutComponent],
  templateUrl: './addhangszer.component.html',
  styleUrl: './addhangszer.component.css'
})
export class AddhangszerComponent {
  hangszerForm = new FormGroup({
    nev: new FormControl('',[
      Validators.required,
    ]),
    leiras: new FormControl('',[
      Validators.required,
    ]),
    kep_url: new FormControl('',[
      Validators.required,
    ]),
    tipus: new FormControl('',[
      Validators.required,
    ]),
  });

  constructor(private http: HttpClient, private jwt: JwtstoreService, private router: Router) {
  }

  onSubmit() {
    if (this.hangszerForm.valid) {
      const nev = this.hangszerForm.controls.nev.value;
      const tipus = this.hangszerForm.controls.tipus.value;
      const kep_url = this.hangszerForm.controls.kep_url.value;
      const leiras = this.hangszerForm.controls.leiras.value;

      this.http.post("http://localhost:8080/api/savehangszer", {
        nev: nev,
        tipus: tipus,
        kep_url: kep_url,
        leiras: leiras
      }, {
        headers: {
          ["Authorization"]: "Bearer " + this.jwt.token,
        }
      }).subscribe(val => {
        this.router.navigate(['/hangszerek']);
      });
    }
  }

}
