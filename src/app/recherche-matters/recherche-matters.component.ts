import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recherche-matters',
  templateUrl: './recherche-matters.component.html',
  styleUrls: ['./recherche-matters.component.css']
})
export class RechercheMattersComponent implements OnInit {
  Matter: any[] = [];
  
  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5093/api/Matter').subscribe((response: any) => {
      this.Matter = response;
      console.log(this.Matter);
      
  });
}
deleteMatter(matterID: number) {
  if (confirm('Êtes-vous sûr de vouloir supprimer ce client ?')) {
    this.http.delete(`http://localhost:5093/api/Matter/${matterID}`).subscribe((response: any) => {
      const index = this.Matter.findIndex(m => m.id ===matterID);
      this.Matter.splice(index, 1);
    });
  }
  
}
editmatter(Matter: any) {
 
  this.router.navigate(['edit-matter', Matter.matterID]);
  


}
  }


