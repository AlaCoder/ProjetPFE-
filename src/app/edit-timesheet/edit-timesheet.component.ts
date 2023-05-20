import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-timesheet',
  templateUrl: './edit-timesheet.component.html',
  styleUrls: ['./edit-timesheet.component.css']
})
export class EditTimesheetComponent implements OnInit {
  id !: number;
  timesheet: any = {};
  errorMessage !: string;
  form: any;
  manager:any[]=[];
  collabarateur:any[]=[];
  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private formbuilder: FormBuilder,private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:5093/api/User/managers')
    .subscribe((response) => {
      this.manager = response;
    });
    this.http.get<any[]>('http://localhost:5093/api/User/collaborateurs')
    .subscribe((response) => {
      this.collabarateur = response;
    });

    this.form = this.formbuilder.group({
      timelineId: [''],
      numTimesheet: [''],
      date: [''],
      totalH: [''],
      totalV: [''],
      collaborateur: [''],
      manager:[''],
    }) as FormGroup; // add 'as FormGroup' to assign the object to the correct type
    
    
      this.id = this.route.snapshot.params['id'];
    this.http.get(`http://localhost:5093/api/Timesheet/${this.id}`).subscribe((response: any) => {
      this.id = response;
    });
  }
  onSubmit(): void {
    
    console.log(this.form.value)
    this.http.put(`http://localhost:5093/api/Timesheet/${this.id}`, this.form.value).subscribe((response: any) => {
      this.router.navigate(['/timesheets']);
      this.toastr.success('Timesheet updated successfully!', 'Success');
    }, error => {
      this.errorMessage = error.message;
      this.toastr.error('Failed to update timesheet.', 'Error');
    });
  }

}
