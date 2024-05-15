import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/base-components/navbar/navbar.component';
import { ProductListItemComponent } from './components/base-components/product-list-item/product-list-item.component';
import { CommonModule } from '@angular/common';
import { ProductDetailsPageComponent } from './components/pages/product-details-page/product-details-page.component';
import { FooterComponent } from './components/base-components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProductListItemComponent, CommonModule, ProductDetailsPageComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopping-app-ey';
}
