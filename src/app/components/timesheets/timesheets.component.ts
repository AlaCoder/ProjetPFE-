import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NvTimesheetComponent } from 'src/app/nv-timesheet/nv-timesheet.component';

@Component({
  selector: 'app-timesheets',
  templateUrl: './timesheets.component.html',
  styleUrls: ['./timesheets.component.css']
})
export class TimesheetsComponent implements OnInit {
  clients: any[]= [];

  constructor( private http: HttpClient,private router: Router ,private matdialog : MatDialog) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5093/api/Timesheet').subscribe((response: any) => {
      this.clients = response;
      console.log(this.clients);
    });
  }
  Open(){
    this.matdialog.open(NvTimesheetComponent);

   }

  

  }
