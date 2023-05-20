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

import { HeaderComponent } from './layouts/header/header.component';
import { ProfilComponent } from './profil/profil.component';
import { LoginComponent } from './login/login.component';
import { PagesRegisterComponent } from './pages-register/pages-register.component';
import { RechercheMattersComponent } from './recherche-matters/recherche-matters.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NvClientComponent } from './nv-client/nv-client.component';
import{MatInputModule} from '@angular/material/input';
import{MatDialogModule} from '@angular/material/dialog';
import{MatButtonModule} from '@angular/material/button';
import { DxSchedulerModule } from 'devextreme-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ResetComponent } from './reset/reset.component';
import { ForgetComponent } from './forget/forget.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { TousclientComponent } from './tousclient/tousclient.component';
import { EditClientComponent } from './edit-client/edit-client.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';

import { TimeLineComponent } from './time-line/time-line.component';
import { EditMatterComponent } from './edit-matter/edit-matter.component';
import { NvTimesheetComponent } from './nv-timesheet/nv-timesheet.component';
import { EditTimelineComponent } from './edit-timeline/edit-timeline.component';
import { EditTimesheetComponent } from './edit-timesheet/edit-timesheet.component';
import { AddUserComponent } from './add-user/add-user.component';
import { TimelineValidatedComponent } from './timeline-validated/timeline-validated.component';
import { TimesheetValidatedComponent } from './timesheet-validated/timesheet-validated.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ListUsersComponent } from './list-users/list-users.component';

//import { ScheduleModule, RecurrenceEditorModule,DayService,WeekService,WorkWeek,WorkWeekService,MonthService,MonthAgendaService } from '@syncfusion/ej2-angular-schedule';



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

    HeaderComponent,
    ProfilComponent,
    LoginComponent,
    PagesRegisterComponent,
    RechercheMattersComponent,
    
    NvClientComponent,
         ResetComponent,
         ForgetComponent,
         TousclientComponent,
         EditClientComponent,
         ModifierClientComponent,
        
         TimeLineComponent,
                  EditMatterComponent,
                  NvTimesheetComponent,
                  EditTimelineComponent,
                  EditTimesheetComponent,
                  AddUserComponent,
                  TimelineValidatedComponent,
                  TimesheetValidatedComponent,
                  CalendrierComponent,
                  ListUsersComponent,
                 
                 
                  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    DxSchedulerModule,
    ReactiveFormsModule,
    HttpClientModule,
 
 
    ToastrModule.forRoot(),
    FullCalendarModule 

    // ScheduleModule, RecurrenceEditorModule, 
    
    
  ],
 //providers: [DayService,WeekService,WorkWeek,WorkWeekService,MonthService,MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);