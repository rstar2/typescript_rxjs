import * as Rx from 'rxjs/Rx';

const stream$ = Rx.Observable.interval(100). // emit every 100 ms
         take(5);                            // take 5 times

stream$.subscribe(
         x => {
                  console.log(x);
         },
         err => {
                  console.log(err);
         },
         () => {
                  console.log("Completed");
         }
);