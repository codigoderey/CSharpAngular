import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }

  public decrementCounter() {
    if (this.currentCount === 0) {
      this.currentCount = 0
      return
    }
    this.currentCount--
  }
}
