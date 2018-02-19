import {PaymentMethod} from './PaymentMethod';
import {PaymentMethodValues} from './PaymentMethodValues';

export interface PaymentList {
  name: string;
  paymentMethod: PaymentMethodValues;
}
