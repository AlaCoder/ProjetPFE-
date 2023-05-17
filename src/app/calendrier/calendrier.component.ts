import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
//import { CalendarOptions } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';


@Component({
  selector: 'app-calendrier',
 
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {
 /* calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin]
  };*/
  timesheet :any[]=[]
  test :any[]=[]
  
  events: any = [
    { title: 'Present', date: '2023-05-20', color: '#0000FF' },
    { title: 'Absent', date: '2023-05-02', color: '#0000FF' },
    { title: 'Present', date: '2023-05-03', color: '#FF0000' },
  ];
   calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin,interactionPlugin],
     // MUST ensure `this` context is maintained
    events: [],
    eventClick: this.handleDateClick.bind(this),
  };
  config = {
    animated: true
  };
  /*@ViewChild('template') template!: string;
  start: any;*/
  constructor( private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5093/api/Timesheet').subscribe((response: any) => {
  this.timesheet = response;
  console.log(this.timesheet);
  for (var t of this.timesheet) {
    console.log(t.date.substring(0, 10));
    var obj = {
      title: t.totalH + " OH",
      date: t.date.substring(0, 10),
      color: t.valider ? '#00FF00' : '#FF0000' // Utilise une couleur différente en fonction de l'état de validation
    };
    this.test.push(obj);
  }
  this.calendarOptions.events = this.test;

  console.log(this.test);
});

  


    
    
  }
  
  
  handleDateClick(arg : any) {
    alert('date click! ' + arg.event._def.title)
  }
}
