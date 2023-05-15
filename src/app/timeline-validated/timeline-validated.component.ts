import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-timeline-validated',
  templateUrl: './timeline-validated.component.html',
  styleUrls: ['./timeline-validated.component.css']
})
export class TimelineValidatedComponent implements OnInit {
  validatedTimelines: any[] = [];


 


  
  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5093/api/TimeLinesControllers/validated-timelines').subscribe(
      (response: any) => {
        this.validatedTimelines = response;
        console.log(this.validatedTimelines);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  

}


