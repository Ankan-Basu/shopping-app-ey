import { CommonModule } from '@angular/common';
import { AfterContentInit, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
// import { SlickCarouselModule } from 'ngx-slick-carousel';
import { interval, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit, OnDestroy, AfterViewInit {
  slides: ICarouselItem[] = [
    {imgSrc: 'assets/2.jpeg', imgAlt: 'img1'}, 
    {imgSrc: 'assets/1.jpeg', imgAlt: 'img2'}, 
    {imgSrc: 'assets/mr-fresh.png', imgAlt: 'img2'}
  ];

  selectedIndex = 0;

  slideInterval = 3000;

  interval: NodeJS.Timeout | null = null;

  ngOnInit(): void {
    console.log('NgOnINIT')
    // this.autoSlideScroll();
  }
  ngAfterContentInit(): void {
  }
  ngAfterViewInit(): void {
    // this.autoSlideScroll();
  }

  ngOnDestroy(): void {
    console.log('NgOnDestroy');
    // this.clearAutoSlideScroll();
  }

  autoSlideScroll(): void {
    this.interval = setInterval(() => {
        this.selectImage(this.selectedIndex+1); // keep on selecting next
      // console.log('Hello')
    }, 2000)  
  }

  clearAutoSlideScroll(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  startAutoScroll() {
    this.autoSlideScroll();
  }

  stopAutoScroll() {
    this.autoSlideScroll();
  }

  // intervalSubscription: Subscription | undefined;

  // ngOnInit(): void {
  //   console.log('NgOnInit');
  //   this.startAutoSlideScroll();
  // }

  // ngOnDestroy(): void {
  //   console.log('NgOnDestroy');
  //   this.stopAutoSlideScroll();
  // }

  // startAutoSlideScroll(): void {
  //   this.intervalSubscription = interval(this.slideInterval)
  //     .pipe(takeWhile(() => true)) // Keep emitting values indefinitely
  //     .subscribe(() => {
  //       this.nextClick();
  //     });
  // }

  // stopAutoSlideScroll(): void {
  //   if (this.intervalSubscription) {
  //     this.intervalSubscription.unsubscribe();
  //   }
  // }
  nextClick() {
    if(this.selectedIndex >= this.slides.length) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
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