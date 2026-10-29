import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { MatOption } from '@angular/material/core';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-events',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatCard,
    MatCardContent,
    MatChip,
    MatChipSet,
    MatOption,
    MatDivider,
    MatFormField,
    MatLabel,
    MatIcon,
    MatInput,
    MatPaginatorModule,
    MatSelect,
  ],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  readonly busqueda = new FormGroup({
    q: new FormControl(''),
    orden: new FormControl('recientes'),
  });

  readonly filtros = [
    { nombre: 'Todos', bg: '#e11d48', color: '#ffffff', activo: true },
    { nombre: 'Conciertos', bg: '#232326', color: '#9ca3af', activo: false },
    { nombre: 'Deportes', bg: '#232326', color: '#9ca3af', activo: false },
    { nombre: 'Restaurantes', bg: '#232326', color: '#9ca3af', activo: false },
    { nombre: 'Ferias', bg: '#232326', color: '#9ca3af', activo: false },
  ];

  readonly eventos = [
    {
      id: 1,
      titulo: 'Noche Electro Pop',
      categoria: 'Conciertos',
      catBg: 'rgba(225, 29, 72, 0.18)',
      catColor: '#e11d48',
      precio: '$45',
      fecha: '27 nov 2026 · 20:00',
      lugar: 'Estadio Nacional, Lima',
    },
    {
      id: 2,
      titulo: 'Clásico Nacional',
      categoria: 'Deportes',
      catBg: 'rgba(217, 119, 6, 0.18)',
      catColor: '#d97706',
      precio: '$30',
      fecha: '3 dic 2026 · 18:30',
      lugar: 'Arena Central, Lima',
    },
    {
      id: 3,
      titulo: 'Cena de Autor',
      categoria: 'Restaurantes',
      catBg: 'rgba(124, 58, 237, 0.18)',
      catColor: '#7c3aed',
      precio: '$65',
      fecha: '12 dic 2026 · 19:30',
      lugar: 'Restaurante Lumière, Miraflores',
    },
    {
      id: 4,
      titulo: 'Feria del Libro Andino',
      categoria: 'Ferias',
      catBg: 'rgba(217, 119, 6, 0.18)',
      catColor: '#d97706',
      precio: '$10',
      fecha: '15 ene 2027 · 10:00',
      lugar: 'Plaza Mayor, Cusco',
    },
    {
      id: 5,
      titulo: 'Sinfónica al Atardecer',
      categoria: 'Conciertos',
      catBg: 'rgba(225, 29, 72, 0.18)',
      catColor: '#e11d48',
      precio: '$55',
      fecha: '20 dic 2026 · 17:00',
      lugar: 'Teatro Municipal, Lima',
    },
    {
      id: 6,
      titulo: 'Maratón Urbano 10K',
      categoria: 'Deportes',
      catBg: 'rgba(217, 119, 6, 0.18)',
      catColor: '#d97706',
      precio: '$25',
      fecha: '9 ene 2027 · 06:00',
      lugar: 'Parque Central, Lima',
    },
    {
      id: 7,
      titulo: 'Festival de Jazz Peruano',
      categoria: 'Conciertos',
      catBg: 'rgba(225, 29, 72, 0.18)',
      catColor: '#e11d48',
      precio: '$40',
      fecha: '8 ene 2027 · 21:00',
      lugar: 'Club Cultural, Barranco',
    },
    {
      id: 8,
      titulo: 'Ruta del Chocolate',
      categoria: 'Ferias',
      catBg: 'rgba(217, 119, 6, 0.18)',
      catColor: '#d97706',
      precio: '$15',
      fecha: '22 ene 2027 · 11:00',
      lugar: 'Mercado de San Pedro, Cusco',
    },
    {
      id: 9,
      titulo: 'Cata de Vinos del Sur',
      categoria: 'Restaurantes',
      catBg: 'rgba(124, 58, 237, 0.18)',
      catColor: '#7c3aed',
      precio: '$75',
      fecha: '29 ene 2027 · 18:00',
      lugar: 'Viña Los Andes, Arequipa',
    },
  ];
}
