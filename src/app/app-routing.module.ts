  import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './components/administration/administration.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FacturationComponent } from './components/facturation/facturation.component';
import { FraisComponent } from './components/frais/frais.component';
import { MattersComponent } from './components/matters/matters.component';
import { ReportingComponent } from './components/reporting/reporting.component';
import { TimesheetsComponent } from './components/timesheets/timesheets.component';
import { ValidationComponent } from './components/validation/validation.component';
import { LoginComponent } from './login/login.component';
import { PagesRegisterComponent } from './pages-register/pages-register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfilComponent } from './profil/profil.component';
import { RechercheMattersComponent } from './recherche-matters/recherche-matters.component';
import { ResetComponent } from './reset/reset.component';
import { ForgetComponent } from './forget/forget.component';

const routes: Routes = [
  
  {path: 'dashboard',component: DashboardComponent},
  {path: 'timesheets',component: TimesheetsComponent},
  {path: 'facturation',component: FacturationComponent},
  {path: 'frais',component: FraisComponent},
  {path: 'validation',component: ValidationComponent},
  {path: 'reporting',component: ReportingComponent},
  {path: 'matters',component: MattersComponent},
  {path: 'clients',component: ClientsComponent},
  {path: 'administration',component: AdministrationComponent},
  {path:'profil',component:ProfilComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:PagesRegisterComponent},
  {path:'Recherche',component:RechercheMattersComponent},
  {path:'reset',component:ResetComponent},
  {path:'forget',component:ForgetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
