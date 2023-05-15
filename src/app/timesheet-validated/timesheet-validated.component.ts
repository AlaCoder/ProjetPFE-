import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timesheet-validated',
  templateUrl: './timesheet-validated.component.html',
  styleUrls: ['./timesheet-validated.component.css']
})
export class TimesheetValidatedComponent implements OnInit {
  validatedTimesheet: any[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5093/api/Timesheet/TimesheetsValides').subscribe(
      (response: any) => {
        this.validatedTimesheet= response;
        console.log(this.validatedTimesheet);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

}
