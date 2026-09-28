import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';

@Component({
  selector: 'app-inscriptions-dialog',
  templateUrl: './inscriptions-dialog.component.html',
  styleUrls: ['./inscriptions-dialog.component.css']
})
export class InscriptionsDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<InscriptionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog
  ) {}

  onCancel(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(false);
    this.dialog.open(PaymentDialogComponent, {
      width: '900px',
      maxWidth: '95vw',
      disableClose: true,
      data: { season: this.data }
    });
  }
}
