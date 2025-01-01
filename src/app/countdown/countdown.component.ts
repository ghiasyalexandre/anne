import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, NgZone} from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.scss'
})
export class CountdownComponent implements OnInit, OnDestroy {
  targetDate: string = 'April 8, 2025';

  timeLeft: number = 0;
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  private intervalId: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => this.startCountdown());
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startCountdown() {
    const target = new Date(this.targetDate).getTime();

    this.intervalId = setInterval(() => {
      const now = new Date().getTime();
      this.timeLeft = target - now;

      if (this.timeLeft > 0) {
        this.days = Math.floor(this.timeLeft / (1000 * 60 * 60 * 24));
        this.hours = Math.floor((this.timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((this.timeLeft % (1000 * 60)) / 1000);
        this.ngZone.run(() => {});
      } else {
        this.clearCountdown();
      }
    }, 1000);
  }

  private clearCountdown() {
    clearInterval(this.intervalId);
    this.timeLeft = 0;
    this.ngZone.run(() => {});
  }
}
