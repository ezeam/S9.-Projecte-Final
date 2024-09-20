import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChiSonoComponent } from './components/chi-sono/chi-sono.component';
import { DisciplinaPositivaComponent } from './components/disciplina-positiva/disciplina-positiva.component';
import { PercorsoEducareComponent } from './components/percorso-educare/percorso-educare.component';
import { SupportoPersonalizzatoComponent } from './components/supporto-personalizzato/supporto-personalizzato.component';
import { WebinarComponent } from './components/webinar/webinar.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'chi-sono', component: ChiSonoComponent }, 
  { path: 'disciplina-positiva', component: DisciplinaPositivaComponent }, 
  { path: 'percorso-educare', component: PercorsoEducareComponent },
  { path: 'supporto-personalizzato', component: SupportoPersonalizzatoComponent },
  { path: 'webinar', component: WebinarComponent },
];
