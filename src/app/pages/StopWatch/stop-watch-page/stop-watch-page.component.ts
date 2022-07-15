import { Component } from '@angular/core';
import { StopWatchTime } from '../stop-watch-time';

@Component({
  selector: 'stop-watch-page',
  templateUrl: './stop-watch-page.component.html',
  styles: [],
})
export class StopWatchPageComponent {
  interval: any;
  time: StopWatchTime = { milliSeconds: 0, seconds: 0, minutes: 0, hours: 0 };

  setTime() {
    this.time.milliSeconds++;
    if (this.time.milliSeconds === 250) {
      this.time.milliSeconds = 0;
      this.time.seconds = this.time.seconds + 1;
    }
    if (this.time.seconds === 60) {
      this.time.seconds = 0;
      this.time.minutes = this.time.minutes + 1;
    }
    if (this.time.minutes === 60) {
      this.time.minutes = 0;
      this.time.hours = this.time.hours + 1;
    }
  }

  reset() {
    this.time = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliSeconds: 0,
    };
  }

  handleInterval(command: string) {
    if (command === 'stop') return clearInterval(this.interval);
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.setTime();
    }, 1);
  }
}
