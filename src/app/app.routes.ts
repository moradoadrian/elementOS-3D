import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tecnologia', component: TecnologiaComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: '**', redirectTo: '' }
];
