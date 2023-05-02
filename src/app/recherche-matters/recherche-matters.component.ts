import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-recherche-matters',
  templateUrl: './recherche-matters.component.html',
  styleUrls: ['./recherche-matters.component.css']
})
export class RechercheMattersComponent implements OnInit {
  Matter: any[] = [];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5093/api/Matter').subscribe((response: any) => {
      this.Matter = response;
      console.log(this.Matter);
      
  });
}
  }


