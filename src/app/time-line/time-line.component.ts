import { Component, OnInit } from '@angular/core';
import { NvClientComponent } from '../nv-client/nv-client.component';

import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
  timeline: any[]= [];

  constructor( private matdialog : MatDialog ,private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5093/api/TimeLinesControllers').subscribe((response: any) => {
      this.timeline = response;
      console.log(this.timeline);
  });
}
deleteTimeline(timeLinesID: number) {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce timeline ?')) {
    this.http.delete(`http://localhost:5093/api/TimeLinesControllers/${timeLinesID}`).subscribe((response: any) => {
      const index = this.timeline.findIndex(c => c.id ===timeLinesID);
      this.timeline.splice(index, 1);
    });
  }
  
}

  Open(){
    this.matdialog.open(NvClientComponent);

   }
   edittimeline( timeLinesID: number) {
 
    this.router.navigate(['edit-timeline',  timeLinesID]);
    
  
  
  }

}

