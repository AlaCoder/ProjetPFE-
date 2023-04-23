import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  form!:FormGroup;
  constructor(private formbuilder:FormBuilder,private http:HttpClient) {

   }

   ngOnInit(): void {
    this.form = this.formbuilder.group(
      {
  
        email:'',
     
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
      const res = await this.http.post('http://localhost:5093/api/Auth/ForgetPassword', JSON.stringify(data), { headers }).toPromise();
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

}
