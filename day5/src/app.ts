import * as Rx from 'rxjs/Rx';
import * as $ from 'jquery';

let b1 = $('#btn1');

let obs1 = Rx.Observable.fromEvent(b1, 'click');

obs1.subscribe(evt => {
    let label = evt['target'].innerHTML;
    console.log('Button with caption', label, 'clicked');
});

let obs2 = Rx.Observable.of('vinod', 'shyam', 'john', 'jane');
obs2.map(name => name.toUpperCase())
    .map(name => name.substr(0, 3))
    .subscribe(name => console.log(name));

let obs3 = Rx.Observable.interval(1000);
let sub1 = obs3.subscribe(() => console.log(new Date()));

Rx.Observable.fromEvent(b1, 'click')
    .subscribe(() => sub1.unsubscribe());