import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

/**
 * Barra superior del shell autenticado: botón de menú (solo mobile),
 * ayuda, notificaciones (placeholder visual, sin backend) y el menú de
 * usuario con cierre de sesión.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() onMenuClick: EventEmitter<void> = new EventEmitter();
  @ViewChild('avatarBtn') avatarBtn?: ElementRef<HTMLButtonElement>;

  isUserMenuOpen = false;
  userName = localStorage.getItem('name');

  constructor(private authService: AuthService, private router: Router) {}

  get userInitials(): string {
    if (!this.userName) {
      return '?';
    }
    const parts = this.userName.trim().split(/\s+/);
    const first = parts[0]?.[0] ?? '';
    const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
    return (first + last).toUpperCase();
  }

  toggleUserMenu(): void {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  closeUserMenu(): void {
    const wasOpen = this.isUserMenuOpen;
    this.isUserMenuOpen = false;
    if (wasOpen) {
      this.avatarBtn?.nativeElement.focus();
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeUserMenu();
  }

  logout(): void {
    this.closeUserMenu();
    this.authService.setLoggedIn(false);
    this.router.navigate(['/login']);
  }
}
