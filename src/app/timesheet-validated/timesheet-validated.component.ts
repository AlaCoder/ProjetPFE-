import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timesheet-validated',
  templateUrl: './timesheet-validated.component.html',
  styleUrls: ['./timesheet-validated.component.css']
})
export class TimesheetValidatedComponent implements OnInit {
  validatedTimesheet: any[] = [];
  invoiceId:number | undefined;
  

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:5093/api/Timesheet/TimesheetsValides').subscribe(
      (response: any) => {
        this.validatedTimesheet= response;
        console.log(this.validatedTimesheet);
      },
      (error: any) => {
        console.error(error);
      }
    );

  }
  generateInvoice(id: number) {
    const payload = { timesheetId: id ,date:new Date().toISOString() };
    console.log(payload)
  
    this.http.post('http://localhost:5093/api/Invoice', payload).subscribe(
      (response: any) => {
        // La facture a été générée avec succès
        console.log('Facture générée:', response);
  
        // Télécharger la facture PDF
        this.downloadInvoicePdf(response.invoiceId);
      },
      (error: any) => {
        // Une erreur s'est produite lors de la génération de la facture
        console.error('Erreur lors de la génération de la facture:', error);
        // Gérer l'erreur de manière appropriée
      }
    );
  }
  


  downloadInvoicePdf(id: number) {
    this.http.get<number>('http://localhost:5093/api/Invoice/invoiceId/'+id).subscribe(
      
      (invoiceId: number) => {
        console.log('Invoice ID:', invoiceId);
        
        this.http.get('http://localhost:5093/api/Invoice/' + invoiceId + '/pdf', { responseType: 'blob' }).subscribe(
          (response: Blob) => {
            // Créez un objet URL pour le blob
            const url = URL.createObjectURL(response);
            
            // Créez un lien temporaire pour le téléchargement
            const link = document.createElement('a');
            link.href = url;
            link.download = 'invoice.pdf';
            
            // Ajoutez le lien au DOM et cliquez dessus pour déclencher le téléchargement
            document.body.appendChild(link);
            link.click();
            
            // Supprimez le lien du DOM et libérez l'URL de l'objet blob
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          },
          (error: any) => {
            console.error(error);
          }
        );
      },
      (error: any) => {
        console.error(error);
      }
    );
    console.log(this.invoiceId);
  }
  
  
 
  
  

}
