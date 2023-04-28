import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-matters',
  templateUrl: './matters.component.html',
  styleUrls: ['./matters.component.css']
})
export class MattersComponent implements OnInit {
  form!:FormGroup;
  client: any[] = [];
   
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:5093/api/Client')
  .subscribe((response) => {
    this.client = response;
  });
    this.form = this.formbuilder.group(

      {
        
        DatedeDémarrage:'',
        DatedeFin:'',
        Libellé:'',
        TypeMatter:'',
        TypeForfait:'',
        Montant:'',
        Device:'',
        TVA:'', 
        Status:''





     
      }

    );
  
  }
  async submit() {
    try {
      const data = this.form.getRawValue();
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      console.log( JSON.stringify(data))
      const res = await this.http.post('http://localhost:5093/api/Matter/Matter', JSON.stringify(data), { headers })
      .subscribe(
        response => {
          this.toastr.success('Matter created')
        },
        error => {
          if (error.status === 400) {
            this.toastr.error('some proprites are not valid');
          } 
        }
  
      );
    } catch (error) {
    
      
    }
  }

}
