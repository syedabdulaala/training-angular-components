import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  @Input()
  public data!: string;

  // @Input()
  // public data!: string[];

  ngOnInit(): void {
    console.log('second-component: ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('second-component: ngOnChanges', changes);
  }

  ngDoCheck(): void {
    console.log('second-component: ngDoCheck', this.data);
  }

  ngAfterContentInit(): void {
    console.log('second-component: ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('second-component: ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('second-component: ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('second-component: ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('second-component: ngOnDestroy');
  }
}
