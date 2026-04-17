export const messages = {
  en: {
    common: {
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      add: 'Add',
      search: 'Search',
      filter: 'Filter',
      export: 'Export',
      loading: 'Loading...',
      noData: 'No data available'
    },
    nav: {
      dashboard: 'Dashboard',
      users: 'Users',
      products: 'Products',
      orders: 'Orders',
      customers: 'Customers',
      suppliers: 'Suppliers',
      inventory: 'Inventory',
      reports: 'Reports',
      settings: 'Settings'
    },
    auth: {
      login: 'Login',
      logout: 'Logout',
      email: 'Email',
      password: 'Password'
    },
    users: {
      title: 'Users',
      name: 'Name',
      email: 'Email',
      role: 'Role'
    },
    products: {
      title: 'Products',
      name: 'Name',
      price: 'Price',
      quantity: 'Quantity'
    }
  },
  tr: {
    common: {
      save: 'Kaydet',
      cancel: 'İptal',
      delete: 'Sil',
      edit: 'Düzenle',
      add: 'Ekle',
      search: 'Ara',
      filter: 'Filtrele',
      export: 'Dışa Aktar',
      loading: 'Yükleniyor...',
      noData: 'Veri bulunamadı'
    },
    nav: {
      dashboard: 'Ana Sayfa',
      users: 'Kullanıcılar',
      products: 'Ürünler',
      orders: 'Siparişler',
      customers: 'Müşteriler',
      suppliers: 'Tedarikçiler',
      inventory: 'Envanter',
      reports: 'Raporlar',
      settings: 'Ayarlar'
    },
    auth: {
      login: 'Giriş',
      logout: 'Çıkış',
      email: 'E-posta',
      password: 'Şifre'
    },
    users: {
      title: 'Kullanıcılar',
      name: 'Ad',
      email: 'E-posta',
      role: 'Rol'
    },
    products: {
      title: 'Ürünler',
      name: 'Ad',
      price: 'Fiyat',
      quantity: 'Miktar'
    }
  }
};

export function t(key, locale = 'en') {
  const keys = key.split('.');
  let value = messages[locale];
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
}

export default { messages, t };