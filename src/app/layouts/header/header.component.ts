import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'
import { Emitters } from 'src/app/emitters/emitters';
import {  Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
authenticated =false;
name =""
  constructor(@Inject(DOCUMENT) private document: Document,private http:HttpClient ,private router:Router,private cookieService: CookieService,private user : UserService) { }

  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth:boolean)=>{
          this.authenticated=auth;
      }
    )
    this.user.getuser().then((result) => {
      this.name = result.userName

    })
    
    
  }
  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }
  async logout(){
   
   try {
      const response = await fetch("http://localhost:5093/api/Auth/Logout", {
        method: 'POST',
        headers: {},
        body: JSON.stringify({}),
        credentials: 'include'
      });
    
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        this.authenticated=false  

    this.router.navigate(['/dashboard']);
      }
    } catch (err) {
      console.error(err);
    }
    
  }
}
