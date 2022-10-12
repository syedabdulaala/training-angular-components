import { AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, DoCheck, AfterContentInit, AfterViewInit {

  @ViewChild('para') para!: ElementRef;

  ngOnInit(): void {
    console.log('child: ngOnInit - para', this.para);
  }

  ngDoCheck(): void {
    console.log('child: ngDoCheck - para', this.para);
  }

  ngAfterContentInit(): void {
    console.log('child: ngAfterContentInit - para', this.para);
  }

  ngAfterViewInit(): void {
    console.log('child: ngAfterViewInit - para', this.para);
  }
}
