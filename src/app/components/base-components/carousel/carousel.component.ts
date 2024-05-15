import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [SlickCarouselModule, CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, OnDestroy, AfterContentInit {
  slides: ICarouselItem[] = [
    {imgSrc: 'assets/2.jpeg', imgAlt: 'img1'}, 
    {imgSrc: 'assets/1.jpeg', imgAlt: 'img2'}, 
    {imgSrc: 'assets/2.jpeg', imgAlt: 'img2'}
  ];

  selectedIndex = 0;

  slideInterval = 3000;

  interval: NodeJS.Timeout | null = null;

  ngOnInit(): void {
  }
  ngAfterContentInit(): void {
    this.autoSlideScroll();
  }

  ngOnDestroy(): void {
    console.log('NgOnDestroy');
    this.clearAutoSlideScroll();
  }

  autoSlideScroll(): void {
    // this.interval = 
    setInterval(() => {
      this.selectImage(this.selectedIndex+1); // keep on selecting next
    }, 5000)  
  }

  clearAutoSlideScroll(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  nextClick() {
    if(this.selectedIndex >= this.slides.length) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex--;
    }
  }
  selectImage(indx: number): void {
    console.log("Selecting image at index:", indx);
    if(indx >= this.slides.length) {
      indx = 0; // reassign it prevent out of bounds
    } else if (indx < 0) {
      indx = this.slides.length - 1;
    }
    console.log("Selected image index after adjustment:", indx);
    this.selectedIndex = indx;
  }

  
}


interface ICarouselItem {
  imgSrc: string,
  imgAlt: string
}