import { Route } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadChildren: () =>
      import('src/app/modules/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('src/app/modules/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'courses',
    canActivate: [AuthGuard, RoleGuard],
    loadChildren: () =>
      import('src/app/modules/courses/courses.module').then(
        (m) => m.CoursesModule
      ),
  },
  {
    path: 'seasons',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('src/app/modules/seasons/seasons.module').then(
        (m) => m.SeasonsModule
      ),
  },
  {
    path: 'inscriptions',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('src/app/modules/inscriptions/inscriptions.module').then(
        (m) => m.InscriptionsModule
      ),
  },
  {
    path: 'search',
    canActivate: [AuthGuard, RoleGuard],
    loadChildren: () =>
      import('src/app/modules/search/search.module').then(
        (m) => m.SearchModule
      ),
  },
  {
    path: 'progress',
    canActivate: [AuthGuard, RoleGuard],
    loadChildren: () =>
      import('src/app/modules/progres/progres.module').then(
        (m) => m.ProgresModule
      ),
  },
  {
    path: 'menu',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('src/app/modules/menu/menu.module').then(
        (m) => m.MenuModule
      ),
  },
  {
    path: 'admin',
    canActivate: [AuthGuard, RoleGuard],
    loadChildren: () =>
      import('src/app/modules/admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },
  {
    path: 'vouchers',
    canActivate: [AuthGuard, RoleGuard],
    loadChildren: () =>
      import('src/app/modules/vouchers/voucher.module').then(
        (m) => m.VoucherModule
      ),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard, RoleGuard],
    loadChildren: () =>
      import('src/app/modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('src/app/modules/profile/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
];
