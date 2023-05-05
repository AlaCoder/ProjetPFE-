import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-timeline',
  templateUrl: './edit-timeline.component.html',
  styleUrls: ['./edit-timeline.component.css']
})
export class EditTimelineComponent implements OnInit {
  timeLinesID !: number;
  timeline: any = {};
  errorMessage !: string;
  form: any;
  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
    
      clientID: [''],
      matterID: [''],
      entite: [''],
      manager: [''],
      dure: [''],
      taux: [''],
      description: [''],
      facturable : true
      
     
      
    }) as FormGroup; // add 'as FormGroup' to assign the object to the correct type
    
    
      this. timeLinesID = this.route.snapshot.params['timeLinesID'];
    this.http.get(`http://localhost:5093/api/TimeLinesControllers/${this.timeLinesID}`).subscribe((response: any) => {
      this.timeline= response;
    });
  }
  onSubmit(): void {
    console.log(this.form.value)
    console.log(this.timeLinesID)
    this.http.put(`http://localhost:5093/api/TimeLinesControllers/${this.timeLinesID}`, this.form.value).subscribe((response: any) => {
      this.router.navigate(['/time-line']);
    }, error => {
      this.errorMessage = error.message;
    });
 
  }

}
