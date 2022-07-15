import { Component } from '@angular/core';

@Component({
  selector: 'timer-page',
  templateUrl: './timer-page.component.html',
  styles: [],
})
export class TimerPageComponent {
  interval: any;
  time: {
    seconds: number;
    minutes: number;
    hours: number;
  } = {
    seconds: 0,
    minutes: 0,
    hours: 0,
  };

  secondsOption: number[] = [];
  minutesOption: number[] = [];
  hoursOption: number[] = [];

  constructor() {
    for (let i = 1; i < 60; i++) {
      this.secondsOption.push(i);
      this.minutesOption.push(i);
    }

    for (let i = 1; i <= 24; i++) this.hoursOption.push(i);
  }

  onSelect(object: { name: string; value: number }) {
    const { name, value } = object;
    if (name === 'hours') this.time.hours = value;
    if (name === 'minutes') this.time.minutes = value;
    if (name === 'seconds') this.time.seconds = value;
  }

  setTimer() {
    this.time.seconds--;
    if (this.time.seconds < 0) {
      this.time.seconds = 59;
      this.time.minutes--;
    }
    if (this.time.minutes < 0) {
      this.time.minutes = 59;
      this.time.hours--;
    }
    if (
      this.time.seconds === 0 &&
      this.time.minutes === 0 &&
      this.time.hours === 0
    ) {
      this.handleInterval('stop');
      this.playAudio();
    }
  }

  handleInterval(command: string) {
    if (command === 'stop') return clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.time.seconds === 0 &&
      this.time.minutes === 0 &&
      this.time.hours === 0
        ? this.handleInterval('stop')
        : this.setTimer();
    }, 1000);
  }

  reset() {
    this.time.minutes = 0;
    this.time.seconds = 0;
    this.time.hours = 0;
  }

  playAudio() {
    const audio = new Audio('../../../../assets/sounds/alarm-clock.wav');
    audio.load();
    audio.play();
  }
}
