import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  isLoading$ = new Observable<number>(subscriber => {
    let index = 1;
    setInterval(() => {
      subscriber.next(index++);
      if (index > 10) { subscriber.complete() };
    }, 1000);
  }); 
}
  