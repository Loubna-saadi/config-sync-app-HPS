import { Routes } from '@angular/router';

import { DashboardComponent } from './modules/dashboard/dashboard/dashboard';
import { ComparisonComponent } from './modules/comparison/comparison/comparison';
import { ExportComponent } from './modules/export/export/export';
import { ImportComponent } from './modules/import/import/import';
import { LoginComponent } from './modules/auth/login/login';
import { HomeComponent } from './modules/home/home';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Par défaut -> Home
  { path: '**', redirectTo: 'home' }
];