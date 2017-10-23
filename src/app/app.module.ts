import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NumberParentComponent} from './number-parent.component'
import {NumberComponent} from './number.component'

@NgModule({
  declarations: [
    AppComponent,
    NumberParentComponent,
    NumberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
