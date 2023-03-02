import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ValidationComponent } from './components/validation/validation.component';
import { MattersComponent } from './components/matters/matters.component';
import { TimesheetsComponent } from './components/timesheets/timesheets.component';
import { FraisComponent } from './components/frais/frais.component';
import { AdministrationComponent } from './components/administration/administration.component';
import { ReportingComponent } from './components/reporting/reporting.component';
import { FacturationComponent } from './components/facturation/facturation.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './layouts/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    ClientsComponent,
    ValidationComponent,
    MattersComponent,
    TimesheetsComponent,
    FraisComponent,
    AdministrationComponent,
    ReportingComponent,
    FacturationComponent,
    DashboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
