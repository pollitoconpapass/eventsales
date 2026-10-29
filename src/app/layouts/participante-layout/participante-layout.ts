import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-participante-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatButton, MatToolbar],
  templateUrl: './participante-layout.html',
  styleUrl: './participante-layout.css',
})
export class ParticipanteLayout {}
