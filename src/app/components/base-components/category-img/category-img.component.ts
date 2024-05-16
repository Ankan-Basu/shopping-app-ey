import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-img',
  standalone: true,
  imports: [],
  templateUrl: './category-img.component.html',
  styleUrl: './category-img.component.css'
})
export class CategoryImgComponent {
  @Input() imgUrl: string = '';
  @Input() catName: string = '';

}
