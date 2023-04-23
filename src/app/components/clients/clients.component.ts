import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  form!:FormGroup;

  constructor(private formbuilder:FormBuilder,private http:HttpClient) {

   }

  ngOnInit(): void {
    this.form = this.formbuilder.group(
      {
        
        numeroClient:'',
        ClientName:'',
        Description:''
     
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
    .subscribe((result:any)=>{
if(result.IsSuccess)
{
  //this.toastr.success('Le message de notification a été affiché avec succès', 'Succès');


}
else
{
  // this.toastr.error('Une erreur s\'est produite lors de l\'affichage du message de notification', 'Erreur', {
  //   timeOut: 3000,
  //   positionClass: 'toast-top-right'
  // });
}      console.log(result);
    });
  } catch (error) {
    console.error(error);
  }
}
}
