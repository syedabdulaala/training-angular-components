import { AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterViewInit {

  @ViewChild('para') para!: ElementRef;
  @ViewChild('child') child!: ElementRef;
  @ContentChild('content') content!: ElementRef;

  ngOnInit(): void {
    console.log('parent: ngOnInit - para', this.para, '- child', this.child, '- content', this.content);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('parent: ngOnChanges - para', this.para, '- child', this.child, '- content', this.content);
  }

  ngDoCheck(): void {
    console.log('parent: ngDoCheck - para', this.para, '- child', this.child, '- content', this.content);
  }

  ngAfterContentInit(): void {
    console.log('parent: ngAfterContentInit - para', this.para, '- child', this.child, '- content', this.content);
  }

  ngAfterViewInit(): void {
    console.log('parent: ngAfterViewInit - para', this.para, '- child', this.child, '- content', this.content);
  }
}

