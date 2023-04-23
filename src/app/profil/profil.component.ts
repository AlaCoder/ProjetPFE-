import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
   message=''
  constructor(private http:HttpClient) { }

  async ngOnInit():  Promise<void>  {
    try {
      const response = await fetch("http://localhost:5093/api/Auth/User", {
        method: 'GET',
        credentials: 'include'
      });
    
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        this.message=result.userName
      }
    } catch (err) {
      console.error(err);
    }
}
}
