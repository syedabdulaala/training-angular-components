import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() { }

  public dataForFirst = 'data-from-parent-for-first';
  public dataForSecond = 'data-from-parent-for-second';
  public dataArrayForSecond = ['a', 'b'];
  public showComponent = false

  public toggleComponent(): void {
    this.showComponent = !this.showComponent;
  }

  public changeFirstData(): void {
    this.dataForFirst = 'data-has-been-changed-for-first'
  }

  public changeSecondData(): void {
    this.dataForSecond = 'data-has-been-changed-for-second'
    // this.dataArrayForSecond = ['d', 'e', 'f'];
    // this.dataArrayForSecond.push('c');
  }
}
