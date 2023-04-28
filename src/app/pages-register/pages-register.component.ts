import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages-register',
  templateUrl: './pages-register.component.html',
  styleUrls: ['./pages-register.component.css']
})
export class PagesRegisterComponent implements OnInit {
form!:FormGroup;
  router: any;
  constructor(private formbuilder:FormBuilder,private http:HttpClient) {

   }

   ngOnInit(): void {
    this.form = this.formbuilder.group(
      {
        username:'',
        email:'',
        password:'',
        phone:'',
        ConfirmPssword:''
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
      const res = await this.http.post('http://localhost:5093/api/Auth/Register', JSON.stringify(data), { headers }).toPromise().then(()=>this.router.navigate('/login'));
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }
}
