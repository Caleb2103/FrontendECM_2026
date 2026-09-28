import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentService } from 'src/app/services/student.service';
import { VoucherCreate } from 'src/app/models/student';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class PaymentDialogComponent {
  currentStep: number = 1;
  voucherFile: File | null = null;
  voucherPreview: string | null = null;
  operationCode: string = '';
  loading: boolean = false;
  errorMessage: string = '';

  constructor(
    public dialogRef: MatDialogRef<PaymentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private studentService: StudentService,
  ) {}

  nextStep(): void {
    this.currentStep = 2;
  }

  closeDialog(): void {
    this.dialogRef.close(false);
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];

    if (file) {
      this.errorMessage = '';

      if (file.size > 5 * 1024 * 1024) {
        this.errorMessage = 'La imagen no debe superar los 5MB.';
        return;
      }

      if (!file.type.match(/image\/(jpg|jpeg|png)/)) {
        this.errorMessage = 'El archivo debe ser una imagen JPG o PNG.';
        return;
      }

      this.voucherFile = file;

      // --- Image Preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.voucherPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  confirmInscription(): void {
    if (this.loading) return;
    this.loading = true;
    this.errorMessage = '';

    let student = localStorage.getItem('userId') ?? '1';
    const studId = student;
    const seasId = this.data.season.season.seas_id;
    const inscriptionData = { stud_id: studId, seas_id: seasId };

    this.studentService.inscribirStudent(inscriptionData).subscribe({
      next: () => {
        const memberId = parseInt(studId);
        const periodId = this.data.season.season.seas_period?.peri_id;

        this.uploadVoucher(memberId, periodId);
      },
      error: (error) => {
        this.loading = false;
        console.error('Error al crear la inscripción:', error);
        this.errorMessage = 'Error al procesar la inscripción. Intenta nuevamente.';
      }
    });
  }

  uploadVoucher(memberId: number, periodId: number): void {
    if (!this.voucherFile) {
      this.loading = false;
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result as string;

      const voucherData: VoucherCreate = {
        vouc_operation_number: this.operationCode,
        vouc_image: base64String,
        vouc_member: memberId,
        vouc_period: periodId,
      };

      this.studentService.uploadVoucher(voucherData).subscribe({
        next: () => {
          this.loading = false;
          setTimeout(() => {
            this.dialogRef.close(true);
          }, 1500);
        },
        error: (error) => {
          this.loading = false;
          console.error('Error al subir el voucher:', error);
          this.errorMessage = 'Se creó la inscripción, pero hubo un error al subir el voucher.';

          setTimeout(() => {
            this.dialogRef.close(true);
          }, 3000);
        }
      });
    };

    reader.onerror = () => {
      this.loading = false;
      this.errorMessage = 'No se pudo leer el archivo del voucher.';
    };

    reader.readAsDataURL(this.voucherFile);
  }
}
