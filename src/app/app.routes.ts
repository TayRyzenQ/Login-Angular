import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { DashboardComponent } from './dashboard/dashboard';
import { BienvenidaComponent } from './dashboard/bienvenida/bienvenida';
import { ClimaComponent } from './dashboard/clima/clima';
import { BanxicoComponent } from './dashboard/banxico/banxico';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'bienvenida', pathMatch: 'full' },
      { path: 'bienvenida', component: BienvenidaComponent },
      { path: 'clima', component: ClimaComponent },
      { path: 'banxico', component: BanxicoComponent },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
];
