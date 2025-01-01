import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-player',
  standalone: true,
  templateUrl: './vjs-player.component.html',
  styleUrls: ['./vjs-player.component.scss']
})
export class VideoPlayerComponent {
  /**
   * The source URL of the video.
   * e.g. "assets/videos/sample.mp4" or any external link.
   */
  @Input() src: string = './SaveTheDate.mp4';

  /**
   * The poster image to display before the video plays.
   * e.g. "assets/images/video-poster.jpg"
   */
  // @Input() poster: string = '';
}
