import { Injectable } from '@angular/core';
import { PaymentMethod } from './models/PaymentMethod';
import { PAYMENTMETHODS } from './mock-paymentmethods';
import { Observable} from 'rxjs/Observable';
import { of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operator/map';
import 'rxjs/add/operator/map'


@Injectable()
export class PaymentmethodService {
  private api_url = 'http://localhost:8000/api/paymentmethods';

  constructor(private http: HttpClient) { }
  getPaymentMethods(): Observable<PaymentMethod> {
    console.log('in paymentmethod service');
    return of(PAYMENTMETHODS);
    // return this.http.get<PaymentMethod>(this.api_url);
  }

}
