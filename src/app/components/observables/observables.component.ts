import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { of, Subject } from 'rxjs';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservablesComponent implements OnInit {
  // Observable
  observable$ = of();
  // Subject
  subject = new Subject<number>();

  ngOnInit() {
    this.observableSubscribe();
    this.subjectSubscribe();
  }

  observableSubscribe() {
    this.observable$ = of([1, 2, 3, 4, 5]);
    this.observable$.subscribe(num => console.log('Observable obsA', num));
    this.observable$.subscribe(num => console.log('Observable obsB', num));
    this.observable$.subscribe(num => console.log('Observable obsC', num));
  }

  subjectSubscribe() {
    this.subject.next(1);
    this.subject.subscribe(num => console.log('Subject subA', num));
    this.subject.next(2);
    this.subject.subscribe(num => console.log('Subject subB', num));
    this.subject.next(3);
  }
}
