import { Component, OnInit } from '@angular/core';
import { NvClientComponent } from 'src/app/nv-client/nv-client.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-timesheets',
  templateUrl: './timesheets.component.html',
  styleUrls: ['./timesheets.component.css']
})
export class TimesheetsComponent implements OnInit {

  constructor(  private matdialog : MatDialog) { }

  ngOnInit(): void {
  }
   Open(){
    this.matdialog.open(NvClientComponent);

   }
}
