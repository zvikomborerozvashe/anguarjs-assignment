import { Component } from '@angular/core';
import { read, WorkBook, utils } from 'xlsx';


@Component({
  selector: 'app-vetting',
  templateUrl: './vetting.component.html',
  styleUrls: ['./vetting.component.css']
})
export class VettingComponent {
  databaseFile: File | undefined;
  excelFile: File | undefined;

  onDatabaseFileChange(event: any): void {
    this.databaseFile = event.target.files[0];
  }

  onExcelFileChange(event: any): void {
    this.excelFile = event.target.files[0];
  }

  processFiles(): void {
    if (!this.databaseFile || !this.excelFile) {
      console.log('Please select both files.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e: any) => {
      const arrayBuffer = e.target.result;
      const workbook: WorkBook = read(arrayBuffer, { type: 'array' });
      const excelData = utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);

    
    };

    reader.readAsArrayBuffer(this.excelFile);
  }
}
