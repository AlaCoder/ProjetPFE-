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
 
  timesheet: any[]= [];
  isManager=false;

  constructor( private http: HttpClient,private router: Router ,private matdialog : MatDialog) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5093/api/Timesheet').subscribe((response: any) => {
      this.timesheet = response;
      console.log(this.timesheet);
    });
  }
  Open(){
    this.matdialog.open(NvTimesheetComponent);

   }
   deleteTimesheet(id: number) {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce timesheet ?')) {
      this.http.delete(`http://localhost:5093/api/Timesheet/${id}`).subscribe((response: any) => {
        const index = this. timesheet.findIndex(c => c.id ===id);
        this.timesheet.splice(index, 1);
      });
    }
    
  }
  editClient(id: number) {
 
    this.router.navigate(['edit-timesheet', id]);
    
  
  
  }

  

  }
