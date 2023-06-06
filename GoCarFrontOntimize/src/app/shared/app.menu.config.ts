import {
  MenuRootItem,

} from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'Home', icon: 'home', route: '/main/home' },
  { id: 'users', name: 'Users', icon: 'people', route: '/main/users' },
  {id: 'cars', name: 'Cars', icon: 'directions_car', route: '/main/cars'},
  { id: 'logout', name: 'Logout', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];