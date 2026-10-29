import { Routes } from '@angular/router';

export const routes: Routes = [
  // La landing en "/" está pendiente de diseño; por ahora redirige a la lista de eventos.
  { path: '', pathMatch: 'full', redirectTo: 'participante/events' },
  { path: '', loadChildren: () => import('./pages/auth/auth.routes').then((m) => m.AUTH_ROUTES) },
  {
    path: 'participante',
    loadChildren: () =>
      import('./pages/participante/participante.routes').then((m) => m.PARTICIPANTE_ROUTES),
  },
  {
    path: 'organizador',
    loadChildren: () =>
      import('./pages/organizador/organizador.routes').then((m) => m.ORGANIZADOR_ROUTES),
  },
];
