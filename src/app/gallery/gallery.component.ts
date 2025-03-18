import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';
import {
  Component,
  OnInit,
  ElementRef,
  AfterViewInit,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  animations: [
    // trigger('galleryAnimation', [
    //   transition(':enter', [
    //     query(
    //       '.gallery-item',
    //       [
    //         style({ opacity: 0, transform: 'translateY(30px)' }),
    //         stagger(200, [
    //           animate(
    //             '800ms ease-out',
    //             style({ opacity: 1, transform: 'translateY(0)' })
    //           ),
    //         ]),
    //       ],
    //       { optional: true }
    //     ),
    //   ]),
    // ]),
    trigger('fadeInSlideUp', [
      transition(
        ':enter',
        [
          style({ opacity: 0, transform: 'translateY(30px)' }),
          animate(
            '{{delay}}ms ease-out',
            style({ opacity: 1, transform: 'translateY(0)' })
          ),
        ],
        { params: { delay: 300 } }
      ), // Default delay
    ]),
  ],
})
export class GalleryComponent implements OnInit, AfterViewInit {
  images: { src: string; visible: boolean; delay: number }[] = [];
  @ViewChildren('galleryItem') galleryItems!: QueryList<ElementRef>;

  constructor() {}

  ngOnInit() {
    this.loadImages();
  }

  ngAfterViewInit() {
    this.observeImages();
  }

  loadImages() {
    const imageCount = 18; // Change this based on your assets
    for (let i = 1; i <= imageCount; i++) {
      this.images.push({
        src: `./DSC0${i}.jpg`,
        visible: false,
        delay: i * 200,
      });
    }
  }

  observeImages() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = this.galleryItems
              .toArray()
              .findIndex((item) => item.nativeElement === entry.target);
            if (index !== -1) {
              this.images[index].visible = true;
            }
          }
        });
      },
      { threshold: 0.2 } // Adjust visibility threshold as needed
    );

    this.galleryItems.forEach((item) => observer.observe(item.nativeElement));
  }
}
