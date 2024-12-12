import { Component } from '@angular/core';
import { Carousel } from '../carousel/carousel.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [Carousel],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {}
