import { Component } from '@angular/core';
import { CarouselComponent } from '../../base-components/carousel/carousel.component';
import { CategoryImgComponent } from '../../base-components/category-img/category-img.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CarouselComponent, CategoryImgComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
