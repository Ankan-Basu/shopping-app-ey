import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-users-item',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './admin-users-item.component.html',
  styleUrl: './admin-users-item.component.css'
})
export class AdminUsersItemComponent {
  banned = false;
}
