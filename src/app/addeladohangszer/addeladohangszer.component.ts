import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {JwtstoreService} from '../jwtstore.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LayoutComponent} from '../layout/layout.component';

@Component({
  selector: 'app-addeladohangszer',
  imports: [LayoutComponent, ReactiveFormsModule],
  templateUrl: './addeladohangszer.component.html',
  styleUrl: './addeladohangszer.component.css'
})
export class AddeladohangszerComponent {
  hangszerForm = new FormGroup({
    ar: new FormControl('',[
      Validators.required,
    ]),
    leiras: new FormControl('',[
      Validators.required,
    ]),
    kep_url: new FormControl('',[
      Validators.required,
    ]),
  });

  constructor(private route: ActivatedRoute, private http: HttpClient, private jwt: JwtstoreService, private router: Router) {
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (this.hangszerForm.valid) {
      const ar = this.hangszerForm.controls.ar.value;
      const kep_url = this.hangszerForm.controls.kep_url.value;
      const leiras = this.hangszerForm.controls.leiras.value;

      this.http.post("http://localhost:8080/api/elado/savehangszer", {
        ar: ar,
        kep_url: kep_url,
        leiras: leiras,
        hangszerId: id,
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
