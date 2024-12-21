import {Component, OnInit} from '@angular/core';
import {HangszerComponent, HangszerDto} from '../hangszer/hangszer.component';
import {JwtstoreService} from '../jwtstore.service';
import {HttpClient} from '@angular/common/http';
import {LayoutComponent} from '../layout/layout.component';

@Component({
  selector: 'app-hangszerek',
  imports: [HangszerComponent, LayoutComponent],
  templateUrl: './hangszerek.component.html',
  styleUrl: './hangszerek.component.css'
})
export class HangszerekComponent implements OnInit {
  hangszerek: HangszerDto[] = [
    {
      id: 0,
      nev: "fuvi",
      leiras: "mint kiderült, összeszerelhető",
      tipus: "fafuvos",
      kep_url: "https://erkelamicegled.lapunk.hu/kepek/nevtelen.jpg"
    },
    {
      id: 1,
      nev: "fuvika",
      leiras: "mint kiderült, összeszerelhető",
      tipus: "fafuvos",
      kep_url: "https://erkelamicegled.lapunk.hu/kepek/nevtelen.jpg"
    }
  ];
  constructor(private jwt: JwtstoreService, private http: HttpClient) {}
  ngOnInit() {
    this.http.get<HangszerDto[]>("http://localhost:8080/api/allhangszer", {
      headers: {
        ["Authorization"]: "Bearer " + this.jwt.token,
      }
    }).subscribe(val => this.hangszerek = val);
  }
}
