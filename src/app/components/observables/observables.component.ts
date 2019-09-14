import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { of, Subject, BehaviorSubject } from 'rxjs';

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

  ngOnInit() {
    this.observableSubscribe();
    this.subjectSubscribe();
    this.behaviorSubjectSubscribe();
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
}
