import { Routes } from '@angular/router';

export const PARTICIPANTE_ROUTES: Routes = [
  { path: 'events', loadComponent: () => import('./events/events').then((m) => m.Events) },
  {
    path: 'events/:id',
    loadComponent: () => import('./event-detail/event-detail').then((m) => m.EventDetail),
  },
  // /checkout → pantalla de compra de entrada pendiente de diseño.
];
