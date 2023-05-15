import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup;
 
  

  constructor(private formbuilder:FormBuilder,private http:HttpClient ,private router:Router,private toastr: ToastrService) {

   }

  ngOnInit(): void {
    this.form = this.formbuilder.group(
      {
        
        email:'',
        password:'',
     
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
      const res = await this.http.post('http://localhost:5093/api/Auth/Login', JSON.stringify(data), { headers,withCredentials:true }).toPromise().then(()=>
      
      {
        this.router.navigate(['/dashboard'])});
      console.log(res);
      this.toastr.success('login successfully!', 'Success');
} catch (error) {
  console.error(error);

  // Show an error notification
  this.toastr.error('Failed .', 'Error');
}
   
  }

}
