import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcmeCryptoModule } from 'acme-crypto';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AcmeCryptoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
