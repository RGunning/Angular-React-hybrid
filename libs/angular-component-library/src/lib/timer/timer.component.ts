import { Component, OnInit, OnDestroy, ɵdetectChanges as detectChanges, ɵmarkDirty as markDirty, ChangeDetectionStrategy } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'hybrid-timer',
  template: `counter: {{counter}}`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerComponent implements OnInit, OnDestroy {

  private counterSubscription: Subscription;
  public counter: number;

  constructor() { }

  ngOnInit() {
    this.counterSubscription = timer(0, 1000)
      .subscribe(c => {
        this.counter = c;
        detectChanges(this);
      });
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

}
