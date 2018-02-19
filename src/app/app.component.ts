import {Component, Injectable, OnInit} from '@angular/core';
import {InternationalizationService} from './services/Internationalization.service';
import {PaymentMethod} from './models/PaymentMethod';
import { PaymentmethodService } from './paymentmethod.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operator/map';
import {AsyncLocalStorage} from 'angular-async-local-storage';
import {map} from 'rxjs/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {forEach} from '@angular/router/src/utils/collection';
import {PaymentMethodValues} from './models/PaymentMethodValues';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [],
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // private paymentmethods: PaymentMethod[] = [];
  // private datastore: { paymentMethods: PaymentMethod[]};
  // private datastore: { paymentMethods: PaymentMethod[]};
  private paymentMethods: PaymentMethod;

  constructor(private paymentmethodService: PaymentmethodService, protected localStorage: AsyncLocalStorage) {
  }
  getPaymentMethods(): void {
    console.log('getting payment methods');
    this.paymentmethodService.getPaymentMethods()
      .subscribe(data => this.paymentMethods = data);
  }
  ngOnInit(): void {
    console.log('ng on init');
    this.getPaymentMethods();
    // this.localStorage.setItem('localtest', this.paymentMethods);
    if (this.paymentMethods != null) {
      this.paymentMethods.forEach((value: PaymentMethodValues, key: string) => {
        console.log(key, value);
      });
    } else {
      console.log('empty list');
    }

  }
}



