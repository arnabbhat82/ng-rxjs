import { Component, ChangeDetectionStrategy } from '@angular/core';
import { of, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Component({
	template: '',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObservablesComponent {
	// Observable
	readonly observable$ = of([1, 2, 3, 4, 5]);
	// Subject
	private readonly subject = new Subject<number>();
	readonly subject$ = this.subject.asObservable();
	// BehaviorSubject
	private readonly behaviorSubject = new BehaviorSubject<number>(0);
	readonly behaviorSubject$ = this.behaviorSubject.asObservable();
	// ReplaySubject
	private readonly replaySubject = new ReplaySubject<number>();
	readonly replaySubject$ = this.replaySubject.asObservable();

	constructor() {
		this.observableSubscribe();
		this.subjectSubscribe();
		this.vehaviorSubjectSubscribe();
		this.replaySubjectSubscribe();
	}

	observableSubscribe() {
		this.observable$.subscribe(num => console.log('Observable obsA', num));
		this.observable$.subscribe(num => console.log('Observable obsB', num));
		this.observable$.subscribe(num => console.log('Observable obsC', num));
	}

	subjectSubscribe() {
		this.subject$.subscribe(num => console.log('Subject subA', num));
		this.subject.next(1);
		this.subject$.subscribe(num => console.log('Subject subB', num));
		this.subject.next(2);
		this.subject$.subscribe(num => console.log('Subject subC', num));
		this.subject.next(3);
	}

	vehaviorSubjectSubscribe() {}

	replaySubjectSubscribe() {}
}
