import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nv-timesheet',
  templateUrl: './nv-timesheet.component.html',
  styleUrls: ['./nv-timesheet.component.css']
})
export class NvTimesheetComponent implements OnInit {
  form!:FormGroup;
  Timeline: any[] = [];

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:5093/api/TimeLinesControllers')
  .subscribe((response) => {
    this.Timeline = response;

  });
  this.form = this.formbuilder.group(

    {
      timelineId:'',
      numTimesheet:'',
      date:'',
      totalH:'',
      totalV:'',
      collaborateur:'',
      manager:'',
    
      
     






   
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
      const res = await this.http.post('http://localhost:5093/api/Timesheet/Timesheet', JSON.stringify(data), { headers })
      .subscribe(
        response => {
          this.toastr.success('timesheet created')
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
