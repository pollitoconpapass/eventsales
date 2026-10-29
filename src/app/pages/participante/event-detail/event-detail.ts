import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatChip } from '@angular/material/chips';
import { MatDivider } from '@angular/material/divider';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-event-detail',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatButton,
    MatChip,
    MatDivider,
    MatError,
    MatFormField,
    MatLabel,
    MatIcon,
    MatInput,
  ],
  templateUrl: './event-detail.html',
  styleUrl: './event-detail.css',
})
export class EventDetail {
  readonly form = new FormGroup({
    cantidad: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(10)]),
  });

  readonly detalles = [
    { icono: 'confirmation_number', etiqueta: 'Categoría', valor: 'Conciertos' },
    { icono: 'groups', etiqueta: 'Capacidad', valor: '15,000 personas' },
    { icono: 'location_on', etiqueta: 'Ubicación', valor: 'Estadio Nacional, Lima' },
    { icono: 'calendar_today', etiqueta: 'Fecha', valor: '27 de noviembre de 2026' },
    { icono: 'schedule', etiqueta: 'Hora', valor: '20:00' },
    { icono: 'hourglass_empty', etiqueta: 'Duración', valor: '3 horas (aprox.)' },
  ];
}
