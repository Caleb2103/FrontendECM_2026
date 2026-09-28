import { Component, OnInit } from '@angular/core';
import { Voucher as VoucherModel } from '../../models/student';
import { VoucherService } from '../../services/voucher.service';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.component.html',
  styleUrls: ['./vouchers.component.css']
})
export class VouchersComponent implements OnInit {
  vouchers: VoucherModel[] = [];
  filteredVouchers: VoucherModel[] = [];

  selectedVoucher: VoucherModel | null = null;
  selectedImageUrl: string | null = null;

  isLoading = true;
  approvingId: number | null = null;
  searchQuery = '';
  activeFilter = 'ALL';

  displayedColumns: string[] = ['index', 'member', 'dni', 'period', 'operation', 'status', 'date', 'action'];

  constructor(private voucherService: VoucherService) {}

  ngOnInit(): void {
    this.loadVouchers();
  }

  loadVouchers(forceRefresh = false): void {
    this.isLoading = true;
    this.voucherService.getVoucherList(forceRefresh).subscribe({
      next: (data: VoucherModel[]) => {
        this.vouchers = data;
        this.applyFilters();
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      }
    });
  }

  applyFilters(): void {
    let result = [...this.vouchers];

    if (this.activeFilter !== 'ALL') {
      result = result.filter(v => v.vouc_status === this.activeFilter);
    }

    const q = this.searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter(v =>
        v.vouc_member.memb_name.toLowerCase().includes(q) ||
        v.vouc_member.memb_surname.toLowerCase().includes(q) ||
        v.vouc_member.memb_dni.toLowerCase().includes(q) ||
        v.vouc_operation_number.toLowerCase().includes(q)
      );
    }

    this.filteredVouchers = result;
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
    this.applyFilters();
  }

  onSearch(): void {
    this.applyFilters();
  }

  viewImage(voucher: VoucherModel): void {
    this.selectedVoucher = voucher;
    this.selectedImageUrl = `${this.voucherService.basePath}/vouchers/image/${voucher.vouc_id}`;
  }

  closeModal(): void {
    this.selectedVoucher = null;
    this.selectedImageUrl = null;
  }

  getStatusClass(status: string): string {
    const s = status?.toUpperCase();
    if (s === 'APROBADO' || s === 'APPROVED') return 'status-approved';
    if (s === 'RECHAZADO' || s === 'REJECTED') return 'status-rejected';
    return 'status-pending';
  }

  getStatusLabel(status: string): string {
    const s = status?.toUpperCase();
    if (s === 'APROBADO' || s === 'APPROVED') return 'Aprobado';
    if (s === 'RECHAZADO' || s === 'REJECTED') return 'Rechazado';
    return 'Pendiente';
  }

  countByStatus(status: string): number {
    if (status === 'ALL') return this.vouchers.length;
    return this.vouchers.filter(v => v.vouc_status === status).length;
  }

  approveVoucher(voucher: VoucherModel): void {
    this.approvingId = voucher.vouc_id;
    this.voucherService.approveVoucher(voucher.vouc_id).subscribe({
      next: () => {
        voucher.vouc_status = 'Aprobado';
        this.approvingId = null;
      },
      error: () => {
        this.approvingId = null;
      }
    });
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    return d.toLocaleDateString('es-PE', { day: '2-digit', month: 'short', year: 'numeric' });
  }
}
