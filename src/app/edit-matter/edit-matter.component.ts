import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-edit-matter',
  templateUrl: './edit-matter.component.html',
  styleUrls: ['./edit-matter.component.css']
})
export class EditMatterComponent implements OnInit {
  matterID !: number;
  Matter: any = {};
  errorMessage !: string;
  form: any;


  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
    
      datededemarage: [''],
      datedefin: [''],
      Libellé: [''],
      typeMatter: [''],
      typeforfait: [''],
      montant: [''],
      device: [''],
      tva: [''],
      status:[''],
      
    }) as FormGroup; // add 'as FormGroup' to assign the object to the correct type
    
    
      this.matterID = this.route.snapshot.params['matterID'];
    this.http.get(`http://localhost:5093/api/Matter/Matter/${this.matterID}`).subscribe((response: any) => {
      this.Matter = response;
    });
  }
  onSubmit(): void {
    console.log(this.form.value)
    this.http.put(`http://localhost:5093/api/Matter/${this.matterID}`, this.form.value).subscribe((response: any) => {
      this.router.navigate(['/Recherche']);
    }, error => {
      this.errorMessage = error.message;
    });
 
    
  }

}
