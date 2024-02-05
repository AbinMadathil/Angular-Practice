import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './COMPONENTS/header/header.component';
import { MainComponent } from './COMPONENTS/main/main.component';
import { NumberOnlyDirective } from './number-only.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    NumberOnlyDirective
  ],
  imports: [
    CommonModule ,
    BrowserModule
  ],
  providers:[
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
