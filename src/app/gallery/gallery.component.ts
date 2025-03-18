import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  animations: [
    trigger('galleryAnimation', [
      transition(':enter', [
        query(
          '.gallery-item',
          [
            style({ opacity: 0, transform: 'translateY(30px)' }),
            stagger(200, [
              animate(
                '800ms ease-out',
                style({ opacity: 1, transform: 'translateY(0)' })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class GalleryComponent {
  images: string[] = [];

  constructor() {}

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    const imageCount = 18; // Change this based on your assets
    for (let i = 1; i <= imageCount; i++) {
      this.images.push(`./DSC0${i}.jpg`);
    }
  }
}
