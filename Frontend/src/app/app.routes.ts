import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Login } from './views/login/login';
import { Dashboard } from './views/dashboard/dashboard';
import { NotFound } from './views/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home'
  },
  {
    path: 'login',
    component: Login,
    title: 'Login'
  },
  {
    path: 'dashboard',
    component: Dashboard,
    title: 'Dashboard'
  },
  {
    path: '**',
    component: NotFound,
    title: 'NotFound'
  }
];
