import AuthService from '../services/AuthService';

export function authGuard(to, from, next) {
  if (AuthService.isAuthenticated()) {
    next();
  } else {
    next('/login');
  }
}

export function guestGuard(to, from, next) {
  if (!AuthService.isAuthenticated()) {
    next();
  } else {
    next('/');
  }
}

export default { authGuard, guestGuard };