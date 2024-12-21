import { Routes } from '@angular/router';
import {HangszerekComponent} from './hangszerek/hangszerek.component';
import {HangszerDetailComponent} from './hangszer.detail/hangszer.detail.component';
import {RegisztracioComponent} from './regisztracio/regisztracio.component';
import {BejelentkezesComponent} from './bejelentkezes/bejelentkezes.component';
import {AddhangszerComponent} from './addhangszer/addhangszer.component';
import {AddeladohangszerComponent} from './addeladohangszer/addeladohangszer.component';

export const routes: Routes = [
  { path: "hangszerek", component: HangszerekComponent },
  { path: "", redirectTo: "hangszerek", pathMatch: "full" },
  { path: "hangszer/:nev", component: HangszerDetailComponent },
  { path: "regisztracio", component: RegisztracioComponent },
  { path: "bejelentkezes", component: BejelentkezesComponent },
  { path: "addhangszer", component: AddhangszerComponent },
  { path: "addeladohangszer/:id", component: AddeladohangszerComponent },
];
