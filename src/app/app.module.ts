import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {InternationalizationService} from './services/Internationalization.service';
import {PaymentmethodService} from './paymentmethod.service';
import {AsyncLocalStorageModule} from 'angular-async-local-storage';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AsyncLocalStorageModule,
  ],
  providers: [
    PaymentmethodService,
    HttpClientModule,
    InternationalizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
