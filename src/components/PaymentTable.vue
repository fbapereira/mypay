<template>
  <div>
    <h2>{{ title }}</h2>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Author</th>
          <th>Description</th>
          <th>Value</th>
          <th>Due date</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="payment in payments"
          @click="payment.isPaid = !payment.isPaid"
          :key="payment.id"
        >
          <td>
            <input type="checkbox" :checked="payment.isPaid" />
          </td>
          <td>{{ payment.person }}</td>
          <td>{{ payment.description }}</td>
          <td>{{ payment.value }}</td>
          <td>{{ payment.dueDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Payment } from "@/models/Payment.ts";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "PaymentTable",
  props: {
    title: String,
    payments: {
      type: Object as PropType<Payment[]>,
      required: true
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
table {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  border-collapse: collapse;
  border-width: 2px;
  border-color: #7ea8f8;
  border-style: solid;
  color: #000000;

  td,
  th {
    border-width: 2px;
    border-color: #7ea8f8;
    border-style: solid;
    padding: 5px;
  }

  thead {
    background-color: #7ea8f8;
  }
}
</style>
