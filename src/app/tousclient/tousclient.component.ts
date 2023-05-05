import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tousclient',
  templateUrl: './tousclient.component.html',
  styleUrls: ['./tousclient.component.css']
})
export class TousclientComponent implements OnInit {
  clients: any[]= [];
  timesheet:any[]=[];
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5093/api/Client').subscribe((response: any) => {
      this.clients = response;
      console.log(this.clients);
      
  });
  
}
deleteClient(id: number) {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce timesheet ?')) {
    this.http.delete(`http://localhost:5093/api/Client/${id}`).subscribe((response: any) => {
      const index = this.timesheet.findIndex(c => c.id ===id);
      this.clients.splice(index, 1);
    });
  }
  
}
editClient(client: any) {
 
  this.router.navigate(['edit-client', client.clientID]);
  


}
}
