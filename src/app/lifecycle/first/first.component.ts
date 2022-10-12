import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  @Input()
  public data!: string;

  // @Input()
  // public data!: string[];

  ngOnInit(): void {
    console.log('first-component: ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('first-component: ngOnChanges', changes);
  }

  ngDoCheck(): void {
    console.log('first-component: ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('first-component: ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('first-component: ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('first-component: ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('first-component: ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('first-component: ngOnDestroy');
  }
}
