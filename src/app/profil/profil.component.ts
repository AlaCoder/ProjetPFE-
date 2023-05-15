import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/Emitters';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
   Username=''
   email=''
   phone=''
  constructor(private http:HttpClient) { }

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
        this.Username=result.userName
        this.email=result.email
        this.phone=result.phoneNumber
        
      }
    } catch (err) {
      console.error(err);
    }
    
}
}
