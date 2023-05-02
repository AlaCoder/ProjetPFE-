import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.clientID = this.route.snapshot.params['clientID'];
    this.http.get(`http://localhost:5093/api/Client/${this.clientID}`).subscribe((response: any) => {
      this.client = response;
    });
  }
  onSubmit(): void {
    this.http.put(`http://localhost:5093/api/Client/${this.clientID}`, this.client).subscribe((response: any) => {
      this.router.navigate(['/tous']);
    }, error => {
      this.errorMessage = error.message;
    });
  }

}
