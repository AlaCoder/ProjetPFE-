import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
  private Email?:string
  private Token?:string
  form!:FormGroup;
  constructor(private rout:ActivatedRoute ,private formbuilder:FormBuilder,private http:HttpClient) {
    

   }

  ngOnInit( ): void {
    this.rout.queryParams.subscribe((q)=>{this.Email=q ['email'];this.Token=q['token']});
    this.form=this.formbuilder.group({NewPassword :'' ,ConfirmPsswordPassword:''})

    
  }
  async submit() {
    try {
      const formdata = this.form.getRawValue();
      const data={...formdata,Token:this.Token,Email:this.Email}
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      console.log( JSON.stringify(data))

      const res = await this.http.post('http://localhost:5093/api/Auth/ResetPassword', JSON.stringify(data), { headers }).toPromise();
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

}
