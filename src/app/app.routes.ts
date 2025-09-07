import { Routes } from '@angular/router';
import { Customers } from './customers/customers';
import { Accounts } from './accounts/accounts';

export const routes: Routes = [
  //this is just a temporary fix i will add a home page in the future
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: Customers },
  { path: 'accounts', component: Accounts},
];
