import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-encap-child',
  templateUrl: './encap-child.component.html',
  styleUrls: ['./encap-child.component.css']
})
export class EncapChildComponent implements OnInit {

  constructor() { }

  @Input()
  title!: string;

  ngOnInit(): void {
  }

}
