import { Component, Input } from '@angular/core';
import { SidenavToggle } from '../sidebar/sidenav-toggle.model';

/**
 * Shell de la aplicación autenticada: sidebar + header + contenido enrutado.
 * Es el único lugar que sabe cuánto espacio ocupa el sidebar (var(--sidebar-width)
 * en layout.component.css) — las páginas nunca necesitan compensarlo con margin-left.
 */
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  @Input() isLoggedIn = false;

  isCollapsed = false;
  isMobileSidebarVisible = false;

  onToggleSidenav(data: SidenavToggle): void {
    this.isCollapsed = data.collapse;
  }

  toggleMobileSidebar(): void {
    this.isMobileSidebarVisible = !this.isMobileSidebarVisible;
  }

  closeMobileSidebar(): void {
    this.isMobileSidebarVisible = false;
  }
}
