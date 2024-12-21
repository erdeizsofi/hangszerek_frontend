import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {JwtstoreService} from '../jwtstore.service';

@Component({
  selector: 'app-layout',
  imports: [RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  @Input() hangszer_id?: number;
 constructor(public jwt: JwtstoreService) {
 }
}
