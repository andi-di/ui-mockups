import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'diu-inspect-dialog',
  templateUrl: './inspect-dialog.component.html',
  styleUrls: ['./inspect-dialog.component.css']
})
export class InspectDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InspectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {

  }

}
