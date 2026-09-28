import { Route } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('slideRight', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('700ms ease-in-out', style({ transform: 'translateX(0)' }))
      ])
    ])
  ]
})

export class LoginComponent {
  dni: string = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  login(): void {
    this.errorMessage = '';
    this.authService.login(this.dni).subscribe({
      next: (response) => {
        if (!response.data) {
          localStorage.setItem('userId', response[0].memb_id);
          localStorage.setItem('name', response[0].memb_name);
          localStorage.setItem('userRole', response[0].memb_role);
          // Se guarda el registro completo para poder precargar la
          // página de Perfil sin necesitar un endpoint aparte.
          localStorage.setItem('member', JSON.stringify(response[0]));
          this.authService.setLoggedIn(true);

          const isMobile = this.isMobileDevice();

          // Redirigir según el dispositivo
          if (isMobile) {
            this.router.navigate(['/menu']);
          } else {
            this.router.navigate(['/seasons']);
          }
        }
      },
      error: () => {
        this.errorMessage = 'DNI no encontrado. Verifica tus datos e intenta nuevamente.';
      }
    });
  }

  isMobileDevice(): boolean {
    const isMobileWidth = window.innerWidth <= 768;
    return isMobileWidth;
  }
}