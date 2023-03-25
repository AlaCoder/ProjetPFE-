import {  Component, enableProdMode } from '@angular/core';




import * as AspNetData from 'devextreme-aspnet-data-nojquery';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  appointmentsData: any;

  currentDate: Date = new Date(2021, 3, 27);

  constructor() {
    const url = 'https://js.devexpress.com/Demos/Mvc/api/SchedulerData';

    this.appointmentsData = AspNetData.createStore({
      key: 'AppointmentId',
      loadUrl: `${url}/Get`,
      insertUrl: `${url}/Post`,
      updateUrl: `${url}/Put`,
      deleteUrl: `${url}/Delete`,
      onBeforeSend(method, ajaxOptions) {
        ajaxOptions.xhrFields = { withCredentials: true };
      },
    });
  }
}






