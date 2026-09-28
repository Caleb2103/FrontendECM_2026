import { navbarItems } from './nav.items';

const ALL_ROUTER_LINKS = navbarItems.map(item => item.routerLink);

const RESTRICTED_BY_ROLE: { [role: string]: string[] } = {
  '4': ['search', 'progress', 'admin', 'vouchers'],
  '3': [],
  '2': ['search', 'progress', 'admin', 'vouchers', 'dashboard'],
};

const DEFAULT_RESTRICTED = ['courses', 'search', 'progress', 'admin', 'vouchers', 'dashboard'];

export function getAllowedRouterLinks(userRole: string | null): string[] {
  const restricted = userRole !== null && userRole in RESTRICTED_BY_ROLE
    ? RESTRICTED_BY_ROLE[userRole]
    : DEFAULT_RESTRICTED;

  return ALL_ROUTER_LINKS.filter(link => !restricted.includes(link));
}
