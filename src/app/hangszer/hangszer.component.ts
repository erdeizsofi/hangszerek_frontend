import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RouterLink} from '@angular/router';
import {JwtstoreService} from '../jwtstore.service';



@Component({
  selector: 'app-hangszer',
  imports: [
    RouterLink
  ],
  templateUrl: './hangszer.component.html',
  standalone: true,
  styleUrl: './hangszer.component.css'
})
export class HangszerComponent {
  @Input({ required: true }) dto!: HangszerDto;
  constructor(public jwt: JwtstoreService){}
}

export interface HangszerDto {
  id: number;
  nev: string;
  tipus: string;
  leiras: string;
  kep_url: string;
}
