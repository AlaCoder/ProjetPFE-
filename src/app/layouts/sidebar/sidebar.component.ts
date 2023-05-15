import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/Emitters';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
isManager=false;
isAdmin=false ;
  constructor() { }

  ngOnInit(): void {
    Emitters.ManagerEmitter.subscribe(
      (auth:boolean)=>{
          this.isManager=auth;
      })
      Emitters.AdminEmitter.subscribe(
        (auth:boolean)=>{
            this.isAdmin=auth;
        })
  }

}
