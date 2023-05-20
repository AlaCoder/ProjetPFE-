import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nv-client',
  templateUrl: './nv-client.component.html',
  styleUrls: ['./nv-client.component.css']
})
export class NvClientComponent implements OnInit {
  form!:FormGroup;
  User: any[] = [];
  Matter: any[] = [];
  Libelle: any[] = [];
  client:any[]=[];
  manager:any[]=[];


  constructor(private formbuilder:FormBuilder,private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:5093/api/User/GetALLUsers')
  .subscribe((response) => {
    this.User = response;
  });
  this.http.get<any[]>('http://localhost:5093/api/Matter')
  .subscribe((response) => {
    this.Matter = response;
    for(var i of this.Matter){
      this.Libelle.push({"libelle":i.libellé,"id":i.matterID})
    }
    this.http.get<any[]>('http://localhost:5093/api/Client')
    .subscribe((response) => {
      this.client = response;
    });
    this.http.get<any[]>('http://localhost:5093/api/User/managers')
    .subscribe((response) => {
      this.manager = response;
    });
  });
  this.form = this.formbuilder.group(

    {
      
      matterID:'',
      entite:'',
      manager:'',
      userID:'',
      dure:'',
      taux:'',
      description:'',
      timesheetID:'',
      facturable: true,
      
  






   
    }

  );

  }
  async submit() {
    try {
      const data = this.form.getRawValue();
      const headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
      for( var l of this.manager){
        if(l.id == data.userID)
        data.manager=l.userName
      }
      console.log( JSON.stringify(data))
      const res = await this.http.post('http://localhost:5093/api/TimeLinesControllers/TimeLines', JSON.stringify(data), { headers })
      .subscribe(
        response => {
          this.toastr.success('TimeLine created')
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
