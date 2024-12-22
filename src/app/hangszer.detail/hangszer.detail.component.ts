import {Component, Input, OnInit} from '@angular/core';
import {HangszerComponent, HangszerDto} from '../hangszer/hangszer.component';
import {ActivatedRoute} from '@angular/router';
import {EladohangszerComponent, EladoHangszerDto} from '../eladohangszer/eladohangszer.component';
import {LayoutComponent} from '../layout/layout.component';
import {JwtstoreService} from '../jwtstore.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-hangszer-detail',
  imports: [HangszerComponent, EladohangszerComponent, LayoutComponent],
  templateUrl: './hangszer.detail.component.html',
  styleUrl: './hangszer.detail.component.css'
})
export class HangszerDetailComponent implements OnInit {
  id: number = 0;
  nev: string="hangszer toltodik";
  kep_url: string="";
  tipus: string="";
  leiras: string="";

  eladohangszerek: EladoHangszerDto[] = [

  ]

  constructor(private route: ActivatedRoute, private jwt: JwtstoreService, private http: HttpClient) {
  }


  deleteHangszer() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.delete(`http://localhost:8080/api/deletehangszer?id=${id}`, {
      headers: {
        ["Authorization"]: "Bearer " + this.jwt.token,
      }
    })
  }

  ngOnInit() {
    const nev = this.route.snapshot.paramMap.get('nev');
    this.http.get<HangszerDto[]>(`http://localhost:8080/api/hangszer?nev=${nev}`, {
      headers: {
        ["Authorization"]: "Bearer " + this.jwt.token,
      }
    }).subscribe(vals => {
      const val = vals[0];
      this.id = val.id;
      this.nev = val.nev;
      this.kep_url = val.kep_url;
      this.leiras = val.leiras;
      this.tipus = val.tipus;
      this.http.get<EladoHangszerDto[]>(`http://localhost:8080/api/elado/hangszer?id=${this.id}`, {
        headers: {
          ["Authorization"]: "Bearer " + this.jwt.token,
        }
      }).subscribe(val => this.eladohangszerek = val);
    });
  }
}
