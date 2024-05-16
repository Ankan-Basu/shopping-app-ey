import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-img',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category-img.component.html',
  styleUrl: './category-img.component.css'
})
export class CategoryImgComponent {
  @Input() imgUrl: string = '';
  @Input() catName: string = '';
  @Input() redirLink: string = '';

}
