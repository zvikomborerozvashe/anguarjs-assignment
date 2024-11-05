import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Certificate } from './certificate.model';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {

  generateCertificate(employeeId: number, certificateTitle: string): Observable<Certificate> {
    // Simulate generating a certificate with the provided data
    const generatedCertificate: Certificate = {
      id: Math.floor(Math.random() * 1000), // Simulated ID
      employeeId: employeeId,
      certificateTitle: certificateTitle,
      employeeName: "John Doe", // Add employeeName here
    };
  
    // Return the generated certificate as an Observable
    return of(generatedCertificate);
  }
  
  getCertificates(): Observable<Certificate[]> {
    // Simulate fetching certificates from a mock data source
    const mockCertificates: Certificate[] = [
      { id: 1, employeeId: 101, certificateTitle: 'Certificate of Completion' },
      { id: 2, employeeId: 102, certificateTitle: 'Achievement Award' },
      // Add more mock data here
    ];

    // Return the mock certificates as an Observable
    return of(mockCertificates);
  }

  downloadCertificate(certificateId: number): Observable<Blob> {
    // Simulate downloading a certificate (returning an empty blob for example)
    const emptyBlob = new Blob();
    return of(emptyBlob);
  }

  deleteCertificate(certificateId: number): Observable<any> {
    // Simulate deleting a certificate (returning a success message for example)
    return of({ message: 'Certificate deleted successfully.' });
  }
}
