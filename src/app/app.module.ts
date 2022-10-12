import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleModule } from './lifecycle/lifecycle.module';
import { EncapsulationModule } from './encapsulation/encapsulation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LifecycleModule,
    EncapsulationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
