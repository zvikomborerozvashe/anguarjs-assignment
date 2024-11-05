// certificate-generator.component.ts

import { Component, OnInit } from '@angular/core';
import { CertificateService } from './certificate.service';
import { Certificate } from './certificate.model';

@Component({
  selector: 'app-certificate-generator',
  templateUrl: './certificate-generator.component.html',
  styleUrls: ['./certificate-generator.component.css'],
})
export class CertificateGeneratorComponent implements OnInit {
  employeeId!: number;
  certificateTitle!: string;
  certificates: Certificate[] = [];

  constructor(private certificateService: CertificateService) {}

  ngOnInit(): void {
    this.loadCertificates();
  }

  generateCertificate(): void {
    this.certificateService.generateCertificate(this.employeeId, this.certificateTitle)
      .subscribe((certificate) => {
        this.certificates.push(certificate);
      });
  }

  downloadCertificate(certificateId: number): void {
    this.certificateService.downloadCertificate(certificateId)
      .subscribe((fileData) => {
        // Implement logic to download the file
      });
  }

  deleteCertificate(certificateId: number): void {
    this.certificateService.deleteCertificate(certificateId)
      .subscribe(() => {
        this.certificates = this.certificates.filter(certificate => certificate.id !== certificateId);
      });
  }

  private loadCertificates(): void {
    this.certificateService.getCertificates()
      .subscribe((certificates) => {
        this.certificates = certificates;
      });
  }
}
