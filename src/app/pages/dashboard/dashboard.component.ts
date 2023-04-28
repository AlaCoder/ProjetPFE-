import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  async ngOnInit():  Promise<void>  {
    try {
      const response = await fetch("http://localhost:5093/api/Auth/User", {
        method: 'GET',
        credentials: 'include'
      });
    
      if (response.ok) {
        Emitters.authEmitter.emit(true);
        const result = await response.json();
        console.log(result);
        
      }
    } catch (err) {
      console.error(err);
    }
}

}
