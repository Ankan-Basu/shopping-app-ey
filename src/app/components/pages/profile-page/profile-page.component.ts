import { Component } from '@angular/core';
import { SidebarUserComponent } from '../../base-components/sidebar-user/sidebar-user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [SidebarUserComponent, CommonModule],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  appName = 'ShopEy';
  email = 'freshbrother@mail.com';
  phone = '8876655423';
  address = '19 Wet Market, Wuhan, Huebei - 500021, China';
  balance = 2210.56;
}
