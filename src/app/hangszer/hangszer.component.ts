import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RouterLink} from '@angular/router';

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
}

export interface HangszerDto {
  id: number;
  nev: string;
  tipus: string;
  leiras: string;
  kep_url: string;
}
