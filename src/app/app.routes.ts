import { Routes } from '@angular/router';
import {AppTicketEditComponent} from "./components/app-ticket-edit/app-ticket-edit.component";

;

export const routes: Routes = [
  { path: 'ticket-edit', component: AppTicketEditComponent },
  { path: '', redirectTo: '/ticket-edit', pathMatch: 'full' },
];
