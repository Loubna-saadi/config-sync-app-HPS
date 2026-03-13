import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class SidebarComponent {
  // Injection du service d'authentification
  private authService = inject(AuthService);

  // Récupération des infos utilisateur pour l'affichage
  userName = this.authService.getUsername();
  userRole = this.authService.getRole();

  onLogout() {
    this.authService.logout();
  }
}