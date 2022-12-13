import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'study_11';

  test(){
    const foo =interval(500);
    const bar = interval(700);
    
    const subscription = foo.subscribe((x:any) => console.log('first: '+x));
    const childSub = bar.subscribe((x:any) => console.log('second: '+x));
 
    subscription.add(childSub);
    console.log(subscription)
    setTimeout(()=>{
      subscription.unsubscribe();
    }, 2000);
    console.log(subscription)

  }

}
