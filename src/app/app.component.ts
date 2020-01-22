import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';  
  myArray: number[] = [11,22,33,44,55,66,77,88];
  constructor() {

  } 
  firstIndex: number = 0;
  limitVal: number  =4;
  lastIndex: number = this.limitVal;
  viewMore:boolean = true;
  
  
  onClick(str) {
    if(str === 'less') {
      this.lastIndex = this.limitVal;
      this.viewMore = true
    }
    if(str === 'more') {
      this.lastIndex = this.myArray.length;
      this.viewMore = false
    }
  }
}
