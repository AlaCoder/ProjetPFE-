import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  form!:FormGroup;

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private toastr: ToastrService) {

   }

  ngOnInit(): void {
    this.form = this.formbuilder.group(
      {
        
        numeroClient:'',
        ClientName:'',
        Description:'',
        nomEntite:''
     
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
    const res = await this.http.post('http://localhost:5093/api/Client/Client', JSON.stringify(data), { headers })
    .subscribe(
      response => {
        this.toastr.success('Client created')
      },
      error => {
        if (error.status === 400) {
          this.toastr.error('some proprites are not valid');
        } 
      }

    );
  } catch (error) {
    this.toastr.error('dd');
    
  }
}
}
