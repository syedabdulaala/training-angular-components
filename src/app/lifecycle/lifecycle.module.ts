import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    SecondComponent,
    FirstComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SecondComponent,
    FirstComponent,
    ParentComponent
  ]
})
export class LifecycleModule { }
