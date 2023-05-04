import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  clientID !: number;
  client: any = {};
  errorMessage !: string;
  form: any;

  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private formbuilder: FormBuilder   ) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      numeroClient: [''],
      ClientName: [''],
      Description: ['']
    }) as FormGroup; // add 'as FormGroup' to assign the object to the correct type
    
    
      this.clientID = this.route.snapshot.params['clientID'];
    this.http.get(`http://localhost:5093/api/Client/${this.clientID}`).subscribe((response: any) => {
      this.client = response;
    });
  }
  onSubmit(): void {
    console.log(this.form.value)
    this.http.put(`http://localhost:5093/api/Client/${this.clientID}`, this.form.value).subscribe((response: any) => {
      this.router.navigate(['/tous']);
    }, error => {
      this.errorMessage = error.message;
    });
 
    
  }

}
