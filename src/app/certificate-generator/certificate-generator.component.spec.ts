import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateGeneratorComponent } from './certificate-generator.component';

describe('CertificateGeneratorComponent', () => {
  let component: CertificateGeneratorComponent;
  let fixture: ComponentFixture<CertificateGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificateGeneratorComponent]
    });
    fixture = TestBed.createComponent(CertificateGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
