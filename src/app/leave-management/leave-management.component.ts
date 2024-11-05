import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-leave-management',
  templateUrl: './leave-management.component.html',
  styleUrls: ['./leave-management.component.css']
})
export class LeaveManagementComponent implements OnInit {
  leaveForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.leaveForm = this.formBuilder.group({
      leaveType: ['', Validators.required], // Leave type is required
      startDate: ['', Validators.required], // Start date is required
      endDate: ['', Validators.required],   // End date is required
      reason: ['', Validators.required]      // Reason is required
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.leaveForm.valid) {
      const leaveRequest = this.leaveForm.value;
      // Now you can do something with the leave request, e.g., send to a service
      console.log(leaveRequest);
    }
  }
}
