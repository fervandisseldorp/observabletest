import {PaymentMethodValues} from './PaymentMethodValues';

export interface PaymentMethod extends Map<string, PaymentMethodValues> {
  [key: string]: PaymentMethodValues;
  // AfterPay: PaymentMethodValues;
  // Alipay: PaymentMethodValues;
  // Bancontact: PaymentMethodValues;
  // CreditCard: PaymentMethodValues;
  // DirectDebit: PaymentMethodValues;
  // iDEAL: PaymentMethodValues;
  // iDEAL_QR: PaymentMethodValues;
  // PayPal: PaymentMethodValues;
  // SOFORT: PaymentMethodValues;
  // WireTransfer: PaymentMethodValues;
  // printAll(): 'printing all values';
}


