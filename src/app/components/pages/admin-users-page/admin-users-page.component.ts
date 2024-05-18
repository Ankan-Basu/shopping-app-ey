import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminUsersItemComponent } from '../../base-components/admin-users-item/admin-users-item.component';

@Component({
  selector: 'app-admin-users-page',
  standalone: true,
  imports: [CommonModule, AdminUsersItemComponent],
  templateUrl: './admin-users-page.component.html',
  styleUrl: './admin-users-page.component.css'
})
export class AdminUsersPageComponent {

}
