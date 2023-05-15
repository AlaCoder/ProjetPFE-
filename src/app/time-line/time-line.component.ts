import { Component, OnInit } from '@angular/core';
import { NvClientComponent } from '../nv-client/nv-client.component';

import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Emitters } from '../emitters/Emitters';
import { Test } from '../emitters/test';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {
  timeline: any[]= [];
  isManager=false;

  constructor( private matdialog : MatDialog ,private http: HttpClient,private router: Router,private test:Test) {
    
   }

  ngOnInit(): void {

    /*Emitters.ManagerEmitter.subscribe(
      (val:boolean)=>{
        
          this.isManager=val;
      });*/
     this.isManager=this.test.getBoolValue();

     this.http.get('http://localhost:5093/api/TimeLinesControllers/not-validated-timelines').subscribe((response: any) => {
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
  validerTimeline(timeLinesID: number) {
    if (confirm('Êtes-vous sûr de vouloir valider ce timeline ?')) {
      this.http.post(`http://localhost:5093/api/TimeLinesControllers/ValiderTimeline/${timeLinesID}`, null).subscribe(
        (response: any) => {
          // La timeline a été validée avec succès
          console.log(response);
          // Effectuez les actions supplémentaires nécessaires, par exemple, mettre à jour la liste des timelines validées.
        },
        (error: any) => {
          // Une erreur s'est produite lors de la validation de la timeline
          console.error(error);
          // Gérez l'erreur de manière appropriée, par exemple, affichez un message d'erreur à l'utilisateur.
        }
      );
    }
  }
  
  

}

