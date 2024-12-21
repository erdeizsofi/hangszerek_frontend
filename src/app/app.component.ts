import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HangszerComponent} from './hangszer/hangszer.component';
import {JwtstoreService} from './jwtstore.service';
import {AsyncPipe} from '@angular/common';
import {LayoutComponent} from './layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sziacica brrr~';
}
