import { CountdownComponent } from './../countdown/countdown.component';
import { Component } from '@angular/core';
import { StoryComponent } from '../story/story.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StoryComponent, CommonModule, RouterModule, CountdownComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
