import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StoryComponent } from './story/story.component';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StoryComponent, DetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'anne-wedding';
}
