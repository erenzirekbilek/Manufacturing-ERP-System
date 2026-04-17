export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

export const PAGES = {
  HOME: '/',
  USERS: '/users',
  PRODUCTS: '/products',
  ORDERS: '/orders',
  CUSTOMERS: '/customers',
  SUPPLIERS: '/suppliers',
  INVENTORY: '/inventory',
  REPORTS: '/reports',
  SETTINGS: '/settings',
  PROFILE: '/profile',
  LOGIN: '/login',
  ABOUT: '/about'
};

export const ORDER_STATUS = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];

export const USER_ROLES = ['Administrator', 'Manager', 'Employee', 'Viewer'];

export const DATE_FORMATS = {
  SHORT: { year: 'numeric', month: 'short', day: 'numeric' },
  LONG: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' },
  TIME: { hour: '2-digit', minute: '2-digit' }
};

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  LIMITS: [10, 25, 50, 100]
};

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  USER: 'currentUser',
  THEME: 'theme',
  LANGUAGE: 'language'
};

export const APP_NAME = 'Manufacturing ERP';
export const VERSION = '1.0.0';