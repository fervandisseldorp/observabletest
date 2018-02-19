import {PaymentMethod} from './models/PaymentMethod';
import {PaymentList} from './models/PaymentList';
import {PaymentMethodValues} from './models/PaymentMethodValues';


export const PAYMENTMETHODS: PaymentMethod = new Map( [
  ['afterpay', {api_access: 1, statistics_access: 2, refundable: 3, collecting: 4}],
  ['afterpay2', {api_access: 1, statistics_access: 2, refundable: 3, collecting: 4}],
  ['afterpay3', {api_access: 1, statistics_access: 2, refundable: 3, collecting: 4}]
]);
// PAYMENTMETHODS.set( 'alipay', {api_access: 1, statistics_access: 2, refundable: 3, collecting: 4})
// PAYMENTMETHODS.set( 'afterpay', {api_access: 1, statistics_access: 2, refundable: 3, collecting: 4})
  // 'afterpay': {api_access: 1, statistics_access: 2, refundable: 3, collecting: 4},
  // 'alipay': {api_access: 1, statistics_access: 2, refundable: 3, collecting: 4},
  // 'Bancontact': {api_access: 1, statistics_access: 2, refundable: 3, collecting: 4},


// {name: 'alipay', values: {api_access: 1, statistics_access: 2, refundable: 3, collecting: 4 } } // code for paymentmethod class

// { name: 'aaa', paymentMethod: {api_access: 1, collecting: 1, refundable: 1, statistics_access: 1}} // code for payment list with name

// AfterPay: {api_access: 1, statistics_access: 1, refundable: 0, collecting: 1},
// Alipay: {api_access: 1, statistics_access: 1, refundable: 0, collecting: 1},
// Bancontact: {api_access: 1, statistics_access: 1, refundable: 0, collecting: 1},
// CreditCard: {api_access: 1, statistics_access: 1, refundable: 0, collecting: 1},
// DirectDebit: {api_access: 1, statistics_access: 1, refundable: 0, collecting: 1},
// iDEAL: {api_access: 1, statistics_access: 1, refundable: 0, collecting: 1},
// iDEAL_QR: {api_access: 1, statistics_access: 1, refundable: 0, collecting: 1},
// PayPal: {api_access: 1, statistics_access: 1, refundable: 0, collecting: 1},
// SOFORT: {api_access: 1, statistics_access: 1, refundable: 0, collecting: 1},
// WireTransfer: {api_access: 1, statistics_access: 1, refundable: 0, collecting: 1}


