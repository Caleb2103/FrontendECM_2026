import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { VouchersComponent } from './vouchers.component';
import { FormsModule } from '@angular/forms';

const voucherRoutes: Route[] = [
  {
    path: '',
    component: VouchersComponent
  }
];

@NgModule({
  declarations: [
    VouchersComponent,
  ],
  exports: [
    VouchersComponent
  ],
  imports: [
    RouterModule.forChild(voucherRoutes),
    MatTableModule,
    CommonModule,
    FormsModule
  ]
})
export class VoucherModule {}
