import {
  MenuRootItem,

} from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'cars renting', icon: 'car_rental', route: '/main/home' },
  // { id: 'users', name: 'users', icon: 'people', route: '/main/users' },
  {id: 'cars', name: 'My Cars', icon: 'warehouse', route: '/main/cars'},
  { id: 'logout', name: 'logout', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];