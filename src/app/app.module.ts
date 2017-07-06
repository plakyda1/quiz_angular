import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import 'hammerjs';
import { MyInputComponent } from './my-input/my-input.component';

@NgModule({
  declarations: [
    AppComponent,
    MyInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdInputModule
  ],
  exports: [
  	MdButtonModule, 
  	MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
