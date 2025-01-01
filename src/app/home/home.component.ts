import { Component } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { StoryComponent } from '../story/story.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DetailsComponent, StoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
