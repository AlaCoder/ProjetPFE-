import { Component, OnInit } from '@angular/core';
import { Emitters }  from 'src/app/emitters/Emitters';
import { Test } from 'src/app/emitters/test';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private test:Test) { }

  async ngOnInit():  Promise<void>  {
    try {
      const response = await fetch("http://localhost:5093/api/Auth/User", {
        method: 'GET',
        credentials: 'include'
      });
    
      if (response.ok) {
        Emitters.authEmitter.emit(true);
        
        const result = await response.json();
        var id = result.id;
        console.log(result.id);
        const url = `http://localhost:5093/api/User/${id}/roles`;

        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: {}
          });
        
          if (response.ok) {
            const result = await response.json();
            console.log(result[0]);
            if(result[0]=="Manager")
            Emitters.ManagerEmitter.emit(true);
            

          }
        } catch (err) {
          console.error(err);
        }
        


        
      }
    } catch (err) {
      console.error(err);
    }
}

}
