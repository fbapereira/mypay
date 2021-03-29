import { Payment } from '@/models/Payment';
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://my-json-server.typicode.com/fbapereira/mypay/'
})

export default {
  getPayments() {
    return apiClient.get<Payment[]>('payments');
  }
}