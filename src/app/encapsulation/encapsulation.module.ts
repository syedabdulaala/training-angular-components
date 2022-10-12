import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoneComponent } from './none/none.component';
import { ShadowComponent } from './shadow/shadow.component';
import { EmulatedComponent } from './emulated/emulated.component';
import { EncapChildComponent } from './encap-child/encap-child.component';



@NgModule({
  declarations: [
    NoneComponent,
    ShadowComponent,
    EmulatedComponent,
    EncapChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NoneComponent,
    ShadowComponent,
    EmulatedComponent
  ]
})
export class EncapsulationModule { }
