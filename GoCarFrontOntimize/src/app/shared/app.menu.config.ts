import {
  MenuRootItem,

} from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'home', icon: 'home', route: '/main/home' },
  // { id: 'users', name: 'users', icon: 'people', route: '/main/users' },
  {id: 'cars', name: 'cars', icon: 'directions_car', route: '/main/cars'},
  { id: 'logout', name: 'logout', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];