import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Subscription } from 'rxjs';
import { navbarItems } from './nav.items';
import { getAllowedRouterLinks } from './role-access';
import { SidenavToggle } from './sidenav-toggle.model';

const MOBILE_QUERY = '(max-width: 768px)';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  /** Controlado por LayoutComponent (colapsado en escritorio). */
  @Input() collapsed = false;
  /** Controlado por LayoutComponent (drawer abierto en mobile, disparado desde el header). */
  @Input() mobileOpen = false;

  @Output() onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();
  @Output() onCloseMobile: EventEmitter<void> = new EventEmitter();

  userRole = localStorage.getItem('userRole');
  navItems = navbarItems;
  filteredNavbarItems: typeof navbarItems;

  private isMobile: boolean;
  private breakpointSub?: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isMobile = this.breakpointObserver.isMatched(MOBILE_QUERY);
    this.filteredNavbarItems = this.getFilteredNavbarItems();
  }

  ngOnInit(): void {
    this.breakpointSub = this.breakpointObserver.observe(MOBILE_QUERY).subscribe(result => {
      this.isMobile = result.matches;
      this.filteredNavbarItems = this.getFilteredNavbarItems();
    });
  }

  ngOnDestroy(): void {
    this.breakpointSub?.unsubscribe();
  }

  toggleSidebar(): void {
    const collapse = !this.collapsed;
    this.onToggleSidenav.emit({ screenWidth: window.innerWidth, collapse, smallScreen: this.isMobile });
  }

  onNavItemClick(): void {
    if (this.isMobile) {
      this.onCloseMobile.emit();
    }
  }

  getFilteredNavbarItems() {
    const allowedLinks = getAllowedRouterLinks(this.userRole);

    if (this.isMobile) {
      // En mobile solo se exponen las rutas que ya tienen una pantalla
      // pensada para ese ancho (Ciclos, Cursos, Inscripciones). El resto
      // (buscador, progreso, dashboard, admin, vouchers) sigue sin cubrirse
      // a propósito: se deja así intencionalmente.
      const mobileEnabled = ['seasons', 'courses', 'inscriptions'];
      return navbarItems.filter(
        item => allowedLinks.includes(item.routerLink) && mobileEnabled.includes(item.routerLink)
      );
    }

    // Desktop / Tablet: filtrado por rol de usuario
    return navbarItems.filter(item => allowedLinks.includes(item.routerLink));
  }
}
