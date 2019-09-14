import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { of, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservablesComponent implements OnInit {
  // Observable
  observable$ = of();
  // Subject
  subject = new Subject<number>();
  // BehaviorSubject
  behaviorSubject = new BehaviorSubject<number>(null);
  // ReplaySubject
  replaySubject = new ReplaySubject<number>(3);

  ngOnInit() {
    this.observableSubscribe();
    this.subjectSubscribe();
    this.behaviorSubjectSubscribe();
    this.replaySubjectSubscribe();
  }

  observableSubscribe() {
    this.observable$ = of([1, 2, 3, 4, 5]);
    this.observable$.subscribe(num => console.log('Observable obsA', num));
    this.observable$.subscribe(num => console.log('Observable obsB', num));
    this.observable$.subscribe(num => console.log('Observable obsC', num));
  }

  subjectSubscribe() {
    this.subject.next(1);
    this.subject.subscribe(num => console.log('subject subA', num));
    this.subject.next(2);
    this.subject.subscribe(num => console.log('subject subB', num));
    this.subject.next(3);
  }

  behaviorSubjectSubscribe() {
    this.behaviorSubject.next(1);
    this.behaviorSubject.subscribe(num =>
      console.log('behaviorSubject subA', num),
    );
    this.behaviorSubject.next(2);
    this.behaviorSubject.subscribe(num =>
      console.log('behaviorSubject subB', num),
    );
    this.behaviorSubject.next(3);
  }

  replaySubjectSubscribe() {
    this.replaySubject.next(-2);
    this.replaySubject.next(-1);
    this.replaySubject.next(0);
    this.replaySubject.next(1);
    this.replaySubject.subscribe(num =>
      console.log('replaySubject subA', num),
    );
    this.replaySubject.next(2);
    this.replaySubject.subscribe(num =>
      console.log('replaySubject subB', num),
    );
    this.replaySubject.next(3);
  }
}
