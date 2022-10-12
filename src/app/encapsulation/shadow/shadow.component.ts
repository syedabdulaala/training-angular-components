import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow',
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
