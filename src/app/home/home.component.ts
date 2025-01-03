import { Component } from '@angular/core';
import { StoryComponent } from '../story/story.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
