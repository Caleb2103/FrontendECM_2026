import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MemberService } from 'src/app/services/members.service';
import { Member } from 'src/app/models/student';

/** Zonas/congregaciones disponibles (mismo catálogo que el formulario de registro). */
export const ZONAS = [
  'Zona 1', 'Zona 2', 'Zona 3', 'Zona 4', 'Zona 5', 'Zona 6', 'Zona 7',
  'Zona 8', 'Zona 9', 'Zona 10', 'Zona 11', 'Zona 12', 'Zona 13', 'Zona 14',
  'CDL', 'Oquendo', 'Polo', 'Rosaluz', 'Cochabamba',
];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  zonas = ZONAS;
  loading = true;
  saving = false;

  memberId: number | null = null;
  dni = '';
  nombres = '';
  apellidos = '';
  celular = '';
  fechaNacimiento = '';
  zona = '';

  constructor(
    private memberService: MemberService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {}

  ngOnInit(): void {
    // Limpia el caché que guardaban versiones anteriores del login
    localStorage.removeItem('member');

    const idRaw = localStorage.getItem('userId');
    this.memberId = idRaw ? parseInt(idRaw, 10) : null;
    if (this.memberId) {
      this.loadMember(this.memberId);
    } else {
      this.loading = false;
    }
  }

  private loadMember(memberId: number): void {
    this.loading = true;
    this.memberService.getMember(memberId).subscribe({
      next: (member) => {
        this.setForm(member);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.snackBar.open('No se pudo cargar el perfil.', 'Cerrar', {
          duration: 4000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
    });
  }

  private setForm(member: Member): void {
    this.dni = member.memb_dni ?? '';
    this.nombres = member.memb_name ?? '';
    this.apellidos = member.memb_surname ?? '';
    this.celular = member.memb_mobil ?? '';
    this.fechaNacimiento = member.birthdate ?? '';
    this.zona = member.memb_zone?.zone_name ?? '';
  }

  isValid(): boolean {
    return !!(
      this.nombres &&
      this.apellidos &&
      this.celular &&
      this.celular.length === 9 &&
      this.zona
    );
  }

  guardar(): void {
    if (!this.memberId || this.saving || !this.isValid()) {
      return;
    }

    this.saving = true;
    const payload = {
      memb_name: this.nombres.toUpperCase(),
      memb_surname: this.apellidos.toUpperCase(),
      memb_mobil: this.celular,
      birthdate: this.fechaNacimiento,
      memb_zone: this.zona,
    };

    this.memberService.updateMember(this.memberId, payload).subscribe({
      next: (member) => {
        this.saving = false;
        this.setForm(member);
        // Header y menú leen el nombre de aquí
        localStorage.setItem('name', member.memb_name);
        this.snackBar.open('Perfil actualizado correctamente', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
      error: () => {
        this.saving = false;
        this.snackBar.open('No se pudo guardar el perfil. Intenta de nuevo.', 'Cerrar', {
          duration: 4000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      },
    });
  }

  volver(): void {
    this.router.navigate(['/menu']);
  }
}
