import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user!: object;

  constructor() { }


  async getuser()  {
    try {
      const response = await fetch("http://localhost:5093/api/Auth/User", {
        method: 'GET',
        credentials: 'include'
      });
    
      if (response.ok) {
        
        const result = await response.json();
        console.log(result);
        
        return result
      }
    } catch (err) {
      console.error(err);
    }
    
  }
}
