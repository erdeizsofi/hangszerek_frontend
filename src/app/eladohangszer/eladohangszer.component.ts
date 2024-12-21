import {Component, Input} from '@angular/core';
import {HangszerDto} from '../hangszer/hangszer.component';

@Component({
  selector: 'app-eladohangszer',
  imports: [],
  templateUrl: './eladohangszer.component.html',
  styleUrl: './eladohangszer.component.css'
})
export class EladohangszerComponent {
  @Input({ required: true }) dto!: EladoHangszerDto;
}

export interface EladoHangszerDto {
  id: number;
  tulaj_id: number;
  hangszer_id: number;
  ar: number;
  leiras: string;
  kep_url: string;
}

