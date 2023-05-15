import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Emitters } from '../emitters/Emitters';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form!:FormGroup;
  router: any;
  Role: any[] = [];
  User:any[]=[];
 // isAdmin=false ;
  
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private toastr: ToastrService) {

   }

   ngOnInit(): void {
    this.http.get<any[]>('http://localhost:5093/api/User/GetAllRoles')
    .subscribe((response) => {
      this.Role = response;
    });
    this.http.get<any[]>('http://localhost:5093/api/User/GetALLUsers')
    .subscribe((response) => {
      this.User = response;
    });
    this.form = this.formbuilder.group(
      {
        userId:'',
      
        roleName:'',
      }
    );
   /* Emitters.AdminEmitter.subscribe((isAdmin: boolean) => {
      this.isAdmin = isAdmin;
    });*/
    
  }
  async submit() {
    try {
      const data = this.form.getRawValue();
      
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      console.log( JSON.stringify(data))
      const res = await this.http.post('http://localhost:5093/api/User/add-role', JSON.stringify(data), { headers }).toPromise().then(()=>this.router.navigate('/login'));
      
      
      console.log(res);
      this.toastr.success('role added successfully!', 'Success');
} catch (error) {
  console.error(error);

  // Show an error notification
  this.toastr.error('Failed to add role.', 'Error');
}
    
    

  }



}
