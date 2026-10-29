import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
  selector: 'app-organizador-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, MatButton, MatToolbar],
  templateUrl: './organizador-layout.html',
  styleUrl: './organizador-layout.css',
})
export class OrganizadorLayout {}
