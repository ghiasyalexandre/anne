import { Component } from '@angular/core';
import { CountdownComponent } from '../countdown/countdown.component';

@Component({
  selector: 'app-previewweb',
  standalone: true,
  imports: [CountdownComponent],
  templateUrl: './previewweb.component.html',
  styleUrl: './previewweb.component.scss'
})
export class PreviewwebComponent {

}
